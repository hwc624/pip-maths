/* 小豆的童話數學 · 題目圖示（SVG／HTML，沿用方向 A 色票，無外部素材） */
(function (global) {
  const INK = "#241C14", CREAM = "#F7F0E4", GOLD = "#C9A227", GOLDB = "#F0D36A",
        MOSS = "#3E6B4F", TERRA = "#C45C38", FOREST = "#1F3A2E";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const svg = (w, h, body, cls) => '<svg class="' + (cls || "fs-vsvg") + '" viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h + '" aria-hidden="true">' + body + "</svg>";

  /* ——— 小圖示（選項與規律用） ——— */
  function icon(name, size) {
    size = size || 30;
    const S = (b) => '<svg class="fs-icon" viewBox="0 0 40 40" width="' + size + '" height="' + size + '" aria-hidden="true">' + b + "</svg>";
    if (name.indexOf("frac:") === 0) {
      const p = name.split(":"), unequal = p[1].indexOf("u") > 0, n = parseInt(p[1], 10), k = +p[2];
      let b = "", x = 2;
      const W = 36;
      for (let i = 0; i < n; i++) {
        const w = unequal ? (i === 0 ? W * 0.7 : W * 0.3) : W / n;
        b += '<rect x="' + x + '" y="10" width="' + w + '" height="20" fill="' + (i < k ? GOLD : CREAM) + '" stroke="' + INK + '" stroke-width="1.5"/>';
        x += w;
      }
      return '<svg class="fs-icon fs-icon--frac" viewBox="0 0 40 40" width="' + (size * 1.6) + '" height="' + size + '" preserveAspectRatio="none" aria-hidden="true">' + b + "</svg>";
    }
    switch (name) {
      case "box": return S('<path d="M8 14 20 8l12 6v14l-12 6-12-6z" fill="#d9a066" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 14l12 6 12-6M20 20v14" fill="none" stroke="' + INK + '" stroke-width="1.6"/>');
      case "ball": return S('<circle cx="20" cy="20" r="13" fill="' + TERRA + '" stroke="' + INK + '" stroke-width="1.6"/><ellipse cx="15" cy="15" rx="4" ry="3" fill="#fff" opacity=".45"/>');
      case "cyl": return S('<path d="M10 11v18a10 4 0 0 0 20 0V11" fill="#7fa36b" stroke="' + INK + '" stroke-width="1.6"/><ellipse cx="20" cy="11" rx="10" ry="4" fill="#a9c79a" stroke="' + INK + '" stroke-width="1.6"/>');
      case "cone": return S('<path d="M20 5 9 30a11 4 0 0 0 22 0z" fill="' + GOLDB + '" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 30a11 4 0 0 0 22 0" fill="none" stroke="' + INK + '" stroke-width="1.6"/>');
      case "pyr": return S('<path d="M20 5 7 30l13 5 13-5z" fill="#c9a8d8" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/><path d="M20 5v30" stroke="' + INK + '" stroke-width="1.6"/>');
      case "circle": return S('<circle cx="20" cy="20" r="13" fill="#6fa8c9" stroke="' + INK + '" stroke-width="1.6"/>');
      case "square": return S('<rect x="8" y="8" width="24" height="24" fill="' + GOLDB + '" stroke="' + INK + '" stroke-width="1.6"/>');
      case "triangle": return S('<path d="M20 7 33 32H7z" fill="#7fa36b" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/>');
      case "rect": return S('<rect x="5" y="12" width="30" height="16" fill="' + TERRA + '" stroke="' + INK + '" stroke-width="1.6"/>');
      case "star": return S('<path d="M20 6l4 9 10 1-7.5 6.5 2.5 10L20 27l-9 5.5 2.5-10L6 16l10-1z" fill="' + GOLDB + '" stroke="' + INK + '" stroke-width="1.5" stroke-linejoin="round"/>');
    }
    return "";
  }

  const KIND = {
    cookie: '<circle cx="10" cy="10" r="8" fill="#c8915a" stroke="#7a4e2a" stroke-width="1.2"/><circle cx="7" cy="8" r="1.3" fill="#4a2c14"/><circle cx="12" cy="12" r="1.3" fill="#4a2c14"/><circle cx="12" cy="6.5" r="1" fill="#4a2c14"/>',
    apple: '<circle cx="10" cy="11" r="7.5" fill="#c94a3a" stroke="#7a2a20" stroke-width="1.2"/><path d="M10 4c0-2 1-3 2.5-3" stroke="#4a2c14" stroke-width="1.4" fill="none"/><ellipse cx="13" cy="4" rx="2.5" ry="1.3" fill="#5a8a4a"/>',
    bread: '<ellipse cx="10" cy="11" rx="8.5" ry="6.5" fill="#e0b170" stroke="#8a5a28" stroke-width="1.2"/><path d="M6 9l2 3M10 8l2 3M14 9l1.5 2.5" stroke="#8a5a28" stroke-width="1.1"/>',
    flag: '<path d="M5 2v17" stroke="' + INK + '" stroke-width="1.6"/><path d="M5.5 3 17 7 5.5 11z" fill="' + TERRA + '" stroke="#7a2a20" stroke-width="1"/>',
    pod: '<ellipse cx="10" cy="10" rx="8.5" ry="4.5" transform="rotate(-25 10 10)" fill="#7fa36b" stroke="#3e6b4f" stroke-width="1.2"/><circle cx="7" cy="11" r="1.6" fill="#b8d6a2"/><circle cx="10" cy="9.5" r="1.6" fill="#b8d6a2"/><circle cx="13" cy="8" r="1.6" fill="#b8d6a2"/>',
    note: '<circle cx="10" cy="10" r="8.5" fill="' + GOLDB + '" stroke="#8a6a12" stroke-width="1.2"/><path d="M8 14V6l6-1.5v7" stroke="' + INK + '" stroke-width="1.6" fill="none"/><circle cx="7" cy="14" r="2" fill="' + INK + '"/><circle cx="13" cy="11.5" r="2" fill="' + INK + '"/>'
  };
  const item = (kind, cls) => '<svg class="fs-vitem ' + (cls || "") + '" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">' + (KIND[kind] || KIND.cookie) + "</svg>";

  function lab(zh, en) { return '<span class="fs-vlab">' + esc(zh) + (en ? '<span class="fs-en">' + esc(en) + "</span>" : "") + "</span>"; }

  /* ——— 時鐘 ——— */
  function clock(h, m, size) {
    size = size || 104;
    const c = 50;
    let ticks = "";
    for (let i = 1; i <= 12; i++) {
      const a = (i * 30 - 90) * Math.PI / 180;
      ticks += '<text x="' + (c + Math.cos(a) * 36).toFixed(1) + '" y="' + (c + Math.sin(a) * 36 + 4).toFixed(1) + '" text-anchor="middle" font-size="10" font-weight="700" fill="' + INK + '" font-family="Fredoka, sans-serif">' + i + "</text>";
    }
    const ha = ((h % 12) * 30 + m * 0.5 - 90) * Math.PI / 180, ma = (m * 6 - 90) * Math.PI / 180;
    const hand = (a, len, w, col) => '<line x1="' + c + '" y1="' + c + '" x2="' + (c + Math.cos(a) * len).toFixed(1) + '" y2="' + (c + Math.sin(a) * len).toFixed(1) + '" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round"/>';
    return '<svg class="fs-vsvg fs-vclock" viewBox="0 0 100 100" width="' + size + '" height="' + size + '" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="' + CREAM + '" stroke="' + FOREST + '" stroke-width="4"/>' + ticks +
      hand(ma, 34, 3, MOSS) + hand(ha, 22, 5, INK) + '<circle cx="50" cy="50" r="3.5" fill="' + TERRA + '"/></svg>';
  }

  /* ——— 地圖方格（第 11 集） ——— */
  const GRID = [["水井", "Well"], ["大樹", "Tree"], ["山洞", "Cave"], ["兔子石", "Rabbit stone"], ["小豆", "Pip"], ["磨坊", "Mill"], ["籃子", "Basket"], ["花叢", "Flowers"], ["小屋", "Cottage"]];

  function render(v) {
    if (!v) return "";
    switch (v.t) {
      case "eq": return '<div class="fs-equation">' + esc(v.text) + "</div>";
      case "wall": {
        let b = "";
        const row = (y, xs) => xs.forEach(x => { b += '<rect x="' + x + '" y="' + y + '" width="38" height="20" rx="2" fill="#d9a066" stroke="' + INK + '" stroke-width="1.5"/>'; });
        row(46, [10, 50, 90, 130]); row(24, [30, 70, 110]);
        b += '<rect x="50" y="2" width="38" height="20" rx="2" fill="none" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="4 3"/><text x="69" y="17" text-anchor="middle" font-size="14" font-weight="800" fill="#8a6a12" font-family="Fredoka, sans-serif">?</text>';
        return svg(180, 70, b);
      }
      case "shape": {
        const big = icon(v.s, 84);
        return '<div class="fs-vshape">' + big + "</div>";
      }
      case "tags":
        return '<div class="fs-vrow">' + v.items.map(t => '<div class="fs-vtag"><b>' + esc(t[2]) + "</b>" + lab(t[0], t[1]) + "</div>").join("") + "</div>";
      case "money":
        return '<div class="fs-vrow">' + v.items.map(m => /n$/.test(m)
          ? '<span class="fs-vnote">R' + esc(m.replace("n", "")) + "</span>"
          : '<span class="fs-vcoin">R' + esc(m) + "</span>").join("") + "</div>";
      case "seq":
        return '<div class="fs-vrow fs-vseq">' + v.items.map(x => x === "?"
          ? '<span class="fs-vbox fs-vbox--q">?</span>'
          : '<span class="fs-vbox">' + (v.shapes ? icon(x, 26) : esc(x)) + "</span>").join("") + "</div>";
      case "pie": {
        let b = "";
        for (let i = 0; i < v.parts; i++) {
          const a0 = (i / v.parts) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / v.parts) * 2 * Math.PI - Math.PI / 2;
          const x0 = 50 + 40 * Math.cos(a0), y0 = 50 + 40 * Math.sin(a0), x1 = 50 + 40 * Math.cos(a1), y1 = 50 + 40 * Math.sin(a1);
          b += '<path d="M50 50L' + x0.toFixed(1) + " " + y0.toFixed(1) + "A40 40 0 0 1 " + x1.toFixed(1) + " " + y1.toFixed(1) + 'z" fill="' + (i < v.shaded ? GOLD : "#e8cfa0") + '" stroke="' + INK + '" stroke-width="2"/>';
        }
        return svg(100, 100, '<circle cx="50" cy="50" r="44" fill="#c8915a" opacity=".5"/>' + b);
      }
      case "dots": {
        const g = v.groups.map(n => {
          let s = "";
          for (let i = 0; i < n; i++) s += item(v.kind);
          return '<span class="fs-vgroup' + (v.groups.length === 1 ? " fs-vgroup--pile" : "") + '">' + s + "</span>";
        }).join("");
        let extra = "";
        if (v.extra) { let s = ""; for (let i = 0; i < v.extra; i++) s += item(v.kind); extra = '<span class="fs-vgroup fs-vgroup--left">' + s + '<span class="fs-vtiny">剩 left</span></span>'; }
        return '<div class="fs-vrow fs-vdots">' + g + extra + "</div>";
      }
      case "bars": {
        const max = Math.max.apply(null, v.items.map(i => i[2]));
        return '<div class="fs-vbars">' + v.items.map(i => {
          let cells = "";
          for (let k = 0; k < max; k++) cells += '<span class="fs-vcell' + (k < i[2] ? " is-on" : "") + '"' + (k < i[2] ? ' style="background:' + i[3] + '"' : "") + "></span>";
          return '<div class="fs-vbar">' + lab(i[0], i[1]) + '<span class="fs-vcells">' + cells + "</span></div>";
        }).join("") + (v.unit ? '<div class="fs-vtiny">1 格 = 1 ' + esc(v.unit) + "</div>" : "") + "</div>";
      }
      case "bottle": {
        const H = 70, fillH = H * v.fill;
        return svg(80, 100, '<path d="M30 6h20v12l8 8v66H22V26l8-8z" fill="' + CREAM + '" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>' +
          '<rect x="23.5" y="' + (92 - fillH).toFixed(1) + '" width="33" height="' + fillH.toFixed(1) + '" fill="#6fa8c9" opacity=".85"/>' +
          '<line x1="58" y1="' + (92 - H / 2) + '" x2="66" y2="' + (92 - H / 2) + '" stroke="' + TERRA + '" stroke-width="2"/><text x="68" y="' + (92 - H / 2 + 4) + '" font-size="9" font-weight="800" fill="' + TERRA + '" font-family="Nunito, sans-serif">½</text>');
      }
      case "clock":
        return '<div class="fs-vrow">' + '<div class="fs-vclockwrap">' + clock(v.h, v.m) + (v.label ? lab(v.label[0], v.label[1]) : "") + "</div></div>";
      case "clocks":
        return '<div class="fs-vrow">' + v.list.map(c => '<div class="fs-vclockwrap">' + clock(c[0], c[1], 92) + lab(c[2], c[3]) + "</div>").join('<span class="fs-varrow">→</span>') + "</div>";
      case "digital":
        return '<div class="fs-vdigital">' + esc(v.text) + "</div>";
      case "picto":
        return '<div class="fs-vbars">' + v.items.map(i => {
          let s = "";
          for (let k = 0; k < i[2]; k++) s += item("note");
          for (let k = 0; k < (i[3] || 0); k++) s += item("note", "fs-vitem--new");
          return '<div class="fs-vbar">' + lab(i[0], i[1]) + '<span class="fs-vicons">' + s + "</span></div>";
        }).join("") + (v.items.some(i => i[3]) ? '<div class="fs-vtiny">虛線＝多出來的票 · dashed = new votes</div>' : '<div class="fs-vtiny">1 個 = 1 票 · 1 picture = 1 vote</div>') + "</div>";
      case "chart": {
        const W = 210, H = 120, left = 22, bottom = 18, top = 6, step = (H - bottom - top) / v.max, bw = 36;
        let b = "";
        for (let k = 0; k <= v.max; k++) {
          const y = H - bottom - k * step;
          b += '<line x1="' + left + '" y1="' + y.toFixed(1) + '" x2="' + W + '" y2="' + y.toFixed(1) + '" stroke="' + INK + '" stroke-opacity="' + (k === 0 ? ".6" : ".12") + '"/>';
          b += '<text x="' + (left - 5) + '" y="' + (y + 3.5).toFixed(1) + '" text-anchor="end" font-size="9" font-weight="700" fill="' + INK + '" font-family="Nunito, sans-serif">' + k + "</text>";
        }
        v.items.forEach((it, i) => {
          const x = left + 16 + i * 62, h = it[2] * step;
          b += '<rect x="' + x + '" y="' + (H - bottom - h).toFixed(1) + '" width="' + bw + '" height="' + h.toFixed(1) + '" rx="3" fill="' + it[3] + '"/>';
        });
        return '<div class="fs-vchart">' + svg(W, H, b) + '<div class="fs-vchart__labs">' + v.items.map(it => lab(it[0], it[1])).join("") + "</div></div>";
      }
      case "array": {
        let r = "";
        for (let i = 0; i < v.rows; i++) { let s = ""; for (let k = 0; k < v.cols; k++) s += item(v.kind); r += '<div class="fs-varr__row">' + s + "</div>"; }
        return '<div class="fs-varr">' + r + "</div>";
      }
      case "grid": {
        const cells = GRID.map((g, i) => {
          const pip = i === 4;
          const cls = "fs-vgcell" + (pip ? " is-pip" : "") + (v.start === i ? " is-start" : "");
          return '<div class="' + cls + '">' + (pip ? '<img src="assets/pip-portrait.jpg" alt="">' : "") + lab(g[0], g[1]) + "</div>";
        }).join("");
        return '<div class="fs-vgridwrap"><div class="fs-vgrid">' + cells + "</div>" + (v.arrows ? '<div class="fs-varrows" aria-label="箭號 arrows">' + esc(v.arrows) + "</div>" : "") + "</div>";
      }
      case "blocks": {
        let s = "";
        for (let i = 0; i < v.h; i++) s += '<span class="fs-vblk fs-vblk--h">100</span>';
        for (let i = 0; i < v.t10; i++) s += '<span class="fs-vblk fs-vblk--t">10</span>';
        for (let i = 0; i < v.o; i++) s += '<span class="fs-vblk fs-vblk--o">1</span>';
        return '<div class="fs-vrow fs-vblocks">' + s + "</div>" +
          '<div class="fs-vtiny">大箱 chest＝100 · 中袋 bag＝10 · 小金幣 coin＝1' + (v.t10 === 0 ? " · 中袋：0" : "") + "</div>";
      }
      case "nline": {
        const W = 260, x0 = 20, x1 = 240, n = v.to - v.from;
        let b = '<line x1="' + x0 + '" y1="30" x2="' + x1 + '" y2="30" stroke="' + INK + '" stroke-width="2"/>';
        for (let k = 0; k <= n; k++) {
          const x = x0 + (x1 - x0) * k / n, big = k === 0 || k === n;
          b += '<line x1="' + x + '" y1="' + (big ? 20 : 25) + '" x2="' + x + '" y2="' + (big ? 40 : 35) + '" stroke="' + INK + '" stroke-width="' + (big ? 2 : 1.2) + '"/>';
          if (big) b += '<text x="' + x + '" y="54" text-anchor="middle" font-size="12" font-weight="800" fill="' + INK + '" font-family="Fredoka, sans-serif">' + (v.from + k) + "</text>";
        }
        const xm = x0 + (x1 - x0) * (v.mark - v.from) / n;
        b += '<circle cx="' + xm + '" cy="30" r="6" fill="' + TERRA + '"/><text x="' + xm + '" y="14" text-anchor="middle" font-size="12" font-weight="800" fill="' + TERRA + '" font-family="Fredoka, sans-serif">' + v.mark + "</text>";
        return svg(W, 60, b);
      }
    }
    return "";
  }

  global.PipVisuals = { render, icon, clock };
})(window);
