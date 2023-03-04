import { createSlice } from '@reduxjs/toolkit';
import { addToNewsletter } from '../utils/thinks';

export const usersSlice = createSlice({
   name:'users',
   initialState:{
       action:{}
   },
   reducers:{

   },
   extraReducers:(builder)=>{
       builder
       .addCase(addToNewsletter.fulfilled,(state,action)=>{
           state.action = action.payload
       })
   }
 });
 
 export default usersSlice.reducer;