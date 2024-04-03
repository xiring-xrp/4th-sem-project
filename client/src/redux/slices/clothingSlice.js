import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState={
    clothingData:[]
}
export const getAllClothings=createAsyncThunk("clothing/getAll",async()=>{
    try{
        const res=axiosInstance.get("clothing/getAllClothings");
        return (await res).data.clothings
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})
const clothingSlice=createSlice({
    name:'clothing',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllClothings.fulfilled,(state,action)=>{
            if(action.payload){
                state.clothingData=[...action.payload];
            }
        })
    }
})
export default clothingSlice.reducer;