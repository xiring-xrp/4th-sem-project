import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState={
    measureData:[]
}
export const getMeasurementData = createAsyncThunk("/user/measurements", async () => {
    try{
      const res = await axiosInstance.get("/measurement/getMeasurement");
      return res?.data.measurement;
    } catch (error){
      toast.error(error.message);
    }
  })
  

const measurementSlice=createSlice({
    name:'measurement',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getMeasurementData.fulfilled, (state, action) => {
            if(action?.payload){
                state.measureData=action.payload
            }
          })
    }
})
export const createMeasurement=createAsyncThunk("measurement/create",async(data)=>{
    try{
        const res=axiosInstance.post(`/measurement/create`,data)
        toast.promise(res,{
            loading:"Waiting to create measurement",
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to create measurement"
        })
        return (await res).data
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})
export default measurementSlice.reducer;