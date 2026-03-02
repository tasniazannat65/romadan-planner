import { nanoid } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
duas: [
    {
        id: 1,
        arabic: 'اللهم إنك عفو تحب العفو فاعفُ عني',
        english: "O Allah, You are Most Forgiving, and You love forgiveness; so forgive me.",
        completed: false,
        favorite: false
    }
       
]
}

export const duaSlice = createSlice({
  name: 'dua',
  initialState,
  reducers: {
    addDua: (state, action)=> {
        state.duas.push({
            id: nanoid(),
            arabic: action.payload.arabic,
            english: action.payload.english,
            completed: false,
            favorite: false
        })
    },
    deleteDua: (state, action)=> {
        state.duas = state.duas.filter((dua)=> dua.id !== action.payload)
    },
    updateDua: (state, action)=>{
    const {id, newArabic, newEnglish} = action.payload;
    const dua = state.duas.find((d)=> d.id === id);
    if(dua){
        dua.arabic = newArabic;
        dua.english = newEnglish;
    }
    },
    toggleCompleted: (state, action)=> {
        const dua = state.duas.find((d)=> d.id === action.payload);
        if(dua){
            dua.completed = !dua.completed;
        }
    },
    toggleFavorite: (state, action)=>{
        const dua = state.duas.find((d)=> d.id === action.payload);
        if(dua){
            dua.favorite = !dua.favorite;
        }
    },
    clearCompleted: (state)=> {
        state.duas = state.duas.filter((dua)=> !dua.completed)
    }
  
  }

})
export const {addDua, deleteDua, updateDua, toggleCompleted, toggleFavorite, clearCompleted} = duaSlice.actions;


export default duaSlice.reducer