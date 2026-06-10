// contact.jsx — Contact section: form + company channels
const { useState: useStateC, useEffect: useEffectC } = React;

const STORAGE_KEY = "skillcheck_contacts";

function Contact({ t }) {
  const c = t.contact;
  const [form, setForm] = useStateC({
    name: "", company: "", email: "", phone: "",
    size: "", interest: "subscribe", message: "",
  });
  const [status, setStatus] = useStateC("idle"); // idle | submitting | done
  const [errors, setErrors] = useStateC({});

  const isEn = t === window.I18N.en;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = true;
    if (!form.company.trim()) er.company = true;
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) er.email = true;
    if (!form.size) er.size = true;
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // Persist locally so the user can see captured leads (placeholder until backend)
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      stored.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch (_) {}

    const selectedOption = c.fields.interest.options.find(o => o.value === form.interest);
    const interestLabel = selectedOption ? selectedOption.label : form.interest;

    const formattedText = `Olá! Gostaria de saber mais sobre o Skillcheck.
Aqui estão meus dados de contato:
- Nome: ${form.name}
- Empresa: ${form.company}
- E-mail: ${form.email || 'Não informado'}
- Telefone: ${form.phone || 'Não informado'}
- Número de colaboradores: ${form.size || 'Não informado'}
- Interesse: ${interestLabel}
- O que quero avaliar: ${form.message || 'Não informado'}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5511941911520&text=${encodedText}&type=phone_number&app_absent=0`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setStatus("done");
    }, 700);
  };

  const reset = () => {
    setForm({ name: "", company: "", email: "", phone: "", size: "", interest: "subscribe", message: "" });
    setStatus("idle");
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="display">{c.h}</h2>
          <p>{c.sub}</p>
        </Reveal>

        <Reveal className="contact-grid" stagger>
          {/* FORM CARD */}
          <div className="contact-card form-card">
            <div className="cc-head">
              {c.formTitle && <h3>{c.formTitle}</h3>}
              <p>{c.formSub}</p>
            </div>

            {status !== "done" ? (
              <form className="contact-form" onSubmit={submit} noValidate>
                <div className="cf-row">
                  <div className={"cf-field " + (errors.name ? "err" : "")}>
                    <label>{c.fields.name.label}</label>
                    <input type="text" value={form.name} onChange={set("name")} placeholder={c.fields.name.placeholder} />
                  </div>
                  <div className={"cf-field " + (errors.company ? "err" : "")}>
                    <label>{c.fields.company.label}</label>
                    <input type="text" value={form.company} onChange={set("company")} placeholder={c.fields.company.placeholder} />
                  </div>
                </div>

                <div className="cf-row">
                  <div className={"cf-field " + (errors.email ? "err" : "")}>
                    <label>{c.fields.email.label}</label>
                    <input type="email" value={form.email} onChange={set("email")} placeholder={c.fields.email.placeholder} />
                  </div>
                  <div className="cf-field">
                    <label>{c.fields.phone.label}</label>
                    <input type="tel" value={form.phone} onChange={set("phone")} placeholder={c.fields.phone.placeholder} />
                  </div>
                </div>

                <div className={"cf-field " + (errors.size ? "err" : "")}>
                  <label>{c.fields.size.label}</label>
                  <select value={form.size} onChange={set("size")}>
                    <option value="">{c.fields.size.placeholder}</option>
                    {c.fields.size.options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="cf-field">
                  <label>{c.fields.interest.label}</label>
                  <div className="cf-pills" role="radiogroup">
                    {c.fields.interest.options.map((o) => (
                      <button
                        key={o.value}
                        type="button"
                        role="radio"
                        aria-checked={form.interest === o.value}
                        className={"cf-pill " + (form.interest === o.value ? "on" : "")}
                        onClick={() => setForm((f) => ({ ...f, interest: o.value }))}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="cf-field">
                  <label>{c.fields.message.label}</label>
                  <textarea rows="3" value={form.message} onChange={set("message")} placeholder={c.fields.message.placeholder} />
                </div>

                <button type="submit" className="btn btn-primary cf-submit" disabled={status === "submitting"}>
                  {status === "submitting" ? c.submitting : c.submit}
                  <span className="arr">→</span>
                </button>

                <p className="cf-legal">
                  {isEn
                    ? "By submitting you agree to our privacy policy. We never share data with third parties."
                    : "Ao enviar, você concorda com nossa política de privacidade. Não compartilhamos dados com terceiros."}
                </p>
              </form>
            ) : (
              <div className="cf-success">
                <div className="cf-check">
                  <svg viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" stroke="var(--accent)" strokeWidth="2" />
                    <path d="M13 20.5 l5 5 l9-11" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <h4>{c.success.title}</h4>
                <p>{c.success.body}</p>
                <button className="btn btn-ghost" onClick={reset}>{c.success.again}</button>
              </div>
            )}
          </div>

          {/* SIDE INFO */}
          <div className="contact-card info-card">
            <div className="cc-head">
              <span className="eyebrow no-rule" style={{ fontSize: 11 }}>{c.sideTitle}</span>
              {c.sideSub && <p style={{ marginTop: 14 }}>{c.sideSub}</p>}
            </div>

            <ul className="channel-list">
              {c.channels.map((ch) => (
                <li key={ch.k}>
                  <span className="ck">{ch.k}</span>
                  <a className="cv" href={ch.href} target="_blank" rel="noreferrer">{ch.v}</a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.Contact = Contact;
