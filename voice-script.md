# 小豆／Pip 帶語氣標記台詞稿（中英各一份）

給正式版配音或 AI TTS 使用。示範版把同一份資料放在 `voice.js` 的 `LINES`，依 `tone` 調整 pitch／rate，句間停頓 150–300ms。

聲線：同一個卡通小女孩（約 8–10 歲），明亮、溫暖、咬字清楚。中英同一角色性格。須可商用授權，不可模倣迪士尼或其他品牌角色。

語氣標記：

| tone | 用法 | 示範參數 | 正式版 SSML 建議 |
|---|---|---|---|
| `calm` | 敘述、說明 | pitch 1.45，rate 0.90，停約 220ms | `<prosody rate="medium">`，後接 `<break time="220ms"/>` |
| `hint` | 提示、再試一次 | pitch 1.38，rate 0.78（放慢） | 較慢、放軟，句間 `<break time="280ms"/>` |
| `question` | 問句；**最後一段升調** | pitch 1.62，尾段約 1.70 | 尾段提高 pitch，或用語調／emotion |
| `excited` | 歡迎、答對、開始吧 | pitch 1.58，rate 1.05（稍快） | 稍快、明亮，停頓較短（約 160ms） |

基礎：pitch 約 1.5，rate 約 0.9。設定「慢」時 rate 再乘 0.78。

---

## 中文稿

**開場（gate）**
- 你好，我是小豆！ `[excited]`
- 點一下開始， `[calm]`
- 我們一起走進童話數學谷。 `[calm]`

**地圖歡迎（mapIntro）**
- 歡迎來到童話數學谷。 `[excited]`
- 選一條小路， `[calm]`
- 開始第 1 集吧！ `[excited]`

**集數節點（示範，依集名替換）**
- 解鎖：第 1 集， `[calm]` 莓果小路。 `[excited]` 開始吧！ `[excited]`
- 未解鎖：第 2 集，三間小房子。 `[calm]` 這關還沒解鎖。 `[hint]` 先走完第 1 集吧。 `[hint]`

**小豆泡泡（pipHint）**
- 先數幾個「十」， `[calm]`
- 再數剩下的「一」！ `[excited]`

**題目（quest）**
- 四盤十格再加七顆， `[calm]`
- 一共幾顆？ `[question]`（尾段升調）

**提示（hint）**
- 想一想： `[hint]`
- 四個十是四十， `[hint]`
- 再加七個一，就是四十七。 `[hint]`
- 不要只把四和七排在一起， `[hint]`
- 也不要把四個十寫成四百。 `[hint]`

**答錯（err，選 74：十位個位對調）**
- 再試一次。 `[calm]`
- 四和七對調，就變成七十四了。 `[hint]`

**答錯（err407，選 407：把 4 個十寫成 400）**
- 再試一次。 `[calm]`
- 四個十是四十，不是四百。 `[hint]`

**答錯（err11，選 11：把十格盤當成一）**
- 再試一次。 `[calm]`
- 四盤十格是四個十，不是四個一。 `[hint]`

**答對祝賀（win）**
- 答對了！ `[excited]`
- 四個十加七個一，一共是四十七。 `[calm]`
- 得到一顆星星！ `[excited]`

答對時先短響成功音效，再唸祝賀；答錯時先短響提示音，再唸回饋。

---

## English script

**Gate**
- Hi, I'm Pip! `[excited]`
- Tap to start, `[calm]`
- and we'll go into Fairytale Maths Valley. `[calm]`

**Map intro**
- Welcome to Fairytale Maths Valley. `[excited]`
- Pick a path, `[calm]`
- and start Episode 1! `[excited]`

**Map node (swap in the episode title)**
- Unlocked: Episode 1, `[calm]` Berry Path. `[excited]` Let's go! `[excited]`
- Locked: Episode 2, Three Houses. `[calm]` It's still locked. `[hint]` Finish Episode 1 first. `[hint]`

**Pip's hint**
- Count the tens first, `[calm]`
- then the ones! `[excited]`

**Question**
- Four full ten-frames plus seven berries. `[calm]`
- How many in all? `[question]` (rise on the last phrase)

**Hint**
- Think about it. `[hint]`
- Four tens are forty, `[hint]`
- plus seven ones is forty-seven. `[hint]`
- Don't swap them to seventy-four, `[hint]`
- and don't write four hundred and seven. `[hint]`

**Wrong answer (err — picked 74: tens and ones swapped)**
- Try again. `[calm]`
- If you swap four and seven, it becomes seventy-four. `[hint]`

**Wrong answer (err407 — picked 407: wrote 4 tens as 400)**
- Try again. `[calm]`
- Four tens are forty, not four hundred. `[hint]`

**Wrong answer (err11 — picked 11: counted ten-frames as ones)**
- Try again. `[calm]`
- Four full ten-frames are four tens, not four ones. `[hint]`

**Celebration**
- You did it! `[excited]`
- Four tens and seven ones make forty-seven. `[calm]`
- You earned one star! `[excited]`

Play the short success chime before the celebration line, and the softer error chime before the wrong-answer line.
