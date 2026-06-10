// pricing.jsx — 2 plans + enterprise, centered featured plan
function Pricing({ t }) {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t.pricing.eyebrow}</span>
          <h2 className="display">{t.pricing.h}</h2>
          <p>{t.pricing.sub}</p>
        </Reveal>

        <Reveal className="price-grid" stagger>
          {t.pricing.plans.map((p, i) =>
          <Tilt max={3} key={p.name}>
              <div className={"price-card " + (p.highlighted ? "highlighted" : "")}>
                <h3>{p.name}</h3>
                <div className="price-volume">
                  <span className="vn">{p.volume}</span>
                  <span className="vp">{p.period}</span>
                  {p.duration && <span className="vd">{p.duration}</span>}
                </div>

                {p.prices &&
              <div className="price-rates">
                    {p.prices.custom ?
                <div className="rate custom">
                        <span className="rate-label">{t.pricing.priceLabel}</span>
                        <span className="rate-value">{p.prices.custom}</span>
                      </div> :

                <>
                        <div className="rate">
                          <span className="rate-label">{t.pricing.chatLabel}</span>
                          <span className="rate-value">
                            {p.prices.chat}
                            <small style={{ width: "56.3281px" }}>/ {t.pricing.priceLabel.split(" ").pop()}</small>
                          </span>
                        </div>
                        <div className="rate">
                          <span className="rate-label">{t.pricing.voiceLabel}</span>
                          <span className="rate-value">
                            {p.prices.voice}
                            <small>/ {t.pricing.priceLabel.split(" ").pop()}</small>
                          </span>
                        </div>
                      </>
                }
                  </div>
              }

                <p className="price-desc">{p.desc}</p>
                <ul className="price-feat">
                  {p.features.map((f) =>
                <li key={f}>
                      <span className="check" aria-hidden>✓</span>
                      <span>{f}</span>
                    </li>)}
                </ul>
                <a href="#contact" className={"btn " + (p.highlighted ? "btn-primary" : "btn-ghost")} style={{ marginTop: "auto" }}>
                  {p.cta}
                  <span className="arr">→</span>
                </a>
              </div>
            </Tilt>
          )}
        </Reveal>

        <Reveal className="price-note">
          <span className="eyebrow no-rule" style={{ fontSize: 11 }}>{t === window.I18N.en ? "FYI" : "Detalhes"}</span>
          <p>{t.pricing.note}</p>
        </Reveal>
      </div>
    </section>);

}

window.Pricing = Pricing;