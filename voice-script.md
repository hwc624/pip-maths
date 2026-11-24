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


---

## 第 2–12 集（自動產生自 episodes.js）

中文台詞的數字會自動轉成國字（2 個 → 兩個）；語氣標記規則同上：題目最後一句問句用 question，提示用 hint，答錯「再試一次」用 calm，祝賀 excited／calm／excited。

### 第 2 集　三間小房子 / Three Houses

**小豆的話（e2pip）**
- 看看邊是直的還是彎的， `[calm]`
- 再想想它會不會滾！ `[excited]`
- Look for straight or curved sides, `[calm]`
- then think: will it roll? `[excited]`

**第 1 題**
- 題目：三兄妹要疊牆， `[calm]` 哪一個是箱子形，可以穩穩疊起來？ `[question]`
  - EN：The three siblings are building a wall. `[calm]` Which one is box-shaped and stacks well? `[question]`
- 答錯（ball）：再試一次。 `[calm]` 球會滾，疊不穩。 `[hint]`
  - EN：Try again. `[calm]` A ball rolls, so it won’t stack. `[hint]`
- 答錯（cyl）：再試一次。 `[calm]` 圓柱有彎彎的面，放倒會滾。 `[hint]`
  - EN：Try again. `[calm]` A cylinder has a curved side, so it can roll. `[hint]`
- 答錯（cone）：再試一次。 `[calm]` 圓錐有尖尖的頂，上面疊不了東西。 `[hint]`
  - EN：Try again. `[calm]` A cone has a point on top, so nothing stacks on it. `[hint]`
- 提示：找一個每一面都是平平的， `[hint]` 沒有彎彎的面。 `[hint]`
  - EN：Find one where every face is flat, `[hint]` with no curved faces. `[hint]`
- 祝賀：答對了！ `[excited]` 箱子每一面都是平的，可以穩穩疊起來。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` Every face of a box is flat, so boxes stack well. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：麵包房裡， `[calm]` 哪一個可以滾，也可以滑？ `[question]`
  - EN：In the bakery, `[calm]` which one can roll and also slide? `[question]`
- 答錯（ball）：再試一次。 `[calm]` 球只會滾，沒有平平的面可以滑。 `[hint]`
  - EN：Try again. `[calm]` A ball only rolls. It has no flat face to slide on. `[hint]`
- 答錯（box）：再試一次。 `[calm]` 箱子都是平面，只會滑，不會滾。 `[hint]`
  - EN：Try again. `[calm]` A box has only flat faces. It slides but won’t roll. `[hint]`
- 答錯（pyr）：再試一次。 `[calm]` 三角錐都是平面和尖角，只會滑，不會滾。 `[hint]`
  - EN：Try again. `[calm]` A pyramid has only flat faces and corners. It slides but won’t roll. `[hint]`
- 提示：要有彎彎的面才能滾， `[hint]` 也要有平平的面才能滑。 `[hint]`
  - EN：It needs a curved face to roll, `[hint]` and a flat face to slide. `[hint]`
- 祝賀：答對了！ `[excited]` 圓柱有彎彎的面可以滾，兩頭是平的可以滑。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` A cylinder rolls on its curved side and slides on its flat ends. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：屋頂上這扇窗戶， `[calm]` 是什麼形狀？ `[question]`
  - EN：This window in the roof — `[calm]` what shape is it? `[question]`
- 答錯（sq）：再試一次。 `[calm]` 正方形有四條邊，這扇窗只有三條邊。 `[hint]`
  - EN：Try again. `[calm]` A square has 4 sides. This window has only 3. `[hint]`
- 答錯（cir）：再試一次。 `[calm]` 圓形沒有直直的邊，這扇窗的邊是直的。 `[hint]`
  - EN：Try again. `[calm]` A circle has no straight sides. This window’s sides are straight. `[hint]`
- 答錯（rect）：再試一次。 `[calm]` 長方形有四條邊，這扇窗只有三條邊。 `[hint]`
  - EN：Try again. `[calm]` A rectangle has 4 sides. This window has only 3. `[hint]`
- 提示：數一數有幾條直直的邊， `[hint]` 再想想哪個形狀有這麼多條邊。 `[hint]`
  - EN：Count the straight sides, `[hint]` then think which shape has that many. `[hint]`
- 祝賀：答對了！ `[excited]` 三角形有三條直直的邊和三個角。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` A triangle has 3 straight sides and 3 corners. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：這個東西會滾， `[calm]` 沒有尖角，也沒有平平的面。 `[calm]` 它是什麼？ `[question]`
  - EN：It rolls, `[calm]` it has no corners and no flat faces. `[calm]` What is it? `[question]`
- 答錯（cyl）：再試一次。 `[calm]` 圓柱兩頭有平平的面。 `[hint]`
  - EN：Try again. `[calm]` A cylinder has flat faces at both ends. `[hint]`
- 答錯（cone）：再試一次。 `[calm]` 圓錐有一個尖尖的頂，底下也是平的。 `[hint]`
  - EN：Try again. `[calm]` A cone has a point, and its bottom is flat. `[hint]`
- 答錯（box）：再試一次。 `[calm]` 箱子不會滾，而且有很多尖角。 `[hint]`
  - EN：Try again. `[calm]` A box won’t roll, and it has lots of corners. `[hint]`
- 提示：沒有平面，也沒有尖角， `[hint]` 整個都是彎彎的。 `[hint]`
  - EN：No flat faces and no corners: `[hint]` it is curved all over. `[hint]`
- 祝賀：答對了！ `[excited]` 球整個都是彎彎的面，所以到處都能滾。 `[calm]` 第二集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` A ball is curved all over, so it rolls any way. `[calm]` Episode 2 complete. You have all 3 stars! `[excited]`

### 第 3 集　豆莖市集 / Beanstalk Market

**小豆的話（e3pip）**
- 先把價錢加起來， `[calm]`
- 再算要找多少錢！ `[excited]`
- Add the prices first, `[calm]`
- then work out the change! `[excited]`

**第 1 題**
- 題目：麵包十二蘭特，豆子二十蘭特， `[calm]` 兩樣一共多少蘭特？ `[question]`
  - EN：Bread costs 12 rand and beans cost 20 rand. `[calm]` How much for both? `[question]`
- 答錯（8）：再試一次。 `[calm]` 八是兩個價錢相減，一共要用加的。 `[hint]`
  - EN：Try again. `[calm]` 8 is the difference. For the total, add them. `[hint]`
- 答錯（23）：再試一次。 `[calm]` 二十三把十位和個位對調了。 `[hint]`
  - EN：Try again. `[calm]` 23 has the tens and ones swapped. `[hint]`
- 答錯（42）：再試一次。 `[calm]` 多算了一個十。二十是兩個十，十二是一個十，一共三個十。 `[hint]`
  - EN：Try again. `[calm]` That’s one ten too many. 20 is 2 tens, 12 is 1 ten: 3 tens in all. `[hint]`
- 提示：二十加十是三十， `[hint]` 再加二是多少？ `[hint]`
  - EN：20 plus 10 is 30, `[hint]` then add 2. `[hint]`
- 祝賀：答對了！ `[excited]` 二十加十二等於三十二，一共三十二蘭特。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` 20 plus 12 makes 32. That’s 32 rand. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：糖果屋裡，棒棒糖十五蘭特，餅乾二十四蘭特， `[calm]` 一共多少蘭特？ `[question]`
  - EN：At the candy cottage, a lollipop is 15 rand and a biscuit is 24 rand. `[calm]` How much altogether? `[question]`
- 答錯（9）：再試一次。 `[calm]` 九是兩個價錢相減，一共要用加的。 `[hint]`
  - EN：Try again. `[calm]` 9 is the difference. For the total, add them. `[hint]`
- 答錯（49）：再試一次。 `[calm]` 多算了一個十。十五是一個十，二十四是兩個十，一共三個十。 `[hint]`
  - EN：Try again. `[calm]` That’s one ten too many. 15 is 1 ten, 24 is 2 tens: 3 tens in all. `[hint]`
- 答錯（93）：再試一次。 `[calm]` 九十三把十位和個位對調了。 `[hint]`
  - EN：Try again. `[calm]` 93 has the tens and ones swapped. `[hint]`
- 提示：先加十：十加二十是三十， `[hint]` 再加一：五加四是九。 `[hint]`
  - EN：Add the tens: 10 plus 20 is 30, `[hint]` then the ones: 5 plus 4 is 9. `[hint]`
- 祝賀：答對了！ `[excited]` 十五加二十四等於三十九，一共三十九蘭特。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 15 plus 24 makes 39. That’s 39 rand. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：數一數這些錢， `[calm]` 一共多少蘭特？ `[question]`
  - EN：Count this money. `[calm]` How many rand altogether? `[question]`
- 答錯（4）：再試一次。 `[calm]` 四是錢的張數和枚數，要算的是一共多少蘭特。 `[hint]`
  - EN：Try again. `[calm]` 4 is how many notes and coins. We want how many rand. `[hint]`
- 答錯（17）：再試一次。 `[calm]` 有兩張十蘭特紙鈔，是二十，不是十。 `[hint]`
  - EN：Try again. `[calm]` There are two 10-rand notes. That’s 20, not 10. `[hint]`
- 答錯（25）：再試一次。 `[calm]` 別忘了還有一枚二蘭特硬幣。 `[hint]`
  - EN：Try again. `[calm]` Don’t forget the 2-rand coin. `[hint]`
- 提示：先數紙鈔：十、二十， `[hint]` 再加五，再加二。 `[hint]`
  - EN：Count the notes first: 10, 20, `[hint]` then add 5, then add 2. `[hint]`
- 祝賀：答對了！ `[excited]` 十加十加五加二，一共二十七蘭特。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` 10 plus 10 plus 5 plus 2 makes 27 rand. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：傑克付了五十蘭特，拿到八蘭特找零。 `[calm]` 東西賣多少蘭特？ `[question]`
  - EN：Jack paid 50 rand and got 8 rand change. `[calm]` How much did it cost? `[question]`
- 答錯（32）：再試一次。 `[calm]` 三十二加八是四十，不是五十。 `[hint]`
  - EN：Try again. `[calm]` 32 plus 8 is 40, not 50. `[hint]`
- 答錯（48）：再試一次。 `[calm]` 四十八加八是五十六，不是五十。 `[hint]`
  - EN：Try again. `[calm]` 48 plus 8 is 56, not 50. `[hint]`
- 答錯（58）：再試一次。 `[calm]` 五十八是把五十和八加起來。東西比付的錢少，要用減的。 `[hint]`
  - EN：Try again. `[calm]` 58 adds 50 and 8. The price is less than what he paid, so subtract. `[hint]`
- 提示：價錢加上找回的八蘭特， `[hint]` 要剛好是五十蘭特。 `[hint]`
  - EN：The price plus the 8 rand change `[hint]` must make exactly 50 rand. `[hint]`
- 祝賀：答對了！ `[excited]` 五十減八等於四十二，東西賣四十二蘭特。 `[calm]` 第三集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` 50 minus 8 is 42. It cost 42 rand. `[calm]` Episode 3 complete. You have all 3 stars! `[excited]`

### 第 4 集　規律小徑 / Pattern Path

**小豆的話（e4pip）**
- 看看每一步怎麼變， `[calm]`
- 再接下去！ `[excited]`
- See how each step changes, `[calm]`
- then keep going! `[excited]`

**第 1 題**
- 題目：路標上寫著五、十、十五、二十， `[calm]` 下一個是多少？ `[question]`
  - EN：The signs say 5, 10, 15, 20. `[calm]` What comes next? `[question]`
- 答錯（21）：再試一次。 `[calm]` 這個規律每次加五，不是加一。 `[hint]`
  - EN：Try again. `[calm]` This pattern adds 5 each time, not 1. `[hint]`
- 答錯（30）：再試一次。 `[calm]` 二十後面先是二十五，三十是再下一個。 `[hint]`
  - EN：Try again. `[calm]` After 20 comes 25. 30 is the one after that. `[hint]`
- 答錯（40）：再試一次。 `[calm]` 四十是把二十加倍。這個規律每次加五。 `[hint]`
  - EN：Try again. `[calm]` 40 doubles 20. This pattern adds 5 each time. `[hint]`
- 提示：五到十加了五， `[hint]` 十到十五也加了五。 `[hint]`
  - EN：5 to 10 adds 5, `[hint]` and 10 to 15 adds 5 too. `[hint]`
- 祝賀：答對了！ `[excited]` 每次加五：五、十、十五、二十、二十五。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` Add 5 each time: 5, 10, 15, 20, 25. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：麵包屑每三顆一個記號：三、六、九、十二， `[calm]` 下一個是多少？ `[question]`
  - EN：The breadcrumbs go up by 3: 3, 6, 9, 12. `[calm]` What comes next? `[question]`
- 答錯（13）：再試一次。 `[calm]` 這個規律每次加三，不是加一。 `[hint]`
  - EN：Try again. `[calm]` This pattern adds 3 each time, not 1. `[hint]`
- 答錯（14）：再試一次。 `[calm]` 十二加三不是十四，再數一次。 `[hint]`
  - EN：Try again. `[calm]` 12 plus 3 isn’t 14. Count again. `[hint]`
- 答錯（18）：再試一次。 `[calm]` 十八是再下一個，十二後面先是十五。 `[hint]`
  - EN：Try again. `[calm]` 18 is the one after. After 12 comes 15. `[hint]`
- 提示：三到六加了三， `[hint]` 十二再加三是多少？ `[hint]`
  - EN：3 to 6 adds 3. `[hint]` What is 12 plus 3? `[hint]`
- 祝賀：答對了！ `[excited]` 每次加三：三、六、九、十二、十五。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` Add 3 each time: 3, 6, 9, 12, 15. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：石頭排成圓、方、圓、方、圓， `[calm]` 下一個是什麼？ `[question]`
  - EN：The stones go circle, square, circle, square, circle. `[calm]` What comes next? `[question]`
- 答錯（cir）：再試一次。 `[calm]` 圓形後面是正方形，它們一個接一個輪流。 `[hint]`
  - EN：Try again. `[calm]` After a circle comes a square. They take turns. `[hint]`
- 答錯（tri）：再試一次。 `[calm]` 這個規律裡沒有三角形。 `[hint]`
  - EN：Try again. `[calm]` There are no triangles in this pattern. `[hint]`
- 答錯（star）：再試一次。 `[calm]` 這個規律裡沒有星形。 `[hint]`
  - EN：Try again. `[calm]` There are no stars in this pattern. `[hint]`
- 提示：圓、方、圓、方， `[hint]` 它們輪流出現。 `[hint]`
  - EN：Circle, square, circle, square: `[hint]` they take turns. `[hint]`
- 祝賀：答對了！ `[excited]` 圓和方輪流出現，圓形後面是正方形。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` Circles and squares take turns, so a square comes next. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：四、八、十二、十六， `[calm]` 這個規律每次加幾？ `[question]`
  - EN：4, 8, 12, 16. `[calm]` How much is added each time? `[question]`
- 答錯（2）：再試一次。 `[calm]` 四加二是六，不是八。 `[hint]`
  - EN：Try again. `[calm]` 4 plus 2 is 6, not 8. `[hint]`
- 答錯（8）：再試一次。 `[calm]` 四加八是十二，不是八。 `[hint]`
  - EN：Try again. `[calm]` 4 plus 8 is 12, not 8. `[hint]`
- 答錯（16）：再試一次。 `[calm]` 十六是最後一個數，不是每次加的數。 `[hint]`
  - EN：Try again. `[calm]` 16 is the last number, not the amount added. `[hint]`
- 提示：看看四到八多了多少， `[hint]` 八到十二又多了多少。 `[hint]`
  - EN：How much more is 8 than 4? `[hint]` And 12 than 8? `[hint]`
- 祝賀：答對了！ `[excited]` 每次加四：四、八、十二、十六，下一個是二十。 `[calm]` 第四集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` Add 4 each time: 4, 8, 12, 16, and next is 20. `[calm]` Episode 4 complete. You have all 3 stars! `[excited]`

### 第 5 集　糖果屋 / Candy Cottage

**小豆的話（e5pip）**
- 平分就是每個人一樣多， `[calm]`
- 誰也不能多拿！ `[excited]`
- Sharing fairly means everyone gets the same, `[calm]`
- no one gets more! `[excited]`

**第 1 題**
- 題目：十二塊餅乾平分給四個朋友， `[calm]` 每人幾塊？ `[question]`
  - EN：Share 12 biscuits fairly between 4 friends. `[calm]` How many each? `[question]`
- 答錯（4）：再試一次。 `[calm]` 四是朋友的人數。每人四塊要十六塊。 `[hint]`
  - EN：Try again. `[calm]` 4 is the number of friends. 4 each would need 16. `[hint]`
- 答錯（8）：再試一次。 `[calm]` 八是十二減四。平分要一人一塊輪流分。 `[hint]`
  - EN：Try again. `[calm]` 8 is 12 minus 4. To share, give one each in turns. `[hint]`
- 答錯（16）：再試一次。 `[calm]` 十六是十二加四，平分不會變多。 `[hint]`
  - EN：Try again. `[calm]` 16 is 12 plus 4. Sharing doesn’t make more. `[hint]`
- 提示：一人一塊輪流分， `[hint]` 看看每人分到幾輪。 `[hint]`
  - EN：Give one each, in turns, `[hint]` and count how many rounds. `[hint]`
- 祝賀：答對了！ `[excited]` 十二塊分給四人，每人三塊；三加三加三加三是十二。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` 12 shared by 4 is 3 each, because 3 plus 3 plus 3 plus 3 is 12. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：豐收宴的派切成四塊一樣大， `[calm]` 塗色的這一塊叫什麼？ `[question]`
  - EN：The feast pie is cut into 4 equal pieces. `[calm]` What do we call the coloured piece? `[question]`
- 答錯（half）：再試一次。 `[calm]` 一半是切成兩塊一樣大。這個派切成四塊。 `[hint]`
  - EN：Try again. `[calm]` A half means 2 equal pieces. This pie has 4. `[hint]`
- 答錯（third）：再試一次。 `[calm]` 三分之一是切成三塊一樣大。這個派切成四塊。 `[hint]`
  - EN：Try again. `[calm]` A third means 3 equal pieces. This pie has 4. `[hint]`
- 答錯（four）：再試一次。 `[calm]` 整個派有四塊，塗色的只有其中一塊。 `[hint]`
  - EN：Try again. `[calm]` The whole pie has 4 pieces. Only one is coloured. `[hint]`
- 提示：數一數一共切成幾塊一樣大， `[hint]` 塗色的是其中一塊。 `[hint]`
  - EN：Count how many equal pieces there are. `[hint]` The coloured part is one of them. `[hint]`
- 祝賀：答對了！ `[excited]` 切成四塊一樣大，其中一塊就是四分之一。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 4 equal pieces, so one piece is one quarter. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：哪一張圖， `[calm]` 塗了剛好一半？ `[question]`
  - EN：Which picture `[calm]` shows exactly one half coloured? `[question]`
- 答錯（u）：再試一次。 `[calm]` 這兩塊不一樣大，不是一半。一半要分成兩塊一樣大。 `[hint]`
  - EN：Try again. `[calm]` These 2 parts aren’t equal, so it isn’t a half. `[hint]`
- 答錯（t）：再試一次。 `[calm]` 分成三塊一樣大，塗一塊是三分之一。 `[hint]`
  - EN：Try again. `[calm]` 3 equal parts with 1 coloured is one third. `[hint]`
- 答錯（q）：再試一次。 `[calm]` 分成四塊一樣大，塗一塊是四分之一。 `[hint]`
  - EN：Try again. `[calm]` 4 equal parts with 1 coloured is one quarter. `[hint]`
- 提示：一半要分成兩塊， `[hint]` 而且兩塊要一樣大。 `[hint]`
  - EN：A half needs 2 parts, `[hint]` and the 2 parts must be the same size. `[hint]`
- 祝賀：答對了！ `[excited]` 分成兩塊一樣大，塗一塊就是一半。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` 2 equal parts with 1 coloured is one half. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：四個朋友每人分到三塊， `[calm]` 原來一共幾塊？ `[question]`
  - EN：4 friends got 3 biscuits each. `[calm]` How many were there to start with? `[question]`
- 答錯（7）：再試一次。 `[calm]` 三加四是七。可是四個人每人都有三塊，要加四次三。 `[hint]`
  - EN：Try again. `[calm]` 3 plus 4 is 7. But each of the 4 friends has 3, so add 3 four times. `[hint]`
- 答錯（9）：再試一次。 `[calm]` 三加三加三是九，那只有三個人。 `[hint]`
  - EN：Try again. `[calm]` 3 plus 3 plus 3 is 9. That’s only 3 friends. `[hint]`
- 答錯（34）：再試一次。 `[calm]` 不是把三和四接在一起寫。 `[hint]`
  - EN：Try again. `[calm]` Don’t just write 3 and 4 side by side. `[hint]`
- 提示：四個人，每人三塊： `[hint]` 三、六、九，再數下去。 `[hint]`
  - EN：4 friends, 3 each: `[hint]` 3, 6, 9, and keep going. `[hint]`
- 祝賀：答對了！ `[excited]` 三加三加三加三等於十二，原來一共十二塊。 `[calm]` 第五集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` 3 plus 3 plus 3 plus 3 makes 12. There were 12. `[calm]` Episode 5 complete. You have all 3 stars! `[excited]`

### 第 6 集　小鴨長大 / Ugly Duckling

**小豆的話（e6pip）**
- 比長短要從同一條線開始， `[calm]`
- 再看看誰伸得最遠！ `[excited]`
- Line things up at the same start, `[calm]`
- then see which goes furthest! `[excited]`

**第 1 題**
- 題目：小鴨撿到三根羽毛， `[calm]` 哪一根最長？ `[question]`
  - EN：The duckling found three feathers. `[calm]` Which is the longest? `[question]`
- 答錯（white）：再試一次。 `[calm]` 白色羽毛最短。 `[hint]`
  - EN：Try again. `[calm]` The white feather is the shortest. `[hint]`
- 答錯（yellow）：再試一次。 `[calm]` 黃色羽毛比灰色短。 `[hint]`
  - EN：Try again. `[calm]` The yellow feather is shorter than the grey one. `[hint]`
- 答錯（same）：再試一次。 `[calm]` 它們從同一條線開始，可是結尾不一樣。 `[hint]`
  - EN：Try again. `[calm]` They start at the same line but end in different places. `[hint]`
- 提示：它們都從左邊同一條線開始， `[hint]` 看看誰伸得最遠。 `[hint]`
  - EN：They all start at the same line on the left. `[hint]` Which one reaches furthest? `[hint]`
- 祝賀：答對了！ `[excited]` 灰色羽毛伸得最遠，所以最長。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` The grey feather reaches furthest, so it is the longest. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：豆莖有九片葉子那麼高，小樹有六片葉子那麼高。 `[calm]` 豆莖比小樹高幾片葉子？ `[question]`
  - EN：The beanstalk is 9 leaves tall and the little tree is 6 leaves tall. `[calm]` How many leaves taller is the beanstalk? `[question]`
- 答錯（6）：再試一次。 `[calm]` 六是小樹的高度。要比的是多出多少。 `[hint]`
  - EN：Try again. `[calm]` 6 is the little tree’s height. We want how much taller. `[hint]`
- 答錯（9）：再試一次。 `[calm]` 九是豆莖的高度。要比的是多出多少。 `[hint]`
  - EN：Try again. `[calm]` 9 is the beanstalk’s height. We want how much taller. `[hint]`
- 答錯（15）：再試一次。 `[calm]` 十五是把兩個高度加起來。比高多少要用減的。 `[hint]`
  - EN：Try again. `[calm]` 15 adds the two heights. To compare, subtract. `[hint]`
- 提示：從六往上數到九， `[hint]` 數一數多了幾片。 `[hint]`
  - EN：Count up from 6 to 9. `[hint]` How many more leaves? `[hint]`
- 祝賀：答對了！ `[excited]` 九減六等於三，豆莖高三片葉子。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 9 minus 6 is 3. The beanstalk is 3 leaves taller. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：用杯子倒水量一量， `[calm]` 哪一個裝得最多？ `[question]`
  - EN：We measured with cups of water. `[calm]` Which one holds the most? `[question]`
- 答錯（bottle）：再試一次。 `[calm]` 瓶子只裝兩杯，是最少的。 `[hint]`
  - EN：Try again. `[calm]` The bottle holds only 2 cups, the least. `[hint]`
- 答錯（bowl）：再試一次。 `[calm]` 碗裝三杯，水壺裝四杯，水壺比較多。 `[hint]`
  - EN：Try again. `[calm]` The bowl holds 3 cups and the jug holds 4, so the jug holds more. `[hint]`
- 答錯（same）：再試一次。 `[calm]` 它們裝的杯數不一樣。 `[hint]`
  - EN：Try again. `[calm]` They hold different numbers of cups. `[hint]`
- 提示：數一數每一個裝幾杯， `[hint]` 杯數最多的就裝得最多。 `[hint]`
  - EN：Count the cups for each one. `[hint]` The most cups holds the most. `[hint]`
- 祝賀：答對了！ `[excited]` 水壺可以裝四杯，裝得最多。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` The jug holds 4 cups, the most of all. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：倒了兩杯水，瓶子剛好半滿。 `[calm]` 裝滿要幾杯？ `[question]`
  - EN：2 cups of water fill the bottle exactly half way. `[calm]` How many cups to fill it? `[question]`
- 答錯（2）：再試一次。 `[calm]` 兩杯只裝到一半。 `[hint]`
  - EN：Try again. `[calm]` 2 cups only fill half of it. `[hint]`
- 答錯（3）：再試一次。 `[calm]` 一半是兩杯，另一半也是兩杯。 `[hint]`
  - EN：Try again. `[calm]` One half is 2 cups, and the other half is 2 cups too. `[hint]`
- 答錯（6）：再試一次。 `[calm]` 一半是兩杯，兩個一半是二加二。 `[hint]`
  - EN：Try again. `[calm]` One half is 2 cups. Two halves are 2 plus 2. `[hint]`
- 提示：半滿是一半， `[hint]` 兩個一半才是滿的。 `[hint]`
  - EN：Half full is one half. `[hint]` Two halves make it full. `[hint]`
- 祝賀：答對了！ `[excited]` 一半是兩杯，二加二等於四，裝滿要四杯。 `[calm]` 第六集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` Half is 2 cups, and 2 plus 2 is 4. It takes 4 cups to fill. `[calm]` Episode 6 complete. You have all 3 stars! `[excited]`

### 第 7 集　麵包房的鐘 / Midnight Bakery

**小豆的話（e7pip）**
- 短針指幾點， `[calm]`
- 長針指幾分！ `[excited]`
- The short hand shows the hour, `[calm]`
- the long hand shows the minutes! `[excited]`

**第 1 題**
- 題目：麵包房的大鐘， `[calm]` 現在是幾點？ `[question]`
  - EN：The big bakery clock — `[calm]` what time is it? `[question]`
- 答錯（300）：再試一次。 `[calm]` 長針指著六，不是十二，所以不是整點。 `[hint]`
  - EN：Try again. `[calm]` The long hand points to 6, not 12, so it isn’t o’clock. `[hint]`
- 答錯（430）：再試一次。 `[calm]` 短針剛過三，還沒到四。 `[hint]`
  - EN：Try again. `[calm]` The short hand is just past 3, not at 4 yet. `[hint]`
- 答錯（630）：再試一次。 `[calm]` 長針指著六是半點，短針才告訴我們幾點。 `[hint]`
  - EN：Try again. `[calm]` The long hand on 6 means half past. The short hand tells the hour. `[hint]`
- 提示：短針在三和四中間， `[hint]` 長針指著六，是半點。 `[hint]`
  - EN：The short hand is between 3 and 4. `[hint]` The long hand on 6 means half past. `[hint]`
- 祝賀：答對了！ `[excited]` 短針過了三，長針指著六，是三點半。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` The short hand is past 3 and the long hand is on 6: half past 3. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：兔子兩點出發，三點半到家， `[calm]` 一共過了多久？ `[question]`
  - EN：The hare left at 2 o’clock and came back at half past 3. `[calm]` How long was he gone? `[question]`
- 答錯（1）：再試一次。 `[calm]` 兩點到三點是一小時，還要再加三點到三點半。 `[hint]`
  - EN：Try again. `[calm]` 2 to 3 o’clock is 1 hour. Then add 3 to half past 3. `[hint]`
- 答錯（2）：再試一次。 `[calm]` 兩點到四點才是兩小時。 `[hint]`
  - EN：Try again. `[calm]` 2 hours would be 2 o’clock to 4 o’clock. `[hint]`
- 答錯（05）：再試一次。 `[calm]` 三點到三點半是半小時，前面還有兩點到三點。 `[hint]`
  - EN：Try again. `[calm]` 3 to half past 3 is half an hour, but 2 to 3 came first. `[hint]`
- 提示：兩點到三點是一小時， `[hint]` 三點到三點半是半小時。 `[hint]`
  - EN：2 to 3 o’clock is 1 hour. `[hint]` 3 to half past 3 is half an hour. `[hint]`
- 祝賀：答對了！ `[excited]` 一小時加半小時，一共一個半小時。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 1 hour plus half an hour is 1 and a half hours. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：數位鐘顯示四點十五分， `[calm]` 也可以怎麼說？ `[question]`
  - EN：The digital clock shows 4:15. `[calm]` How else can we say it? `[question]`
- 答錯（h）：再試一次。 `[calm]` 半點是三十分，這裡是十五分。 `[hint]`
  - EN：Try again. `[calm]` Half past is 30 minutes. This is 15 minutes. `[hint]`
- 答錯（tq）：再試一次。 `[calm]` 三刻是四十五分，這裡是十五分。 `[hint]`
  - EN：Try again. `[calm]` Quarter to 5 is 4:45. This is 15 minutes past. `[hint]`
- 答錯（q5）：再試一次。 `[calm]` 冒號前面是四，所以是四點多，不是五點多。 `[hint]`
  - EN：Try again. `[calm]` The number before the colon is 4, so the hour is 4, not 5. `[hint]`
- 提示：冒號前是幾點，冒號後是幾分， `[hint]` 十五分就是一刻。 `[hint]`
  - EN：Before the colon is the hour, after it the minutes. `[hint]` 15 minutes is a quarter. `[hint]`
- 祝賀：答對了！ `[excited]` 四點十五分，也叫四點一刻。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` 4:15 is 15 minutes past 4: quarter past 4. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：再過一刻鐘就是四點， `[calm]` 現在是幾點？ `[question]`
  - EN：In a quarter of an hour it will be 4 o’clock. `[calm]` What time is it now? `[question]`
- 答錯（315）：再試一次。 `[calm]` 三點十五分再過一刻是三點半，不是四點。 `[hint]`
  - EN：Try again. `[calm]` A quarter after 3:15 is half past 3, not 4. `[hint]`
- 答錯（330）：再試一次。 `[calm]` 三點半再過一刻是三點四十五分，還沒到四點。 `[hint]`
  - EN：Try again. `[calm]` A quarter after half past 3 is 3:45, not 4 yet. `[hint]`
- 答錯（415）：再試一次。 `[calm]` 那是四點再過一刻，我們要往回算。 `[hint]`
  - EN：Try again. `[calm]` That’s a quarter after 4. We need to count back. `[hint]`
- 提示：一刻是十五分鐘， `[hint]` 從四點往回數十五分鐘。 `[hint]`
  - EN：A quarter of an hour is 15 minutes. `[hint]` Count back 15 minutes from 4 o’clock. `[hint]`
- 祝賀：答對了！ `[excited]` 四點往回十五分鐘，是三點四十五分。 `[calm]` 第七集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` 15 minutes before 4 o’clock is 3:45. `[calm]` Episode 7 complete. You have all 3 stars! `[excited]`

### 第 8 集　樂隊調查 / Bremen Band

**小豆的話（e8pip）**
- 一個圖案就是一票， `[calm]`
- 仔細數一數！ `[excited]`
- Each picture is one vote, `[calm]`
- so count carefully! `[excited]`

**第 1 題**
- 題目：樂隊問大家最喜歡哪種表演， `[calm]` 哪一種最多票？ `[question]`
  - EN：The band asked everyone their favourite act. `[calm]` Which got the most votes? `[question]`
- 答錯（sing）：再試一次。 `[calm]` 唱歌有六票，打鼓有七票，打鼓比較多。 `[hint]`
  - EN：Try again. `[calm]` Singing has 6 votes and drums have 7, so drums have more. `[hint]`
- 答錯（dance）：再試一次。 `[calm]` 跳舞只有四票。 `[hint]`
  - EN：Try again. `[calm]` Dancing has only 4 votes. `[hint]`
- 答錯（flute）：再試一次。 `[calm]` 吹笛只有三票，是最少的。 `[hint]`
  - EN：Try again. `[calm]` Flute has only 3 votes, the fewest. `[hint]`
- 提示：數一數每一排有幾個圖案， `[hint]` 最長的那一排最多。 `[hint]`
  - EN：Count the pictures in each row. `[hint]` The longest row has the most. `[hint]`
- 祝賀：答對了！ `[excited]` 打鼓有七票，比其他都多。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` Drums have 7 votes, more than any other. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：看同一張圖， `[calm]` 唱歌比跳舞多幾票？ `[question]`
  - EN：Using the same chart, `[calm]` how many more votes did singing get than dancing? `[question]`
- 答錯（4）：再試一次。 `[calm]` 四是跳舞的票數。 `[hint]`
  - EN：Try again. `[calm]` 4 is the number of votes for dancing. `[hint]`
- 答錯（6）：再試一次。 `[calm]` 六是唱歌的票數。 `[hint]`
  - EN：Try again. `[calm]` 6 is the number of votes for singing. `[hint]`
- 答錯（10）：再試一次。 `[calm]` 十是把兩種加起來。多幾票要用減的。 `[hint]`
  - EN：Try again. `[calm]` 10 adds them together. To find how many more, subtract. `[hint]`
- 提示：唱歌六票，跳舞四票， `[hint]` 從四數到六多了幾？ `[hint]`
  - EN：Singing 6, dancing 4. `[hint]` Count up from 4 to 6. `[hint]`
- 祝賀：答對了！ `[excited]` 六減四等於二，唱歌多兩票。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 6 minus 4 is 2. Singing got 2 more votes. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：莓果調查的長條圖： `[calm]` 喜歡藍莓的比喜歡黑莓的多幾人？ `[question]`
  - EN：A bar graph of favourite berries: `[calm]` how many more children chose blueberries than blackberries? `[question]`
- 答錯（3）：再試一次。 `[calm]` 八減二不是三。從二往上數到八看看。 `[hint]`
  - EN：Try again. `[calm]` 8 minus 2 isn’t 3. Count up from 2 to 8. `[hint]`
- 答錯（8）：再試一次。 `[calm]` 八是喜歡藍莓的人數。 `[hint]`
  - EN：Try again. `[calm]` 8 is how many chose blueberries. `[hint]`
- 答錯（10）：再試一次。 `[calm]` 十是把兩種加起來。多幾人要用減的。 `[hint]`
  - EN：Try again. `[calm]` 10 adds them together. To find how many more, subtract. `[hint]`
- 提示：藍莓八人，黑莓兩人， `[hint]` 從二往上數到八。 `[hint]`
  - EN：Blueberries 8, blackberries 2. `[hint]` Count up from 2 to 8. `[hint]`
- 祝賀：答對了！ `[excited]` 八減二等於六，喜歡藍莓的多六人。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` 8 minus 2 is 6. Six more chose blueberries. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：如果跳舞再多四票， `[calm]` 哪一種會變成最多？ `[question]`
  - EN：If dancing got 4 more votes, `[calm]` which act would have the most? `[question]`
- 答錯（drum）：再試一次。 `[calm]` 打鼓還是七票，跳舞變成四加四等於八票。 `[hint]`
  - EN：Try again. `[calm]` Drums still have 7. Dancing becomes 4 plus 4, which is 8. `[hint]`
- 答錯（sing）：再試一次。 `[calm]` 唱歌只有六票。 `[hint]`
  - EN：Try again. `[calm]` Singing has only 6 votes. `[hint]`
- 答錯（same）：再試一次。 `[calm]` 八票和七票不一樣多。 `[hint]`
  - EN：Try again. `[calm]` 8 votes and 7 votes aren’t the same. `[hint]`
- 提示：先算跳舞變成幾票：四加四， `[hint]` 再和打鼓的七票比一比。 `[hint]`
  - EN：First work out dancing: 4 plus 4. `[hint]` Then compare it with drums’ 7. `[hint]`
- 祝賀：答對了！ `[excited]` 跳舞變成八票，比打鼓的七票多，變成最多。 `[calm]` 第八集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` Dancing would have 8 votes, more than drums’ 7, so it would be the most. `[calm]` Episode 8 complete. You have all 3 stars! `[excited]`

### 第 9 集　豆子成倍 / Magic Beans

**小豆的話（e9pip）**
- 一樣多的一組一組， `[calm]`
- 可以跳著數！ `[excited]`
- When the groups are equal, `[calm]`
- skip count! `[excited]`

**第 1 題**
- 題目：四層藤蔓，每層五個豆莢， `[calm]` 一共幾個？ `[question]`
  - EN：4 rows of vines with 5 pods on each. `[calm]` How many pods in all? `[question]`
- 答錯（9）：再試一次。 `[calm]` 四加五是九。可是有四層，每層都有五個。 `[hint]`
  - EN：Try again. `[calm]` 4 plus 5 is 9. But there are 4 rows, each with 5. `[hint]`
- 答錯（25）：再試一次。 `[calm]` 二十五是五層，這裡只有四層。 `[hint]`
  - EN：Try again. `[calm]` 25 would be 5 rows. There are only 4. `[hint]`
- 答錯（45）：再試一次。 `[calm]` 不是把四和五接在一起寫。 `[hint]`
  - EN：Try again. `[calm]` Don’t just write 4 and 5 side by side. `[hint]`
- 提示：五個五個跳著數： `[hint]` 五、十、十五，再一層。 `[hint]`
  - EN：Skip count in fives: `[hint]` 5, 10, 15, and one more row. `[hint]`
- 祝賀：答對了！ `[excited]` 五加五加五加五等於二十，也就是四乘五。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` 5 plus 5 plus 5 plus 5 is 20. That’s 4 times 5. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：賽跑的路有七段，每段插兩面旗子， `[calm]` 一共幾面？ `[question]`
  - EN：The race track has 7 parts with 2 flags on each. `[calm]` How many flags? `[question]`
- 答錯（9）：再試一次。 `[calm]` 二加七是九。可是有七段，每段都有兩面。 `[hint]`
  - EN：Try again. `[calm]` 2 plus 7 is 9. But there are 7 parts, each with 2. `[hint]`
- 答錯（12）：再試一次。 `[calm]` 十二是六段，這裡有七段。 `[hint]`
  - EN：Try again. `[calm]` 12 would be 6 parts. There are 7. `[hint]`
- 答錯（27）：再試一次。 `[calm]` 不是把二和七接在一起寫。 `[hint]`
  - EN：Try again. `[calm]` Don’t just write 2 and 7 side by side. `[hint]`
- 提示：兩個兩個數： `[hint]` 二、四、六、八……數七次。 `[hint]`
  - EN：Count in twos: `[hint]` 2, 4, 6, 8, and so on, 7 times. `[hint]`
- 祝賀：答對了！ `[excited]` 七個二是十四，也就是七乘二。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 7 twos make 14. That’s 7 times 2. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：三乘五， `[calm]` 等於多少？ `[question]`
  - EN：3 times 5 — `[calm]` what does it make? `[question]`
- 答錯（8）：再試一次。 `[calm]` 三加五是八。三乘五是三個五。 `[hint]`
  - EN：Try again. `[calm]` 3 plus 5 is 8. 3 times 5 means 3 fives. `[hint]`
- 答錯（10）：再試一次。 `[calm]` 十是兩個五，這裡是三個五。 `[hint]`
  - EN：Try again. `[calm]` 10 is 2 fives. This is 3 fives. `[hint]`
- 答錯（35）：再試一次。 `[calm]` 不是把三和五接在一起寫。 `[hint]`
  - EN：Try again. `[calm]` Don’t just write 3 and 5 side by side. `[hint]`
- 提示：三乘五就是三個五： `[hint]` 五加五加五。 `[hint]`
  - EN：3 times 5 means 3 fives: `[hint]` 5 plus 5 plus 5. `[hint]`
- 祝賀：答對了！ `[excited]` 五加五加五等於十五，所以三乘五等於十五。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` 5 plus 5 plus 5 is 15, so 3 times 5 is 15. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：一共二十個豆莢，每層五個， `[calm]` 有幾層？ `[question]`
  - EN：There are 20 pods with 5 on each row. `[calm]` How many rows? `[question]`
- 答錯（15）：再試一次。 `[calm]` 十五是二十減五，只拿走了一層。 `[hint]`
  - EN：Try again. `[calm]` 15 is 20 minus 5. That takes away only one row. `[hint]`
- 答錯（25）：再試一次。 `[calm]` 二十五是二十加五。 `[hint]`
  - EN：Try again. `[calm]` 25 is 20 plus 5. `[hint]`
- 答錯（100）：再試一次。 `[calm]` 一百是二十乘五。我們要找幾個五合起來是二十。 `[hint]`
  - EN：Try again. `[calm]` 100 is 20 times 5. We want how many fives make 20. `[hint]`
- 提示：五個五個數到二十， `[hint]` 數一數數了幾次。 `[hint]`
  - EN：Count in fives up to 20, `[hint]` and count how many fives. `[hint]`
- 祝賀：答對了！ `[excited]` 五、十、十五、二十，數了四次，有四層。 `[calm]` 第九集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` 5, 10, 15, 20: that’s 4 fives, so 4 rows. `[calm]` Episode 9 complete. You have all 3 stars! `[excited]`

### 第 10 集　豐收宴 / Harvest Feast

**小豆的話（e10pip）**
- 一個一個輪流分， `[calm]`
- 分不完的就是剩下的！ `[excited]`
- Share one at a time, `[calm]`
- and what’s left over is the remainder! `[excited]`

**第 1 題**
- 題目：二十個蘋果平分給四位朋友， `[calm]` 每人幾個？ `[question]`
  - EN：Share 20 apples fairly between 4 friends. `[calm]` How many each? `[question]`
- 答錯（4）：再試一次。 `[calm]` 四是朋友的人數。每人四個只用了十六個。 `[hint]`
  - EN：Try again. `[calm]` 4 is the number of friends. 4 each uses only 16. `[hint]`
- 答錯（16）：再試一次。 `[calm]` 十六是二十減四。平分要一輪一輪分。 `[hint]`
  - EN：Try again. `[calm]` 16 is 20 minus 4. To share, go round one at a time. `[hint]`
- 答錯（24）：再試一次。 `[calm]` 二十四是二十加四，平分不會變多。 `[hint]`
  - EN：Try again. `[calm]` 24 is 20 plus 4. Sharing doesn’t make more. `[hint]`
- 提示：四個四個往上數到二十： `[hint]` 四、八、十二……數了幾次？ `[hint]`
  - EN：Count in fours up to 20: `[hint]` 4, 8, 12, and so on. How many fours? `[hint]`
- 祝賀：答對了！ `[excited]` 二十分給四人，每人五個，因為四乘五等於二十。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` 20 shared by 4 is 5 each, because 4 times 5 is 20. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：二十三個麵包平分給五人， `[calm]` 每人幾個？剩幾個？ `[question]`
  - EN：Share 23 bread rolls between 5 people. `[calm]` How many each, and how many left over? `[question]`
- 答錯（5r2）：再試一次。 `[calm]` 每人五個要二十五個，可是只有二十三個。 `[hint]`
  - EN：Try again. `[calm]` 5 each needs 25 rolls, but there are only 23. `[hint]`
- 答錯（4r2）：再試一次。 `[calm]` 五人每人四個是二十個，二十三減二十是三，不是二。 `[hint]`
  - EN：Try again. `[calm]` 5 people with 4 each is 20. 23 minus 20 is 3, not 2. `[hint]`
- 答錯（3r8）：再試一次。 `[calm]` 剩下八個，還夠每人再分一個。 `[hint]`
  - EN：Try again. `[calm]` 8 left over is enough to give everyone 1 more. `[hint]`
- 提示：五個五個數：五、十、十五、二十， `[hint]` 還剩幾個不夠再分一輪？ `[hint]`
  - EN：Count in fives: 5, 10, 15, 20. `[hint]` How many are left that can’t go round again? `[hint]`
- 祝賀：答對了！ `[excited]` 每人四個，用了二十個，還剩三個。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 4 each uses 20 rolls, with 3 left over. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：十八顆糖平分給三人， `[calm]` 每人幾顆？ `[question]`
  - EN：Share 18 sweets between 3 children. `[calm]` How many each? `[question]`
- 答錯（5）：再試一次。 `[calm]` 三乘五是十五，不是十八。 `[hint]`
  - EN：Try again. `[calm]` 3 times 5 is 15, not 18. `[hint]`
- 答錯（15）：再試一次。 `[calm]` 十五是十八減三。 `[hint]`
  - EN：Try again. `[calm]` 15 is 18 minus 3. `[hint]`
- 答錯（21）：再試一次。 `[calm]` 二十一是十八加三，平分不會變多。 `[hint]`
  - EN：Try again. `[calm]` 21 is 18 plus 3. Sharing doesn’t make more. `[hint]`
- 提示：三個三個往上數：三、六、九…… `[hint]` 數到十八數了幾次？ `[hint]`
  - EN：Count in threes: 3, 6, 9, and so on. `[hint]` How many threes make 18? `[hint]`
- 祝賀：答對了！ `[excited]` 三乘六等於十八，每人六顆。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` 3 times 6 is 18, so 6 each. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：四人每人分到五個，還剩三個， `[calm]` 原來有幾個？ `[question]`
  - EN：4 people got 5 each and 3 were left over. `[calm]` How many were there to start with? `[question]`
- 答錯（12）：再試一次。 `[calm]` 十二是五加四加三。要算的是四個五，再加三。 `[hint]`
  - EN：Try again. `[calm]` 12 is 5 plus 4 plus 3. We need 4 fives, then add 3. `[hint]`
- 答錯（17）：再試一次。 `[calm]` 十七是二十減三。剩下的要加回去。 `[hint]`
  - EN：Try again. `[calm]` 17 is 20 minus 3. The leftovers must be added back. `[hint]`
- 答錯（20）：再試一次。 `[calm]` 二十是四人分到的，別忘了還剩三個。 `[hint]`
  - EN：Try again. `[calm]` 20 is what the 4 people got. Don’t forget the 3 left over. `[hint]`
- 提示：先算四人一共分到：四個五， `[hint]` 再加上剩下的三個。 `[hint]`
  - EN：First, the 4 people got 4 fives. `[hint]` Then add the 3 left over. `[hint]`
- 祝賀：答對了！ `[excited]` 四乘五是二十，再加三，原來有二十三個。 `[calm]` 第十集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` 4 times 5 is 20, plus 3 makes 23. `[calm]` Episode 10 complete. You have all 3 stars! `[excited]`

### 第 11 集　麵包屑羅盤 / Breadcrumb Compass

**小豆的話（e11pip）**
- 先找到起點， `[calm]`
- 再一格一格走！ `[excited]`
- Find the start first, `[calm]`
- then move one square at a time! `[excited]`

**第 1 題**
- 題目：看地圖， `[calm]` 小豆右邊的那一格是什麼？ `[question]`
  - EN：Look at the map. `[calm]` What is in the square to the right of Pip? `[question]`
- 答錯（stone）：再試一次。 `[calm]` 兔子石在小豆的左邊。 `[hint]`
  - EN：Try again. `[calm]` The rabbit stone is to Pip’s left. `[hint]`
- 答錯（tree）：再試一次。 `[calm]` 大樹在小豆的上面一格。 `[hint]`
  - EN：Try again. `[calm]` The tree is one square above Pip. `[hint]`
- 答錯（flower）：再試一次。 `[calm]` 花叢在小豆的下面一格。 `[hint]`
  - EN：Try again. `[calm]` The flowers are one square below Pip. `[hint]`
- 提示：先找到發光的小豆， `[hint]` 再看緊挨著它、在右邊的那一格。 `[hint]`
  - EN：Find Pip in the glowing square, `[hint]` then look at the square right next to it on the right. `[hint]`
- 祝賀：答對了！ `[excited]` 磨坊在小豆的右邊。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` The mill is to the right of Pip. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：從籃子出發，往上走兩格， `[calm]` 會走到哪裡？ `[question]`
  - EN：Start at the basket and go up 2 squares. `[calm]` Where do you end up? `[question]`
- 答錯（stone）：再試一次。 `[calm]` 往上走一格是兔子石，要走兩格。 `[hint]`
  - EN：Try again. `[calm]` Up 1 square is the rabbit stone. We need 2. `[hint]`
- 答錯（tree）：再試一次。 `[calm]` 大樹在中間那一行，我們是直直往上走。 `[hint]`
  - EN：Try again. `[calm]` The tree is in the middle column. We go straight up. `[hint]`
- 答錯（house）：再試一次。 `[calm]` 小屋在右下角，我們是往上走，不是往右。 `[hint]`
  - EN：Try again. `[calm]` The cottage is at the bottom right. We go up, not right. `[hint]`
- 提示：從籃子開始， `[hint]` 一格一格往上數兩格。 `[hint]`
  - EN：Start at the basket `[hint]` and count up 2 squares, one at a time. `[hint]`
- 祝賀：答對了！ `[excited]` 籃子往上一格是兔子石，再一格是水井。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` Up 1 from the basket is the rabbit stone, and 1 more is the well. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：從籃子出發，照著箭號走， `[calm]` 會走到哪裡？ `[question]`
  - EN：Start at the basket and follow the arrows. `[calm]` Where do you end up? `[question]`
- 答錯（house）：再試一次。 `[calm]` 走完兩個向右的箭號是小屋，別忘了最後還要往上。 `[hint]`
  - EN：Try again. `[calm]` Two arrows right takes you to the cottage. Don’t forget the last arrow up. `[hint]`
- 答錯（cave）：再試一次。 `[calm]` 最後只往上走一格，不是兩格。 `[hint]`
  - EN：Try again. `[calm]` The last arrow goes up only 1 square, not 2. `[hint]`
- 答錯（pip）：再試一次。 `[calm]` 要先往右走兩格，再往上。 `[hint]`
  - EN：Try again. `[calm]` First go right 2 squares, then up. `[hint]`
- 提示：每個箭號走一格： `[hint]` 先往右兩格，再往上一格。 `[hint]`
  - EN：Each arrow is 1 square: `[hint]` right 2, then up 1. `[hint]`
- 祝賀：答對了！ `[excited]` 往右兩格走到小屋，再往上一格就是磨坊。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` Right 2 squares reaches the cottage, then up 1 is the mill. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：小豆想走到水井右邊那一格， `[calm]` 該往哪裡走一格？ `[question]`
  - EN：Pip wants to reach the square to the right of the well. `[calm]` Which way should Pip move one square? `[question]`
- 答錯（down）：再試一次。 `[calm]` 往下會走到花叢，離水井更遠了。 `[hint]`
  - EN：Try again. `[calm]` Down goes to the flowers, further from the well. `[hint]`
- 答錯（left）：再試一次。 `[calm]` 往左會走到兔子石，那是水井的下面一格。 `[hint]`
  - EN：Try again. `[calm]` Left goes to the rabbit stone, which is below the well. `[hint]`
- 答錯（right）：再試一次。 `[calm]` 往右會走到磨坊，離水井更遠了。 `[hint]`
  - EN：Try again. `[calm]` Right goes to the mill, further from the well. `[hint]`
- 提示：水井右邊那一格是大樹， `[hint]` 大樹在小豆的哪一邊？ `[hint]`
  - EN：The square to the right of the well is the tree. `[hint]` Which way is the tree from Pip? `[hint]`
- 祝賀：答對了！ `[excited]` 水井右邊是大樹，大樹就在小豆上面，往上走一格就到了。 `[calm]` 第十一集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` Right of the well is the tree, just above Pip. Move up one square. `[calm]` Episode 11 complete. You have all 3 stars! `[excited]`

### 第 12 集　龍穴百十 / Dragon Cave

**小豆的話（e12pip）**
- 大箱是一百，中袋是十， `[calm]`
- 小金幣是一！ `[excited]`
- A chest is a hundred, a bag is ten, `[calm]`
- and a coin is one! `[excited]`

**第 1 題**
- 題目：龍有兩個大箱、四個中袋、七枚小金幣， `[calm]` 一共幾枚金幣？ `[question]`
  - EN：The dragon has 2 chests, 4 bags and 7 coins. `[calm]` How many coins in all? `[question]`
- 答錯（13）：再試一次。 `[calm]` 二加四加七是十三，可是大箱是一百，中袋是十。 `[hint]`
  - EN：Try again. `[calm]` 2 plus 4 plus 7 is 13, but a chest is 100 and a bag is 10. `[hint]`
- 答錯（274）：再試一次。 `[calm]` 十位和個位對調了。四個中袋是四個十。 `[hint]`
  - EN：Try again. `[calm]` The tens and ones are swapped. 4 bags are 4 tens. `[hint]`
- 答錯（742）：再試一次。 `[calm]` 百位和個位排反了。大箱有兩個，百位是二。 `[hint]`
  - EN：Try again. `[calm]` The hundreds and ones are swapped. There are 2 chests, so 2 hundreds. `[hint]`
- 提示：兩個大箱是兩百，四個中袋是四十， `[hint]` 再加七枚。 `[hint]`
  - EN：2 chests are 200 and 4 bags are 40, `[hint]` then add 7 coins. `[hint]`
- 祝賀：答對了！ `[excited]` 兩百加四十加七等於兩百四十七。 `[calm]` 得到一顆星星。 `[excited]`
  - EN：You did it! `[excited]` 200 plus 40 plus 7 makes 247. `[calm]` You earned 1 star. `[excited]`

**第 2 題**
- 題目：兩百四十七最接近哪一個整十數？ `[question]`
  - EN：Which multiple of ten is 247 closest to? `[question]`
- 答錯（200）：再試一次。 `[calm]` 兩百是整百數，我們要找最接近的整十數。 `[hint]`
  - EN：Try again. `[calm]` 200 is a hundred. We want the nearest ten. `[hint]`
- 答錯（240）：再試一次。 `[calm]` 兩百四十七離兩百四十差七，離兩百五十只差三。 `[hint]`
  - EN：Try again. `[calm]` 247 is 7 away from 240 but only 3 away from 250. `[hint]`
- 答錯（300）：再試一次。 `[calm]` 三百是整百數，而且離兩百四十七比較遠。 `[hint]`
  - EN：Try again. `[calm]` 300 is a hundred, and it is further from 247. `[hint]`
- 提示：兩百四十七在兩百四十和兩百五十中間， `[hint]` 離哪一個比較近？ `[hint]`
  - EN：247 is between 240 and 250. `[hint]` Which one is it nearer to? `[hint]`
- 祝賀：答對了！ `[excited]` 兩百四十七離兩百五十只差三，離兩百四十差七，所以最接近兩百五十。 `[calm]` 得到第二顆星星。 `[excited]`
  - EN：You did it! `[excited]` 247 is 3 from 250 and 7 from 240, so it is closest to 250. `[calm]` You earned your 2nd star. `[excited]`

**第 3 題**
- 題目：圖書館有五百加八十加零本書， `[calm]` 一共幾本？ `[question]`
  - EN：The library has 500 plus 80 plus 0 books. `[calm]` How many books? `[question]`
- 答錯（58）：再試一次。 `[calm]` 五百是五個百，不是五個十。 `[hint]`
  - EN：Try again. `[calm]` 500 is 5 hundreds, not 5 tens. `[hint]`
- 答錯（508）：再試一次。 `[calm]` 八十是八個十，八要寫在十位。 `[hint]`
  - EN：Try again. `[calm]` 80 is 8 tens, so 8 goes in the tens place. `[hint]`
- 答錯（5080）：再試一次。 `[calm]` 五百加八十是三位數，不是四位數。 `[hint]`
  - EN：Try again. `[calm]` 500 plus 80 has 3 digits, not 4. `[hint]`
- 提示：百位是五，十位是八， `[hint]` 個位是零，別忘了寫零。 `[hint]`
  - EN：5 in the hundreds, 8 in the tens, `[hint]` and 0 in the ones. Don’t forget the 0. `[hint]`
- 祝賀：答對了！ `[excited]` 五百加八十加零等於五百八十。 `[calm]` 得到第三顆星星。 `[excited]`
  - EN：You did it! `[excited]` 500 plus 80 plus 0 makes 580. `[calm]` You earned your 3rd star. `[excited]`

**第 4 題**
- 題目：三個大箱、零個中袋、六枚小金幣， `[calm]` 一共幾枚？ `[question]`
  - EN：3 chests, 0 bags and 6 coins. `[calm]` How many coins? `[question]`
- 答錯（36）：再試一次。 `[calm]` 三個大箱是三百。中袋是空的，十位要寫零佔位。 `[hint]`
  - EN：Try again. `[calm]` 3 chests are 300. There are no bags, so write 0 in the tens place. `[hint]`
- 答錯（360）：再試一次。 `[calm]` 六是六個一，要寫在個位。 `[hint]`
  - EN：Try again. `[calm]` 6 is 6 ones, so it goes in the ones place. `[hint]`
- 答錯（3006）：再試一次。 `[calm]` 三百加六是三位數，不是四位數。 `[hint]`
  - EN：Try again. `[calm]` 300 plus 6 has 3 digits, not 4. `[hint]`
- 提示：中袋是空的，十位就寫零， `[hint]` 三百加六是多少？ `[hint]`
  - EN：No bags means 0 in the tens place. `[hint]` What is 300 plus 6? `[hint]`
- 祝賀：答對了！ `[excited]` 三百加零加六等於三百零六，十位的零表示中袋是空的。 `[calm]` 第十二集完成，三顆星都拿到了！ `[excited]`
  - EN：You did it! `[excited]` 300 plus 0 plus 6 makes 306. The 0 shows there are no bags. `[calm]` Episode 12 complete. You have all 3 stars! `[excited]`
