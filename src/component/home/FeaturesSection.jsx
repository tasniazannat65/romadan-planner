import React, { useRef, useEffect, useState } from "react";
import { FaPray, FaBookOpen, FaHandsHelping } from "react-icons/fa";

const features = [
  {
    icon: FaPray,
    number: "01",
    title: "Daily Prayer Tracker",
    desc: "Keep track of your five daily prayers and build a consistent rhythm throughout the blessed month of Ramadan.",
  },
  {
    icon: FaBookOpen,
    number: "02",
    title: "Quran Reading Goals",
    desc: "Set your personal Quran reading targets, track your progress, and complete the full recitation with ease.",
  },
  {
    icon: FaHandsHelping,
    number: "03",
    title: "Charity & Good Deeds",
    desc: "Log your charitable actions, Sadaqah, and good deeds daily to nurture your spiritual growth.",
  },
];

const FeatureCard = ({ feature, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const Icon = feature.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 150}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      className="group relative bg-base-100 border border-primary/10 rounded-2xl p-8 overflow-hidden cursor-default hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl transition-all duration-300"
    >
      {/* Watermark number */}
      <span className="playfair-display absolute -top-2 right-4 text-8xl font-black text-primary/[0.06] group-hover:text-primary/[0.10] select-none pointer-events-none leading-none transition-colors duration-300">
        {feature.number}
      </span>

      {/* Icon row */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-13 h-13 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:rotate-[-6deg] group-hover:scale-110 transition-all duration-300"
          style={{ width: "52px", height: "52px" }}
        >
          <Icon className="text-2xl text-primary" />
        </div>
        <div className="flex-1 h-px bg-primary/10" />
      </div>

      {/* Text */}
      <h3 className="playfair-display text-xl font-bold text-primary mb-3 leading-snug">
        {feature.title}
      </h3>
      <p className="poppins text-sm text-neutral leading-relaxed">
        {feature.desc}
      </p>

      {/* Hover bottom bar */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-bl-2xl bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500" />
    </div>
  );
};

const FeaturesSection = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-16 px-6  overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div
          ref={titleRef}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent rounded-full" />
              <span className="poppins text-xs font-semibold tracking-widest uppercase text-accent">
                Why use Romadan Planner
              </span>
            </div>

            {/* Heading */}
            <h2 className="playfair-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Tools built for{" "}
              <em className="italic text-secondary">spiritual</em> growth
            </h2>

            {/* Subtext */}
            <p className="poppins text-sm text-neutral leading-relaxed mt-4 max-w-sm">
              Make the most of Ramadan with features that keep you organized, focused, and consistent every single day.
            </p>
          </div>

          {/* Badge */}
          <span className="poppins hidden sm:inline-flex self-start items-center text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-5 py-2 rounded-full whitespace-nowrap">
            ✦ 3 Core Features
          </span>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

     

      </div>
    </section>
  );
};

export default FeaturesSection;