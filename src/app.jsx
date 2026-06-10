// app.jsx — top-level wiring: state, tweaks, language, palette, hero variant
const { useState: useStateA, useEffect: useEffectA } = React;

const PALETTES = [
  { name: "ember",    colors: ["#1a1a1a", "#ff5b2e", "#f3efe7"] },
  { name: "midnight", colors: ["#0a1428", "#2f5cff", "#eef0ee"] },
  { name: "forest",   colors: ["#0d2a20", "#1e7a52", "#eef1eb"] },
];

const HERO_VARIANT_OPTIONS = [
  { value: "chat",     labelPt: "Conversa IA",     labelEn: "AI conversation" },
  { value: "metrics",  labelPt: "Score & métricas",labelEn: "Score & metrics" },
  { value: "personas", labelPt: "Personas",        labelEn: "Personas" },
];

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAKS_DEFAULTS || { palette: "ember", lang: "pt", heroVariant: "chat" });
  const [lang, setLangState] = useStateA(t.lang || "pt");

  useEffectA(() => {
    document.documentElement.setAttribute("data-palette", t.palette || "ember");
  }, [t.palette]);

  useEffectA(() => {
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
    setTweak("lang", l);
  };

  const i18n = (window.I18N && window.I18N[lang]) || window.I18N.pt;
  const currentPalette = PALETTES.find((p) => p.name === t.palette) || PALETTES[0];
  const heroVariant = t.heroVariant || "chat";
  const isEn = i18n === window.I18N.en;

  return (
    <>
      <Nav t={i18n} lang={lang} setLang={setLang} />
      <main>
        <Hero t={i18n} variant={heroVariant} />
        <Problem t={i18n} />
        <HowItWorks t={i18n} />
        <Scenarios t={i18n} />
        <Outputs t={i18n} />
        <Pricing t={i18n} />
        <FAQ t={i18n} />
        <Contact t={i18n} />
      </main>
      <Footer t={i18n} />

      <a
        href="https://api.whatsapp.com/send/?phone=5511941911520&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+Skillcheck.&type=phone_number&app_absent=0"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.004 2C6.5 2 2.04 6.46 2.04 11.96c0 1.92.54 3.71 1.48 5.25L2 22l4.94-1.29c1.48.81 3.18 1.27 4.97 1.27 5.5 0 9.96-4.46 9.96-9.96S17.5 2 12.004 2zm5.72 14.18c-.24.69-1.22 1.27-1.89 1.34-.57.06-1.3-.13-3.83-1.18-3.24-1.34-5.3-4.6-5.46-4.82-.16-.22-1.3-1.72-1.3-3.29 0-1.57.82-2.35 1.11-2.67.3-.32.65-.4.86-.4.21 0 .43 0 .61.01.19.01.44-.07.69.53.25.6.86 2.09.93 2.24.07.15.12.33.02.53-.1.2-.15.3-.3.48-.15.18-.31.39-.45.53-.15.15-.31.31-.13.62.18.3.81 1.33 1.73 2.15 1.19 1.06 2.2 1.39 2.51 1.55.31.16.5-.13.69-.34.19-.21.82-.95 1.04-1.27.22-.32.44-.27.75-.16.31.11 1.96.93 2.3 1.1.34.17.57.25.65.39.08.14.08.82-.16 1.51z"/>
        </svg>
      </a>

      <TweaksPanel title="Tweaks">
        <TweakSection label={isEn ? "Hero direction" : "Direção do hero"}>
          <TweakSelect
            label={isEn ? "Variant" : "Variante"}
            value={heroVariant}
            options={HERO_VARIANT_OPTIONS.map((o) => ({ value: o.value, label: isEn ? o.labelEn : o.labelPt }))}
            onChange={(v) => setTweak("heroVariant", v)}
          />
        </TweakSection>

        <TweakSection label={isEn ? "Language" : "Idioma"}>
          <TweakRadio
            label={isEn ? "Site language" : "Idioma"}
            value={lang}
            options={[{ value: "pt", label: "PT" }, { value: "en", label: "EN" }]}
            onChange={(v) => setLang(v)}
          />
        </TweakSection>

        <TweakSection label={isEn ? "Palette" : "Paleta"}>
          <TweakColor
            label={isEn ? "Direction" : "Direção"}
            value={currentPalette.colors}
            options={PALETTES.map((p) => p.colors)}
            onChange={(picked) => {
              const idx = PALETTES.findIndex((p) => JSON.stringify(p.colors) === JSON.stringify(picked));
              setTweak("palette", PALETTES[idx >= 0 ? idx : 0].name);
            }}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
