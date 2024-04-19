import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";
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
export const createClothing=createAsyncThunk("cloting/create",async(data)=>{
    try{
        const res=axiosInstance.post("/clothing/create",data);
        await toast.promise(res,{
            loading:"Waiting to create clothing",
            success:(data)=>{
            return data?.data?.message
            },
            error:"Failed to create data"
        })
        return (await res).data
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