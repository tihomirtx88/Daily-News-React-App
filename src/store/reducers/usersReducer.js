import { createSlice } from '@reduxjs/toolkit';
import { addToNewsletter } from '../utils/thinks';

export const usersSlice = createSlice({
   name:'users',
   initialState:{
       action:{}
   },
   reducers:{
       clearNewsLetter:(state,action)=>{
          state.action ={}
       }
   },
   extraReducers:(builder)=>{
       builder
       .addCase(addToNewsletter.fulfilled,(state,action)=>{
           state.action = action.payload
       })
   }
 });
 
 export const { clearNewsLetter } = usersSlice.actions;
 export default usersSlice.reducer;