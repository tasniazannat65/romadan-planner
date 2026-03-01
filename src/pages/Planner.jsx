import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDua, clearCompleted, deleteDua, toggleCompleted, toggleFavorite, updateDua } from '../features/dua/duaSlice';
import { resetDay, toggleCharity, togglePrayer, toggleTaraweeh, updateQuranPages } from '../features/ibadah/ibadahSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';
const prayerList = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
const prayerEmoji = {
    fajr:"🌅",
    dhuhr: "☀️",
    asr: "🌤️",
    maghrib: "🌇",
    isha: "🌙",

}
const Planner = () => {
    const dispatch = useDispatch();
    const {prayers, quranPages, taraweeh, charity} = useSelector((state)=> state.ibadah);
    const {duas} = useSelector((state)=> state.dua);
    const [duaInput, setDuaInput] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");
    const handleAddDua = ()=> {
        if(!duaInput.trim())return;
        dispatch(addDua(duaInput));
        setDuaInput("");
    }
    const handleUpdateDua = ()=> {
        if(!editText.trim()) return;
        dispatch(updateDua({id: editingId, newText: editText}));
        setEditingId(null);
        setEditText("");
    }
    const completedPrayers = prayerList.filter((p)=> prayers[p]).length;
    const completedDuas = duas.filter((d)=> d.completed).length;
    return (
         <div className="min-h-screen bg-base-200 py-12 px-6">
          <title>Romadan Planner | Planner</title>

      {/* ── Page Header ── */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-px bg-accent" />
          <span className="poppins text-xs font-semibold tracking-widest uppercase text-accent">
            Daily Tracker
          </span>
        </div>
        <h1 className="playfair-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">
          Your Ramadan <em className="italic text-secondary">Planner</em>
        </h1>
        <p className="poppins text-sm text-neutral mt-2">
          Track your prayers, Quran, and du'as — one day at a time.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* ════ Ibadah Tracker Card ════ */}
        <div className="bg-base-100 border border-primary/10 rounded-2xl overflow-hidden shadow-sm">

          {/* Card header */}
          <div className="px-7 py-5 border-b border-primary/10 flex items-center justify-between">
            <div>
              <h2 className="playfair-display text-xl font-bold text-primary">
                Daily Ibadah
              </h2>
              <p className="poppins text-xs text-neutral mt-0.5">
                {completedPrayers} of 5 prayers completed
              </p>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
              🕌
            </div>
          </div>

          <div className="px-7 py-6 space-y-6">

            {/* ── Prayers ── */}
            <div>
              <p className="poppins text-xs font-semibold uppercase tracking-widest text-neutral/60 mb-3">
                Prayers
              </p>
              <div className="space-y-2">
                {prayerList.map((prayer) => (
                  <label
                    key={prayer}
                    className="flex items-center justify-between bg-base-200 hover:bg-primary/5 border border-transparent hover:border-primary/10 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{prayerEmoji[prayer]}</span>
                      <span className="poppins text-sm font-medium capitalize text-neutral group-hover:text-primary transition-colors">
                        {prayer}
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={prayers[prayer]}
                      onChange={() => dispatch(togglePrayer(prayer))}
                      className="checkbox checkbox-primary checkbox-sm"
                    />
                  </label>
                ))}
              </div>

              {/* Prayer progress bar */}
              <div className="mt-3 h-1.5 bg-base-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                  style={{ width: `${(completedPrayers / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* ── Quran Pages ── */}
            <div>
              <p className="poppins text-xs font-semibold uppercase tracking-widest text-neutral/60 mb-3">
                📖 Quran Pages Today
              </p>
              <div className="flex items-center gap-3 bg-base-200 rounded-xl px-4 py-3">
                <button
                  onClick={() => dispatch(updateQuranPages(Math.max(0, quranPages - 1)))}
                  className="w-8 h-8 rounded-lg bg-base-100 border border-primary/15 text-primary font-bold text-lg flex items-center justify-center hover:bg-primary hover:text-base-100 transition-all duration-200"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quranPages}
                  min="0"
                  onChange={(e) => dispatch(updateQuranPages(Number(e.target.value)))}
                  className="flex-1 bg-transparent text-center poppins text-2xl font-bold text-primary outline-none w-0"
                />
                <button
                  onClick={() => dispatch(updateQuranPages(quranPages + 1))}
                  className="w-8 h-8 rounded-lg bg-base-100 border border-primary/15 text-primary font-bold text-lg flex items-center justify-center hover:bg-primary hover:text-base-100 transition-all duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* ── Extra Ibadah ── */}
            <div>
              <p className="poppins text-xs font-semibold uppercase tracking-widest text-neutral/60 mb-3">
                Extra Ibadah
              </p>
              <div className="space-y-2">
                <label className="flex items-center justify-between bg-base-200 hover:bg-secondary/5 border border-transparent hover:border-secondary/15 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    <span className="text-base">🌃</span>
                    <span className="poppins text-sm font-medium text-neutral group-hover:text-secondary transition-colors">
                      Taraweeh
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={taraweeh}
                    onChange={() => dispatch(toggleTaraweeh())}
                    className="checkbox checkbox-secondary checkbox-sm"
                  />
                </label>

                <label className="flex items-center justify-between bg-base-200 hover:bg-accent/5 border border-transparent hover:border-accent/20 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    <span className="text-base">🤲</span>
                    <span className="poppins text-sm font-medium text-neutral group-hover:text-primary transition-colors">
                      Charity
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={charity}
                    onChange={() => dispatch(toggleCharity())}
                    className="checkbox checkbox-accent checkbox-sm"
                  />
                </label>
              </div>
            </div>

            {/* ── Reset ── */}
            <button
              onClick={() => dispatch(resetDay())}
              className="poppins w-full py-3 rounded-xl border border-error/30 text-error text-sm font-medium hover:bg-error hover:text-white transition-all duration-300"
            >
              Reset Day
            </button>
          </div>
        </div>

        {/* ════ Du'a Manager Card ════ */}
        <div className="bg-base-100 border border-primary/10 rounded-2xl overflow-hidden shadow-sm flex flex-col">

          {/* Card header */}
          <div className="px-7 py-5 border-b border-primary/10 flex items-center justify-between">
            <div>
              <h2 className="playfair-display text-xl font-bold text-primary">
                Du'a List
              </h2>
              <p className="poppins text-xs text-neutral mt-0.5">
                {completedDuas} of {duas.length} completed
              </p>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">
              🤲
            </div>
          </div>

          <div className="px-7 py-6 flex flex-col gap-5 flex-1">

            {/* ── Add Du'a ── */}
            <div className="flex gap-2">
              <input
                type="text"
                value={duaInput}
                onChange={(e) => setDuaInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddDua()}
                placeholder="Enter new du'a..."
                className="poppins flex-1 bg-base-200 border border-primary/10 focus:border-primary/30 rounded-xl px-4 py-2.5 text-sm text-neutral placeholder:text-neutral/40 outline-none transition-colors"
              />
              <button
                onClick={handleAddDua}
                className="poppins px-5 py-2.5 bg-primary text-base-100 text-sm font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200"
              >
                Add
              </button>
            </div>

            {/* ── Du'a Items ── */}
            <div className="flex-1 space-y-2 overflow-y-auto max-h-[360px] pr-1">
              {duas.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <span className="text-4xl opacity-30">🤲</span>
                  <p className="poppins text-sm text-neutral/50">No du'as added yet</p>
                </div>
              )}

              {duas.map((dua) => (
                <div
                  key={dua.id}
                  className={`group bg-base-200 border rounded-xl px-4 py-3 transition-all duration-200 ${
                    dua.completed
                      ? "border-success/15 bg-success/5"
                      : dua.favorite
                      ? "border-accent/20"
                      : "border-transparent"
                  }`}
                >
                  {editingId === dua.id ? (
                    <div className="flex gap-2">
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleUpdateDua()}
                        className="poppins flex-1 bg-base-100 border border-primary/20 rounded-lg px-3 py-2 text-sm outline-none"
                        autoFocus
                      />
                      <button
                        onClick={handleUpdateDua}
                        className="poppins px-4 py-2 bg-success text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <input
                          type="checkbox"
                          checked={dua.completed}
                          onChange={() => dispatch(toggleCompleted(dua.id))}
                          className="checkbox checkbox-success checkbox-sm flex-shrink-0"
                        />
                        <span
                          className={`poppins text-sm leading-relaxed truncate transition-all ${
                            dua.completed
                              ? "line-through text-neutral/40"
                              : "text-neutral"
                          }`}
                        >
                          {dua.text}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                        <button
                          onClick={() => dispatch(toggleFavorite(dua.id))}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm hover:bg-accent/15 transition-colors ${
                            dua.favorite ? "text-accent" : "text-neutral/40"
                          }`}
                          title="Favourite"
                        >
                          {dua.favorite ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => {
                            setEditingId(dua.id);
                            setEditText(dua.text);
                          }}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-sm text-neutral/40 hover:text-primary hover:bg-primary/10 transition-colors"
                          title="Edit"
                        >
                        <FaEdit/>
                        </button>
                        <button
                          onClick={() => dispatch(deleteDua(dua.id))}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-sm text-neutral/40 hover:text-error hover:bg-error/10 transition-colors"
                          title="Delete"
                        >
                          <FaTrash/>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── Clear Completed ── */}
            {duas.length > 0 && (
              <button
                onClick={() => dispatch(clearCompleted())}
                className="poppins w-full py-2.5 rounded-xl border border-primary/15 text-primary/60 text-sm font-medium hover:border-primary/30 hover:text-primary transition-all duration-200"
              >
                Clear Completed
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
    );
};

export default Planner;