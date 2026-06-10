// how.jsx — Scroll-driven 4-step explanation with synchronized stage on the right
const { useEffect: useEffectHW, useRef: useRefHW, useState: useStateHW } = React;

function HowItWorks({ t }) {
  const [active, setActive] = useStateHW(0);
  const [progress, setProgress] = useStateHW(0);
  const sectionRef = useRefHW(null);

  useEffectHW(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height - vh;
      const scrolled = Math.min(total, Math.max(0, -r.top));
      const p = total > 0 ? scrolled / total : 0;
      const stepCount = 4;
      const stepP = p * stepCount;
      const idx = Math.min(stepCount - 1, Math.floor(stepP));
      const within = stepP - idx;
      setActive(idx);
      setProgress(Math.min(1, within));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="section how"
      id="how"
      ref={sectionRef}
      style={{ minHeight: "320vh" }}>
      
      <div style={{ position: "sticky", top: 0, paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <Reveal className="section-head left">
            <span className="eyebrow">{t.how.eyebrow}</span>
            <h2 className="display">{t.how.h}</h2>
            <p style={{ width: "1200px" }}>{t.how.sub}</p>
          </Reveal>

          <div className="how-rail">
            <div className="how-steps">
              {t.how.steps.map((s, i) =>
              <div
                key={i}
                className={"how-step " + (i === active ? "active" : "")}
                onClick={() => {
                  // scroll to that step
                  const el = sectionRef.current;
                  if (!el) return;
                  const r = el.getBoundingClientRect();
                  const total = r.height - window.innerHeight;
                  const target = el.offsetTop + total * (i + 0.05) / 4;
                  window.scrollTo({ top: target, behavior: "smooth" });
                }}>
                
                  <div className="step-n">{s.n}</div>
                  <div>
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                    <div
                    className="progress"
                    style={{ "--p": i === active ? `${(progress * 100).toFixed(1)}%` : i < active ? "100%" : "0%" }} />
                  
                  </div>
                </div>
              )}
            </div>

            <div className="how-stage">
              <HowFrame1 t={t} show={active === 0} progress={active === 0 ? progress : active > 0 ? 1 : 0} />
              <HowFrame2 t={t} show={active === 1} progress={active === 1 ? progress : active > 1 ? 1 : 0} />
              <HowFrame3 t={t} show={active === 2} progress={active === 2 ? progress : active > 2 ? 1 : 0} />
              <HowFrame4 t={t} show={active === 3} progress={active === 3 ? progress : active > 3 ? 1 : 0} />
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* Frame 1 — Scenario editor */
function HowFrame1({ t, show, progress }) {
  const rows = t.how.frame.bRows;
  return (
    <div className={"how-frame " + (show ? "show" : "")}>
      <div className="frame-head">
        <span className="ttl">{t.how.frame.scenarioTtl}</span>
        <span className="tag-chip"><span className="dot" />{t.how.frame.scenarioDraft}</span>
      </div>
      <div className="builder-rows">
        {rows.map(([lbl, chips], i) => {
          const visible = progress * rows.length > i;
          return (
            <div key={lbl} className="b-row" style={{ opacity: visible ? 1 : 0.25, transform: visible ? "translateX(0)" : "translateX(-6px)", transition: "opacity .4s, transform .4s" }}>
              <span className="lbl">{lbl}</span>
              <span className="val">
                {chips.map((c, j) =>
                <span key={c} className={"chip " + (j === 0 ? "on" : "")}>{c}</span>
                )}
              </span>
            </div>);

        })}
      </div>
      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", letterSpacing: ".06em" }}>

        </span>
        <span className="btn btn-primary" style={{ padding: "8px 14px", fontSize: 12.5, opacity: "0" }}>

        </span>
      </div>
    </div>);

}

/* Frame 2 — AI conversation playing live */
function HowFrame2({ t, show, progress }) {
  // Animate showing successive bubbles
  const bubbles = t.outputs.evid.bubbles;
  const shown = Math.ceil(progress * bubbles.length);
  return (
    <div className={"how-frame " + (show ? "show" : "")}>
      <div className="frame-head">
        <span className="ttl">AI persona · live</span>
        <span className="tag-chip accent"><span className="dot" />ON-AIR</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, overflow: "hidden" }}>
        {bubbles.slice(0, shown).map((b, i) =>
        <div key={i} className={"bubble " + b.who} style={{ animationDelay: `${i * 0.05}s` }}>
            <span className="lbl">{b.lbl}</span>
            {b.t}
          </div>
        )}
      </div>
      <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="sim-wave" style={{ height: 14 }}>
          {Array.from({ length: 7 }).map((_, i) => <i key={i} />)}
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)" }}>00:42 / 15:00</span>
      </div>
    </div>);

}

/* Frame 3 — Employee portal */
function HowFrame3({ t, show, progress }) {
  return (
    <div className={"how-frame " + (show ? "show" : "")}>
      <div className="frame-head">
        <span className="ttl">PORTAL COLABORADOR · SESSÃO #1284</span>
        <span className="tag-chip"><span className="dot" />{t === window.I18N.en ? "Start session" : "Iniciar sessão"}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ padding: 16, background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 12 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-mute)", letterSpacing: ".08em", textTransform: "uppercase" }}>BRIEFING</div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "8px 0 12px", fontWeight: 400, letterSpacing: "-0.01em" }}>Vendas · Tênis esportivo</h4>
          <p style={{ fontSize: 12.5, color: "var(--ink-mute)", margin: 0, lineHeight: 1.5 }}>
            Cliente entrando na loja, indeciso. Sua missão: sondar necessidade, recomendar e fechar.
          </p>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
            {["Duração: 15 min", "Modo: chat ou voz", "Avaliado por rubrica"].map((x) =>
            <div key={x} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--ink-2)" }}>
                <span style={{ color: "var(--accent)" }}>✓</span> {x}
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: 16, background: "var(--ink)", color: "var(--paper-2)", borderRadius: 12, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.7, letterSpacing: ".08em", textTransform: "uppercase" }}>INICIAR</div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 28, margin: "8px 0 12px", fontWeight: 400, lineHeight: 1.1 }}>
              Comece a sessão
            </h4>
            <p style={{ fontSize: 12.5, opacity: 0.75, margin: 0 }}>
              Você ficará frente a frente com a IA. Comportamento natural — vai estar tudo gravado.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button style={{ padding: "10px 14px", background: "var(--paper-2)", color: "var(--ink)", border: 0, borderRadius: 999, fontSize: 12.5, fontWeight: 500 }}>
              Chat
            </button>
            <button style={{ padding: "10px 14px", background: "transparent", color: "var(--paper-2)", border: "1px solid color-mix(in oklab, var(--paper-2) 30%, transparent)", borderRadius: 999, fontSize: 12.5, fontWeight: 500 }}>🎙 Voz

            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "auto", paddingTop: 16 }}>
        <div style={{ height: 2, background: "var(--line-strong)", borderRadius: 2, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, width: `${progress * 100}%`, background: "var(--accent)", transition: "width .3s" }} />
        </div>
        <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>
          {t === window.I18N.en ? "Starting" : "Iniciando"} · {Math.round(progress * 100)}%
        </div>
      </div>
    </div>);

}

/* Frame 4 — Final score */
function HowFrame4({ t, show, progress }) {
  const rows = t.how.frame.critRows;
  const avg = Math.round(rows.reduce((a, [, v]) => a + v, 0) / rows.length);
  return (
    <div className={"how-frame " + (show ? "show" : "")}>
      <div className="frame-head">
        <span className="ttl">{t.how.frame.scoreTtl}</span>
        <span className="tag-chip accent"><span className="dot" />AVALIADO</span>
      </div>
      <div className="score-final">
        <div className="score-big">
          <div className="l">{t.how.frame.scoreLabel}</div>
          <div className="n">
            {(progress * (avg / 10)).toFixed(1)}<span className="frac">/10</span>
          </div>
          <div style={{ marginTop: "auto", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>
            Top 18% · {rows.length} critérios
          </div>
        </div>
        <div className="crit">
          {rows.map(([lbl, v], i) => {
            const shown = progress * rows.length > i;
            return (
              <div key={lbl} className="crit-row">
                <span style={{ fontSize: 13 }}>{lbl}</span>
                <div className="b">
                  <i style={{ width: shown ? `${v}%` : "0%" }} />
                </div>
                <span className="v">{shown ? v : "—"}</span>
              </div>);

          })}
        </div>
      </div>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)" }}>
          5 evidências · 2 recomendações
        </span>
        <span className="btn-link" style={{ fontSize: 12.5 }}>

        </span>
      </div>
    </div>);

}

window.HowItWorks = HowItWorks;