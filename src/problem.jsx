// problem.jsx — Three cards showing limits of current evaluation methods
const ProbIllust = ({ kind }) => {
  if (kind === "mystery") {
    return (
      <svg viewBox="0 0 280 110" fill="none">
        <defs>
          <pattern id="grid-m" width="14" height="14" patternUnits="userSpaceOnUse">
            <path d="M14 0H0V14" stroke="currentColor" strokeWidth="0.5" opacity="0.18" fill="none" />
          </pattern>
        </defs>
        <rect width="280" height="110" fill="url(#grid-m)" />
        {/* Scatter: most empty, few orange points */}
        {Array.from({ length: 90 }).map((_, i) => {
          const x = i % 18 * 15 + 8;
          const y = Math.floor(i / 18) * 18 + 10;
          const filled = [3, 17, 42, 61, 79].includes(i);
          return <circle key={i} cx={x} cy={y} r={filled ? 3.5 : 1.5} fill={filled ? "var(--accent)" : "currentColor"} opacity={filled ? 1 : 0.18} />;
        })}
      </svg>);

  }
  if (kind === "super") {
    return (
      <svg viewBox="0 0 280 110" fill="none">
        {/* one big dot + many small dots disconnected */}
        <circle cx="40" cy="55" r="14" fill="var(--ink)" />
        <path d="M40 55 L 100 30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M40 55 L 110 70" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M40 55 L 95 90" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="100" cy="30" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="110" cy="70" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="95" cy="90" r="4" fill="currentColor" opacity="0.4" />
        {Array.from({ length: 20 }).map((_, i) => {
          const x = 150 + i % 7 * 18;
          const y = 20 + Math.floor(i / 7) * 24;
          return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0.18" />;
        })}
        <text x="155" y="105" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.5">
          UNREACHED
        </text>
      </svg>);

  }
  // training
  return (
    <svg viewBox="0 0 280 110" fill="none">
      <rect x="10" y="20" width="120" height="70" rx="6" fill="var(--bg-3)" />
      <rect x="20" y="32" width="60" height="6" rx="3" fill="currentColor" opacity="0.25" />
      <rect x="20" y="46" width="100" height="4" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="20" y="56" width="90" height="4" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="20" y="66" width="70" height="4" rx="2" fill="currentColor" opacity="0.15" />
      <path d="M20 80 l 16 0" stroke="var(--accent)" strokeWidth="2" />
      <path d="M150 55 L 190 55" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <path d="M183 49 L 192 55 L 183 61" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
      <rect x="200" y="20" width="70" height="70" rx="6" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <text x="208" y="52" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.5">
        REAL
      </text>
      <text x="208" y="66" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.5">
        WORLD?
      </text>
    </svg>);

};

function Problem({ t }) {
  const cards = [
  { ...t.problem.c1, kind: "mystery" },
  { ...t.problem.c2, kind: "super" },
  { ...t.problem.c3, kind: "training" }];

  return (
    <section className="section problem" id="problem">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t.problem.eyebrow}</span>
          <h2 className="display">{t.problem.h}</h2>
          <p>{t.problem.sub}</p>
        </Reveal>

        <Reveal className="problem-grid" stagger>
          {cards.map((c) =>
          <Tilt key={c.n} max={4}>
              <div className="prob-card" style={{ height: "320px" }}>
                <span className="num">{c.n}</span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <div className="prob-illust" style={{ color: "var(--ink-mute)" }}>
                  <ProbIllust kind={c.kind} />
                </div>
              </div>
            </Tilt>
          )}
        </Reveal>
      </div>
    </section>);

}

window.Problem = Problem;