import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { selectProgress } from "../../features/progress/progressSelectors";

const HomeProgressSection = () => {
  const navigate = useNavigate();
    const {ibadahPercentage, completedDuas, totalDuas} = useSelector(selectProgress);
  
  const duaPercentage = totalDuas === 0 ? 0 : Math.round((completedDuas / totalDuas) * 100);
  const overallPercentage = Math.round((ibadahPercentage + duaPercentage) / 2);


const data = [
    {name: 'Completed', value: overallPercentage},
    {name: 'Remaining', value: 100 - overallPercentage}
  ]
  

  const COLORS = ["#0E7C7B", "#e5e7eb"];

  return (
    <section className="relative pt-16 px-6  overflow-hidden">

      {/* Background blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent rounded-full" />
            <span className="poppins text-xs font-semibold tracking-widest uppercase text-accent">
              Today's Overview
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="playfair-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                Your <em className="italic text-secondary">progress</em> at a glance
              </h2>
              <p className="poppins text-sm text-neutral mt-3 max-w-sm">
                A quick look at your daily spiritual growth — ibadah and du'as combined.
              </p>
            </div>
            <span className="poppins hidden sm:inline-flex self-start items-center text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-5 py-2 rounded-full whitespace-nowrap">
              ✦ Live Stats
            </span>
          </div>
        </div>

        {/* ── Main Card ── */}
        <div className="bg-base-100 border border-primary/10 rounded-2xl overflow-hidden shadow-sm">

          {/* Card header */}
          <div className="px-8 py-5 border-b border-primary/10 flex items-center justify-between">
            <div>
              <h3 className="playfair-display text-lg font-bold text-primary">Progress Overview</h3>
              <p className="poppins text-xs text-neutral mt-0.5">Combined ibadah & du'a average</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-lg">
              📊
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-primary/10">

            {/* ── Pie Chart ── */}
            <div className="px-8 py-8 flex flex-col items-center justify-center">
              <div className="relative w-52 h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} stroke="none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Center label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="playfair-display text-4xl font-extrabold text-primary leading-none">
                    {overallPercentage}%
                  </span>
                  <span className="poppins text-xs text-neutral mt-1">Overall</span>
                </div>
              </div>

              <p className="poppins text-xs text-neutral/60 mt-4 text-center">
                Overall completion across all trackers
              </p>
            </div>

            {/* ── Stats ── */}
            <div className="px-8 py-8 flex flex-col justify-center gap-6">

              {/* Ibadah */}
              <div className="group bg-base-200 border border-transparent hover:border-secondary/20 rounded-2xl px-5 py-4 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🕌</span>
                    <span className="poppins text-xs font-semibold text-neutral/60 uppercase tracking-wide">
                      Ibadah Progress
                    </span>
                  </div>
                  <span className="playfair-display text-2xl font-extrabold text-secondary">
                    {ibadahPercentage}%
                  </span>
                </div>
                <div className="h-1.5 bg-base-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full transition-all duration-700"
                    style={{ width: `${ibadahPercentage}%` }}
                  />
                </div>
              </div>

              {/* Du'a */}
              <div className="group bg-base-200 border border-transparent hover:border-accent/20 rounded-2xl px-5 py-4 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🤲</span>
                    <span className="poppins text-xs font-semibold text-neutral/60 uppercase tracking-wide">
                      Du'a Completion
                    </span>
                  </div>
                  <span className="playfair-display text-2xl font-extrabold text-accent">
                    {duaPercentage}%
                  </span>
                </div>
                <div className="h-1.5 bg-base-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-700"
                    style={{ width: `${duaPercentage}%` }}
                  />
                </div>
                <p className="poppins text-xs text-neutral/50 mt-2">
                  {completedDuas} of {totalDuas} du'as completed
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate("/progress")}
                className="group/btn poppins inline-flex items-center justify-center gap-3 bg-primary text-base-100 font-semibold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                View Full Analytics
                <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </button>
            </div>

          </div>
        </div>

       

      </div>
    </section>
  );
};

export default HomeProgressSection;