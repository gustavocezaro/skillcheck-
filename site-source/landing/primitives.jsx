// primitives.jsx — small shared helpers
const { useEffect, useRef, useState, useMemo, useLayoutEffect } = React;

/** Reveal-on-scroll wrapper */
function Reveal({ children, as = "div", className = "", delay = 0, stagger = false, threshold = 0.15, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setSeen(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);
  const cls = [stagger ? "stagger" : "reveal", seen ? "in" : "", className].filter(Boolean).join(" ");
  const Tag = as;
  return <Tag ref={ref} className={cls} {...rest}>{children}</Tag>;
}

/** 3D tilt on mouse hover */
function Tilt({ children, max = 6, scale = 1.01, className = "", style }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) scale(${scale})`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <div ref={ref} className={"tilt " + className} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

/** Hook: animate number from 0 -> target once visible */
function useCountUp(target, { duration = 1500, decimals = 0 } = {}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    let raf, start;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const step = (t) => {
              if (!start) start = t;
              const p = Math.min(1, (t - start) / duration);
              const ease = 1 - Math.pow(1 - p, 3);
              setVal(target * ease);
              if (p < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target, duration]);
  return [val.toFixed(decimals), ref];
}

/** Hook: read tweak palette/lang */
function usePalette(t) {
  useEffect(() => {
    const p = t.palette || "ember";
    document.documentElement.setAttribute("data-palette", p);
  }, [t.palette]);
}

/** SVG mark for brand */
function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden>
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="var(--ink)" strokeWidth="1.4" />
        <path d="M5 14c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="12" r="1.6" fill="var(--ink)" />
      </svg>
    </span>
  );
}

Object.assign(window, { Reveal, Tilt, useCountUp, usePalette, BrandMark });
