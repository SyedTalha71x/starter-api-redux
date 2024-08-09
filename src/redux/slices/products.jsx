import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
})

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("Error-----------", action.payload);
            state.isError = true
        })
    }
})

export default ProductSlice.reducer