/* 小豆的童話數學 · 第 2–12 集題目資料
   依 curriculum-story.md：每集 4 題＝主體題 → 換情境／換數字 → 換表示法 → 反過來問。
   每題 4 個選項；每個錯誤選項都有自己的回饋。第 1 集的資料在 app.js（沿用原本台詞）。
   顯示文字用阿拉伯數字；中文語音會自動把數字轉成國字（2 個 → 兩個）。 */
(function (global) {
  /* 選項：字串＝數字；物件＝文字（可帶小圖示） */
  const C = (v, zh, en, icon) => ({ v, zh, en, icon });

  const EPISODES = {
    2: {
      zh: "三間小房子", en: "Three Houses",
      sub: "形狀與立體 · 2D shapes and 3D objects",
      pip: { zh: ["看看邊是直的還是彎的，", "再想想它會不會滾！"], en: ["Look for straight or curved sides, ", "then think: will it roll?"] },
      qs: [
        { type: ["形狀題", "Shapes"],
          zh: ["三兄妹要疊牆，", "哪一個是箱子形，可以穩穩疊起來？"], en: ["The three siblings are building a wall. ", "Which one is box-shaped and stacks well?"],
          vis: { t: "wall" },
          choices: [C("box", "箱子", "Box", "box"), C("ball", "球", "Ball", "ball"), C("cyl", "圓柱", "Cylinder", "cyl"), C("cone", "圓錐", "Cone", "cone")], answer: "box",
          errs: { ball: ["球會滾，疊不穩。", "A ball rolls, so it won’t stack."],
                  cyl: ["圓柱有彎彎的面，放倒會滾。", "A cylinder has a curved side, so it can roll."],
                  cone: ["圓錐有尖尖的頂，上面疊不了東西。", "A cone has a point on top, so nothing stacks on it."] },
          hint: { zh: ["找一個每一面都是平平的，", "沒有彎彎的面。"], en: ["Find one where every face is flat, ", "with no curved faces."] },
          win: ["箱子每一面都是平的，可以穩穩疊起來。", "Every face of a box is flat, so boxes stack well."] },
        { type: ["換情境", "New story"],
          zh: ["麵包房裡，", "哪一個可以滾，也可以滑？"], en: ["In the bakery, ", "which one can roll and also slide?"],
          vis: null,
          choices: [C("ball", "球", "Ball", "ball"), C("cyl", "圓柱", "Cylinder", "cyl"), C("box", "箱子", "Box", "box"), C("pyr", "三角錐", "Pyramid", "pyr")], answer: "cyl",
          errs: { ball: ["球只會滾，沒有平平的面可以滑。", "A ball only rolls. It has no flat face to slide on."],
                  box: ["箱子都是平面，只會滑，不會滾。", "A box has only flat faces. It slides but won’t roll."],
                  pyr: ["三角錐都是平面和尖角，只會滑，不會滾。", "A pyramid has only flat faces and corners. It slides but won’t roll."] },
          hint: { zh: ["要有彎彎的面才能滾，", "也要有平平的面才能滑。"], en: ["It needs a curved face to roll, ", "and a flat face to slide."] },
          win: ["圓柱有彎彎的面可以滾，兩頭是平的可以滑。", "A cylinder rolls on its curved side and slides on its flat ends."] },
        { type: ["換表示法", "Flat shape"],
          zh: ["屋頂上這扇窗戶，", "是什麼形狀？"], en: ["This window in the roof — ", "what shape is it?"],
          vis: { t: "shape", s: "triangle" },
          choices: [C("sq", "正方形", "Square", "square"), C("tri", "三角形", "Triangle", "triangle"), C("cir", "圓形", "Circle", "circle"), C("rect", "長方形", "Rectangle", "rect")], answer: "tri",
          errs: { sq: ["正方形有 4 條邊，這扇窗只有 3 條邊。", "A square has 4 sides. This window has only 3."],
                  cir: ["圓形沒有直直的邊，這扇窗的邊是直的。", "A circle has no straight sides. This window’s sides are straight."],
                  rect: ["長方形有 4 條邊，這扇窗只有 3 條邊。", "A rectangle has 4 sides. This window has only 3."] },
          hint: { zh: ["數一數有幾條直直的邊，", "再想想哪個形狀有這麼多條邊。"], en: ["Count the straight sides, ", "then think which shape has that many."] },
          win: ["三角形有 3 條直直的邊和 3 個角。", "A triangle has 3 straight sides and 3 corners."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["這個東西會滾，", "沒有尖角，也沒有平平的面。", "它是什麼？"], en: ["It rolls, ", "it has no corners and no flat faces. ", "What is it?"],
          vis: null,
          choices: [C("cyl", "圓柱", "Cylinder", "cyl"), C("cone", "圓錐", "Cone", "cone"), C("ball", "球", "Ball", "ball"), C("box", "箱子", "Box", "box")], answer: "ball",
          errs: { cyl: ["圓柱兩頭有平平的面。", "A cylinder has flat faces at both ends."],
                  cone: ["圓錐有一個尖尖的頂，底下也是平的。", "A cone has a point, and its bottom is flat."],
                  box: ["箱子不會滾，而且有很多尖角。", "A box won’t roll, and it has lots of corners."] },
          hint: { zh: ["沒有平面，也沒有尖角，", "整個都是彎彎的。"], en: ["No flat faces and no corners: ", "it is curved all over."] },
          win: ["球整個都是彎彎的面，所以到處都能滾。", "A ball is curved all over, so it rolls any way."] }
      ]
    },

    3: {
      zh: "豆莖市集", en: "Beanstalk Market",
      sub: "加減到 99 與錢幣 · Add, subtract and money",
      pip: { zh: ["先把價錢加起來，", "再算要找多少錢！"], en: ["Add the prices first, ", "then work out the change!"] },
      qs: [
        { type: ["加法題", "Adding"],
          zh: ["麵包 12 蘭特，豆子 20 蘭特，", "兩樣一共多少蘭特？"], en: ["Bread costs 12 rand and beans cost 20 rand. ", "How much for both?"],
          vis: { t: "tags", items: [["麵包", "Bread", "R12"], ["豆子", "Beans", "R20"]] },
          choices: ["8", "32", "23", "42"], answer: "32",
          errs: { "8": ["8 是兩個價錢相減，一共要用加的。", "8 is the difference. For the total, add them."],
                  "23": ["23 把十位和個位對調了。", "23 has the tens and ones swapped."],
                  "42": ["多算了一個十。20 是 2 個十，12 是 1 個十，一共 3 個十。", "That’s one ten too many. 20 is 2 tens, 12 is 1 ten: 3 tens in all."] },
          hint: { zh: ["20 加 10 是 30，", "再加 2 是多少？"], en: ["20 plus 10 is 30, ", "then add 2."] },
          win: ["20 加 12 等於 32，一共 32 蘭特。", "20 plus 12 makes 32. That’s 32 rand."] },
        { type: ["換情境", "New story"],
          zh: ["糖果屋裡，棒棒糖 15 蘭特，餅乾 24 蘭特，", "一共多少蘭特？"], en: ["At the candy cottage, a lollipop is 15 rand and a biscuit is 24 rand. ", "How much altogether?"],
          vis: { t: "tags", items: [["棒棒糖", "Lollipop", "R15"], ["餅乾", "Biscuit", "R24"]] },
          choices: ["39", "9", "93", "49"], answer: "39",
          errs: { "9": ["9 是兩個價錢相減，一共要用加的。", "9 is the difference. For the total, add them."],
                  "93": ["93 把十位和個位對調了。", "93 has the tens and ones swapped."],
                  "49": ["多算了一個十。15 是 1 個十，24 是 2 個十，一共 3 個十。", "That’s one ten too many. 15 is 1 ten, 24 is 2 tens: 3 tens in all."] },
          hint: { zh: ["先加十：10 加 20 是 30，", "再加一：5 加 4 是 9。"], en: ["Add the tens: 10 plus 20 is 30, ", "then the ones: 5 plus 4 is 9."] },
          win: ["15 加 24 等於 39，一共 39 蘭特。", "15 plus 24 makes 39. That’s 39 rand."] },
        { type: ["換表示法", "Coins and notes"],
          zh: ["數一數這些錢，", "一共多少蘭特？"], en: ["Count this money. ", "How many rand altogether?"],
          vis: { t: "money", items: ["10n", "10n", "5", "2"] },
          choices: ["4", "17", "27", "25"], answer: "27",
          errs: { "4": ["4 是錢的張數和枚數，要算的是一共多少蘭特。", "4 is how many notes and coins. We want how many rand."],
                  "17": ["有兩張 10 蘭特紙鈔，是 20，不是 10。", "There are two 10-rand notes. That’s 20, not 10."],
                  "25": ["別忘了還有一枚 2 蘭特硬幣。", "Don’t forget the 2-rand coin."] },
          hint: { zh: ["先數紙鈔：10、20，", "再加 5，再加 2。"], en: ["Count the notes first: 10, 20, ", "then add 5, then add 2."] },
          win: ["10 加 10 加 5 加 2，一共 27 蘭特。", "10 plus 10 plus 5 plus 2 makes 27 rand."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["傑克付了 50 蘭特，拿到 8 蘭特找零。", "東西賣多少蘭特？"], en: ["Jack paid 50 rand and got 8 rand change. ", "How much did it cost?"],
          vis: { t: "tags", items: [["付了", "Paid", "R50"], ["找回", "Change", "R8"], ["價錢", "Price", "?"]] },
          choices: ["58", "42", "48", "32"], answer: "42",
          errs: { "58": ["58 是把 50 和 8 加起來。東西比付的錢少，要用減的。", "58 adds 50 and 8. The price is less than what he paid, so subtract."],
                  "48": ["48 加 8 是 56，不是 50。", "48 plus 8 is 56, not 50."],
                  "32": ["32 加 8 是 40，不是 50。", "32 plus 8 is 40, not 50."] },
          hint: { zh: ["價錢加上找回的 8 蘭特，", "要剛好是 50 蘭特。"], en: ["The price plus the 8 rand change ", "must make exactly 50 rand."] },
          win: ["50 減 8 等於 42，東西賣 42 蘭特。", "50 minus 8 is 42. It cost 42 rand."] }
      ]
    },

    4: {
      zh: "規律小徑", en: "Pattern Path",
      sub: "規律 · Patterns",
      pip: { zh: ["看看每一步怎麼變，", "再接下去！"], en: ["See how each step changes, ", "then keep going!"] },
      qs: [
        { type: ["數字規律", "Number pattern"],
          zh: ["路標上寫著 5、10、15、20，", "下一個是多少？"], en: ["The signs say 5, 10, 15, 20. ", "What comes next?"],
          vis: { t: "seq", items: ["5", "10", "15", "20", "?"] },
          choices: ["21", "25", "30", "40"], answer: "25",
          errs: { "21": ["這個規律每次加 5，不是加 1。", "This pattern adds 5 each time, not 1."],
                  "30": ["20 後面先是 25，30 是再下一個。", "After 20 comes 25. 30 is the one after that."],
                  "40": ["40 是把 20 加倍。這個規律每次加 5。", "40 doubles 20. This pattern adds 5 each time."] },
          hint: { zh: ["5 到 10 加了 5，", "10 到 15 也加了 5。"], en: ["5 to 10 adds 5, ", "and 10 to 15 adds 5 too."] },
          win: ["每次加 5：5、10、15、20、25。", "Add 5 each time: 5, 10, 15, 20, 25."] },
        { type: ["換數字", "New numbers"],
          zh: ["麵包屑每 3 顆一個記號：3、6、9、12，", "下一個是多少？"], en: ["The breadcrumbs go up by 3: 3, 6, 9, 12. ", "What comes next?"],
          vis: { t: "seq", items: ["3", "6", "9", "12", "?"] },
          choices: ["13", "14", "15", "18"], answer: "15",
          errs: { "13": ["這個規律每次加 3，不是加 1。", "This pattern adds 3 each time, not 1."],
                  "14": ["12 加 3 不是 14，再數一次。", "12 plus 3 isn’t 14. Count again."],
                  "18": ["18 是再下一個，12 後面先是 15。", "18 is the one after. After 12 comes 15."] },
          hint: { zh: ["3 到 6 加了 3，", "12 再加 3 是多少？"], en: ["3 to 6 adds 3. ", "What is 12 plus 3?"] },
          win: ["每次加 3：3、6、9、12、15。", "Add 3 each time: 3, 6, 9, 12, 15."] },
        { type: ["圖形規律", "Shape pattern"],
          zh: ["石頭排成圓、方、圓、方、圓，", "下一個是什麼？"], en: ["The stones go circle, square, circle, square, circle. ", "What comes next?"],
          vis: { t: "seq", shapes: true, items: ["circle", "square", "circle", "square", "circle", "?"] },
          choices: [C("cir", "圓形", "Circle", "circle"), C("sq", "正方形", "Square", "square"), C("tri", "三角形", "Triangle", "triangle"), C("star", "星形", "Star", "star")], answer: "sq",
          errs: { cir: ["圓形後面是正方形，它們一個接一個輪流。", "After a circle comes a square. They take turns."],
                  tri: ["這個規律裡沒有三角形。", "There are no triangles in this pattern."],
                  star: ["這個規律裡沒有星形。", "There are no stars in this pattern."] },
          hint: { zh: ["圓、方、圓、方，", "它們輪流出現。"], en: ["Circle, square, circle, square: ", "they take turns."] },
          win: ["圓和方輪流出現，圓形後面是正方形。", "Circles and squares take turns, so a square comes next."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["4、8、12、16，", "這個規律每次加幾？"], en: ["4, 8, 12, 16. ", "How much is added each time?"],
          vis: { t: "seq", items: ["4", "8", "12", "16"] },
          choices: ["2", "4", "8", "16"], answer: "4",
          errs: { "2": ["4 加 2 是 6，不是 8。", "4 plus 2 is 6, not 8."],
                  "8": ["4 加 8 是 12，不是 8。", "4 plus 8 is 12, not 8."],
                  "16": ["16 是最後一個數，不是每次加的數。", "16 is the last number, not the amount added."] },
          hint: { zh: ["看看 4 到 8 多了多少，", "8 到 12 又多了多少。"], en: ["How much more is 8 than 4? ", "And 12 than 8?"] },
          win: ["每次加 4：4、8、12、16，下一個是 20。", "Add 4 each time: 4, 8, 12, 16, and next is 20."] }
      ]
    },

    5: {
      zh: "糖果屋", en: "Candy Cottage",
      sub: "平分與分數 · Sharing and fractions",
      pip: { zh: ["平分就是每個人一樣多，", "誰也不能多拿！"], en: ["Sharing fairly means everyone gets the same, ", "no one gets more!"] },
      qs: [
        { type: ["平分題", "Sharing"],
          zh: ["12 塊餅乾平分給 4 個朋友，", "每人幾塊？"], en: ["Share 12 biscuits fairly between 4 friends. ", "How many each?"],
          vis: { t: "dots", groups: [12], kind: "cookie" },
          choices: ["4", "3", "8", "16"], answer: "3",
          errs: { "4": ["4 是朋友的人數。每人 4 塊要 16 塊。", "4 is the number of friends. 4 each would need 16."],
                  "8": ["8 是 12 減 4。平分要一人一塊輪流分。", "8 is 12 minus 4. To share, give one each in turns."],
                  "16": ["16 是 12 加 4，平分不會變多。", "16 is 12 plus 4. Sharing doesn’t make more."] },
          hint: { zh: ["一人一塊輪流分，", "看看每人分到幾輪。"], en: ["Give one each, in turns, ", "and count how many rounds."] },
          win: ["12 塊分給 4 人，每人 3 塊；3 加 3 加 3 加 3 是 12。", "12 shared by 4 is 3 each, because 3 plus 3 plus 3 plus 3 is 12."] },
        { type: ["換情境", "New story"],
          zh: ["豐收宴的派切成 4 塊一樣大，", "塗色的這一塊叫什麼？"], en: ["The feast pie is cut into 4 equal pieces. ", "What do we call the coloured piece?"],
          vis: { t: "pie", parts: 4, shaded: 1 },
          choices: [C("half", "一半", "One half"), C("quarter", "四分之一", "One quarter"), C("third", "三分之一", "One third"), C("four", "四塊", "Four pieces")], answer: "quarter",
          errs: { half: ["一半是切成 2 塊一樣大。這個派切成 4 塊。", "A half means 2 equal pieces. This pie has 4."],
                  third: ["三分之一是切成 3 塊一樣大。這個派切成 4 塊。", "A third means 3 equal pieces. This pie has 4."],
                  four: ["整個派有 4 塊，塗色的只有其中一塊。", "The whole pie has 4 pieces. Only one is coloured."] },
          hint: { zh: ["數一數一共切成幾塊一樣大，", "塗色的是其中一塊。"], en: ["Count how many equal pieces there are. ", "The coloured part is one of them."] },
          win: ["切成 4 塊一樣大，其中一塊就是四分之一。", "4 equal pieces, so one piece is one quarter."] },
        { type: ["換表示法", "Pictures"],
          zh: ["哪一張圖，", "塗了剛好一半？"], en: ["Which picture ", "shows exactly one half coloured?"],
          vis: null,
          choices: [C("h", "", "", "frac:2:1"), C("u", "", "", "frac:2u:1"), C("t", "", "", "frac:3:1"), C("q", "", "", "frac:4:1")], answer: "h",
          labels: { h: ["分成 2 塊一樣大，塗 1 塊", "2 equal parts, 1 coloured"], u: ["分成 2 塊不一樣大，塗 1 塊", "2 unequal parts, 1 coloured"], t: ["分成 3 塊一樣大，塗 1 塊", "3 equal parts, 1 coloured"], q: ["分成 4 塊一樣大，塗 1 塊", "4 equal parts, 1 coloured"] },
          errs: { u: ["這兩塊不一樣大，不是一半。一半要分成兩塊一樣大。", "These 2 parts aren’t equal, so it isn’t a half."],
                  t: ["分成 3 塊一樣大，塗 1 塊是三分之一。", "3 equal parts with 1 coloured is one third."],
                  q: ["分成 4 塊一樣大，塗 1 塊是四分之一。", "4 equal parts with 1 coloured is one quarter."] },
          hint: { zh: ["一半要分成 2 塊，", "而且 2 塊要一樣大。"], en: ["A half needs 2 parts, ", "and the 2 parts must be the same size."] },
          win: ["分成 2 塊一樣大，塗 1 塊就是一半。", "2 equal parts with 1 coloured is one half."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["4 個朋友每人分到 3 塊，", "原來一共幾塊？"], en: ["4 friends got 3 biscuits each. ", "How many were there to start with?"],
          vis: { t: "dots", groups: [3, 3, 3, 3], kind: "cookie" },
          choices: ["7", "9", "12", "34"], answer: "12",
          errs: { "7": ["3 加 4 是 7。可是 4 個人每人都有 3 塊，要加 4 次 3。", "3 plus 4 is 7. But each of the 4 friends has 3, so add 3 four times."],
                  "9": ["3 加 3 加 3 是 9，那只有 3 個人。", "3 plus 3 plus 3 is 9. That’s only 3 friends."],
                  "34": ["不是把 3 和 4 接在一起寫。", "Don’t just write 3 and 4 side by side."] },
          hint: { zh: ["4 個人，每人 3 塊：", "3、6、9，再數下去。"], en: ["4 friends, 3 each: ", "3, 6, 9, and keep going."] },
          win: ["3 加 3 加 3 加 3 等於 12，原來一共 12 塊。", "3 plus 3 plus 3 plus 3 makes 12. There were 12."] }
      ]
    },

    6: {
      zh: "小鴨長大", en: "Ugly Duckling",
      sub: "長度、容量 · Length and capacity",
      pip: { zh: ["比長短要從同一條線開始，", "再看看誰伸得最遠！"], en: ["Line things up at the same start, ", "then see which goes furthest!"] },
      qs: [
        { type: ["比長短", "Longest"],
          zh: ["小鴨撿到三根羽毛，", "哪一根最長？"], en: ["The duckling found three feathers. ", "Which is the longest?"],
          vis: { t: "bars", items: [["灰色", "Grey", 7, "#8a8f8c"], ["白色", "White", 4, "#f4efe4"], ["黃色", "Yellow", 5, "#e8c35a"]] },
          choices: [C("grey", "灰色", "Grey"), C("white", "白色", "White"), C("yellow", "黃色", "Yellow"), C("same", "一樣長", "All the same")], answer: "grey",
          errs: { white: ["白色羽毛最短。", "The white feather is the shortest."],
                  yellow: ["黃色羽毛比灰色短。", "The yellow feather is shorter than the grey one."],
                  same: ["它們從同一條線開始，可是結尾不一樣。", "They start at the same line but end in different places."] },
          hint: { zh: ["它們都從左邊同一條線開始，", "看看誰伸得最遠。"], en: ["They all start at the same line on the left. ", "Which one reaches furthest?"] },
          win: ["灰色羽毛伸得最遠，所以最長。", "The grey feather reaches furthest, so it is the longest."] },
        { type: ["換情境", "New story"],
          zh: ["豆莖有 9 片葉子那麼高，小樹有 6 片葉子那麼高。", "豆莖比小樹高幾片葉子？"], en: ["The beanstalk is 9 leaves tall and the little tree is 6 leaves tall. ", "How many leaves taller is the beanstalk?"],
          vis: { t: "bars", unit: "片", items: [["豆莖", "Beanstalk", 9, "#3e6b4f"], ["小樹", "Little tree", 6, "#7fa36b"]] },
          choices: ["15", "3", "9", "6"], answer: "3",
          errs: { "15": ["15 是把兩個高度加起來。比高多少要用減的。", "15 adds the two heights. To compare, subtract."],
                  "9": ["9 是豆莖的高度。要比的是多出多少。", "9 is the beanstalk’s height. We want how much taller."],
                  "6": ["6 是小樹的高度。要比的是多出多少。", "6 is the little tree’s height. We want how much taller."] },
          hint: { zh: ["從 6 往上數到 9，", "數一數多了幾片。"], en: ["Count up from 6 to 9. ", "How many more leaves?"] },
          win: ["9 減 6 等於 3，豆莖高 3 片葉子。", "9 minus 6 is 3. The beanstalk is 3 leaves taller."] },
        { type: ["換表示法", "Bar picture"],
          zh: ["用杯子倒水量一量，", "哪一個裝得最多？"], en: ["We measured with cups of water. ", "Which one holds the most?"],
          vis: { t: "bars", unit: "杯", items: [["水壺", "Jug", 4, "#6fa8c9"], ["瓶子", "Bottle", 2, "#6fa8c9"], ["碗", "Bowl", 3, "#6fa8c9"]] },
          choices: [C("jug", "水壺", "Jug"), C("bottle", "瓶子", "Bottle"), C("bowl", "碗", "Bowl"), C("same", "一樣多", "All the same")], answer: "jug",
          errs: { bottle: ["瓶子只裝 2 杯，是最少的。", "The bottle holds only 2 cups, the least."],
                  bowl: ["碗裝 3 杯，水壺裝 4 杯，水壺比較多。", "The bowl holds 3 cups and the jug holds 4, so the jug holds more."],
                  same: ["它們裝的杯數不一樣。", "They hold different numbers of cups."] },
          hint: { zh: ["數一數每一個裝幾杯，", "杯數最多的就裝得最多。"], en: ["Count the cups for each one. ", "The most cups holds the most."] },
          win: ["水壺可以裝 4 杯，裝得最多。", "The jug holds 4 cups, the most of all."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["倒了 2 杯水，瓶子剛好半滿。", "裝滿要幾杯？"], en: ["2 cups of water fill the bottle exactly half way. ", "How many cups to fill it?"],
          vis: { t: "bottle", fill: 0.5 },
          choices: ["2", "3", "4", "6"], answer: "4",
          errs: { "2": ["2 杯只裝到一半。", "2 cups only fill half of it."],
                  "3": ["一半是 2 杯，另一半也是 2 杯。", "One half is 2 cups, and the other half is 2 cups too."],
                  "6": ["一半是 2 杯，兩個一半是 2 加 2。", "One half is 2 cups. Two halves are 2 plus 2."] },
          hint: { zh: ["半滿是一半，", "兩個一半才是滿的。"], en: ["Half full is one half. ", "Two halves make it full."] },
          win: ["一半是 2 杯，2 加 2 等於 4，裝滿要 4 杯。", "Half is 2 cups, and 2 plus 2 is 4. It takes 4 cups to fill."] }
      ]
    },

    7: {
      zh: "麵包房的鐘", en: "Midnight Bakery",
      sub: "時間 · Time",
      pip: { zh: ["短針指幾點，", "長針指幾分！"], en: ["The short hand shows the hour, ", "the long hand shows the minutes!"] },
      qs: [
        { type: ["看時鐘", "Read the clock"],
          zh: ["麵包房的大鐘，", "現在是幾點？"], en: ["The big bakery clock — ", "what time is it?"],
          vis: { t: "clock", h: 3, m: 30 },
          choices: [C("330", "3 點半", "Half past 3"), C("630", "6 點半", "Half past 6"), C("300", "3 點", "3 o’clock"), C("430", "4 點半", "Half past 4")], answer: "330",
          errs: { "630": ["長針指著 6 是半點，短針才告訴我們幾點。", "The long hand on 6 means half past. The short hand tells the hour."],
                  "300": ["長針指著 6，不是 12，所以不是整點。", "The long hand points to 6, not 12, so it isn’t o’clock."],
                  "430": ["短針剛過 3，還沒到 4。", "The short hand is just past 3, not at 4 yet."] },
          hint: { zh: ["短針在 3 和 4 中間，", "長針指著 6，是半點。"], en: ["The short hand is between 3 and 4. ", "The long hand on 6 means half past."] },
          win: ["短針過了 3，長針指著 6，是 3 點半。", "The short hand is past 3 and the long hand is on 6: half past 3."] },
        { type: ["換情境", "New story"],
          zh: ["兔子 2 點出發，3 點半到家，", "一共過了多久？"], en: ["The hare left at 2 o’clock and came back at half past 3. ", "How long was he gone?"],
          vis: { t: "clocks", list: [[2, 0, "出發", "Left"], [3, 30, "到家", "Home"]] },
          choices: [C("1", "1 小時", "1 hour"), C("15", "1 個半小時", "1 and a half hours"), C("2", "2 小時", "2 hours"), C("05", "半小時", "Half an hour")], answer: "15",
          errs: { "1": ["2 點到 3 點是 1 小時，還要再加 3 點到 3 點半。", "2 to 3 o’clock is 1 hour. Then add 3 to half past 3."],
                  "2": ["2 點到 4 點才是 2 小時。", "2 hours would be 2 o’clock to 4 o’clock."],
                  "05": ["3 點到 3 點半是半小時，前面還有 2 點到 3 點。", "3 to half past 3 is half an hour, but 2 to 3 came first."] },
          hint: { zh: ["2 點到 3 點是 1 小時，", "3 點到 3 點半是半小時。"], en: ["2 to 3 o’clock is 1 hour. ", "3 to half past 3 is half an hour."] },
          win: ["1 小時加半小時，一共 1 個半小時。", "1 hour plus half an hour is 1 and a half hours."] },
        { type: ["換表示法", "Digital clock"],
          zh: ["數位鐘顯示 4 點 15 分，", "也可以怎麼說？"], en: ["The digital clock shows 4:15. ", "How else can we say it?"],
          vis: { t: "digital", text: "4:15" },
          choices: [C("q", "4 點一刻", "Quarter past 4"), C("h", "4 點半", "Half past 4"), C("tq", "4 點三刻", "Quarter to 5"), C("q5", "5 點一刻", "Quarter past 5")], answer: "q",
          errs: { h: ["半點是 30 分，這裡是 15 分。", "Half past is 30 minutes. This is 15 minutes."],
                  tq: ["三刻是 45 分，這裡是 15 分。", "Quarter to 5 is 4:45. This is 15 minutes past."],
                  q5: ["冒號前面是 4，所以是 4 點多，不是 5 點多。", "The number before the colon is 4, so the hour is 4, not 5."] },
          hint: { zh: ["冒號前是幾點，冒號後是幾分，", "15 分就是一刻。"], en: ["Before the colon is the hour, after it the minutes. ", "15 minutes is a quarter."] },
          win: ["4 點 15 分，也叫 4 點一刻。", "4:15 is 15 minutes past 4: quarter past 4."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["再過一刻鐘就是 4 點，", "現在是幾點？"], en: ["In a quarter of an hour it will be 4 o’clock. ", "What time is it now?"],
          vis: { t: "clock", h: 4, m: 0, label: ["一刻鐘後", "In 15 minutes"] },
          choices: [C("415", "4 點 15 分", "4:15"), C("345", "3 點 45 分", "3:45"), C("315", "3 點 15 分", "3:15"), C("330", "3 點半", "Half past 3")], answer: "345",
          errs: { "415": ["那是 4 點再過一刻，我們要往回算。", "That’s a quarter after 4. We need to count back."],
                  "315": ["3 點 15 分再過一刻是 3 點半，不是 4 點。", "A quarter after 3:15 is half past 3, not 4."],
                  "330": ["3 點半再過一刻是 3 點 45 分，還沒到 4 點。", "A quarter after half past 3 is 3:45, not 4 yet."] },
          hint: { zh: ["一刻是 15 分鐘，", "從 4 點往回數 15 分鐘。"], en: ["A quarter of an hour is 15 minutes. ", "Count back 15 minutes from 4 o’clock."] },
          win: ["4 點往回 15 分鐘，是 3 點 45 分。", "15 minutes before 4 o’clock is 3:45."] }
      ]
    },

    8: {
      zh: "樂隊調查", en: "Bremen Band",
      sub: "資料與圖表 · Data handling",
      pip: { zh: ["一個圖案就是一票，", "仔細數一數！"], en: ["Each picture is one vote, ", "so count carefully!"] },
      qs: [
        { type: ["讀圖", "Read the chart"],
          zh: ["樂隊問大家最喜歡哪種表演，", "哪一種最多票？"], en: ["The band asked everyone their favourite act. ", "Which got the most votes?"],
          vis: { t: "picto", items: [["唱歌", "Singing", 6], ["跳舞", "Dancing", 4], ["打鼓", "Drums", 7], ["吹笛", "Flute", 3]] },
          choices: [C("sing", "唱歌", "Singing"), C("dance", "跳舞", "Dancing"), C("drum", "打鼓", "Drums"), C("flute", "吹笛", "Flute")], answer: "drum",
          errs: { sing: ["唱歌有 6 票，打鼓有 7 票，打鼓比較多。", "Singing has 6 votes and drums have 7, so drums have more."],
                  dance: ["跳舞只有 4 票。", "Dancing has only 4 votes."],
                  flute: ["吹笛只有 3 票，是最少的。", "Flute has only 3 votes, the fewest."] },
          hint: { zh: ["數一數每一排有幾個圖案，", "最長的那一排最多。"], en: ["Count the pictures in each row. ", "The longest row has the most."] },
          win: ["打鼓有 7 票，比其他都多。", "Drums have 7 votes, more than any other."] },
        { type: ["換問法", "Compare"],
          zh: ["看同一張圖，", "唱歌比跳舞多幾票？"], en: ["Using the same chart, ", "how many more votes did singing get than dancing?"],
          vis: { t: "picto", items: [["唱歌", "Singing", 6], ["跳舞", "Dancing", 4], ["打鼓", "Drums", 7], ["吹笛", "Flute", 3]] },
          choices: ["10", "6", "2", "4"], answer: "2",
          errs: { "10": ["10 是把兩種加起來。多幾票要用減的。", "10 adds them together. To find how many more, subtract."],
                  "6": ["6 是唱歌的票數。", "6 is the number of votes for singing."],
                  "4": ["4 是跳舞的票數。", "4 is the number of votes for dancing."] },
          hint: { zh: ["唱歌 6 票，跳舞 4 票，", "從 4 數到 6 多了幾？"], en: ["Singing 6, dancing 4. ", "Count up from 4 to 6."] },
          win: ["6 減 4 等於 2，唱歌多 2 票。", "6 minus 4 is 2. Singing got 2 more votes."] },
        { type: ["換表示法", "Bar graph"],
          zh: ["莓果調查的長條圖：", "喜歡藍莓的比喜歡黑莓的多幾人？"], en: ["A bar graph of favourite berries: ", "how many more children chose blueberries than blackberries?"],
          vis: { t: "chart", max: 8, items: [["草莓", "Strawberry", 5, "#c45c38"], ["藍莓", "Blueberry", 8, "#4a6fa5"], ["黑莓", "Blackberry", 2, "#3b2f3f"]] },
          choices: ["10", "8", "3", "6"], answer: "6",
          errs: { "10": ["10 是把兩種加起來。多幾人要用減的。", "10 adds them together. To find how many more, subtract."],
                  "8": ["8 是喜歡藍莓的人數。", "8 is how many chose blueberries."],
                  "3": ["8 減 2 不是 3。從 2 往上數到 8 看看。", "8 minus 2 isn’t 3. Count up from 2 to 8."] },
          hint: { zh: ["藍莓 8 人，黑莓 2 人，", "從 2 往上數到 8。"], en: ["Blueberries 8, blackberries 2. ", "Count up from 2 to 8."] },
          win: ["8 減 2 等於 6，喜歡藍莓的多 6 人。", "8 minus 2 is 6. Six more chose blueberries."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["如果跳舞再多 4 票，", "哪一種會變成最多？"], en: ["If dancing got 4 more votes, ", "which act would have the most?"],
          vis: { t: "picto", items: [["唱歌", "Singing", 6], ["跳舞", "Dancing", 4, 4], ["打鼓", "Drums", 7], ["吹笛", "Flute", 3]] },
          choices: [C("drum", "打鼓", "Drums"), C("dance", "跳舞", "Dancing"), C("sing", "唱歌", "Singing"), C("same", "一樣多", "A tie")], answer: "dance",
          errs: { drum: ["打鼓還是 7 票，跳舞變成 4 加 4 等於 8 票。", "Drums still have 7. Dancing becomes 4 plus 4, which is 8."],
                  sing: ["唱歌只有 6 票。", "Singing has only 6 votes."],
                  same: ["8 票和 7 票不一樣多。", "8 votes and 7 votes aren’t the same."] },
          hint: { zh: ["先算跳舞變成幾票：4 加 4，", "再和打鼓的 7 票比一比。"], en: ["First work out dancing: 4 plus 4. ", "Then compare it with drums’ 7."] },
          win: ["跳舞變成 8 票，比打鼓的 7 票多，變成最多。", "Dancing would have 8 votes, more than drums’ 7, so it would be the most."] }
      ]
    },

    9: {
      zh: "豆子成倍", en: "Magic Beans",
      sub: "乘法 · Multiplication",
      pip: { zh: ["一樣多的一組一組，", "可以跳著數！"], en: ["When the groups are equal, ", "skip count!"] },
      qs: [
        { type: ["乘法題", "Groups"],
          zh: ["4 層藤蔓，每層 5 個豆莢，", "一共幾個？"], en: ["4 rows of vines with 5 pods on each. ", "How many pods in all?"],
          vis: { t: "array", rows: 4, cols: 5, kind: "pod" },
          choices: ["9", "20", "45", "25"], answer: "20",
          errs: { "9": ["4 加 5 是 9。可是有 4 層，每層都有 5 個。", "4 plus 5 is 9. But there are 4 rows, each with 5."],
                  "45": ["不是把 4 和 5 接在一起寫。", "Don’t just write 4 and 5 side by side."],
                  "25": ["25 是 5 層，這裡只有 4 層。", "25 would be 5 rows. There are only 4."] },
          hint: { zh: ["5 個 5 個跳著數：", "5、10、15，再一層。"], en: ["Skip count in fives: ", "5, 10, 15, and one more row."] },
          win: ["5 加 5 加 5 加 5 等於 20，也就是 4 乘 5。", "5 plus 5 plus 5 plus 5 is 20. That’s 4 times 5."] },
        { type: ["換情境", "New story"],
          zh: ["賽跑的路有 7 段，每段插 2 面旗子，", "一共幾面？"], en: ["The race track has 7 parts with 2 flags on each. ", "How many flags?"],
          vis: { t: "dots", groups: [2, 2, 2, 2, 2, 2, 2], kind: "flag" },
          choices: ["9", "27", "12", "14"], answer: "14",
          errs: { "9": ["2 加 7 是 9。可是有 7 段，每段都有 2 面。", "2 plus 7 is 9. But there are 7 parts, each with 2."],
                  "27": ["不是把 2 和 7 接在一起寫。", "Don’t just write 2 and 7 side by side."],
                  "12": ["12 是 6 段，這裡有 7 段。", "12 would be 6 parts. There are 7."] },
          hint: { zh: ["2 個 2 個數：", "2、4、6、8……數 7 次。"], en: ["Count in twos: ", "2, 4, 6, 8, and so on, 7 times."] },
          win: ["7 個 2 是 14，也就是 7 乘 2。", "7 twos make 14. That’s 7 times 2."] },
        { type: ["換表示法", "Number sentence"],
          zh: ["3 乘 5，", "等於多少？"], en: ["3 times 5 — ", "what does it make?"],
          vis: { t: "eq", text: "3 × 5 = ?" },
          choices: ["8", "15", "35", "10"], answer: "15",
          errs: { "8": ["3 加 5 是 8。3 乘 5 是 3 個 5。", "3 plus 5 is 8. 3 times 5 means 3 fives."],
                  "35": ["不是把 3 和 5 接在一起寫。", "Don’t just write 3 and 5 side by side."],
                  "10": ["10 是 2 個 5，這裡是 3 個 5。", "10 is 2 fives. This is 3 fives."] },
          hint: { zh: ["3 乘 5 就是 3 個 5：", "5 加 5 加 5。"], en: ["3 times 5 means 3 fives: ", "5 plus 5 plus 5."] },
          win: ["5 加 5 加 5 等於 15，所以 3 乘 5 等於 15。", "5 plus 5 plus 5 is 15, so 3 times 5 is 15."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["一共 20 個豆莢，每層 5 個，", "有幾層？"], en: ["There are 20 pods with 5 on each row. ", "How many rows?"],
          vis: { t: "eq", text: "? × 5 = 20" },
          choices: ["15", "25", "4", "100"], answer: "4",
          errs: { "15": ["15 是 20 減 5，只拿走了一層。", "15 is 20 minus 5. That takes away only one row."],
                  "25": ["25 是 20 加 5。", "25 is 20 plus 5."],
                  "100": ["100 是 20 乘 5。我們要找幾個 5 合起來是 20。", "100 is 20 times 5. We want how many fives make 20."] },
          hint: { zh: ["5 個 5 個數到 20，", "數一數數了幾次。"], en: ["Count in fives up to 20, ", "and count how many fives."] },
          win: ["5、10、15、20，數了 4 次，有 4 層。", "5, 10, 15, 20: that’s 4 fives, so 4 rows."] }
      ]
    },

    10: {
      zh: "豐收宴", en: "Harvest Feast",
      sub: "除法與餘數 · Sharing and remainders",
      pip: { zh: ["一個一個輪流分，", "分不完的就是剩下的！"], en: ["Share one at a time, ", "and what’s left over is the remainder!"] },
      qs: [
        { type: ["除法題", "Sharing"],
          zh: ["20 個蘋果平分給 4 位朋友，", "每人幾個？"], en: ["Share 20 apples fairly between 4 friends. ", "How many each?"],
          vis: { t: "dots", groups: [20], kind: "apple" },
          choices: ["4", "16", "5", "24"], answer: "5",
          errs: { "4": ["4 是朋友的人數。每人 4 個只用了 16 個。", "4 is the number of friends. 4 each uses only 16."],
                  "16": ["16 是 20 減 4。平分要一輪一輪分。", "16 is 20 minus 4. To share, go round one at a time."],
                  "24": ["24 是 20 加 4，平分不會變多。", "24 is 20 plus 4. Sharing doesn’t make more."] },
          hint: { zh: ["4 個 4 個往上數到 20：", "4、8、12……數了幾次？"], en: ["Count in fours up to 20: ", "4, 8, 12, and so on. How many fours?"] },
          win: ["20 分給 4 人，每人 5 個，因為 4 乘 5 等於 20。", "20 shared by 4 is 5 each, because 4 times 5 is 20."] },
        { type: ["有餘數", "Remainders"],
          zh: ["23 個麵包平分給 5 人，", "每人幾個？剩幾個？"], en: ["Share 23 bread rolls between 5 people. ", "How many each, and how many left over?"],
          vis: { t: "dots", groups: [23], kind: "bread" },
          choices: [C("4r3", "每人 4，剩 3", "4 each, 3 left"), C("5r2", "每人 5，剩 2", "5 each, 2 left"), C("4r2", "每人 4，剩 2", "4 each, 2 left"), C("3r8", "每人 3，剩 8", "3 each, 8 left")], answer: "4r3",
          errs: { "5r2": ["每人 5 個要 25 個，可是只有 23 個。", "5 each needs 25 rolls, but there are only 23."],
                  "4r2": ["5 人每人 4 個是 20 個，23 減 20 是 3，不是 2。", "5 people with 4 each is 20. 23 minus 20 is 3, not 2."],
                  "3r8": ["剩下 8 個，還夠每人再分 1 個。", "8 left over is enough to give everyone 1 more."] },
          hint: { zh: ["5 個 5 個數：5、10、15、20，", "還剩幾個不夠再分一輪？"], en: ["Count in fives: 5, 10, 15, 20. ", "How many are left that can’t go round again?"] },
          win: ["每人 4 個，用了 20 個，還剩 3 個。", "4 each uses 20 rolls, with 3 left over."] },
        { type: ["換表示法", "Number sentence"],
          zh: ["18 顆糖平分給 3 人，", "每人幾顆？"], en: ["Share 18 sweets between 3 children. ", "How many each?"],
          vis: { t: "eq", text: "18 ÷ 3 = ?" },
          choices: ["15", "21", "5", "6"], answer: "6",
          errs: { "15": ["15 是 18 減 3。", "15 is 18 minus 3."],
                  "21": ["21 是 18 加 3，平分不會變多。", "21 is 18 plus 3. Sharing doesn’t make more."],
                  "5": ["3 乘 5 是 15，不是 18。", "3 times 5 is 15, not 18."] },
          hint: { zh: ["3 個 3 個往上數：3、6、9……", "數到 18 數了幾次？"], en: ["Count in threes: 3, 6, 9, and so on. ", "How many threes make 18?"] },
          win: ["3 乘 6 等於 18，每人 6 顆。", "3 times 6 is 18, so 6 each."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["4 人每人分到 5 個，還剩 3 個，", "原來有幾個？"], en: ["4 people got 5 each and 3 were left over. ", "How many were there to start with?"],
          vis: { t: "dots", groups: [5, 5, 5, 5], extra: 3, kind: "apple" },
          choices: ["20", "23", "12", "17"], answer: "23",
          errs: { "20": ["20 是 4 人分到的，別忘了還剩 3 個。", "20 is what the 4 people got. Don’t forget the 3 left over."],
                  "12": ["12 是 5 加 4 加 3。要算的是 4 個 5，再加 3。", "12 is 5 plus 4 plus 3. We need 4 fives, then add 3."],
                  "17": ["17 是 20 減 3。剩下的要加回去。", "17 is 20 minus 3. The leftovers must be added back."] },
          hint: { zh: ["先算 4 人一共分到：4 個 5，", "再加上剩下的 3 個。"], en: ["First, the 4 people got 4 fives. ", "Then add the 3 left over."] },
          win: ["4 乘 5 是 20，再加 3，原來有 23 個。", "4 times 5 is 20, plus 3 makes 23."] }
      ]
    },

    11: {
      zh: "麵包屑羅盤", en: "Breadcrumb Compass",
      sub: "位置與方向 · Position and direction",
      pip: { zh: ["先找到起點，", "再一格一格走！"], en: ["Find the start first, ", "then move one square at a time!"] },
      qs: [
        { type: ["位置", "Position"],
          zh: ["看地圖，", "小豆右邊的那一格是什麼？"], en: ["Look at the map. ", "What is in the square to the right of Pip?"],
          vis: { t: "grid" },
          choices: [C("mill", "磨坊", "Mill"), C("stone", "兔子石", "Rabbit stone"), C("tree", "大樹", "Tree"), C("flower", "花叢", "Flowers")], answer: "mill",
          errs: { stone: ["兔子石在小豆的左邊。", "The rabbit stone is to Pip’s left."],
                  tree: ["大樹在小豆的上面一格。", "The tree is one square above Pip."],
                  flower: ["花叢在小豆的下面一格。", "The flowers are one square below Pip."] },
          hint: { zh: ["先找到發光的小豆，", "再看緊挨著它、在右邊的那一格。"], en: ["Find Pip in the glowing square, ", "then look at the square right next to it on the right."] },
          win: ["磨坊在小豆的右邊。", "The mill is to the right of Pip."] },
        { type: ["換路線", "New route"],
          zh: ["從籃子出發，往上走 2 格，", "會走到哪裡？"], en: ["Start at the basket and go up 2 squares. ", "Where do you end up?"],
          vis: { t: "grid", start: 6 },
          choices: [C("stone", "兔子石", "Rabbit stone"), C("well", "水井", "Well"), C("tree", "大樹", "Tree"), C("house", "小屋", "Cottage")], answer: "well",
          errs: { stone: ["往上走 1 格是兔子石，要走 2 格。", "Up 1 square is the rabbit stone. We need 2."],
                  tree: ["大樹在中間那一行，我們是直直往上走。", "The tree is in the middle column. We go straight up."],
                  house: ["小屋在右下角，我們是往上走，不是往右。", "The cottage is at the bottom right. We go up, not right."] },
          hint: { zh: ["從籃子開始，", "一格一格往上數 2 格。"], en: ["Start at the basket ", "and count up 2 squares, one at a time."] },
          win: ["籃子往上 1 格是兔子石，再 1 格是水井。", "Up 1 from the basket is the rabbit stone, and 1 more is the well."] },
        { type: ["換表示法", "Arrows"],
          zh: ["從籃子出發，照著箭號走，", "會走到哪裡？"], en: ["Start at the basket and follow the arrows. ", "Where do you end up?"],
          vis: { t: "grid", start: 6, arrows: "→ → ↑" },
          choices: [C("house", "小屋", "Cottage"), C("mill", "磨坊", "Mill"), C("cave", "山洞", "Cave"), C("pip", "小豆", "Pip")], answer: "mill",
          errs: { house: ["走完兩個向右的箭號是小屋，別忘了最後還要往上。", "Two arrows right takes you to the cottage. Don’t forget the last arrow up."],
                  cave: ["最後只往上走 1 格，不是 2 格。", "The last arrow goes up only 1 square, not 2."],
                  pip: ["要先往右走 2 格，再往上。", "First go right 2 squares, then up."] },
          hint: { zh: ["每個箭號走 1 格：", "先往右 2 格，再往上 1 格。"], en: ["Each arrow is 1 square: ", "right 2, then up 1."] },
          win: ["往右兩格走到小屋，再往上一格就是磨坊。", "Right 2 squares reaches the cottage, then up 1 is the mill."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["小豆想走到水井右邊那一格，", "該往哪裡走一格？"], en: ["Pip wants to reach the square to the right of the well. ", "Which way should Pip move one square?"],
          vis: { t: "grid" },
          choices: [C("up", "往上 ↑", "Up"), C("down", "往下 ↓", "Down"), C("left", "往左 ←", "Left"), C("right", "往右 →", "Right")], answer: "up",
          errs: { down: ["往下會走到花叢，離水井更遠了。", "Down goes to the flowers, further from the well."],
                  left: ["往左會走到兔子石，那是水井的下面一格。", "Left goes to the rabbit stone, which is below the well."],
                  right: ["往右會走到磨坊，離水井更遠了。", "Right goes to the mill, further from the well."] },
          hint: { zh: ["水井右邊那一格是大樹，", "大樹在小豆的哪一邊？"], en: ["The square to the right of the well is the tree. ", "Which way is the tree from Pip?"] },
          win: ["水井右邊是大樹，大樹就在小豆上面，往上走一格就到了。", "Right of the well is the tree, just above Pip. Move up one square."] }
      ]
    },

    12: {
      zh: "龍穴百十", en: "Dragon Cave",
      sub: "百、十、一與整十 · Hundreds, tens and ones",
      pip: { zh: ["大箱是一百，中袋是十，", "小金幣是一！"], en: ["A chest is a hundred, a bag is ten, ", "and a coin is one!"] },
      qs: [
        { type: ["位值題", "Place value"],
          zh: ["龍有 2 個大箱、4 個中袋、7 枚小金幣，", "一共幾枚金幣？"], en: ["The dragon has 2 chests, 4 bags and 7 coins. ", "How many coins in all?"],
          vis: { t: "blocks", h: 2, t10: 4, o: 7 },
          choices: ["742", "247", "13", "274"], answer: "247",
          errs: { "742": ["百位和個位排反了。大箱有 2 個，百位是 2。", "The hundreds and ones are swapped. There are 2 chests, so 2 hundreds."],
                  "13": ["2 加 4 加 7 是 13，可是大箱是 100，中袋是 10。", "2 plus 4 plus 7 is 13, but a chest is 100 and a bag is 10."],
                  "274": ["十位和個位對調了。4 個中袋是 4 個十。", "The tens and ones are swapped. 4 bags are 4 tens."] },
          hint: { zh: ["2 個大箱是 200，4 個中袋是 40，", "再加 7 枚。"], en: ["2 chests are 200 and 4 bags are 40, ", "then add 7 coins."] },
          win: ["200 加 40 加 7 等於 247。", "200 plus 40 plus 7 makes 247."] },
        { type: ["整十數", "Nearest ten"],
          zh: ["247 最接近哪一個整十數？", ""], en: ["Which multiple of ten is 247 closest to?", ""],
          vis: { t: "nline", from: 240, to: 250, mark: 247 },
          choices: ["240", "250", "200", "300"], answer: "250",
          errs: { "240": ["247 離 240 差 7，離 250 只差 3。", "247 is 7 away from 240 but only 3 away from 250."],
                  "200": ["200 是整百數，我們要找最接近的整十數。", "200 is a hundred. We want the nearest ten."],
                  "300": ["300 是整百數，而且離 247 比較遠。", "300 is a hundred, and it is further from 247."] },
          hint: { zh: ["247 在 240 和 250 中間，", "離哪一個比較近？"], en: ["247 is between 240 and 250. ", "Which one is it nearer to?"] },
          win: ["247 離 250 只差 3，離 240 差 7，所以最接近 250。", "247 is 3 from 250 and 7 from 240, so it is closest to 250."] },
        { type: ["換表示法", "Expanded form"],
          zh: ["圖書館有 500 加 80 加 0 本書，", "一共幾本？"], en: ["The library has 500 plus 80 plus 0 books. ", "How many books?"],
          vis: { t: "eq", text: "500 + 80 + 0 = ?" },
          choices: ["58", "580", "508", "5080"], answer: "580",
          errs: { "58": ["500 是 5 個百，不是 5 個十。", "500 is 5 hundreds, not 5 tens."],
                  "508": ["80 是 8 個十，8 要寫在十位。", "80 is 8 tens, so 8 goes in the tens place."],
                  "5080": ["500 加 80 是 3 位數，不是 4 位數。", "500 plus 80 has 3 digits, not 4."] },
          hint: { zh: ["百位是 5，十位是 8，", "個位是 0，別忘了寫 0。"], en: ["5 in the hundreds, 8 in the tens, ", "and 0 in the ones. Don’t forget the 0."] },
          win: ["500 加 80 加 0 等於 580。", "500 plus 80 plus 0 makes 580."] },
        { type: ["反過來問", "Turn it around"],
          zh: ["3 個大箱、0 個中袋、6 枚小金幣，", "一共幾枚？"], en: ["3 chests, 0 bags and 6 coins. ", "How many coins?"],
          vis: { t: "blocks", h: 3, t10: 0, o: 6 },
          choices: ["36", "360", "306", "3006"], answer: "306",
          errs: { "36": ["3 個大箱是 300。中袋是空的，十位要寫 0 佔位。", "3 chests are 300. There are no bags, so write 0 in the tens place."],
                  "360": ["6 是 6 個一，要寫在個位。", "6 is 6 ones, so it goes in the ones place."],
                  "3006": ["300 加 6 是 3 位數，不是 4 位數。", "300 plus 6 has 3 digits, not 4."] },
          hint: { zh: ["中袋是空的，十位就寫 0，", "300 加 6 是多少？"], en: ["No bags means 0 in the tens place. ", "What is 300 plus 6?"] },
          win: ["300 加 0 加 6 等於 306，十位的 0 表示中袋是空的。", "300 plus 0 plus 6 makes 306. The 0 shows there are no bags."] }
      ]
    }
  };

  /* ——— 中文語音：數字轉國字（2 個 → 兩個；200 → 兩百） ——— */
  const D = "零一二三四五六七八九";
  const MEASURE = /^\s*(個|點|塊|層|面|片|杯|次|顆|根|捆|盤|格|人|票|本|枚|種|段|圈|小時|位|條|張|隻|分鐘)/;
  function under10000(n) {
    if (n === 0) return "零";
    const th = Math.floor(n / 1000), h = Math.floor(n / 100) % 10, t = Math.floor(n / 10) % 10, o = n % 10;
    let s = "", zero = false;
    if (th) s += (th === 2 ? "兩" : D[th]) + "千";
    if (h) { s += (h === 2 && !th ? "兩" : D[h]) + "百"; }
    else if (th && (t || o)) zero = true;
    if (t) { if (zero) s += "零"; zero = false; s += (t === 1 && !th && !h ? "" : D[t]) + "十"; }
    else if ((th || h) && o) zero = true;
    if (o) { if (zero) s += "零"; s += D[o]; }
    return s;
  }
  function zhSpeak(text) {
    return text.replace(/\d+/g, (m, off, str) => {
      const n = parseInt(m, 10);
      if (n === 2 && MEASURE.test(str.slice(off + m.length)) && !/第\s*$/.test(str.slice(0, off))) return "兩";
      return n < 10000 ? under10000(n) : m;
    }).replace(/[A-Za-z]/g, "").replace(/\s+/g, "");
  }

  /* ——— 正規化成 app.js 用的題目格式，並把台詞登記到 PipVoice ——— */
  const STAR_ZH = ["得到 1 顆星星。", "得到第 2 顆星星。", "得到第 3 顆星星。"];
  const STAR_EN = ["You earned 1 star.", "You earned your 2nd star.", "You earned your 3rd star."];
  const ORD = ["", "2nd", "3rd"];

  function build(V) {
    const out = {};
    Object.keys(EPISODES).forEach(k => {
      const ep = +k, E = EPISODES[k];
      const reg = (id, zh, en, tones) => {
        const seg = (arr, lang) => arr.filter(t => t !== "").map((t, i) => ({
          text: lang === "zh" ? zhSpeak(t) : t.trim(),
          tone: typeof tones === "function" ? tones(i, arr.filter(x => x !== "").length, t) : tones
        }));
        V.LINES[id] = { zh: seg(zh, "zh"), en: seg(en, "en") };
      };
      const questTone = (i, n, t) => (i === n - 1 && /[？?]\s*$/.test(t)) ? "question" : "calm";
      const winTone = (i) => i === 1 ? "calm" : "excited";
      const pipId = "e" + ep + "pip";
      reg(pipId, E.pip.zh, E.pip.en, (i) => i === 0 ? "calm" : "excited");
      const qs = E.qs.map((q, qi) => {
        const id = "e" + ep + "q" + (qi + 1);
        const last = qi === E.qs.length - 1;
        const zh = q.zh.filter(t => t !== ""), en = q.en.filter(t => t !== "");
        reg(id, zh, en, questTone);
        const errs = {};
        Object.keys(q.errs).forEach(v => {
          const eid = id + "e_" + v;
          const z = ["再試一次。", q.errs[v][0]], e = ["Try again. ", q.errs[v][1]];
          reg(eid, z, e, (i) => i === 0 ? "calm" : "hint");
          errs[v] = { line: eid, zh: z, en: e };
        });
        reg(id + "h", q.hint.zh, q.hint.en, "hint");
        const wz = ["答對了！", q.win[0], last ? "第 " + ep + " 集完成，3 顆星都拿到了！" : STAR_ZH[qi]];
        const we = ["You did it! ", q.win[1] + " ", last ? "Episode " + ep + " complete. You have all 3 stars!" : STAR_EN[qi]];
        reg(id + "w", wz, we, winTone);
        return {
          kicker: "第 " + ep + " 集 · " + q.type[0] + " · " + q.type[1],
          line: id, zh, en, vis: q.vis, choices: q.choices, labels: q.labels, answer: q.answer, errs,
          hint: { line: id + "h", zh: q.hint.zh, en: q.hint.en },
          win: { line: id + "w", zh: wz, en: we, star: !last }
        };
      });
      out[ep] = { ep, zh: E.zh, en: E.en, sub: E.sub, pip: { line: pipId, zh: E.pip.zh, en: E.pip.en }, qs };
    });
    return out;
  }

  global.PipEpisodes = { EPISODES, build, zhSpeak };
})(window);
