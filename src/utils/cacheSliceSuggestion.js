import { createSlice } from "@reduxjs/toolkit";


const suggestSlice = createSlice({
    name: "suggestions",
    initialState :{

    },
    reducers:{
        addSugestion : (state,action)=>{
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const {addSugestion} = suggestSlice.actions;

export default suggestSlice.reducer;


