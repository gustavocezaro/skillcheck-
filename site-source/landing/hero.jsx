// hero.jsx — Hero with 3 selectable variants:
//   "chat"     : live AI chat simulation (default)
//   "metrics"  : measurement-focused (dashboard preview)
//   "personas" : configurable personas (rotating cards)
const { useEffect: useEffectH, useRef: useRefH, useState: useStateH, useMemo: useMemoH } = React;

/* -----------------------------------------------------------
   HERO COPY
   ----------------------------------------------------------- */
function HeroCopy({ t, variant }) {
  const v = t.hero.variants[variant];
  return (
    <Reveal className="hero-copy" stagger>
      <span className="eyebrow" style={{ height: "0px", width: "0px", opacity: "0" }}>{t.hero.eyebrow}</span>
      <h1 className="display">
        {v.title_a} <span className="accent-word">{v.title_em}</span>
        {v.title_b}
      </h1>
      <p className="lede">{v.lede}</p>
      <div className="hero-ctas">
        <a className="btn btn-primary" href="https://hub.tevon.com.br" target="_blank" rel="noopener noreferrer">
          {t.hero.ctaPrimary}
          <span className="arr">→</span>
        </a>
        <a className="btn btn-ghost" href="#how">
          {t.hero.ctaGhost}
        </a>
      </div>
      <div className="hero-meta">
        <div className="stat"><div className="n">{t.hero.stat1n}</div><div className="l">{t.hero.stat1l}</div></div>
        <div className="stat"><div className="n">{t.hero.stat2n}</div><div className="l">{t.hero.stat2l}</div></div>
        <div className="stat"><div className="n">{t.hero.stat3n}</div><div className="l">{t.hero.stat3l}</div></div>
      </div>
    </Reveal>);

}

/* -----------------------------------------------------------
   VARIANT A — Live Chat Simulation
   ----------------------------------------------------------- */
function HeroChat({ t }) {
  const [mode, setMode] = useStateH("text"); // user-controllable; no auto-cycle (avoids overlap)
  const [phase, setPhase] = useStateH("ai-typing");
  const [aiText, setAiText] = useStateH("");
  const [userText, setUserText] = useStateH("");
  const [score, setScore] = useStateH(0);
  const cancelRef = useRefH({ cancelled: false });

  useEffectH(() => {
    cancelRef.current.cancelled = true;
    cancelRef.current = { cancelled: false };
    const c = cancelRef.current;

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const typeOut = async (text, set, speed = 22) => {
      for (let i = 1; i <= text.length; i++) {
        if (c.cancelled) return;
        set(text.slice(0, i));
        const ch = text[i - 1];
        const s = ch === " " ? speed * 0.4 : speed + Math.random() * 18;
        await wait(s);
      }
    };

    const loop = async () => {
      while (!c.cancelled) {
        setAiText("");setUserText("");setScore(0);setPhase("ai-typing");
        await wait(1100);if (c.cancelled) return;
        setPhase("ai-msg");
        await typeOut(t.sim.msgAi, setAiText, 18);if (c.cancelled) return;
        await wait(900);
        setPhase("user-typing");await wait(900);if (c.cancelled) return;
        setPhase("user-msg");
        await typeOut(t.sim.msgUser, setUserText, 22);if (c.cancelled) return;
        await wait(500);
        setPhase("scored");
        const target = 85;
        const start = performance.now();
        const dur = 1000;
        await new Promise((res) => {
          const step = (now) => {
            if (c.cancelled) return res();
            const p = Math.min(1, (now - start) / dur);
            const e = 1 - Math.pow(1 - p, 3);
            setScore(target * e);
            if (p < 1) requestAnimationFrame(step);else res();
          };
          requestAnimationFrame(step);
        });
        await wait(2800);
      }
    };
    loop();
    return () => {c.cancelled = true;};
  }, [t.sim.msgAi, t.sim.msgUser]);

  const showAi = phase === "ai-msg" || phase === "user-typing" || phase === "user-msg" || phase === "scored";
  const showUser = phase === "user-msg" || phase === "scored";
  const aiTyping = phase === "ai-typing";
  const userTyping = phase === "user-typing";
  const scoreNum = (score / 10).toFixed(1);

  return (
    <div className="sim-frame">
      <div className="sim-header">
        <div className="sim-persona">
          <span className="av">M</span>
          <div className="meta">
            <span>{t.sim.persona}</span>
            <small>
              <span className="sim-dot" style={{ display: "inline-block", marginRight: 6, verticalAlign: "middle" }} />
              {t.sim.live}
            </small>
          </div>
        </div>
        <div className="sim-tabs">
          <button className={"sim-tab " + (mode === "text" ? "on" : "")} onClick={() => setMode("text")}>{t.sim.text}</button>
          <button className={"sim-tab " + (mode === "voice" ? "on" : "")} onClick={() => setMode("voice")}>{t.sim.voice}</button>
        </div>
      </div>

      {/* Voice strip — sits BETWEEN header and body, never overlaps */}
      {mode === "voice" &&
      <div className="voice-strip">
          <div className="sim-wave">
            {Array.from({ length: 9 }).map((_, i) => <i key={i} style={{ animationDelay: `${i * 0.08}s` }} />)}
          </div>
          <span className="voice-meta">
            {t.sim.voiceLabel} · {t.sim.voiceTime} / 15:00
          </span>
        </div>
      }

      <div className="sim-body">
        {aiTyping &&
        <div className="typing-ind" aria-hidden>
            <span /><span /><span />
          </div>
        }
        {showAi &&
        <div className="bubble ai" key="ai">
            <span className="lbl">{t.sim.persona.split("·")[0].trim()}</span>
            {aiText}
            {phase === "ai-msg" && aiText.length < t.sim.msgAi.length && <span className="cursor" />}
          </div>
        }
        {userTyping &&
        <div className="typing-ind user-typing" style={{ alignSelf: "flex-end" }}>
            <span /><span /><span />
          </div>
        }
        {showUser &&
        <div className="bubble user" key="user">
            <span className="lbl">{t.sim.userRole}</span>
            {userText}
            {phase === "user-msg" && userText.length < t.sim.msgUser.length && <span className="cursor" />}
          </div>
        }
      </div>

      <div className="sim-footer">
        <div className="ev">
          <span style={{ display: "inline-block", marginRight: 8, fontFamily: "var(--font-mono)", color: "var(--accent)" }}>●</span>
          {t.sim.analyzing}
        </div>
        <div className="score-mini">
          <div className="score-bar"><div className="fill" style={{ width: `${score}%` }} /></div>
          <div className="num">{scoreNum}<span className="frac">/10</span></div>
        </div>
      </div>

    </div>);

}

/* -----------------------------------------------------------
   VARIANT B — Metrics-first preview
   ----------------------------------------------------------- */
function HeroMetrics({ t }) {
  const isEn = t === window.I18N.en;
  const [val, setVal] = useStateH(0);
  const ref = useRefH(null);
  useEffectH(() => {
    if (!ref.current) return;
    let start;
    const dur = 1600;
    const target = 8.4;
    const step = (now) => {
      if (!start) start = now;
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(target * e);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const r = 78;
  const C = 2 * Math.PI * r;
  const offset = C - val / 10 * C;

  const criteria = isEn ?
  [["Approach", 92], ["Discovery", 85], ["Product", 78], ["Objection", 71], ["Close", 80]] :
  [["Abordagem", 92], ["Sondagem", 85], ["Conhecimento", 78], ["Objeção", 71], ["Fechamento", 80]];

  const chipLabels = t.outputs.formats.items.map((i) => i.h);

  return (
    <div className="hero-metrics" ref={ref}>
      <div className="hm-head">
        <span className="tag-chip"><span className="dot" /> {isEn ? "Session" : "Sessão"} #1284 · {isEn ? "complete" : "concluída"}</span>
        <span className="tag-chip accent">SCORED</span>
      </div>
      <div className="hm-body">
        <div className="hm-gauge">
          <svg viewBox="0 0 200 200">
            <circle cx="100" cy="100" r={r} fill="none" stroke="var(--bg-3)" strokeWidth="14" />
            <circle
              cx="100" cy="100" r={r}
              fill="none" stroke="var(--accent)" strokeWidth="14" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={offset}
              style={{ transform: "rotate(-90deg)", transformOrigin: "100px 100px", transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.7,.2,1)" }} />
            
            <text x="100" y="98" textAnchor="middle" fontFamily="var(--font-display)" fontSize="46" fill="var(--ink)" letterSpacing="-0.02em">
              {val.toFixed(1)}
            </text>
            <text x="100" y="120" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-mute)" letterSpacing="0.1em">
              SCORE / 10
            </text>
          </svg>
        </div>
        <div className="hm-crit">
          {criteria.map(([lbl, v], i) =>
          <div key={lbl} className="hm-crit-row">
              <span style={{ fontSize: 13, color: "var(--ink-2)" }}>{lbl}</span>
              <div className="hm-bar">
                <i style={{ width: `${v}%`, transitionDelay: `${0.3 + i * 0.12}s` }} />
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-mute)" }}>{v}</span>
            </div>
          )}
        </div>
      </div>
      <div className="hm-foot">
        <div className="hm-chips">
          {chipLabels.map((c) =>
          <span key={c} className="hm-chip">{c}</span>
          )}
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>
          {isEn ? "You choose the format" : "Você define o formato"}
        </span>
      </div>

      <div className="float-card float-tl" style={{ minWidth: 170 }}>
        <span className="tag">{isEn ? "Cited evidence" : "Evidência citada"}</span>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 15, margin: "6px 0 0", lineHeight: 1.25 }}>
          {isEn ? '"Do you run on road, treadmill, or trails?"' : '"Você corre na rua, esteira ou trilha?"'}
        </p>
        <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--accent)" }}>+0.6 {isEn ? "DISCOVERY" : "SONDAGEM"}</div>
      </div>
      <div className="float-card float-br">
        <span className="tag">{isEn ? "Team · 30d" : "Equipe · 30d"}</span>
        <div className="row" style={{ marginTop: 6 }}>
          <span className="v">+18%</span>
          <span className="delta">↑ {isEn ? "vs prev. cycle" : "vs ciclo anterior"}</span>
        </div>
      </div>
    </div>);

}

/* -----------------------------------------------------------
   VARIANT C — Personas-first
   ----------------------------------------------------------- */
function HeroPersonas({ t }) {
  const [idx, setIdx] = useStateH(0);
  useEffectH(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % t.personas.list.length), 3800);
    return () => clearInterval(id);
  }, [t.personas.list.length]);

  return (
    <div className="hero-personas">
      <div className="hp-head">
        <span className="tag-chip"><span className="dot" />{t.personas.eyebrow}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: ".08em", textTransform: "uppercase" }}>
          {t.personas.cycleHint}
        </span>
      </div>

      <div className="hp-stack">
        {t.personas.list.map((p, i) => {
          const offset = (i - idx + t.personas.list.length) % t.personas.list.length;
          const z = t.personas.list.length - offset;
          const isFront = offset === 0;
          return (
            <div
              key={p.name}
              className={"hp-card " + (isFront ? "front" : "")}
              style={{
                transform: `translateY(${offset * 14}px) scale(${1 - offset * 0.04})`,
                opacity: offset > 2 ? 0 : 1 - offset * 0.22,
                zIndex: z
              }}>
              
              <div className="hp-card-head">
                <span className="hp-av">{p.initial}</span>
                <div>
                  <div className="hp-name">{p.name}</div>
                  <div className="hp-arch">{p.archetype}</div>
                </div>
                <span className="tag-chip" style={{ marginLeft: "auto" }}>Ready</span>
              </div>
              <div className="hp-traits">
                {p.traits.map((tr) =>
                <span key={tr} className="hp-trait">{tr}</span>
                )}
              </div>
              <div className="hp-quote">
                <span className="hp-quote-mark">"</span>
                {p.line}
              </div>
              <div className="hp-foot">
                <div className="sim-wave" style={{ height: 12 }}>
                  {Array.from({ length: 5 }).map((_, k) => <i key={k} style={{ animationDelay: `${k * 0.1}s` }} />)}
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>
                  {t === window.I18N.en ? "AI · ready" : "IA · pronta para sessão"}
                </span>
              </div>
            </div>);

        })}
      </div>

      <div className="hp-dots">
        {t.personas.list.map((_, i) =>
        <button key={i} className={"hp-dot " + (i === idx ? "on" : "")} onClick={() => setIdx(i)} aria-label={"persona " + (i + 1)} />
        )}
      </div>
    </div>);

}

/* -----------------------------------------------------------
   HERO (variant switcher)
   ----------------------------------------------------------- */
function Hero({ t, variant = "chat" }) {
  let Visual = HeroChat;
  if (variant === "metrics") Visual = HeroMetrics;else
  if (variant === "personas") Visual = HeroPersonas;

  return (
    <section className="hero" style={{ color: "rgb(42, 22, 13)", fontSize: "16px" }}>
      <div className="container hero-grid">
        <HeroCopy t={t} variant={variant} />
        <Reveal delay={200} key={variant}>
          <Visual t={t} />
        </Reveal>
      </div>
    </section>);

}

window.Hero = Hero;