import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toggleCharity, togglePrayer, toggleTaraweeh } from "../../features/ibadah/ibadahSlice";
import { toggleCompleted, toggleFavorite } from "../../features/dua/duaSlice";

const prayerList = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
const prayerEmoji = {
    fajr:"🌅",
    dhuhr: "☀️",
    asr: "🌤️",
    maghrib: "🌇",
    isha: "🌙",

}

const HomePlannerSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {prayers,  taraweeh, charity} = useSelector((state)=> state.ibadah);
    const {duas} = useSelector((state)=> state.dua);
    const demoDuas = duas.slice(0, 2);
    const completedPrayers = prayerList.filter((p)=> prayers[p]).length;


  return (
    <section className="relative pt-16 px-6 overflow-hidden">

      {/* Background blobs — matches FeaturesSection */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent rounded-full" />
            <span className="poppins text-xs font-semibold tracking-widest uppercase text-accent">
              Preview Your Planner
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="playfair-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                Track your <em className="italic text-secondary">ibadah</em> daily
              </h2>
              <p className="poppins text-sm text-neutral mt-3 max-w-sm">
                A quick glance at your prayers and du'as. Open the full planner for complete control.
              </p>
            </div>
            <span className="poppins hidden sm:inline-flex self-start items-center text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-5 py-2 rounded-full whitespace-nowrap">
              ✦ Live Demo
            </span>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* ── Ibadah Tracker Card ── */}
          <div className="group bg-base-200 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">

            {/* Card header */}
            <div className="px-7 py-5 border-b border-primary/10 flex items-center justify-between">
              <div>
                <h3 className="playfair-display text-lg font-bold text-primary">
                  Daily Ibadah Tracker
                </h3>
                <p className="poppins text-xs text-neutral mt-0.5">
                  {completedPrayers} of 5 prayers completed
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-lg">
                🕌
              </div>
            </div>

            <div className="px-7 py-6 space-y-5">

              {/* Prayers grid */}
              <div>
                <p className="poppins text-xs font-semibold uppercase tracking-widest text-neutral/50 mb-3">
                  Prayers
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {prayerList.map((prayer) => (
                    <label
                      key={prayer}
                      className="flex items-center justify-between bg-base-100 hover:bg-primary/5 border border-transparent hover:border-primary/10 rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200 group/item"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{prayerEmoji[prayer]}</span>
                        <span className="poppins text-xs font-medium capitalize text-neutral group-hover/item:text-primary transition-colors">
                          {prayer}
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={prayers[prayer]}
                        onChange={() => dispatch(togglePrayer(prayer))}
                        className="checkbox checkbox-primary checkbox-xs"
                      />
                    </label>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-3 h-1.5 bg-base-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                    style={{ width: `${(completedPrayers / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Extra ibadah */}
              <div>
                <p className="poppins text-xs font-semibold uppercase tracking-widest text-neutral/50 mb-3">
                  Extra
                </p>
                <div className="space-y-2">
                  <label className="flex items-center justify-between bg-base-100 hover:bg-secondary/5 border border-transparent hover:border-secondary/15 rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200 group/item">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🌃</span>
                      <span className="poppins text-xs font-medium text-neutral group-hover/item:text-secondary transition-colors">
                        Taraweeh
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={taraweeh}
                      onChange={() => dispatch(toggleTaraweeh())}
                      className="checkbox checkbox-secondary checkbox-xs"
                    />
                  </label>

                  <label className="flex items-center justify-between bg-base-100 hover:bg-accent/5 border border-transparent hover:border-accent/20 rounded-xl px-3 py-2.5 cursor-pointer transition-all duration-200 group/item">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🤲</span>
                      <span className="poppins text-xs font-medium text-neutral group-hover/item:text-primary transition-colors">
                        Charity
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={charity}
                      onChange={() => dispatch(toggleCharity())}
                      className="checkbox checkbox-accent checkbox-xs"
                    />
                  </label>
                </div>
              </div>

            </div>

            {/* Bottom hover bar */}
            <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-700" />
          </div>

          {/* ── Du'a Card ── */}
          <div className="group bg-base-200 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">

            {/* Card header */}
            <div className="px-7 py-5 border-b border-primary/10 flex items-center justify-between">
              <div>
                <h3 className="playfair-display text-lg font-bold text-primary">
                  Du'a List
                </h3>
                <p className="poppins text-xs text-neutral mt-0.5">
                  Showing first {demoDuas.length} du'as
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-lg">
                🤲
              </div>
            </div>

            <div className="px-7 py-6 space-y-3">

              {demoDuas.length === 0 && (
                <div className="flex flex-col items-center justify-center py-10 gap-2">
                  <span className="text-3xl opacity-20">🤲</span>
                  <p className="poppins text-xs text-neutral/40">No du'as added yet</p>
                </div>
              )}

              {demoDuas.map((dua) => (
                <div
                  key={dua.id}
                  className={`flex items-center justify-between bg-base-100 border rounded-xl px-4 py-3 transition-all duration-200 ${
                    dua.completed
                      ? "border-success/15 bg-success/5"
                      : dua.favorite
                      ? "border-accent/20"
                      : "border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <input
                      type="checkbox"
                      checked={dua.completed}
                      onChange={() => dispatch(toggleCompleted(dua.id))}
                      className="checkbox checkbox-success checkbox-xs flex-shrink-0"
                    />
                    <span
                      className={`poppins text-sm truncate transition-all ${
                        dua.completed ? "line-through text-neutral/40" : "text-neutral"
                      }`}
                    >
                      {dua.text}
                    </span>
                  </div>

                  <button
                    onClick={() => dispatch(toggleFavorite(dua.id))}
                    className={`text-sm flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center hover:bg-accent/15 transition-colors ${
                      dua.favorite ? "text-accent" : "text-neutral/30"
                    }`}
                  >
                    {dua.favorite ? "⭐" : "☆"}
                  </button>
                </div>
              ))}

              {/* Blurred teaser row */}
              <div className="relative">
                <div className="flex items-center justify-between bg-base-100 border border-transparent rounded-xl px-4 py-3 opacity-40 blur-[2px] select-none pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded border border-neutral/30" />
                    <span className="poppins text-sm text-neutral">More du'as in full planner...</span>
                  </div>
                  <span className="text-neutral/30">☆</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="poppins text-xs text-primary/50 font-medium">
                    + more in planner
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom hover bar */}
            <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-700" />
          </div>

        </div>

        {/* ── CTA Strip ── */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-primary/5 border border-primary/10 rounded-2xl px-7 py-5">
          <p className="poppins text-sm text-neutral">
            <span className="font-semibold text-primary">Ready to go deeper?</span>{" "}
            Open the full planner to track Quran pages, add du'as, and reset your day.
          </p>
          <button
            onClick={() => navigate("/planner")}
            className="group/btn poppins inline-flex items-center gap-3 bg-primary text-base-100 font-semibold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Go to Full Planner
            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HomePlannerSection;