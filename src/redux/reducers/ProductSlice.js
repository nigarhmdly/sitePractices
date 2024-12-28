import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk("api/products", async() => {
    const response = await axios.get(`http://localhost:3000/products`)
    return response.data
})
export const getBasketProductsThunk = createAsyncThunk("api/basketproducts", async() => {
    const response = await axios.get(`http://localhost:3000/cart`)
    return response.data
})
export const getWishProductsThunk = createAsyncThunk("api/wishproducts", async() => {
    const response = await axios.get(`http://localhost:3000/wish`)
    return response.data
})



export const postProductsThunk = createAsyncThunk("api/postproducts", async(data) => {
    const response = await axios.post(`http://localhost:3000/products`,data)
    return response.data
})
export const postBasketProductsThunk = createAsyncThunk("api/postbasket", async(data) => {
    axios.get("http://localhost:3000/cart")
    .then(res => {
        const existingProduct = res.data.find(item => item.id === data.id )
        if(existingProduct){
           axios.put(`http://localhost:3000/cart/${data.id}`,{...data,count:existingProduct.count+1})
        }
        else{
            axios.post(`http://localhost:3000/cart`,{...data,count:1})
        }
    })
})
export const postWishProductsThunk = createAsyncThunk("api/postwish", async(data) => {
    axios.get("http://localhost:3000/wish")
    .then(res => {
        const existingProduct = res.data.find(item => item.id === data.id )
        if(existingProduct){
            alert("Favirilerde var");        }
        else{
         axios.post(`http://localhost:3000/wish`,data)
        }
    })
})


export const deleteProductsThunk = createAsyncThunk("api/delproducts", async(id) => {
   await axios.delete(`http://localhost:3000/products/${id}`,id)
    return id
})
export const deleteBasketProductsThunk = createAsyncThunk("api/delbasket", async(id) => {
  await axios.delete(`http://localhost:3000/cart/${id}`,id)
    return id
})
export const deleteWishProductsThunk = createAsyncThunk("api/delwish", async(id) => {
   await axios.delete(`http://localhost:3000/wish/${id}`,id)
    return id
})


export const productsSlice = createSlice({
    name:"products",
    initialState:{},
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
       
        .addCase(getProductsThunk.fulfilled , (state,action) => {
            state.loading=false
            state.products= action.payload
        })
        .addCase(getBasketProductsThunk.fulfilled , (state,action) => {
            state.loading=false
            state.products= action.payload
        })
        .addCase(getWishProductsThunk.fulfilled , (state,action) => {
            state.loading=false
            state.products= action.payload
        })
        
        .addCase(deleteProductsThunk.fulfilled, (state,action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        })
        .addCase(deleteBasketProductsThunk.fulfilled, (state,action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        })
        .addCase(deleteWishProductsThunk.fulfilled, (state,action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        })
    


        .addCase(postProductsThunk.fulfilled, (state,action) => {
            state.products.push(action.payload)
        })
 
 
    }
    
})

export default productsSlice.reducer