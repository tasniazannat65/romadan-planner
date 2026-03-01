import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { selectProgress } from "../features/progress/progressSelectors";

const Progress = () => {
  const {ibadahPercentage, completedDuas, totalDuas} = useSelector(selectProgress);
  const duaPercentage = totalDuas === 0 ? 0 : Math.round((completedDuas / totalDuas) * 100);
  const overallPercentage = Math.round((ibadahPercentage + duaPercentage) / 2);

  const data = [
    {name: 'Completed', value: overallPercentage},
    {name: 'Remaining', value: 100 - overallPercentage}
  ]
  const COLORS = ['#0E7C7B', 'transparent'];

  const stats = [
    {
      label: "Ibadah Progress",
      value: `${ibadahPercentage}%`,
      icon: "🕌",
      sub: "Prayers & extras",
      color: "text-secondary",
      bar: ibadahPercentage,
      barColor: "bg-secondary",
    },
    {
      label: "Du'a Completion",
      value: `${duaPercentage}%`,
      icon: "🤲",
      sub: "Daily du'as",
      color: "text-accent",
      bar: duaPercentage,
      barColor: "bg-accent",
    },
    {
      label: "Du'as Completed",
      value: `${completedDuas}/${totalDuas}`,
      icon: "📿",
      sub: "Total count",
      color: "text-primary",
      bar: totalDuas === 0 ? 0 : (completedDuas / totalDuas) * 100,
      barColor: "bg-primary",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6">

      {/* Background blobs */}
      <div className="fixed -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="fixed -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Page Header ── */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-accent" />
            <span className="poppins text-xs font-semibold tracking-widest uppercase text-accent">
              Daily Overview
            </span>
          </div>
          <h1 className="playfair-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Your <em className="italic text-secondary">Spiritual</em> Progress
          </h1>
          <p className="poppins text-sm text-neutral mt-2">
            Track your daily ibadah & du'a completion at a glance.
          </p>
        </div>

        {/* ── Pie Chart + Center stat ── */}
        <div className="bg-base-100 border border-primary/10 rounded-2xl overflow-hidden shadow-sm mb-6">

          {/* Card header */}
          <div className="px-8 py-5 border-b border-primary/10 flex items-center justify-between">
            <div>
              <h2 className="playfair-display text-xl font-bold text-primary">Overall Completion</h2>
              <p className="poppins text-xs text-neutral mt-0.5">Combined ibadah & du'a average</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-lg">
              📊
            </div>
          </div>

          <div className="px-8 py-8 flex flex-col md:flex-row items-center gap-8">

            {/* Chart */}
            <div className="w-full md:w-72 h-64 flex-shrink-0 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={75}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={index === 0 ? "#0E7C7B" : "#e5e7eb"}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "var(--color-base-100)",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "12px",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                    }}
                  />
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

            {/* Legend + mini bars */}
            <div className="flex-1 w-full space-y-5">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{s.icon}</span>
                      <span className="poppins text-sm font-medium text-neutral">{s.label}</span>
                    </div>
                    <span className={`poppins text-sm font-bold ${s.color}`}>{s.value}</span>
                  </div>
                  <div className="h-2 bg-base-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${s.barColor} rounded-full transition-all duration-700`}
                      style={{ width: `${s.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Cards ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group bg-base-100 border border-primary/10 rounded-2xl px-7 py-6 overflow-hidden relative hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Watermark icon */}
              <span className="absolute -bottom-2 -right-1 text-6xl opacity-[0.05] select-none pointer-events-none">
                {s.icon}
              </span>

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">
                  {s.icon}
                </div>
                <div className="h-1.5 w-16 bg-base-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.barColor} rounded-full transition-all duration-700`}
                    style={{ width: `${s.bar}%` }}
                  />
                </div>
              </div>

              <p className="poppins text-xs text-neutral/60 mb-1">{s.label}</p>
              <p className={`playfair-display text-3xl font-extrabold ${s.color}`}>
                {s.value}
              </p>
              <p className="poppins text-xs text-neutral/50 mt-1">{s.sub}</p>

              {/* Bottom bar */}
              <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full ${s.barColor} rounded-b-2xl transition-all duration-500`} />
            </div>
          ))}
        </div>

        {/* ── Motivation strip ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-primary/5 border border-primary/10 rounded-2xl px-7 py-5">
          <p className="poppins text-sm text-neutral">
            <span className="font-semibold text-primary">Keep going!</span>{" "}
            Every small act of worship brings you closer. 🌙
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary opacity-25" />
            <span className="w-2 h-2 rounded-full bg-secondary opacity-50" />
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Progress;