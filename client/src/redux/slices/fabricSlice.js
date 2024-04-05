import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState={
    fabricData:[]
}
export const getAllFabrics=createAsyncThunk("fabric/getAll",async()=>{
    try{
        const res=axiosInstance.get("/fabric/getAll");
        return (await res).data.fabrics;
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})
const fabricSlice=createSlice({
    name:"fabric",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllFabrics.fulfilled,(state,action)=>{
            if(action?.payload){
                state.fabricData=[...action.payload]
            }
        })
    }
})
export default fabricSlice.reducer;