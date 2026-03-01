import React from "react";

const RamadanLoader = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen  overflow-hidden gap-10">

      {/* Blobs — same as all other sections */}
      <div className="absolute -top-40 -left-40 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      {/* ── Spinner ── */}
      <div className="relative flex items-center justify-center w-36 h-36">

        {/* Static outer border ring */}
        <div className="absolute inset-0 rounded-full border border-primary/10" />

        {/* Slow rotating dashed ring */}
        <div
          className="absolute inset-2 rounded-full border-2 border-dashed border-primary/20"
          style={{ animation: "loader-spin 10s linear infinite" }}
        />

        {/* Primary spinning arc — #0E7C7B light */}
        <div
          className="absolute inset-4 rounded-full"
          style={{
            border: "3px solid transparent",
            borderTopColor: "#0E7C7B",
            borderRightColor: "#0E7C7B",
            borderRadius: "9999px",
            animation: "loader-spin 1.3s ease-in-out infinite",
          }}
        />

        {/* Secondary counter arc — #17BEBB */}
        <div
          className="absolute inset-6 rounded-full"
          style={{
            border: "2px solid transparent",
            borderBottomColor: "#17BEBB",
            borderLeftColor: "#17BEBB",
            borderRadius: "9999px",
            animation: "loader-spin 1.9s ease-in-out infinite reverse",
          }}
        />

        {/* Accent orbiting dot — #F4C430 */}
        <div
          className="absolute w-full h-full"
          style={{ animation: "loader-spin 2.5s linear infinite" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: "#F4C430",
              boxShadow: "0 0 12px #F4C430, 0 0 24px rgba(244,196,48,0.4)",
            }}
          />
        </div>

        {/* Center circle with moon */}
        <div
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: "color-mix(in srgb, #0E7C7B 10%, transparent)",
            border: "1px solid color-mix(in srgb, #0E7C7B 20%, transparent)",
            animation: "loader-pulse 2s ease-in-out infinite",
          }}
        >
          <span
            className="text-2xl select-none"
            style={{ animation: "loader-sway 3s ease-in-out infinite" }}
          >
            🌙
          </span>
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
        @keyframes loader-pulse {
          0%, 100% { transform: scale(1);    opacity: 1; }
          50%       { transform: scale(0.94); opacity: 0.8; }
        }
        @keyframes loader-bounce {
          0%, 80%, 100% { transform: translateY(0);   opacity: 0.35; }
          40%            { transform: translateY(-7px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default RamadanLoader;