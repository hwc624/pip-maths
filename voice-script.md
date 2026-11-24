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


---

## 第 1 集 第 2–4 題（新增）

選錯答案時，各錯誤選項有自己的回饋（swap＝十位個位對調、hund＝把十寫成百、ones＝把十當成一、join＝把數字接在一起）。重玩時已拿過的星星不重複給，祝賀只唸前兩句。

### 第 1 集第 2 題（換情境：36 顆蛋）

**題目（quest2）**
- 三盤十格再加六顆蛋， `[calm]`
- 一共幾顆？ `[question]`

**提示（hint2）**
- 想一想： `[hint]`
- 三個十是三十， `[hint]`
- 再加六個一，就是三十六。 `[hint]`

**答錯（err2swap）**
- 再試一次。 `[calm]`
- 三和六對調，就變成六十三了。 `[hint]`

**答錯（err2hund）**
- 再試一次。 `[calm]`
- 三個十是三十，不是三百。 `[hint]`

**答錯（err2ones）**
- 再試一次。 `[calm]`
- 三盤十格是三個十，不是三個一。 `[hint]`

**答對祝賀（win2）**
- 答對了！ `[excited]`
- 三個十加六個一，一共是三十六。 `[calm]`
- 得到第二顆星星！ `[excited]`

### 第 1 集第 3 題（換表示法：40 + 7）

**題目（quest3）**
- 四十加七， `[calm]`
- 等於多少？ `[question]`

**提示（hint3）**
- 想一想： `[hint]`
- 四十是四個十， `[hint]`
- 七是七個一， `[hint]`
- 十位寫四，個位寫七。 `[hint]`

**答錯（err3join）**
- 再試一次。 `[calm]`
- 四十加七，不是把四十和七接在一起寫。 `[hint]`

**答錯（err3swap）**
- 再試一次。 `[calm]`
- 十位是四，不是七。 `[hint]`

**答錯（err3ones）**
- 再試一次。 `[calm]`
- 四十是四個十，不是四。 `[hint]`

**答對祝賀（win3）**
- 答對了！ `[excited]`
- 四十加七等於四十七，就是四個十和七個一。 `[calm]`
- 得到第三顆星星！ `[excited]`

### 第 1 集第 4 題（反過來問：5 捆木頭加 3 根）

**題目（quest4）**
- 五捆木頭，每捆十根， `[calm]`
- 再加三根， `[calm]`
- 一共幾根？ `[question]`

**提示（hint4）**
- 想一想： `[hint]`
- 五捆是五個十，就是五十， `[hint]`
- 再加三根，就是五十三。 `[hint]`

**答錯（err4swap）**
- 再試一次。 `[calm]`
- 五和三對調，就變成三十五了。 `[hint]`

**答錯（err4hund）**
- 再試一次。 `[calm]`
- 五捆是五個十，是五十，不是五百。 `[hint]`

**答錯（err4ones）**
- 再試一次。 `[calm]`
- 每捆有十根，五捆是五個十，不是五個一。 `[hint]`

**答對祝賀（win4）**
- 答對了！ `[excited]`
- 五個十加三個一，一共是五十三。 `[calm]`
- 第一集完成，三顆星都拿到了！ `[excited]`

### 地圖節點：即將推出（第 1 集完成後）
- 第 2 集，三間小房子。 `[calm]` 這一集還在準備中， `[hint]` 很快就能玩了！ `[excited]`

### English

**Ep 1 Q2 (new story: 36 eggs)**

*quest2*
- Three full ten-frames plus six eggs. `[calm]`
- How many in all? `[question]`

*hint2*
- Think about it. `[hint]`
- Three tens are thirty, `[hint]`
- plus six ones is thirty-six. `[hint]`

*err2swap*
- Try again. `[calm]`
- If you swap three and six, it becomes sixty-three. `[hint]`

*err2hund*
- Try again. `[calm]`
- Three tens are thirty, not three hundred. `[hint]`

*err2ones*
- Try again. `[calm]`
- Three full ten-frames are three tens, not three ones. `[hint]`

*win2*
- You did it! `[excited]`
- Three tens and six ones make thirty-six. `[calm]`
- You earned your second star! `[excited]`

**Ep 1 Q3 (number sentence: 40 + 7)**

*quest3*
- Forty plus seven. `[calm]`
- What does it make? `[question]`

*hint3*
- Think about it. `[hint]`
- Forty is four tens, `[hint]`
- seven is seven ones, `[hint]`
- so four goes in the tens place and seven in the ones place. `[hint]`

*err3join*
- Try again. `[calm]`
- Don't just write forty and seven side by side. `[hint]`

*err3swap*
- Try again. `[calm]`
- The tens digit is four, not seven. `[hint]`

*err3ones*
- Try again. `[calm]`
- Forty is four tens, not four. `[hint]`

*win3*
- You did it! `[excited]`
- Forty plus seven makes forty-seven: four tens and seven ones. `[calm]`
- You earned your third star! `[excited]`

**Ep 1 Q4 (turn it around: 5 bundles + 3)**

*quest4*
- Five bundles of ten logs, `[calm]`
- plus three more. `[calm]`
- How many in all? `[question]`

*hint4*
- Think about it. `[hint]`
- Five bundles are five tens. That's fifty, `[hint]`
- plus three more is fifty-three. `[hint]`

*err4swap*
- Try again. `[calm]`
- If you swap five and three, it becomes thirty-five. `[hint]`

*err4hund*
- Try again. `[calm]`
- Five bundles are five tens. That's fifty, not five hundred. `[hint]`

*err4ones*
- Try again. `[calm]`
- Each bundle has ten logs, so five bundles are five tens, not five ones. `[hint]`

*win4*
- You did it! `[excited]`
- Five tens and three ones make fifty-three. `[calm]`
- Episode one complete. You have all three stars! `[excited]`

*Map node, coming soon*
- Episode 2, Three Houses. `[calm]` This episode is still being made. `[hint]` Coming soon! `[excited]`
