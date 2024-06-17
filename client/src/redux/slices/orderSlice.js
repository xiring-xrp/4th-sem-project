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
export const getOrderedData = createAsyncThunk("/user/details", async () => {
    try {
      const res = await axiosInstance.get("/order/getOrder");
      return res?.data;
    } catch (error) {
      toast.error(error.message);
    }
  });
export const getOrderdataByUser=createAsyncThunk('order/details',async()=>{
    try{
        const res=axiosInstance.get("/orderHistory/getOrderHistory");
        
        return (await res).data;
    }catch(error){
        toast.error(error.message);
    }
})
export const updateOrderStatus=createAsyncThunk('order/status',async(data)=>{
    try{
        const res=axiosInstance.put(`/order/update/order_status/${data.orderId}`,{order_status:data.status});
        console.log((await res).data);
        return (await res).data;

    }catch(error){
        toast.error(error.message)
    }
})
const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getOrderedData.fulfilled,(state,action)=>{
         if(action?.payload?.orders){
             state.orderData=[...action.payload.orders];
         }
        })
        .addCase(getOrderdataByUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.orderData=[...action.payload.order];
        })
    }
})
export default orderSlice.reducer;
