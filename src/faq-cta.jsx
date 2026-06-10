// faq-cta.jsx — FAQ accordion + final CTA + footer
const { useState: useStateF } = React;

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className={"faq-item " + (open ? "open" : "")} onClick={onClick}>
      <div className="q">
        <span>{q}</span>
        <span className="toggle">+</span>
      </div>
      <div className="a">
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>);

}

function FAQ({ t }) {
  const [open, setOpen] = useStateF(0);
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <Reveal>
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.02em", lineHeight: 1, marginTop: 14 }}>{t.faq.h}</h2>
            <p style={{ color: "var(--ink-mute)", marginTop: 18, maxWidth: 320 }}>{t.faq.sub}</p>
            <a className="btn-link" href="#contact" style={{ marginTop: 22 }}>
              {t === window.I18N.en ? "Talk to a specialist" : "Falar com especialista"} →
            </a>
          </Reveal>
          <Reveal className="faq-list">
            {t.faq.items.map((it, i) =>
            <FAQItem key={i} q={it.q} a={it.a} open={i === open} onClick={() => setOpen(i === open ? -1 : i)} />
            )}
          </Reveal>
        </div>
      </div>
    </section>);

}

function CTA({ t }) {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <Reveal>
          <div className="cta-card shimmer">
            <span className="eyebrow no-rule" style={{ color: "color-mix(in oklab, var(--paper-2) 70%, transparent)", fontSize: 11 }}>
              {t.cta.eyebrow}
            </span>
            <h2 style={{ marginTop: 18 }}>{t.cta.h}</h2>
            <p>{t.cta.p}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="https://hub.tevon.com.br" target="_blank" rel="noopener noreferrer">
                {t.cta.ctaPrimary}
                <span className="arr">→</span>
              </a>
            </div>
            <div className="cta-arts" aria-hidden>
              <svg viewBox="0 0 400 400">
                {Array.from({ length: 14 }).map((_, i) =>
                <circle key={i} cx="200" cy="200" r={20 + i * 13} fill="none" stroke="var(--paper-2)" opacity={1 - i * 0.06} strokeWidth="1" />
                )}
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

function Footer({ t }) {
  return (
    <footer>
      <div className="container">
        <div className="brand" style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.015em" }}>
          <BrandMark />
          SkillCheck
        </div>
        <TevonBranding variant="horizontal" />
        <div className="legal">
          {t.footer.legal}
          <a href="#contact">{t.footer.links.contact}</a>
        </div>
      </div>
    </footer>);
}

Object.assign(window, { FAQ, CTA, Footer });