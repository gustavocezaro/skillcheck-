// nav.jsx — top navigation with language toggle
const { useEffect: useEffectN, useState: useStateN } = React;

function Nav({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useStateN(false);
  useEffectN(() => {
    const on = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className={"nav-wrap " + (scrolled ? "scrolled" : "")}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="brand">
            <BrandMark />
            SkillCheck
          </a>
          <div className="links">
            <a href="#how">{t.nav.product}</a>
            <a href="#scenarios">{t.nav.scenarios}</a>
            <a href="#outputs">{t.nav.outputs}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#faq">{t.nav.faq}</a>
          </div>
          <div className="right">
            <div className="lang-toggle" role="tablist">
              <button className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")}>PT</button>
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
            <a className="btn btn-ghost" href="#contact">
              {lang === "pt" ? "Fale conosco" : "Contact us"}
            </a>
            <a className="btn btn-primary" href="https://hub.tevon.com.br" target="_blank" rel="noopener noreferrer">
              {lang === "pt" ? "Contratar" : "Subscribe"}
              <span className="arr">→</span>
            </a>
          </div>
        </nav>
      </div>
    </div>);

}

window.Nav = Nav;