import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState={
    orderData:[]
}
export const createOrder=createAsyncThunk("order/create",async(data)=>{
    try{
        const res=axiosInstance.post('/order/create',data);
        toast.promise(res,{
            loading:'Waiting to order...',
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to order"

        })
        return (await res).data
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})
const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
    }
})
export default orderSlice.reducer;
