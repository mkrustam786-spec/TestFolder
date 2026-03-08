import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState:{name:[]},
    reducers:{
        addUser:(state,action)=>{
            state.name.push(action.payload)
        }
    }
})
export default userSlice.reducer;
export const {addUser} = userSlice.actions;