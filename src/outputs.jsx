// outputs.jsx — Score gauge, skill network graph, ranking, evolution chart, evidence transcript
const { useEffect: useEffectO, useRef: useRefO, useState: useStateO, useMemo: useMemoO } = React;

/* ============ Score Gauge ============ */
function ScoreGauge({ t }) {
  const ref = useRefO(null);
  const [val, setVal] = useStateO(0);
  useEffectO(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start;
          const target = 8.4;
          const dur = 1500;
          const step = (t) => {
            if (!start) start = t;
            const p = Math.min(1, (t - start) / dur);
            const e = 1 - Math.pow(1 - p, 3);
            setVal(target * e);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const r = 80;
  const C = 2 * Math.PI * r;
  const offset = C - val / 10 * C;

  return (
    <div ref={ref} className="out-card out-score">
      <div className="head">
        <h4>{t.outputs.score.ttl}</h4>
        <span className="tag-chip">{t.outputs.score.label}</span>
      </div>
      <p className="desc">{t.outputs.score.desc}</p>

      <div className="gauge">
        <svg viewBox="0 0 200 200">
          <circle className="ring-bg" cx="100" cy="100" r={r} />
          <circle
            className="ring"
            cx="100"
            cy="100"
            r={r}
            strokeDasharray={C}
            strokeDashoffset={offset} />
          
        </svg>
        <div className="center">
          <div>
            <div className="n">{val.toFixed(1)}<span className="frac">/10</span></div>
            <div className="l">{t.outputs.score.label}</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--ink-mute)" }}>
        <span>Top 18% · {t === window.I18N.en ? "Sales floor" : "Equipe de vendas"}</span>
        <span style={{ color: "#1b8a4a", fontFamily: "var(--font-mono)" }}>↑ +0.7 (30d)</span>
      </div>
    </div>);

}

/* ============ Skill Graph ============ */
function SkillGraph({ t }) {
  const labels = t === window.I18N.en ?
  ["Approach", "Discovery", "Product", "Objection", "Close", "Empathy", "Brand", "Speed"] :
  ["Abordagem", "Sondagem", "Produto", "Objeção", "Fechamento", "Empatia", "Marca", "Ritmo"];
  const values = [0.92, 0.85, 0.78, 0.71, 0.80, 0.88, 0.82, 0.68];
  const ref = useRefO(null);
  const [seen, setSeen] = useStateO(false);
  useEffectO(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {setSeen(true);io.disconnect();}
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const cx = 260,cy = 200,R = 150;
  const N = labels.length;
  const pts = labels.map((_, i) => {
    const a = i / N * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R, angle: a };
  });
  const valPts = labels.map((_, i) => {
    const a = i / N * Math.PI * 2 - Math.PI / 2;
    const r = R * (seen ? values[i] : 0);
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });

  const ringPath = (rRatio) => {
    return labels.map((_, i) => {
      const a = i / N * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(a) * R * rRatio;
      const y = cy + Math.sin(a) * R * rRatio;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ") + " Z";
  };
  const valPath = valPts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + " Z";

  return (
    <div ref={ref} className="out-card out-graph" style={{ width: "749.328px" }}>
      <div className="head">
        <h4>{t.outputs.graph.ttl}</h4>
        <div style={{ display: "flex", gap: 6 }}>
          <span className="tag-chip">{t === window.I18N.en ? "All stores" : "Todas lojas"}</span>
          <span className="tag-chip accent">{t === window.I18N.en ? "Last 30d" : "Últimos 30d"}</span>
        </div>
      </div>
      <p className="desc">{t.outputs.graph.desc}</p>

      <svg className="skill-graph" viewBox="0 0 520 400" preserveAspectRatio="xMidYMid meet" style={{ width: "699.312px", height: "640px" }}>
        {/* concentric rings */}
        {[0.25, 0.5, 0.75, 1].map((r) =>
        <path key={r} d={ringPath(r)} fill="none" stroke="var(--line-strong)" opacity="0.4" strokeWidth="1" />
        )}
        {/* radial lines */}
        {pts.map((p, i) =>
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--line-strong)" opacity="0.35" />
        )}
        {/* value polygon */}
        <path
          d={valPath}
          fill="color-mix(in oklab, var(--accent) 18%, transparent)"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ transition: "all 1.2s cubic-bezier(.2,.7,.2,1)" }} />
        
        {/* nodes */}
        {valPts.map((p, i) =>
        <g key={i} className="skill-node">
            <circle cx={p.x} cy={p.y} r={seen ? 5 : 0} fill="var(--accent)" style={{ transition: "r .6s" }} />
          </g>
        )}
        {/* labels */}
        {pts.map((p, i) => {
          const a = i / N * Math.PI * 2 - Math.PI / 2;
          const lx = cx + Math.cos(a) * (R + 22);
          const ly = cy + Math.sin(a) * (R + 22);
          const anchor = Math.cos(a) > 0.2 ? "start" : Math.cos(a) < -0.2 ? "end" : "middle";
          return (
            <g key={i}>
              <text
                x={lx} y={ly}
                fontFamily="var(--font-mono)"
                fontSize="10"
                textAnchor={anchor}
                dominantBaseline="middle"
                fill="var(--ink-mute)"
                style={{ letterSpacing: ".05em", textTransform: "uppercase", opacity: seen ? 1 : 0, transition: "opacity .8s", transitionDelay: `${0.2 + i * 0.05}s` }}>
                
                {labels[i]}
              </text>
              <text
                x={lx} y={ly + 12}
                fontFamily="var(--font-display)"
                fontSize="15"
                textAnchor={anchor}
                dominantBaseline="middle"
                fill="var(--ink)"
                style={{ opacity: seen ? 1 : 0, transition: "opacity .8s", transitionDelay: `${0.4 + i * 0.05}s` }}>
                
                {(values[i] * 10).toFixed(1)}
              </text>
            </g>);

        })}
      </svg>
    </div>);

}

/* ============ Ranking ============ */
function Ranking({ t }) {
  const names = t === window.I18N.en ?
  [["AS", "Amanda S.", 9.1, "+0.6"], ["RG", "Renato G.", 8.7, "+0.3"], ["JM", "Júlia M.", 8.5, "+0.2"], ["LP", "Lucas P.", 7.9, "-0.1"], ["FN", "Felipe N.", 7.6, "+0.4"]] :
  [["AS", "Amanda S.", 9.1, "+0.6"], ["RG", "Renato G.", 8.7, "+0.3"], ["JM", "Júlia M.", 8.5, "+0.2"], ["LP", "Lucas P.", 7.9, "-0.1"], ["FN", "Felipe N.", 7.6, "+0.4"]];
  return (
    <div className="out-card out-rank">
      <div className="head">
        <h4>{t.outputs.rank.ttl}</h4>
        <span className="tag-chip">{t === window.I18N.en ? "Loja Pinheiros" : "Loja Pinheiros"}</span>
      </div>
      <p className="desc">{t.outputs.rank.desc}</p>
      <div className="rank-list">
        {names.map(([init, name, sc, dl], i) =>
        <div key={i} className="rank-row">
            <span className="pos">0{i + 1}</span>
            <span className="name">
              <span className="av">{init}</span>
              <span>{name}</span>
            </span>
            <span className="score">{sc.toFixed(1)}</span>
            <span className={"delta " + (dl.startsWith("-") ? "dn" : "")}>{dl}</span>
          </div>
        )}
      </div>
    </div>);

}

/* ============ Evolution chart ============ */
function Evolution({ t }) {
  const points = [6.1, 6.4, 6.3, 6.8, 7.2, 7.0, 7.5, 7.8, 8.0, 8.3, 8.4, 8.5];
  const labels = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12"];
  const W = 600,H = 220,pad = 30;
  const minV = 5,maxV = 10;
  const xs = points.map((_, i) => pad + i / (points.length - 1) * (W - pad * 2));
  const ys = points.map((v) => H - pad - (v - minV) / (maxV - minV) * (H - pad * 2));
  const line = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${ys[i].toFixed(1)}`).join(" ");
  const area = line + ` L${xs[xs.length - 1].toFixed(1)} ${H - pad} L${xs[0].toFixed(1)} ${H - pad} Z`;

  const ref = useRefO(null);
  const [seen, setSeen] = useStateO(false);
  useEffectO(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {setSeen(true);io.disconnect();}
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="out-card out-evol">
      <div className="head">
        <h4>{t.outputs.evol.ttl}</h4>
        <span className="tag-chip accent">Amanda S. · 12 {t === window.I18N.en ? "sessions" : "sessões"}</span>
      </div>
      <p className="desc">{t.outputs.evol.desc}</p>
      <svg className="evol-chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        {/* Y gridlines */}
        {[6, 7, 8, 9, 10].map((v) => {
          const y = H - pad - (v - minV) / (maxV - minV) * (H - pad * 2);
          return (
            <g key={v}>
              <line x1={pad} y1={y} x2={W - pad} y2={y} stroke="var(--line)" strokeDasharray="3 3" />
              <text x={W - pad + 4} y={y + 3} fontFamily="var(--font-mono)" fontSize="9" fill="var(--ink-mute)">{v}.0</text>
            </g>);

        })}
        <path className="area" d={area} style={{ opacity: seen ? 1 : 0, transition: "opacity 1.2s" }} />
        <path
          className="line"
          d={line}
          strokeDasharray="1500"
          strokeDashoffset={seen ? 0 : 1500}
          style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(.2,.7,.2,1)" }} />
        
        {xs.map((x, i) =>
        <circle key={i} cx={x} cy={ys[i]} r={i === xs.length - 1 ? 5 : 3}
        style={{ opacity: seen ? 1 : 0, transition: `opacity .4s ${0.6 + i * 0.08}s` }} />

        )}
        {xs.map((x, i) =>
        <text key={i} x={x} y={H - 8} fontFamily="var(--font-mono)" fontSize="9" fill="var(--ink-mute)" textAnchor="middle">{labels[i]}</text>
        )}
      </svg>
    </div>);

}

/* ============ Evidence transcript ============ */
function Evidence({ t }) {
  const ev = t.outputs.evid;
  return (
    <div className="out-card out-evid">
      <div className="head">
        <h4>{ev.ttl}</h4>
        <span className="tag-chip">{ev.sessionLabel}</span>
      </div>
      <p className="desc">{ev.desc}</p>
      <div className="transcript">
        <div className="t-conv">
          {ev.bubbles.map((b, i) =>
          <div key={i} className={"bubble " + b.who}>
              <span className="lbl">{b.lbl}</span>
              {b.t}
            </div>
          )}
        </div>
        <div className="t-eval">
          {ev.evals.map((e, i) =>
          <div key={i} className="eval-row">
              <div className="head" style={{ marginBottom: 4 }}>
                <span className="crit-name">{e.crit}</span>
                <span className="val">{e.v}<span style={{ fontSize: 14, color: "var(--ink-mute)" }}>/10</span></span>
              </div>
              <p className="quote">"{e.quote}"</p>
              <p className="note">{e.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>);

}

function FormatBanner({ t }) {
  const f = t.outputs.formats;
  return (
    <Reveal className="format-banner" stagger>
      <div className="fb-head">
        <span className="eyebrow no-rule" style={{ fontSize: 11 }}>{f.title}</span>
      </div>
      <div className="fb-grid">
        {f.items.map((it) =>
        <div key={it.k} className="fb-cell">
            <span className="fb-k">{it.k}</span>
            <h5>{it.h}</h5>
            <p>{it.p}</p>
          </div>
        )}
      </div>
    </Reveal>);

}

function Outputs({ t }) {
  return (
    <section className="section outputs" id="outputs">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t.outputs.eyebrow}</span>
          <h2 className="display">{t.outputs.h}</h2>
          <p>{t.outputs.sub}</p>
        </Reveal>

        <FormatBanner t={t} />

        <Reveal className="outputs-grid" stagger>
          <ScoreGauge t={t} />
          <SkillGraph t={t} />
          <Ranking t={t} />
          <Evolution t={t} />
          <Evidence t={t} />
        </Reveal>
      </div>
    </section>);

}

window.Outputs = Outputs;