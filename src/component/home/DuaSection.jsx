import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";

const DuaSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-16 px-6  overflow-hidden">

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        {/* Center radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto"
      >

        {/* ── Eyebrow ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          className="flex items-center justify-start gap-3 mb-6"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="poppins text-xs font-semibold tracking-widest uppercase text-accent">
            Du'a of the Night
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>

        {/* ── Heading ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
          className="text-left mb-14"
        >
          <h2 className="playfair-display text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-3">
            A Du'a for <em className="italic text-secondary">Ramadan</em>
          </h2>
          <p className="poppins text-sm text-neutral">
            A simple reminder for a meaningful and blessed month.
          </p>
        </div>

        {/* ── Main Dua Card ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
          className="relative group bg-base-200 border border-primary/10 rounded-2xl p-10 md:p-14 overflow-hidden"
        >

          {/* Corner ornament top-left */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl pointer-events-none" />
          {/* Corner ornament bottom-right */}
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-2xl pointer-events-none" />


          {/* Moon watermark */}
          <span className="absolute bottom-4 left-8 text-7xl opacity-[0.04] select-none pointer-events-none leading-none">
            🌙
          </span>

          {/* Arabic */}
          <div
            className="text-center mb-8 pb-8 border-b border-primary/10"
            dir="rtl"
          >
            <p className="playfair-display text-3xl md:text-4xl font-bold text-primary leading-[2] tracking-wide">
              اللهم إنك عفو تحب العفو فاعفُ عني
            </p>
          </div>

          {/* Transliteration */}
          <div className="text-center mb-6">
            <p className="poppins italic text-base md:text-lg text-secondary font-medium tracking-wide">
              Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni
            </p>
          </div>

          {/* Divider dots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1 h-1 rounded-full bg-primary/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <span className="w-1 h-1 rounded-full bg-primary/20" />
          </div>

          {/* Meaning */}
          <div className="text-center mb-8">
            <p className="poppins text-base md:text-lg text-neutral leading-relaxed max-w-lg mx-auto">
              "O Allah, You are Most Forgiving, and You love forgiveness;
              so forgive me."
            </p>
          </div>

          {/* Source note */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex-1 max-w-16 h-px bg-primary/10" />
            <span className="poppins text-xs text-neutral/60 text-center">
              Recited during the last ten nights of Ramadan 🌙
            </span>
            <div className="flex-1 max-w-16 h-px bg-primary/10" />
          </div>

          {/* Bottom hover bar */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-3xl bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-700" />
        </div>

        {/* ── CTA Button ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/planner"
            className="group/btn poppins inline-flex items-center gap-3 bg-primary text-base-100 font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            Begin Your Planner
            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </Link>

         
        </div>

      </div>
    </section>
  );
};

export default DuaSection;