import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name : "user",
    initialState:{
        currentUser : null
    },
    reducers:{
        setUser: (state,action)=>{
            state.currentUser = action.payload
        }
    }
})

export const {setUser} = slice.actions;
export default slice.reducer;

