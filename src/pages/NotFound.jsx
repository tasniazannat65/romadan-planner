import { Link } from "react-router";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-base-100 px-6 overflow-hidden">

      {/* ── Background blobs ── */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

      {/* ── Stars decoration ── */}
      {[
        { top: "12%", left: "8%",  size: "w-1 h-1",     delay: "0s",    color: "#F4C430" },
        { top: "20%", left: "88%", size: "w-1.5 h-1.5", delay: "0.4s",  color: "#0E7C7B" },
        { top: "70%", left: "6%",  size: "w-1 h-1",     delay: "0.8s",  color: "#17BEBB" },
        { top: "80%", left: "90%", size: "w-1.5 h-1.5", delay: "0.2s",  color: "#F4C430" },
        { top: "40%", left: "3%",  size: "w-1 h-1",     delay: "1s",    color: "#0E7C7B" },
        { top: "55%", left: "95%", size: "w-1 h-1",     delay: "0.6s",  color: "#17BEBB" },
        { top: "8%",  left: "50%", size: "w-1 h-1",     delay: "1.2s",  color: "#F4C430" },
      ].map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.size} rounded-full pointer-events-none`}
          style={{
            top: s.top,
            left: s.left,
            background: s.color,
            boxShadow: `0 0 6px ${s.color}`,
            animation: `star-twinkle 2.5s ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-lg w-full">

        {/* Moon + crescent visual */}
        <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full border border-primary/15"
              style={{ animation: "loader-spin 12s linear infinite" }}
            />
            {/* Dashed ring */}
            <div
              className="absolute inset-2 rounded-full border-2 border-dashed border-primary/15"
              style={{ animation: "loader-spin 18s linear infinite reverse" }}
            />
            {/* Orbiting accent dot */}
            <div
              className="absolute w-full h-full"
              style={{ animation: "loader-spin 4s linear infinite" }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                style={{
                  background: "#F4C430",
                  boxShadow: "0 0 10px #F4C430, 0 0 20px rgba(244,196,48,0.3)",
                }}
              />
            </div>
            {/* Center moon */}
            <div
              className="absolute inset-4 rounded-full flex items-center justify-center"
              style={{
                background: "color-mix(in srgb, #0E7C7B 10%, transparent)",
                border: "1px solid color-mix(in srgb, #0E7C7B 20%, transparent)",
              }}
            >
              <span
                className="text-4xl select-none"
                style={{ animation: "loader-sway 3s ease-in-out infinite" }}
              >
                🌙
              </span>
            </div>
          </div>
        </div>

        {/* 404 */}
        <div className="relative mb-2">
          <span
            className="playfair-display font-extrabold select-none pointer-events-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 10rem)",
              lineHeight: 1,
              color: "color-mix(in srgb, #0E7C7B 8%, transparent)",
              display: "block",
            }}
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="playfair-display font-extrabold"
              style={{
                fontSize: "clamp(4rem, 14vw, 7rem)",
                lineHeight: 1,
                color: "#0E7C7B",
              }}
            >
              404
            </span>
          </div>
        </div>

        {/* Eyebrow divider */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-10 h-px bg-primary/20 rounded-full" />
          <span
            className="poppins text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#F4C430" }}
          >
            Page Not Found
          </span>
          <div className="w-10 h-px bg-primary/20 rounded-full" />
        </div>

        {/* Heading */}
        <h2
          className="playfair-display text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "#0E7C7B" }}
        >
          Lost in the night sky
        </h2>

        {/* Description */}
        <p
          className="poppins text-sm leading-relaxed mb-10 max-w-sm mx-auto"
          style={{ color: "var(--color-neutral)", opacity: 0.75 }}
        >
          This page seems to have wandered off like the moon before Ramadan.
          Let's guide you back to your planner. 🌙
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group poppins inline-flex items-center gap-3 font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "#0E7C7B",
              color: "var(--color-base-100)",
              boxShadow: "0 8px 24px color-mix(in srgb, #0E7C7B 25%, transparent)",
            }}
          >
            <Home size={16} />
            Back to Home
            <span
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <Link
            to="/planner"
            className="poppins inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "color-mix(in srgb, #0E7C7B 60%, transparent)" }}
            onMouseEnter={e => e.currentTarget.style.color = "#0E7C7B"}
            onMouseLeave={e => e.currentTarget.style.color = "color-mix(in srgb, #0E7C7B 60%, transparent)"}
          >
            <span className="w-4 h-px bg-current inline-block" />
            Go to Planner
          </Link>
        </div>

        {/* Bottom three-dot motif */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <span className="w-2 h-2 rounded-full bg-primary opacity-25" />
          <span className="w-2 h-2 rounded-full bg-secondary opacity-50" />
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "#F4C430",
              boxShadow: "0 0 6px #F4C430",
            }}
          />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes loader-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes loader-sway {
          0%, 100% { transform: rotate(-10deg); }
          50%       { transform: rotate(10deg); }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;