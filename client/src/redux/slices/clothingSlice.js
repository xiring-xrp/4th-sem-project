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
export const deleteClothing = createAsyncThunk(
    'clothing/deleteClothing',
    async (id) => {
      await axiosInstance.delete(`/clothing/delete/${id}`);
      return id;
    }
  );
  export const getClothing = createAsyncThunk('clothing/getClothing', async (id) => {
    const response = await axios.get(`/api/clothings/${id}`);
    return response.data;
  });
  export const updateClothing = createAsyncThunk('clothing/updateClothing', async ({ id, formData }) => {
    const response = await axios.put(`/api/clothing/edit/${id}`, formData);
    return response.data;
  });
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
        .addCase(updateClothing.fulfilled, (state, action) => {
            state.clothingData = state.clothingData.map(cloth => (cloth._id === action.payload._id ? action.payload : cloth));
          })
    }
})
export default clothingSlice.reducer;