# 每集場景：從地圖原圖推近到該集地標（同一套 AI 示意插圖），EDSR x4 超解析度放大後縮成 1600×900／900×1600
import cv2, os, sys, time
SRC="/home/claude/deploy/assets"; OUT="/home/claude/deploy/assets/scenes"; os.makedirs(OUT,exist_ok=True)
sr=cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel("/home/claude/srmodels/EDSR_x4.pb"); sr.setModel("edsr",4)
mw=cv2.imread(f"{SRC}/map-wide.jpg"); mp=cv2.imread(f"{SRC}/map-portrait.jpg")
# 橫式：(地標 x%, y%, 推近倍率)；地標放在畫面 33% 寬（右邊留給題目艙）
WIDE={2:(40,70,2.4),3:(42,34,2.4),4:(60,42,2.5),5:(67,72,2.5),6:(84,61,3.0),7:(89,45,2.5),
      8:(59,51,2.6),9:(42,14,2.2),10:(78,39,2.6),11:(43,55,2.8),12:(87,25,2.6)}
FLIP={7,10,12}  # 地標在地圖最右邊：左右翻轉，讓地標落在左側、不被題目艙擋住
# 直式：(來源, 地標 x%, y%, 推近倍率)；地標放在畫面上方 30%（下方是拇指區題目艙）
PORT={2:("p",48,70,3.0),3:("p",44,24,1.7),4:("p",50,33,1.9),5:("p",56,61,2.2),6:("p",58,45,1.8),7:("p",68,35,1.9),
      8:("p",52,49,1.9),9:("p",52,12,1.6),10:("w",78,40,1.25),11:("p",22,55,1.7),12:("p",63,23,1.9)}
def crop(img,x,y,cw,ch,fx,fy):
    H,W=img.shape[:2]; cx,cy=W*x/100,H*y/100
    l=int(max(0,min(cx-cw*fx,W-cw))); t=int(max(0,min(cy-ch*fy,H-ch)))
    return img[t:t+int(ch),l:l+int(cw)]
which=sys.argv[1] if len(sys.argv)>1 else "all"
EPS=[int(x) for x in sys.argv[2].split(",")] if len(sys.argv)>2 else range(2,13)
for ep in EPS:
    t0=time.time()
    if which in ("all","wide"):
        x,y,z=WIDE[ep]; H,W=mw.shape[:2]
        if ep in FLIP:
            c=cv2.flip(crop(mw,x,y,W/z,H/z,.67,.5),1)
        else:
            c=crop(mw,x,y,W/z,H/z,.33,.5)
        c=cv2.resize(c,(400,225),interpolation=cv2.INTER_AREA) if c.shape[1]>400 else c
        up=cv2.resize(sr.upsample(c),(1600,900),interpolation=cv2.INTER_CUBIC)
        cv2.imwrite(f"{OUT}/ep{ep}-wide.jpg",up,[cv2.IMWRITE_JPEG_QUALITY,84,cv2.IMWRITE_JPEG_PROGRESSIVE,1])
    if which in ("all","port"):
        s,x,y,z=PORT[ep]; img=mp if s=="p" else mw; H,W=img.shape[:2]
        ch=H/z; cw=ch*9/16
        if cw>W: cw=W; ch=cw*16/9
        c=crop(img,x,y,cw,ch,.5,.3)
        c=cv2.resize(c,(225,400),interpolation=cv2.INTER_AREA) if c.shape[1]>225 else c
        up=cv2.resize(sr.upsample(c),(900,1600),interpolation=cv2.INTER_CUBIC)
        cv2.imwrite(f"{OUT}/ep{ep}-portrait.jpg",up,[cv2.IMWRITE_JPEG_QUALITY,84,cv2.IMWRITE_JPEG_PROGRESSIVE,1])
    print(f"ep{ep} {which} done in {time.time()-t0:.0f}s", flush=True)
print("ALL DONE", flush=True)
