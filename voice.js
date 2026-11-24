/* 小豆的童話數學 · 示範語音層
   瀏覽器 SpeechSynthesis 示範，非正式錄音系統。
   聲線目標：卡通小女孩（約 8–10 歲），明亮、溫暖、清楚。 */

(function (global) {
  const BASE = { pitch: 1.5, rate: 0.9 };
  const TONE = {
    calm:     { pitch: 1.45, rate: 0.90, pause: 220 },
    hint:     { pitch: 1.38, rate: 0.78, pause: 280 },
    question: { pitch: 1.62, rate: 0.86, pause: 240 },
    excited:  { pitch: 1.58, rate: 1.05, pause: 160 }
  };

  const LINES = {
    gate: {
      zh: [
        { text: "你好，我是小豆！", tone: "excited" },
        { text: "點一下開始，", tone: "calm" },
        { text: "我們一起走進童話數學谷。", tone: "calm" }
      ],
      en: [
        { text: "Hi, I'm Pip!", tone: "excited" },
        { text: "Tap to start,", tone: "calm" },
        { text: "and we'll go into Fairytale Maths Valley.", tone: "calm" }
      ]
    },
    mapIntro: {
      zh: [
        { text: "歡迎來到童話數學谷。", tone: "excited" },
        { text: "選一條小路，", tone: "calm" },
        { text: "開始第 1 集吧！", tone: "excited" }
      ],
      en: [
        { text: "Welcome to Fairytale Maths Valley.", tone: "excited" },
        { text: "Pick a path,", tone: "calm" },
        { text: "and start Episode 1!", tone: "excited" }
      ]
    },
    pipHint: {
      zh: [
        { text: "先數幾個「十」，", tone: "calm" },
        { text: "再數剩下的「一」！", tone: "excited" }
      ],
      en: [
        { text: "Count the tens first,", tone: "calm" },
        { text: "then the ones!", tone: "excited" }
      ]
    },
    quest: {
      zh: [
        { text: "四盤十格再加七顆，", tone: "calm" },
        { text: "一共幾顆？", tone: "question" }
      ],
      en: [
        { text: "Four full ten-frames plus seven berries.", tone: "calm" },
        { text: "How many in all?", tone: "question" }
      ]
    },
    hint: {
      zh: [
        { text: "想一想：", tone: "hint" },
        { text: "四個十是四十，", tone: "hint" },
        { text: "再加七個一，就是四十七。", tone: "hint" },
        { text: "不要只把四和七排在一起，", tone: "hint" },
        { text: "也不要把四個十寫成四百。", tone: "hint" }
      ],
      en: [
        { text: "Think about it.", tone: "hint" },
        { text: "Four tens are forty,", tone: "hint" },
        { text: "plus seven ones is forty-seven.", tone: "hint" },
        { text: "Don't swap them to seventy-four,", tone: "hint" },
        { text: "and don't write four hundred and seven.", tone: "hint" }
      ]
    },
    err: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "四和七對調，就變成七十四了。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "If you swap four and seven, it becomes seventy-four.", tone: "hint" }
      ]
    },
    /* 依孩子選的錯誤答案給對應提示（聲線、語氣參數與 err 相同） */
    err407: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "四個十是四十，不是四百。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Four tens are forty, not four hundred.", tone: "hint" }
      ]
    },
    err11: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "四盤十格是四個十，不是四個一。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Four full ten-frames are four tens, not four ones.", tone: "hint" }
      ]
    },
    /* ——— 第 1 集 第 2–4 題（舉一反三：換情境、換表示法、反過來問） ——— */
    quest2: {
      zh: [
        { text: "三盤十格再加六顆蛋，", tone: "calm" },
        { text: "一共幾顆？", tone: "question" }
      ],
      en: [
        { text: "Three full ten-frames plus six eggs.", tone: "calm" },
        { text: "How many in all?", tone: "question" }
      ]
    },
    hint2: {
      zh: [
        { text: "想一想：", tone: "hint" },
        { text: "三個十是三十，", tone: "hint" },
        { text: "再加六個一，就是三十六。", tone: "hint" }
      ],
      en: [
        { text: "Think about it.", tone: "hint" },
        { text: "Three tens are thirty,", tone: "hint" },
        { text: "plus six ones is thirty-six.", tone: "hint" }
      ]
    },
    err2swap: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "三和六對調，就變成六十三了。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "If you swap three and six, it becomes sixty-three.", tone: "hint" }
      ]
    },
    err2hund: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "三個十是三十，不是三百。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Three tens are thirty, not three hundred.", tone: "hint" }
      ]
    },
    err2ones: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "三盤十格是三個十，不是三個一。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Three full ten-frames are three tens, not three ones.", tone: "hint" }
      ]
    },
    win2: {
      zh: [
        { text: "答對了！", tone: "excited" },
        { text: "三個十加六個一，一共是三十六。", tone: "calm" },
        { text: "得到第二顆星星！", tone: "excited" }
      ],
      en: [
        { text: "You did it!", tone: "excited" },
        { text: "Three tens and six ones make thirty-six.", tone: "calm" },
        { text: "You earned your second star!", tone: "excited" }
      ]
    },
    quest3: {
      zh: [
        { text: "四十加七，", tone: "calm" },
        { text: "等於多少？", tone: "question" }
      ],
      en: [
        { text: "Forty plus seven.", tone: "calm" },
        { text: "What does it make?", tone: "question" }
      ]
    },
    hint3: {
      zh: [
        { text: "想一想：", tone: "hint" },
        { text: "四十是四個十，", tone: "hint" },
        { text: "七是七個一，", tone: "hint" },
        { text: "十位寫四，個位寫七。", tone: "hint" }
      ],
      en: [
        { text: "Think about it.", tone: "hint" },
        { text: "Forty is four tens,", tone: "hint" },
        { text: "seven is seven ones,", tone: "hint" },
        { text: "so four goes in the tens place and seven in the ones place.", tone: "hint" }
      ]
    },
    err3join: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "四十加七，不是把四十和七接在一起寫。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Don't just write forty and seven side by side.", tone: "hint" }
      ]
    },
    err3swap: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "十位是四，不是七。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "The tens digit is four, not seven.", tone: "hint" }
      ]
    },
    err3ones: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "四十是四個十，不是四。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Forty is four tens, not four.", tone: "hint" }
      ]
    },
    win3: {
      zh: [
        { text: "答對了！", tone: "excited" },
        { text: "四十加七等於四十七，就是四個十和七個一。", tone: "calm" },
        { text: "得到第三顆星星！", tone: "excited" }
      ],
      en: [
        { text: "You did it!", tone: "excited" },
        { text: "Forty plus seven makes forty-seven: four tens and seven ones.", tone: "calm" },
        { text: "You earned your third star!", tone: "excited" }
      ]
    },
    quest4: {
      zh: [
        { text: "五捆木頭，每捆十根，", tone: "calm" },
        { text: "再加三根，", tone: "calm" },
        { text: "一共幾根？", tone: "question" }
      ],
      en: [
        { text: "Five bundles of ten logs,", tone: "calm" },
        { text: "plus three more.", tone: "calm" },
        { text: "How many in all?", tone: "question" }
      ]
    },
    hint4: {
      zh: [
        { text: "想一想：", tone: "hint" },
        { text: "五捆是五個十，就是五十，", tone: "hint" },
        { text: "再加三根，就是五十三。", tone: "hint" }
      ],
      en: [
        { text: "Think about it.", tone: "hint" },
        { text: "Five bundles are five tens. That's fifty,", tone: "hint" },
        { text: "plus three more is fifty-three.", tone: "hint" }
      ]
    },
    err4swap: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "五和三對調，就變成三十五了。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "If you swap five and three, it becomes thirty-five.", tone: "hint" }
      ]
    },
    err4hund: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "五捆是五個十，是五十，不是五百。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Five bundles are five tens. That's fifty, not five hundred.", tone: "hint" }
      ]
    },
    err4ones: {
      zh: [
        { text: "再試一次。", tone: "calm" },
        { text: "每捆有十根，五捆是五個十，不是五個一。", tone: "hint" }
      ],
      en: [
        { text: "Try again.", tone: "calm" },
        { text: "Each bundle has ten logs, so five bundles are five tens, not five ones.", tone: "hint" }
      ]
    },
    win4: {
      zh: [
        { text: "答對了！", tone: "excited" },
        { text: "五個十加三個一，一共是五十三。", tone: "calm" },
        { text: "第一集完成，三顆星都拿到了！", tone: "excited" }
      ],
      en: [
        { text: "You did it!", tone: "excited" },
        { text: "Five tens and three ones make fifty-three.", tone: "calm" },
        { text: "Episode one complete. You have all three stars!", tone: "excited" }
      ]
    },
    win: {
      zh: [
        { text: "答對了！", tone: "excited" },
        { text: "四個十加七個一，一共是四十七。", tone: "calm" },
        { text: "得到一顆星星！", tone: "excited" }
      ],
      en: [
        { text: "You did it!", tone: "excited" },
        { text: "Four tens and seven ones make forty-seven.", tone: "calm" },
        { text: "You earned one star!", tone: "excited" }
      ]
    }
  };

  const FEMALE_RE = /female|woman|girl|samantha|karen|moira|tessa|victoria|zira|hazel|susan|linda|fiona|kate|serena|allison|ava|susan|salli|ivy|joanna|kendra|kimberly|salli|emily|lisa|ting[- ]?ting|xiao(xiao|yi|meng|han)|mei[- ]?jia|hanhan|ya?ting|hsiao|xiaoyu|google 國語|google.*mandarin|microsoft huihui|microsoft yaoyao|microsoft hanhan|microsoft xiaoxiao|meijia|女/;
  const MALE_RE = /male|\bman\b|david|daniel|george|thomas|arthur|james|mark|ravi|lee|yunyang|yunjian|kangkang|changhua|yunxi|\bguy\b|男/;

  function isFemaleVoice(v) {
    const n = ((v && v.name) || "") + " " + (v.gender || "");
    const s = n.toLowerCase();
    if (FEMALE_RE.test(s) || /女/.test(n)) return true;
    if (MALE_RE.test(s) || /男/.test(n)) return false;
    return null; // unknown
  }

  function langScore(v, wanted) {
    const lang = (v.lang || "").replace("_", "-").toLowerCase();
    let best = -1;
    wanted.forEach((code, i) => {
      const c = code.toLowerCase();
      if (lang === c) best = Math.max(best, 100 - i * 10);
      else if (lang.startsWith(c.split("-")[0]) && c.length === 2 && lang.startsWith(c)) best = Math.max(best, 80 - i * 10);
      else if (lang.split("-")[0] === c.split("-")[0]) best = Math.max(best, 50 - i * 5);
    });
    return best;
  }

  /**
   * 挑選卡通小女孩聲線。
   * 中文優先 zh-TW，英文優先 en-ZA，再 en-GB，再其他 en。
   * 一律優先女聲；找不到女聲再退到該語言任一聲音，最後才用預設聲。
   */
  function pickGirlVoice(voices, langKey) {
    const wanted = langKey === "en"
      ? ["en-ZA", "en-GB", "en-AU", "en-IE", "en-US", "en-IN", "en"]
      : ["zh-TW", "zh-HK", "zh-CN", "cmn-Hant", "cmn", "zh"];
    const list = Array.from(voices || []);
    if (!list.length) return { voice: null, reason: "no-voices" };

    function score(v) {
      const ls = langScore(v, wanted);
      if (ls < 0) return -1;
      const sex = isFemaleVoice(v);
      const sexBonus = sex === true ? 40 : sex === false ? -30 : 0;
      return ls + sexBonus;
    }

    const ranked = list.map(v => ({ v, s: score(v) })).filter(x => x.s >= 0).sort((a, b) => b.s - a.s);
    if (ranked.length) {
      const top = ranked[0];
      return {
        voice: top.v,
        reason: isFemaleVoice(top.v) === true ? "female-lang" : (isFemaleVoice(top.v) === false ? "male-fallback" : "unknown-gender-lang"),
        score: top.s
      };
    }
    const anyFemale = list.find(v => isFemaleVoice(v) === true);
    if (anyFemale) return { voice: anyFemale, reason: "female-any-lang" };
    return { voice: list[0], reason: "first-available" };
  }

  function getVoicesSafe() {
    if (!global.speechSynthesis) return [];
    return speechSynthesis.getVoices() || [];
  }

  const api = {
    LINES,
    supported: typeof global.speechSynthesis === "function" || !!(global.speechSynthesis),
    unlocked: false,
    muted: false,
    sfxOn: true,
    autoplay: true,
    rateMode: "normal", // slow | normal
    lang: "zh", // zh | en
    voices: [],
    picked: { zh: null, en: null },
    pickInfo: { zh: null, en: null },
    queue: Promise.resolve(),
    currentUtter: null,
    cancelled: false,
    seq: 0, // 每次 cancel／新播放都 +1，舊的播放鏈看到編號不同就停
    audioCtx: null
  };

  api.hasEngine = function () {
    return typeof global.SpeechSynthesisUtterance === "function" && !!global.speechSynthesis;
  };

  api.refreshVoices = function () {
    api.voices = getVoicesSafe();
    api.pickInfo.zh = pickGirlVoice(api.voices, "zh");
    api.pickInfo.en = pickGirlVoice(api.voices, "en");
    api.picked.zh = api.pickInfo.zh.voice;
    api.picked.en = api.pickInfo.en.voice;
    return api.pickInfo;
  };

  api.status = function () {
    if (!api.hasEngine()) return "no-engine";
    if (!api.voices.length) return "no-voices";
    const p = api.picked[api.lang];
    if (!p) return "no-voice-for-lang";
    return "ok";
  };

  api.unlock = function () {
    api.unlocked = true;
    try {
      if (!api.audioCtx) api.audioCtx = new (global.AudioContext || global.webkitAudioContext)();
      if (api.audioCtx && api.audioCtx.state === "suspended") api.audioCtx.resume();
    } catch (e) {}
    if (api.hasEngine()) {
      try {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(" ");
        u.volume = 0;
        u.rate = 2;
        speechSynthesis.speak(u);
        speechSynthesis.cancel();
      } catch (e) {}
      api.refreshVoices();
    }
    document.documentElement.classList.remove("is-gated");
  };

  function rateMul() { return api.rateMode === "slow" ? 0.78 : 1; }

  function toneOf(seg, isLastOfQuestion) {
    const t = TONE[seg.tone] || TONE.calm;
    let pitch = t.pitch;
    let rate = t.rate * rateMul();
    if (seg.tone === "question" && isLastOfQuestion) pitch = Math.min(1.75, pitch + 0.08);
    pitch = Math.max(0.8, Math.min(2, pitch));
    rate = Math.max(0.5, Math.min(1.4, rate));
    return { pitch, rate, pause: t.pause };
  }

  function clearHighlights() {
    document.querySelectorAll(".fs-say.is-speaking").forEach(el => el.classList.remove("is-speaking"));
    document.querySelectorAll(".fs-speak.is-playing").forEach(el => {
      el.classList.remove("is-playing");
      el.setAttribute("aria-pressed", "false");
    });
  }

  function highlight(lineId, index) {
    document.querySelectorAll('.fs-say.is-speaking').forEach(el => el.classList.remove("is-speaking"));
    if (lineId == null) return;
    const langSel = api.lang === "en" ? ".fs-say--en" : ".fs-say--zh";
    document.querySelectorAll('[data-line="' + lineId + '"] ' + langSel + '[data-i="' + index + '"]').forEach(el => {
      el.classList.add("is-speaking");
    });
  }

  api.cancel = function () {
    api.seq++;
    api.cancelled = true;
    try { if (api.hasEngine()) speechSynthesis.cancel(); } catch (e) {}
    api.currentUtter = null;
    clearHighlights();
    api.queue = Promise.resolve();
  };

  function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  function speakSegment(text, pitch, rate, voice, langCode) {
    return new Promise((resolve) => {
      if (!api.hasEngine() || api.muted || !text) { resolve(); return; }
      const u = new SpeechSynthesisUtterance(text);
      u.voice = voice || null;
      u.lang = langCode;
      u.pitch = pitch;
      u.rate = rate;
      u.volume = 1;
      api.currentUtter = u;
      u.onend = () => { api.currentUtter = null; resolve(); };
      u.onerror = () => { api.currentUtter = null; resolve(); };
      try { speechSynthesis.speak(u); }
      catch (e) { api.currentUtter = null; resolve(); }
    });
  }

  /**
   * 把台詞拆成短句，依語氣標記分段送給 SpeechSynthesis，
   * 問句尾段升調、驚喜稍快、提示放慢，句間停頓 150–300ms。
   */
  /* 回傳 Promise<boolean>：整段唸完為 true；被中止（換頁、換語言、靜音、改播別句）為 false */
  api.speakLine = function (lineId, opts) {
    opts = opts || {};
    const segs = opts.segments || (LINES[lineId] && LINES[lineId][api.lang]);
    if (!segs || !segs.length) return Promise.resolve(false);
    if (api.muted) return Promise.resolve(false);
    if (!api.unlocked && !opts.force) return Promise.resolve(false);
    if (!api.hasEngine()) return Promise.resolve(false);
    if (!api.voices.length) api.refreshVoices();
    if (!api.voices.length) return Promise.resolve(false); // 沒有聲音時不唸，也不留下卡住的高亮

    api.cancel();
    api.cancelled = false;
    const my = api.seq;
    const alive = () => my === api.seq && !api.muted;
    const btn = opts.button || document.querySelector('.fs-speak[data-line="' + lineId + '"]');
    if (btn) {
      btn.classList.add("is-playing");
      btn.setAttribute("aria-pressed", "true");
    }

    const voice = api.picked[api.lang];
    const langCode = api.lang === "en"
      ? ((voice && voice.lang) || "en-GB")
      : ((voice && voice.lang) || "zh-TW");

    const lastQ = [...segs].reverse().findIndex(s => s.tone === "question");
    const lastQIndex = lastQ >= 0 ? segs.length - 1 - lastQ : -1;

    let chain = Promise.resolve();
    segs.forEach((seg, i) => {
      chain = chain.then(() => {
        if (!alive()) return;
        highlight(lineId, i);
        const t = toneOf(seg, i === lastQIndex);
        return speakSegment(seg.text, t.pitch, t.rate, voice, langCode).then(() => {
          if (!alive()) return;
          const pause = Math.max(150, Math.min(300, Math.round(t.pause * (api.rateMode === "slow" ? 1.2 : 1))));
          if (i < segs.length - 1) return wait(pause);
        });
      });
    });
    return chain.then(() => {
      if (!alive()) return false;
      clearHighlights();
      return true;
    });
  };

  api.speakSegments = function (lineId, segments, button) {
    return api.speakLine(lineId, { segments, button });
  };

  api.nodeLines = function (ep, zhName, enName, locked) {
    if (locked === "soon") {
      if (api.lang === "en") return [
        { text: "Episode " + ep + ", " + enName + ".", tone: "calm" },
        { text: "This episode is still being made.", tone: "hint" },
        { text: "Coming soon!", tone: "excited" }
      ];
      return [
        { text: "第 " + ep + " 集，" + zhName + "。", tone: "calm" },
        { text: "這一集還在準備中，", tone: "hint" },
        { text: "很快就能玩了！", tone: "excited" }
      ];
    }
    if (api.lang === "en") {
      if (locked) return [
        { text: "Episode " + ep + ", " + enName + ".", tone: "calm" },
        { text: "It's still locked.", tone: "hint" },
        { text: "Finish Episode 1 first.", tone: "hint" }
      ];
      return [
        { text: "Episode " + ep + ",", tone: "calm" },
        { text: enName + ".", tone: "excited" },
        { text: "Let's go!", tone: "excited" }
      ];
    }
    if (locked) return [
      { text: "第 " + ep + " 集，" + zhName + "。", tone: "calm" },
      { text: "這關還沒解鎖。", tone: "hint" },
      { text: "先走完第 1 集吧。", tone: "hint" }
    ];
    return [
      { text: "第 " + ep + " 集，", tone: "calm" },
      { text: zhName + "。", tone: "excited" },
      { text: "開始吧！", tone: "excited" }
    ];
  };

  /* 示範用 WebAudio 合成音效（無版權素材）。正式版時機見 SPEC 第 11 節。 */
  function beep(freq, dur, type, gainVal, when) {
    const ctx = api.audioCtx;
    if (!ctx || !api.sfxOn || api.muted) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(gainVal, when + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0008, when + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(when);
    o.stop(when + dur + 0.02);
  }

  api.sfx = function (kind) {
    if (!api.sfxOn || api.muted) return;
    try {
      if (!api.audioCtx) api.audioCtx = new (global.AudioContext || global.webkitAudioContext)();
      if (api.audioCtx.state === "suspended") api.audioCtx.resume();
    } catch (e) { return; }
    const t = api.audioCtx.currentTime + 0.02;
    if (kind === "success") {
      beep(523.25, 0.14, "triangle", 0.09, t);
      beep(659.25, 0.14, "triangle", 0.09, t + 0.11);
      beep(783.99, 0.28, "triangle", 0.11, t + 0.22);
    } else if (kind === "error") {
      beep(246.94, 0.16, "sine", 0.07, t);
      beep(196.00, 0.22, "sine", 0.06, t + 0.14);
    }
  };

  api.pickGirlVoice = pickGirlVoice;

  if (global.speechSynthesis) {
    speechSynthesis.addEventListener("voiceschanged", () => api.refreshVoices());
    api.refreshVoices();
  }

  global.PipVoice = api;
})(window);
