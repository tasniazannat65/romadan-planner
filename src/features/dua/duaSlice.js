import { nanoid } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
duas: [
    {
        id: 1,
        text: 'Allahumma innaka ‘afuwwun tuhibbul ‘afwa fa’fu ‘anni.',
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
            text: action.payload,
            completed: false,
            favorite: false
        })
    },
    deleteDua: (state, action)=> {
        state.duas = state.duas.filter((dua)=> dua.id !== action.payload)
    },
    updateDua: (state, action)=>{
    const {id, newText} = action.payload;
    const dua = state.duas.find((d)=> d.id === id);
    if(dua){
        dua.text = newText;
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