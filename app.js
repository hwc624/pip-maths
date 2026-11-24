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
    const q = location.search || "";
    const next = q + "#" + name;
    if (location.search + location.hash !== next) history.replaceState(null, "", next);
    const set = $("#settings");
    set.classList.remove("is-open");
    set.hidden = true;
    $("#toast").classList.remove("is-show");
    if (!opts.keepSpeech) V.cancel();
    if (name === "story" && opts.fresh) resetQuest();
    if (opts.auto !== false && V.unlocked && V.autoplay && !V.muted && !isShot) {
      autoSpeak(name, opts);
    }
  }

  /* 進入畫面的自動語音。前一段若被中止（換頁、換語言、靜音），不接下一段。 */
  function autoSpeak(name, opts) {
    opts = opts || {};
    if (name === "story") {
      return V.speakLine("pipHint").then(ok => { if (ok && V.autoplay && !V.muted) return V.speakLine("quest"); });
    }
    if (name === "win") {
      if (opts.delay) {
        const my = V.seq;
        return new Promise(r => setTimeout(r, opts.delay)).then(() => { if (my === V.seq) return V.speakLine("win"); });
      }
      return V.speakLine("win");
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

  /* 星星：答對第 1 集後地圖／故事頁也顯示 1 / 36（示範，不存檔） */
  let stars = 0;
  function renderStars() {
    ["#screen-map", "#screen-story"].forEach(id => {
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
  $("#btn-next").addEventListener("click", () => show("map"));
  $$(".fs-demo [data-screen=story]").forEach(b => b.addEventListener("click", () => resetQuest(), true));

  $$(".fs-node").forEach(n => n.addEventListener("click", () => {
    if (!V.unlocked) { document.documentElement.classList.add("is-gated"); return; }
    const ep = n.dataset.ep;
    const locked = ep !== "1";
    const segs = V.nodeLines(ep, n.dataset.zh, n.dataset.en, locked);
    if (locked) {
      const zh = "先走完第 1 集。「" + n.dataset.zh + "」就在前面等你。";
      const en = "Finish Episode 1 first. “" + n.dataset.en + "” is waiting further on.";
      showToast(isEnLang() ? en : zh + '<span class="fs-en">' + en + "</span>");
      V.speakSegments("node", segs);
      return;
    }
    /* 先換畫面（不自動唸），再唸集名；集名唸完才接小豆與題目，避免互相打斷或交錯 */
    show("story", { auto: false, fresh: true });
    V.speakSegments("node", segs).then(ok => {
      if (ok && V.autoplay && !V.muted && !isShot) autoSpeak("story");
    });
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
    if (V.unlocked && !V.muted) V.speakLine("hint");
  });
  /* 每個錯誤答案各自的回饋：74＝十位個位對調、407＝把 4 個十寫成 400、11＝把十格盤當成一 */
  const ERR = {
    "74":  { line: "err",
             zh: ["再試一次。", "4 和 7 對調就變成 74 了。"],
             en: ["Try again. ", "If you swap 4 and 7, it becomes 74."] },
    "407": { line: "err407",
             zh: ["再試一次。", "4 個十是 40，不是 400。"],
             en: ["Try again. ", "4 tens are 40, not 400."] },
    "11":  { line: "err11",
             zh: ["再試一次。", "4 盤十格是 4 個十，不是 4 個一。"],
             en: ["Try again. ", "4 full ten-frames are 4 tens, not 4 ones."] }
  };
  function setErr(val) {
    const e = ERR[val] || ERR["74"];
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
    if (picked === "47") {
      V.sfx("success");
      if (stars < 1) { stars = 1; renderStars(); }
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
    if (V.unlocked && !V.muted) V.speakLine(line).then(ok => { if (ok && V.autoplay && !V.muted) V.speakLine("hint"); });
  });

  $$(".fs-speak").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!V.unlocked) { document.documentElement.classList.add("is-gated"); return; }
      if (V.muted || btn.disabled) return;
      V.speakLine(btn.getAttribute("data-line"), { button: btn });
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
