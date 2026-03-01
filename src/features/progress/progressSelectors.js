import { createSelector } from "@reduxjs/toolkit";

export const selectProgress = createSelector(
    [(state)=> state.ibadah, (state)=> state.dua],
    (ibadah, dua)=> {
        const prayerValues = Object.values(ibadah.prayers);
        const completedPrayers = prayerValues.filter(Boolean).length;
        const extra = (ibadah.taraweeh ? 1 : 0) +
        (ibadah.charity ? 1 : 0);
        const totalIbadah = 7;
        const ibadahScore = completedPrayers + extra;
        const completedDuas = dua.duas.filter(d=> d.completed).length;
        return {
            ibadahPercentage: Math.round((ibadahScore / totalIbadah) * 100),
            completedDuas,
            totalDuas: dua.duas.length,
        }
    }
)