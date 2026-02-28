import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 prayers: {
  fajr:false,
  dhuhr: false,
  asr: false,
  maghrib: false,
  isha: false

 },
 quranPages: 0,
 taraweeh: false,
 charity: false
}

export const ibadahSlice = createSlice({
  name: 'ibadah',
  initialState,
  reducers: {
  togglePrayer: (state, action)=> {
    const prayerName = action.payload;
    state.prayers[prayerName] = !state.prayers[prayerName];
  },
  updateQuranPages: (state, action)=> {
    state.quranPages = action.payload;
  },
  toggleTaraweeh: (state)=> {
    state.taraweeh = !state.taraweeh;
  },
  toggleCharity: (state)=> {
    state.charity = !state.charity;
  },
  resetDay : ()=> initialState
  }

})
export const {togglePrayer, updateQuranPages, toggleTaraweeh, toggleCharity, resetDay} = ibadahSlice.actions;


export default ibadahSlice.reducer