// scenarios.jsx — Centered "Sob medida" card + row of tiles below
function Scenarios({ t }) {
  const tiles = t.scenarios.tiles;
  const custom = t.scenarios.customCta;

  return (
    <section className="section scenarios" id="scenarios">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t.scenarios.eyebrow}</span>
          <h2 className="display">{t.scenarios.h}</h2>
          <p>{t.scenarios.sub}</p>
        </Reveal>

        <Reveal className="scen-custom-row" stagger>
          <Tilt max={3}>
            <div className="scen-card custom centered">
              <div className="custom-orbit" aria-hidden>
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="92" fill="none" stroke="var(--line-strong)" strokeDasharray="3 5" />
                  <circle cx="100" cy="100" r="62" fill="none" stroke="var(--line-strong)" strokeDasharray="2 4" />
                  <circle cx="100" cy="100" r="32" fill="none" stroke="var(--accent)" />
                  <circle cx="100" cy="100" r="6" fill="var(--accent)" />
                  <circle cx="100" cy="38" r="4" fill="var(--ink)" />
                  <circle cx="162" cy="100" r="4" fill="var(--ink)" />
                  <circle cx="100" cy="162" r="4" fill="var(--ink)" />
                  <circle cx="38" cy="100" r="4" fill="var(--ink)" />
                </svg>
              </div>

              <div className="custom-body">
                <span className="tag-chip">{custom.tag}</span>
                <h3>{custom.h}</h3>
                <p>{custom.p}</p>
                <a className="btn btn-ghost" href="#contact" style={{ marginTop: 8 }}>
                  {custom.cta.replace(" →", "")}
                  <span className="arr">→</span>
                </a>
              </div>
            </div>
          </Tilt>
        </Reveal>

        <Reveal className="scen-tile-row" stagger>
          {tiles.map((s, i) =>
          <Tilt key={i} max={5}>
              <div className="scen-card tile">
                <div className="tile-num">
                  {String(i + 1).padStart(2, "0")}<span style={{ color: "var(--ink-faint)" }}> / 0{tiles.length}</span>
                </div>
                <span className="tag-chip">{s.tag}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <div className="tile-foot">
                  <span className="tile-meta">Chat · voz</span>
                  <span className="tile-arrow"></span>
                </div>
              </div>
            </Tilt>
          )}
        </Reveal>
      </div>
    </section>);

}

window.Scenarios = Scenarios;