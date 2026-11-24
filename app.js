/* 示範互動：畫面切換、語言、設定、語音解鎖。非正式關卡邏輯。 */
(function () {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const V = window.PipVoice;
  const screens = { map: $("#screen-map"), story: $("#screen-story"), win: $("#screen-win") };
  const params = new URLSearchParams(location.search);
  const isShot = params.get("shot") === "1";
  const wantGate = params.get("gate") === "1";
  const play = params.get("play"); // bubble | quest | win | node
  const forceMuted = params.get("muted") === "1";
  const forceNoSpeech = params.get("nospeech") === "1";

  if (isShot) document.documentElement.classList.add("is-shot");

  /* ——— 第 1 集：四題（CAPS 位值；舉一反三：主體題 → 換情境 → 換表示法 → 反過來問） ———
     顯示文字用阿拉伯數字；語音台詞在 voice.js（用國字唸）。 */
  const Q = [
    { kicker: "第 1 集 · 位值題 · Place value",
      line: "quest", zh: ["4 盤十格再加 7 顆，", "一共幾顆？"], en: ["4 full ten-frames plus 7 berries — ", "how many in all?"],
      frames: { full: 4, part: 7, kind: "berry" },
      choices: ["47", "74", "407", "11"], answer: "47",
      errs: {
        "74":  { line: "err",    zh: ["再試一次。", "4 和 7 對調就變成 74 了。"], en: ["Try again. ", "If you swap 4 and 7, it becomes 74."] },
        "407": { line: "err407", zh: ["再試一次。", "4 個十是 40，不是 400。"], en: ["Try again. ", "4 tens are 40, not 400."] },
        "11":  { line: "err11",  zh: ["再試一次。", "4 盤十格是 4 個十，不是 4 個一。"], en: ["Try again. ", "4 full ten-frames are 4 tens, not 4 ones."] } },
      hint: { line: "hint", zh: ["想一想：", "4 個十是 40，", "再加 7 個一，就是 47。", "不要只把 4 和 7 排在一起，", "也不要把 4 個十寫成 400。"],
              en: ["Think about it. ", "4 tens are 40, ", "plus 7 ones is 47. ", "Don’t swap them to 74, ", "and don’t write 407."] },
      win: { line: "win", zh: ["答對了！", "4 個十加 7 個一，一共是 47。", "得到 1 顆星星。"], en: ["You did it! ", "4 tens and 7 ones make 47. ", "You earned 1 star."], star: true } },
    { kicker: "第 1 集 · 換情境 · New story",
      line: "quest2", zh: ["3 盤十格再加 6 顆蛋，", "一共幾顆？"], en: ["3 full ten-frames plus 6 eggs — ", "how many in all?"],
      frames: { full: 3, part: 6, kind: "egg" },
      choices: ["63", "36", "9", "306"], answer: "36",
      errs: {
        "63":  { line: "err2swap", zh: ["再試一次。", "3 和 6 對調就變成 63 了。"], en: ["Try again. ", "If you swap 3 and 6, it becomes 63."] },
        "306": { line: "err2hund", zh: ["再試一次。", "3 個十是 30，不是 300。"], en: ["Try again. ", "3 tens are 30, not 300."] },
        "9":   { line: "err2ones", zh: ["再試一次。", "3 盤十格是 3 個十，不是 3 個一。"], en: ["Try again. ", "3 full ten-frames are 3 tens, not 3 ones."] } },
      hint: { line: "hint2", zh: ["想一想：", "3 個十是 30，", "再加 6 個一，就是 36。"], en: ["Think about it. ", "3 tens are 30, ", "plus 6 ones is 36."] },
      win: { line: "win2", zh: ["答對了！", "3 個十加 6 個一，一共是 36。", "得到第 2 顆星星。"], en: ["You did it! ", "3 tens and 6 ones make 36. ", "You earned your 2nd star."], star: true } },
    { kicker: "第 1 集 · 換表示法 · Number sentence",
      line: "quest3", zh: ["40 加 7，", "等於多少？"], en: ["40 plus 7 — ", "what does it make?"],
      equation: "40 + 7 = ?",
      choices: ["407", "47", "74", "11"], answer: "47",
      errs: {
        "407": { line: "err3join", zh: ["再試一次。", "40 加 7，不是把 40 和 7 接在一起寫。"], en: ["Try again. ", "Don’t just write 40 and 7 side by side."] },
        "74":  { line: "err3swap", zh: ["再試一次。", "十位是 4，不是 7。"], en: ["Try again. ", "The tens digit is 4, not 7."] },
        "11":  { line: "err3ones", zh: ["再試一次。", "40 是 4 個十，不是 4。"], en: ["Try again. ", "40 is 4 tens, not 4."] } },
      hint: { line: "hint3", zh: ["想一想：", "40 是 4 個十，", "7 是 7 個一，", "十位寫 4，個位寫 7。"],
              en: ["Think about it. ", "40 is 4 tens, ", "7 is 7 ones, ", "so 4 goes in the tens place and 7 in the ones place."] },
      win: { line: "win3", zh: ["答對了！", "40 加 7 等於 47，就是 4 個十和 7 個一。", "得到第 3 顆星星。"], en: ["You did it! ", "40 plus 7 makes 47: 4 tens and 7 ones. ", "You earned your 3rd star."], star: true } },
    { kicker: "第 1 集 · 反過來問 · Turn it around",
      line: "quest4", zh: ["5 捆木頭，每捆 10 根，", "再加 3 根，", "一共幾根？"], en: ["5 bundles of 10 logs, ", "plus 3 more — ", "how many in all?"],
      frames: { full: 5, part: 3, kind: "log" },
      choices: ["35", "53", "8", "503"], answer: "53",
      errs: {
        "35":  { line: "err4swap", zh: ["再試一次。", "5 和 3 對調就變成 35 了。"], en: ["Try again. ", "If you swap 5 and 3, it becomes 35."] },
        "503": { line: "err4hund", zh: ["再試一次。", "5 捆是 5 個十，是 50，不是 500。"], en: ["Try again. ", "5 bundles are 5 tens: 50, not 500."] },
        "8":   { line: "err4ones", zh: ["再試一次。", "每捆有 10 根，5 捆是 5 個十，不是 5 個一。"], en: ["Try again. ", "Each bundle has 10 logs, so 5 bundles are 5 tens, not 5 ones."] } },
      hint: { line: "hint4", zh: ["想一想：", "5 捆是 5 個十，就是 50，", "再加 3 根，就是 53。"], en: ["Think about it. ", "5 bundles are 5 tens. That’s 50, ", "plus 3 more is 53."] },
      win: { line: "win4", zh: ["答對了！", "5 個十加 3 個一，一共是 53。", "奶奶的果醬做好了，好香啊！第 1 集完成，3 顆星都拿到了！"], en: ["You did it! ", "5 tens and 3 ones make 53. ", "Grandma’s jam is ready, and it smells wonderful! Episode 1 complete. You have all 3 stars!"], star: false } }
  ];

  /* ——— 第 1 集的故事：開場、第 2–4 題小豆的話（第 1 題沿用原本「先數十再數一」） ——— */
  const EP1_STORY = {
    intro: { zh: ["奶奶要做莓果果醬，需要好多莓果。", "小紅斗篷提著籃子，小豆提燈帶路。", "一顆一顆數容易數亂，", "我們每 10 顆裝成一盤吧！"],
             en: ["Grandma is making berry jam and needs lots of berries. ", "Little Red Cape carries the basket, and Pip lights the way. ", "Counting one by one gets muddled, ", "so let’s put every 10 berries on a tray!"] },
    beats: [null,
      { zh: ["奶奶說還要雞蛋做蛋糕，", "雞蛋也是 10 顆一盤。"], en: ["Grandma needs eggs for a cake too. ", "Eggs come 10 to a tray as well."] },
      { zh: ["小紅斗篷把莓果寫成算式，", "考考你！"], en: ["Little Red Cape wrote the berries as a sum ", "to test you!"] },
      { zh: ["樵夫叔叔送來生火的木頭，", "每 10 根綁成一捆。"], en: ["The woodcutter brought logs for the fire, ", "tied in bundles of 10."] }]
  };
  (function registerEp1Story() {
    const z = window.PipEpisodes ? window.PipEpisodes.zhSpeak : (t => t);
    const reg = (id, zh, en) => {
      const seg = (arr, lang) => arr.map((t, i) => ({ text: lang === "zh" ? z(t) : t.trim(), tone: i === arr.length - 1 ? "excited" : "calm" }));
      V.LINES[id] = { zh: seg(zh, "zh"), en: seg(en, "en") };
    };
    reg("e1intro", EP1_STORY.intro.zh, EP1_STORY.intro.en);
    EP1_STORY.beats.forEach((b, i) => {
      if (!b) return;
      reg("e1q" + (i + 1) + "b", b.zh, b.en);
      Q[i].beat = { line: "e1q" + (i + 1) + "b", zh: b.zh, en: b.en };
    });
  })();

  /* ——— 12 集資料：第 1 集在上面（沿用原本台詞），第 2–12 集在 episodes.js ——— */
  const EPS = Object.assign({
    1: { ep: 1, zh: "莓果小路", en: "Berry Path", sub: "數到 99 的位值 · Place value to 99",
         pip: { line: "pipHint" }, qs: Q, original: true,
         intro: { line: "e1intro", zh: EP1_STORY.intro.zh, en: EP1_STORY.intro.en } }
  }, window.PipEpisodes ? window.PipEpisodes.build(V) : {});
  const LAST_EP = Math.max.apply(null, Object.keys(EPS).map(Number));

  /* 進度（存在這台裝置的瀏覽器裡）。截圖模式不讀不寫。 */
  const STORE_KEY = "pipMath.progress.v2";
  const OLD_KEY = "pipMath.progress.v1";
  const prog = { cur: 1, eps: {} };
  function rec(ep) {
    const k = String(ep);
    if (!prog.eps[k]) prog.eps[k] = { q: 0, stars: 0, done: false };
    return prog.eps[k];
  }
  const unlocked = ep => ep === 1 || (EPS[ep - 1] && rec(ep - 1).done);
  const totalStars = () => Object.keys(EPS).reduce((a, k) => a + rec(k).stars, 0);
  function loadProg() {
    if (isShot) return;
    try {
      let d = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (!d) { // 舊版只有第 1 集
        const o = JSON.parse(localStorage.getItem(OLD_KEY) || "null");
        if (o) d = { cur: 1, eps: { "1": o } };
      }
      if (d && typeof d === "object" && d.eps) {
        Object.keys(EPS).forEach(k => {
          const r = d.eps[k];
          if (!r) return;
          const n = EPS[k].qs.length;
          prog.eps[k] = { q: Math.max(0, Math.min(n - 1, r.q | 0)), stars: Math.max(0, Math.min(3, r.stars | 0)), done: !!r.done };
        });
        const c = d.cur | 0;
        prog.cur = EPS[c] && unlocked(c) ? c : 1;
      }
    } catch (e) {}
  }
  function saveProg() {
    if (isShot) return;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(prog)); } catch (e) {}
  }
  loadProg();
  let lastWinNewStar = true;
  let winEp = 1, winQ = 0; // 慶祝畫面正在顯示哪一集哪一題的祝賀
  const curE = () => EPS[prog.cur];
  const curQ = () => curE().qs[rec(prog.cur).q];
  const winQo = () => EPS[winEp].qs[winQ];

  const say = (lang, arr) => arr.map((t, i) => '<span class="fs-say fs-say--' + lang + '" data-i="' + i + '">' + t + "</span>").join("");
  const BERRY = ["p", "r", "r", "p", "r", "r", "p", "r", "r", "p"];
  function cellsHtml(n, kind) {
    let h = "";
    for (let i = 0; i < 10; i++) {
      const cls = kind === "egg" ? "e" : kind === "log" ? "w" : BERRY[i];
      h += '<span class="fs-tf__cell">' + (i < n ? '<i class="fs-berry fs-berry--' + cls + '"></i>' : "") + "</span>";
    }
    return h;
  }

  /* 第 1 集原本的故事頁內容（換回第 1 集時還原，畫面維持原樣） */
  const ORIG = {
    pip: $(".fs-pip__bubble").innerHTML,
    imgs: $$("#screen-story .fs-cover img").map(im => [im.getAttribute("src"), im.getAttribute("alt")]),
    title: [...$$("#screen-story .fs-top__title h1 > span")].map(sp => [sp.getAttribute("data-i18n-zh"), sp.getAttribute("data-i18n-en")]),
    sub: $("#screen-story .fs-top__title > .fs-en").textContent,
    winTitle: [...$$("#screen-win .fs-top__title h1 > span")].map(sp => [sp.getAttribute("data-i18n-zh"), sp.getAttribute("data-i18n-en")])
  };
  const SCENE = { wide: ["assets/celebrate-wide.jpg", "黃昏森林空地，陽光從樹間灑下。AI 示意"], portrait: ["assets/celebrate-portrait.jpg", "直式森林空地，陽光由上灑下。AI 示意"] };

  function setI18n(el, zh, en) {
    el.setAttribute("data-i18n-zh", zh);
    el.setAttribute("data-i18n-en", en);
    el.textContent = isEnLang() ? en : zh;
  }

  function renderBubble(line, zh, en) {
    const b = $(".fs-pip__bubble");
    if (b.getAttribute("data-line") === line) return;
    b.setAttribute("data-line", line);
    b.innerHTML = "\n            " + say("zh", zh) + '\n            <span class="fs-en">' + say("en", en) + "</span>\n          ";
  }

  function renderStoryChrome() {
    const E = curE(), q = curQ();
    const spans = $$("#screen-story .fs-top__title h1 > span");
    if (E.original) {
      spans.forEach((sp, i) => setI18n(sp, ORIG.title[i][0], ORIG.title[i][1]));
      $("#screen-story .fs-top__title > .fs-en").textContent = ORIG.sub;
      $$("#screen-story .fs-cover img").forEach((im, i) => { im.setAttribute("src", ORIG.imgs[i][0]); im.setAttribute("alt", ORIG.imgs[i][1]); });
      const b = $(".fs-pip__bubble");
      if (q.beat) renderBubble(q.beat.line, q.beat.zh, q.beat.en);
      else if (b.getAttribute("data-line") !== "pipHint") { b.innerHTML = ORIG.pip; b.setAttribute("data-line", "pipHint"); }
      $(".fs-pip .fs-speak").setAttribute("data-line", q.beat ? q.beat.line : "pipHint");
    } else {
      setI18n(spans[0], "第 " + E.ep + " 集 · " + E.zh, "Ep " + E.ep + " · " + E.en);
      setI18n(spans[1], "第 " + E.ep + " 集", "Ep " + E.ep);
      $("#screen-story .fs-top__title > .fs-en").textContent = E.sub;
      const imgs = $$("#screen-story .fs-cover img");
      const alt = "童話數學谷的" + E.zh + "（" + E.en + "）。AI 示意";
      imgs[0].setAttribute("src", E.scene ? E.scene.wide : SCENE.wide[0]); imgs[0].setAttribute("alt", alt);
      imgs[1].setAttribute("src", E.scene ? E.scene.portrait : SCENE.portrait[0]); imgs[1].setAttribute("alt", alt);
      const bt = q.beat || E.pip;
      renderBubble(bt.line, bt.zh, bt.en);
      $(".fs-pip .fs-speak").setAttribute("data-line", bt.line);
    }
    $("#screen-story").setAttribute("aria-label", "第 " + E.ep + " 集 故事與題目");
    const demo = $('.fs-demo [data-screen="story"]');
    if (demo) demo.textContent = "第 " + E.ep + " 集";
  }

  function renderChoices(q) {
    $$(".fs-choice").forEach((b, i) => {
      const c = q.choices[i];
      b.classList.remove("fs-choice--text", "fs-choice--icon", "fs-choice--only");
      b.removeAttribute("aria-label");
      if (typeof c === "string") { b.dataset.val = c; b.textContent = c; return; }
      b.dataset.val = c.v;
      b.classList.add("fs-choice--text");
      const ic = c.icon ? window.PipVisuals.icon(c.icon, c.zh ? 30 : 34) : "";
      if (c.icon) b.classList.add("fs-choice--icon");
      if (!c.zh) {
        b.classList.add("fs-choice--only");
        const l = q.labels && q.labels[c.v];
        if (l) b.setAttribute("aria-label", l[0] + " " + l[1]);
        b.innerHTML = ic;
        return;
      }
      const txt = '<span class="fs-choice__zh">' + c.zh + '</span><span class="fs-en">' + c.en + "</span>";
      b.innerHTML = c.icon ? ic + '<span class="fs-choice__txt">' + txt + "</span>" : txt;
    });
  }

  function renderQuestion() {
    const E = curE(), r = rec(prog.cur), q = curQ();
    renderStoryChrome();
    const quest = $("#quest");
    const kick = quest.querySelector(".fs-quest__kicker");
    kick.textContent = q.kicker + " · " + (r.q + 1) + " / " + E.qs.length;
    const head = quest.querySelector(".fs-quest__head-body");
    head.setAttribute("data-line", q.line); // 中英兩段都在這裡面，英文模式才能對字高亮
    const h2 = quest.querySelector(".fs-quest__title");
    h2.setAttribute("data-line", q.line);
    h2.innerHTML = "\n              " + say("zh", q.zh) + "\n            ";
    head.querySelector(":scope > .fs-en").innerHTML = say("en", q.en);
    quest.querySelector(".fs-quest__head .fs-speak").setAttribute("data-line", q.line);

    const fr = quest.querySelector(".fs-frames");
    if (q.frames) {
      let h = "";
      for (let i = 0; i < q.frames.full; i++) h += '<div class="fs-tf"><div class="fs-tf__lab">10</div><div class="fs-tf__grid">' + cellsHtml(10, q.frames.kind) + "</div></div>";
      if (q.frames.part) h += '<div class="fs-tf fs-tf--part"><div class="fs-tf__lab">' + q.frames.part + '</div><div class="fs-tf__grid">' + cellsHtml(q.frames.part, q.frames.kind) + "</div></div>";
      fr.innerHTML = h;
    } else if (q.equation) {
      fr.innerHTML = '<div class="fs-equation">' + q.equation + "</div>";
    } else {
      fr.innerHTML = window.PipVisuals.render(q.vis);
    }
    fr.hidden = !fr.innerHTML;
    renderChoices(q);

    const hb = $("#fb-hint");
    hb.setAttribute("data-line", q.hint.line);
    hb.querySelector(".fs-speak").setAttribute("data-line", q.hint.line);
    const hd = hb.querySelector(":scope > div");
    hd.innerHTML = "\n            " + say("zh", q.hint.zh) + '\n            <span class="fs-en" style="color:var(--color-hint-text)">' + say("en", q.hint.en) + "</span>\n          ";
    resetQuest();
  }

  function renderWin(newStar) {
    const E = EPS[winEp], q = winQo();
    const copy = $("#screen-win .fs-win__copy");
    copy.setAttribute("data-line", q.win.line);
    copy.querySelector(".fs-speak").setAttribute("data-line", q.win.line);
    const showStar = !q.win.star || newStar;
    copy.querySelector("h2").innerHTML = '<span class="fs-say fs-say--zh" data-i="0">' + q.win.zh[0] + "</span>";
    copy.querySelector("p").innerHTML = '<span class="fs-say fs-say--zh" data-i="1">' + q.win.zh[1] + "</span>" +
      (showStar ? ' <span class="fs-say fs-say--zh" data-i="2">' + q.win.zh[2] + "</span>" : "");
    copy.querySelector(".fs-win__copy-body > .fs-en").innerHTML =
      '<span class="fs-say fs-say--en" data-i="0">' + q.win.en[0] + '</span><span class="fs-say fs-say--en" data-i="1">' + q.win.en[1] + "</span>" +
      (showStar ? '<span class="fs-say fs-say--en" data-i="2">' + q.win.en[2] + "</span>" : "");
    const last = winQ === E.qs.length - 1;
    const tspans = $$("#screen-win .fs-top__title h1 > span");
    if (E.original) tspans.forEach((sp, i) => setI18n(sp, ORIG.winTitle[i][0], ORIG.winTitle[i][1]));
    else setI18n(tspans[0], "第 " + E.ep + " 集 · 答對了", "Episode " + E.ep + " · Well done");
    const sub = $("#screen-win .fs-top__title > .fs-en");
    sub.textContent = last ? "Episode " + E.ep + " complete" : (showStar ? "You earned a star" : "Well done");
    const next = $("#btn-next");
    if (!last) { next.setAttribute("data-i18n-zh", "下一題"); next.setAttribute("data-i18n-en", "Next question"); }
    else if (EPS[E.ep + 1]) { next.setAttribute("data-i18n-zh", "看看第 " + (E.ep + 1) + " 集"); next.setAttribute("data-i18n-en", "See Episode " + (E.ep + 1)); }
    else { next.setAttribute("data-i18n-zh", "回到地圖"); next.setAttribute("data-i18n-en", "Back to map"); }
    next.textContent = isEnLang() ? next.getAttribute("data-i18n-en") : next.getAttribute("data-i18n-zh");
  }

  /* 祝賀語音：重玩時沒有新星星，就不唸「得到…星星」那句 */
  function winSegments() {
    const q = winQo();
    const segs = V.LINES[q.win.line] && V.LINES[q.win.line][V.lang];
    if (!segs) return null;
    return (q.win.star && !lastWinNewStar) ? segs.slice(0, 2) : segs;
  }

  function renderMap() {
    $$(".fs-node").forEach(n => {
      const ep = +n.dataset.ep;
      if (!EPS[ep]) return;
      const pin = n.querySelector(".fs-node__pin");
      const r = rec(ep), open = unlocked(ep);
      n.classList.toggle("is-done", r.done);
      n.classList.toggle("is-current", !r.done && open);
      n.classList.toggle("is-locked", !open);
      const html = r.done
        ? '<span aria-hidden="true">✓</span><span class="visually-hidden">第' + ep + '集完成</span>'
        : open ? ep + '<span class="visually-hidden">第' + ep + '集進行中</span>'
               : '<span aria-hidden="true">🔒</span><span class="visually-hidden">第' + ep + '集未解鎖</span>';
      if (pin.innerHTML !== html) pin.innerHTML = html;
    });
  }

  function updateVoiceChrome() {
    if (V.hasEngine() && !V.voices.length) V.refreshVoices();
    const ok = V.hasEngine() && V.status() === "ok" && !forceNoSpeech;
    /* 截圖要顯示預設綠色喇叭；除非明確 ?nospeech=1，不要套上不可用狀態 */
    const showOff = forceNoSpeech || (!isShot && !ok && V.unlocked);
    document.documentElement.classList.toggle("is-voice-off", showOff);
    const st = $("#voice-status");
    if (!st) return;
    const zhInfo = V.pickInfo.zh;
    const enInfo = V.pickInfo.en;
    const nameOf = (info) => info && info.voice ? (info.voice.name + " (" + (info.voice.lang || "") + ")") : "無";
    if (forceNoSpeech || !V.hasEngine()) {
      st.textContent = document.documentElement.lang === "en"
        ? "Voice: not available in this browser."
        : "語音：這個瀏覽器沒有 SpeechSynthesis。";
    } else if (!V.voices.length) {
      st.textContent = document.documentElement.lang === "en"
        ? "Voice: engine found, but no voices listed yet."
        : "語音：有語音引擎，但尚未列出聲音。";
    } else {
      const prefix = document.documentElement.lang === "en" ? "Voices: " : "已選聲音：";
      st.textContent = prefix + "中 " + nameOf(zhInfo) + " / EN " + nameOf(enInfo);
    }
    $$(".fs-speak").forEach(b => {
      const off = V.muted || (!ok && !isShot) || forceNoSpeech;
      b.disabled = off;
      b.setAttribute("aria-disabled", off ? "true" : "false");
      if (!ok && !V.muted) b.classList.add("is-unavailable");
      else b.classList.remove("is-unavailable");
    });
  }

  function setMuted(on) {
    V.muted = !!on;
    document.documentElement.classList.toggle("is-muted", V.muted);
    $$(".js-mute").forEach(b => {
      b.classList.toggle("is-muted", V.muted);
      b.setAttribute("aria-pressed", V.muted ? "true" : "false");
      b.setAttribute("aria-label", V.muted
        ? (document.documentElement.lang === "en" ? "Muted, tap to unmute" : "已靜音，點一下開啟語音")
        : (document.documentElement.lang === "en" ? "Sound on, tap to mute" : "語音開著，點一下靜音"));
    });
    if (V.muted) V.cancel();
    updateVoiceChrome();
  }

  function show(name, opts) {
    opts = opts || {};
    Object.entries(screens).forEach(([k, el]) => {
      const on = k === name;
      el.classList.toggle("is-active", on);
      el.setAttribute("aria-hidden", on ? "false" : "true");
    });
    $$(".fs-demo [data-screen]").forEach(b => b.classList.toggle("is-on", b.dataset.screen === name));
    document.documentElement.setAttribute("data-screen", name); // 讓 CSS 知道目前畫面（.fs-demo 不在各畫面裡）
    const q = location.search || "";
    const next = q + "#" + name;
    if (location.search + location.hash !== next) history.replaceState(null, "", next);
    const set = $("#settings");
    set.classList.remove("is-open");
    set.hidden = true;
    $("#toast").classList.remove("is-show");
    if (!opts.keepSpeech) V.cancel();
    if (name === "story" && opts.fresh) resetQuest();
    if (name !== "story") closeIntro();
    if (opts.auto !== false && V.unlocked && V.autoplay && !V.muted && !isShot) {
      autoSpeak(name, opts);
    }
  }

  /* 進入畫面的自動語音。前一段若被中止（換頁、換語言、靜音），不接下一段。 */
  function autoSpeak(name, opts) {
    opts = opts || {};
    if (name === "story") {
      const qLine = curQ().line;
      if (opts.questOnly) return V.speakLine(qLine);
      const bl = curQ().beat ? curQ().beat.line : curE().pip.line;
      if (opts.introFirst) {
        return V.speakLine(curE().intro.line);
      }
      return V.speakLine(bl).then(ok => { if (ok && V.autoplay && !V.muted) return V.speakLine(qLine); });
    }
    if (name === "win") {
      const go = () => V.speakLine(winQo().win.line, { segments: winSegments() });
      if (opts.delay) {
        const my = V.seq;
        return new Promise(r => setTimeout(r, opts.delay)).then(() => { if (my === V.seq) return go(); });
      }
      return go();
    }
    if (name === "map" && opts.intro) return V.speakLine("mapIntro");
    return Promise.resolve(false);
  }

  /* 從地圖重新進入第 1 集：清掉上次的選擇與回饋 */
  function resetQuest() {
    picked = null;
    $$(".fs-choice").forEach(b => { b.classList.remove("is-on"); b.setAttribute("aria-checked", "false"); });
    $("#fb-err").classList.remove("is-show");
    $("#fb-hint").classList.remove("is-show");
  }

  /* 星星：12 集合計，每集最多 3 顆 */
  function renderStars() {
    const stars = totalStars();
    ["#screen-map", "#screen-story", "#screen-win"].forEach(id => {
      const el = $(id + " .fs-stars");
      if (!el) return;
      el.innerHTML = '<span class="fs-stars__icon">★</span> ' + stars + " / 36";
      el.setAttribute("aria-label", isEnLang() ? ("Stars: " + stars + " of 36") : ("星星 " + stars + " 顆，共 36 顆"));
    });
  }
  function isEnLang() { return document.documentElement.lang === "en"; }

  function showToast(html) {
    const toast = $("#toast");
    toast.innerHTML = html;
    toast.classList.add("is-show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove("is-show"), 2800);
  }

  /* ——— 開場故事面板 ——— */
  function openIntro() {
    const E = curE(), box = $("#intro");
    box.querySelector(".fs-intro__kicker").textContent = "第 " + E.ep + " 集 · 故事開始 · Story";
    box.querySelector(".fs-intro__title").innerHTML = E.zh + ' <span class="fs-en">' + E.en + "</span>";
    const body = box.querySelector(".fs-intro__body");
    body.setAttribute("data-line", E.intro.line);
    body.querySelector(".fs-speak").setAttribute("data-line", E.intro.line);
    body.querySelector(".fs-intro__text").innerHTML = say("zh", E.intro.zh) + '<span class="fs-en">' + say("en", E.intro.en) + "</span>";
    box.hidden = false;
    $("#screen-story").classList.add("is-intro");
    setTimeout(() => { try { $("#btn-intro-go").focus({ preventScroll: true }); } catch (e) {} }, 0);
  }
  function closeIntro() {
    $("#intro").hidden = true;
    $("#screen-story").classList.remove("is-intro");
  }
  /* 進入某一集：從第 1 題開始的話先看開場故事 */
  function enterEpisode(epN, nodeSegs) {
    prog.cur = epN;
    saveProg();
    renderQuestion();
    show("story", { auto: false, fresh: true });
    const fromStart = rec(epN).q === 0 && !isShot;
    if (fromStart) openIntro(); else closeIntro();
    const talk = () => {
      if (!(V.unlocked && V.autoplay && !V.muted && !isShot)) return;
      return fromStart ? autoSpeak("story", { introFirst: true }) : autoSpeak("story");
    };
    if (nodeSegs && V.unlocked && !V.muted) V.speakSegments("node", nodeSegs).then(ok => { if (ok) talk(); });
    else talk();
  }

  renderQuestion();
  renderWin(true);
  renderMap();
  if (!isShot) renderStars();

  const startHash = (location.hash || "#map").replace("#", "");
  show(screens[startHash] ? startHash : "map", { auto: false });

  window.addEventListener("hashchange", () => {
    const name = (location.hash || "#map").replace("#", "");
    if (screens[name]) show(name, { auto: false });
  });


  function unlockAndEnter() {
    V.unlock();
    V.refreshVoices();
    updateVoiceChrome();
    document.documentElement.classList.remove("is-gated");
    if (V.autoplay && !V.muted) {
      const cur = Object.keys(screens).find(k => screens[k].classList.contains("is-active")) || "map";
      autoSpeak(cur, { intro: true });
    }
  }

  if (wantGate || !isShot) {
    document.documentElement.classList.add("is-gated");
  } else {
    V.unlocked = true;
    V.refreshVoices();
  }
  if (forceMuted) setMuted(true);
  if (forceNoSpeech) document.documentElement.classList.add("is-voice-off");
  updateVoiceChrome();
  if (V.hasEngine()) {
    speechSynthesis.addEventListener("voiceschanged", updateVoiceChrome);
    setTimeout(updateVoiceChrome, 300);
  }

  $("#btn-gate").addEventListener("click", unlockAndEnter);

  $$(".fs-demo [data-screen]").forEach(b => b.addEventListener("click", () => {
    if (!V.unlocked) { document.documentElement.classList.add("is-gated"); return; }
    show(b.dataset.screen, { intro: b.dataset.screen === "map" });
  }));
  $$(".js-to-map").forEach(b => b.addEventListener("click", () => show("map")));
  $("#btn-home").addEventListener("click", () => show("map"));
  $("#btn-next").addEventListener("click", () => {
    const E = EPS[winEp];
    if (winQ < E.qs.length - 1) {
      prog.cur = winEp;
      renderQuestion();
      show("story", { auto: false, fresh: true });
      if (V.unlocked && V.autoplay && !V.muted && !isShot) autoSpeak("story");
      return;
    }
    /* 這一集完成：直接走進下一集的開場故事 */
    const nx = EPS[E.ep + 1];
    if (nx) {
      enterEpisode(nx.ep, V.nodeLines(String(nx.ep), nx.zh, nx.en, false));
    } else {
      show("map", { auto: false });
      const st = totalStars();
      showToast(isEnLang() ? "All " + LAST_EP + " episodes done! " + st + " / 36 stars."
        : LAST_EP + " 集全部完成！一共 " + st + " / 36 顆星星。" + '<span class="fs-en">All ' + LAST_EP + " episodes done! " + st + " / 36 stars.</span>");
    }
  });
  $$(".fs-demo [data-screen=story]").forEach(b => b.addEventListener("click", () => resetQuest(), true));
  $("#btn-intro-go").addEventListener("click", () => {
    closeIntro();
    V.cancel();
    if (V.unlocked && V.autoplay && !V.muted && !isShot) autoSpeak("story");
  });

  $$(".fs-node").forEach(n => n.addEventListener("click", () => {
    if (!V.unlocked) { document.documentElement.classList.add("is-gated"); return; }
    const ep = n.dataset.ep, epN = +ep;
    const locked = !EPS[epN] || !unlocked(epN);
    const prev = String(Math.max(1, epN - 1));
    const segs = V.nodeLines(ep, n.dataset.zh, n.dataset.en, locked, prev);
    if (locked) {
      const zh = "先走完第 " + prev + " 集。「" + n.dataset.zh + "」就在前面等你。";
      const en = "Finish Episode " + prev + " first. “" + n.dataset.en + "” is waiting further on.";
      showToast(isEnLang() ? en : zh + '<span class="fs-en">' + en + "</span>");
      V.speakSegments("node", segs);
      return;
    }
    /* 先換畫面（不自動唸），再唸集名；集名唸完才接開場故事或小豆與題目，避免互相打斷或交錯 */
    enterEpisode(epN, segs);
  }));

  var picked = null;
  $$(".fs-choice").forEach(btn => btn.addEventListener("click", () => {
    $$(".fs-choice").forEach(b => { b.classList.remove("is-on"); b.setAttribute("aria-checked", "false"); });
    btn.classList.add("is-on");
    btn.setAttribute("aria-checked", "true");
    picked = btn.dataset.val;
    $("#fb-err").classList.remove("is-show");
  }));
  $("#btn-hint").addEventListener("click", () => {
    const box = $("#fb-hint");
    box.classList.add("is-show");
    try { box.scrollIntoView({ block: "nearest" }); } catch (e) {}
    if (V.unlocked && !V.muted) V.speakLine(curQ().hint.line);
  });
  /* 每個錯誤答案各自的回饋：74＝十位個位對調、407＝把 4 個十寫成 400、11＝把十格盤當成一 */
  function setErr(val) {
    const e = curQ().errs[val];
    const box = $("#fb-err");
    const body = box.querySelector(":scope > div");
    const zh = e.zh.map((t, i) => '<span class="fs-say fs-say--zh" data-i="' + i + '">' + t + "</span>").join("");
    const en = e.en.map((t, i) => '<span class="fs-say fs-say--en" data-i="' + i + '">' + t + "</span>").join("");
    body.innerHTML = zh + '\n            <span class="fs-en">' + en + "</span>";
    box.setAttribute("data-line", e.line);
    box.querySelector(".fs-speak").setAttribute("data-line", e.line);
    return e.line;
  }

  $("#btn-check").addEventListener("click", () => {
    if (!picked) {
      showToast(isEnLang() ? "Pick an answer first."
        : '先選一個答案。<span class="fs-en">Pick an answer first.</span>');
      return;
    }
    if (picked === curQ().answer) {
      V.sfx("success");
      const r = rec(prog.cur);
      winEp = prog.cur;
      winQ = r.q;
      const q = winQo();
      /* 第 1–3 題各一顆星（每集最多 3 顆）；重玩不重複加 */
      lastWinNewStar = q.win.star && r.stars < winQ + 1;
      if (lastWinNewStar) r.stars = winQ + 1;
      const last = winQ === EPS[winEp].qs.length - 1;
      if (last) r.done = true;
      /* 立刻存好下一題；最後一題答完，下次從第 1 題重玩 */
      r.q = last ? 0 : winQ + 1;
      saveProg();
      renderStars();
      renderWin(lastWinNewStar);
      renderMap();
      renderQuestion();
      /* 先響答對音效，再唸祝賀（SPEC 11.4） */
      show("win", { delay: V.sfxOn && !V.muted ? 600 : 0 });
      return;
    }
    const line = setErr(picked);
    V.sfx("error");
    $("#fb-err").classList.add("is-show");
    $("#fb-hint").classList.add("is-show");
    /* 手機題目艙會內捲，回饋可能在折線下方：捲到看得見 */
    try { $("#fb-err").scrollIntoView({ block: "nearest" }); } catch (e) {}
    if (V.unlocked && !V.muted) V.speakLine(line).then(ok => { if (ok && V.autoplay && !V.muted) V.speakLine(curQ().hint.line); });
  });

  $$(".fs-speak").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!V.unlocked) { document.documentElement.classList.add("is-gated"); return; }
      if (V.muted || btn.disabled) return;
      const id = btn.getAttribute("data-line");
      const segs = id === winQo().win.line ? winSegments() : null;
      V.speakLine(id, segs ? { button: btn, segments: segs } : { button: btn });
    });
  });

  function setLang(lang) {
    V.lang = lang === "en" ? "en" : "zh";
    document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
    $$("[data-lang]").forEach(b => {
      const on = b.dataset.lang === (lang === "en" ? "en" : "zh");
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    $$("[data-i18n-zh]").forEach(el => {
      const t = lang === "en" ? el.getAttribute("data-i18n-en") : el.getAttribute("data-i18n-zh");
      /* 圖示按鈕只換無障礙名稱，不能用 textContent 蓋掉裡面的 SVG */
      if (el.classList.contains("fs-icon-btn")) el.setAttribute("aria-label", t);
      else el.textContent = t;
    });
    $$("#tog-autoplay, #tog-sound, #tog-motion").forEach(renderToggle);
    $$(".js-settings, #btn-settings").forEach(b => b.setAttribute("aria-label", lang === "en" ? "Settings" : "設定"));
    renderStars();
    V.cancel();
    setMuted(V.muted);
    updateVoiceChrome();
  }
  $$("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  function toggleSettings(open) {
    const p = $("#settings");
    const on = open !== undefined ? open : p.hidden;
    p.hidden = !on;
    p.classList.toggle("is-open", on);
    if (on) updateVoiceChrome();
  }
  $$("#btn-settings, .js-settings").forEach(b => b.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSettings();
  }));
  document.addEventListener("click", (e) => {
    if (!$("#settings").hidden && !e.target.closest("#settings, #btn-settings, .js-settings")) toggleSettings(false);
  });

  $$(".js-mute").forEach(b => b.addEventListener("click", (e) => {
    e.stopPropagation();
    setMuted(!V.muted);
  }));

  function renderToggle(btn) {
    const on = btn.getAttribute("aria-pressed") === "true";
    btn.textContent = isEnLang() ? (on ? "On" : "Off") : (on ? "開" : "關");
  }
  function flip(btn) {
    const on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    renderToggle(btn);
    return on;
  }
  $("#tog-sound").addEventListener("click", function () { V.sfxOn = flip(this); });
  $("#tog-autoplay").addEventListener("click", function () {
    V.autoplay = flip(this);
    if (!V.autoplay) V.cancel(); // 關掉自動播放時，正在自動唸的句子也停
  });
  $("#tog-motion").addEventListener("click", function () {
    document.documentElement.classList.toggle("is-reduce-motion", flip(this));
  });
  $$("[data-rate]").forEach(b => {
    b.setAttribute("aria-pressed", b.classList.contains("is-on") ? "true" : "false");
    b.addEventListener("click", () => {
      V.rateMode = b.getAttribute("data-rate");
      $$("[data-rate]").forEach(x => {
        x.classList.toggle("is-on", x === b);
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
    });
  });
  /* 重設進度：按兩下才生效，避免孩子誤觸 */
  $("#btn-reset").addEventListener("click", function () {
    if (!this._armed) {
      this._armed = true;
      this.textContent = isEnLang() ? "Sure?" : "確定？";
      clearTimeout(this._t);
      this._t = setTimeout(() => { this._armed = false; this.textContent = isEnLang() ? "Reset" : "重設"; }, 3000);
      return;
    }
    this._armed = false;
    clearTimeout(this._t);
    this.textContent = isEnLang() ? "Reset" : "重設";
    prog.cur = 1; prog.eps = {}; winEp = 1; winQ = 0;
    try { localStorage.removeItem(STORE_KEY); localStorage.removeItem(OLD_KEY); } catch (e) {}
    location.hash = "#map";
    location.reload();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#settings").hidden) toggleSettings(false);
  });

  /* 截圖用：不依賴真實語音引擎，只套播放中／高亮狀態 */
  if (isShot && play) {
    document.documentElement.classList.remove("is-gated");
    V.unlocked = true;
    const mapPlay = { bubble: "story", quest: "story", win: "win", node: "map" };
    show(mapPlay[play] || "story", { auto: false });
    const line = play === "bubble" ? "pipHint" : play === "win" ? "win" : play === "quest" ? "quest" : "pipHint";
    const btn = document.querySelector('.fs-speak[data-line="' + line + '"]');
    if (btn) {
      btn.classList.add("is-playing");
      btn.setAttribute("aria-pressed", "true");
    }
    const i = play === "quest" || play === "win" ? 0 : 1;
    const langSel = ".fs-say--zh";
    document.querySelectorAll('[data-line="' + line + '"] ' + langSel + '[data-i="' + i + '"]').forEach(el => el.classList.add("is-speaking"));
    if (play === "node") {
      const n = document.querySelector('.fs-node.is-current .fs-node__lab');
      if (n) n.classList.add("is-speaking");
    }
  }
})();
