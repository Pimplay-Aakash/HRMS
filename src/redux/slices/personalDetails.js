

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://65d59c52f6967ba8e3bbfcc0.mockapi.io/onbording', data);

    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const personalDetails = createSlice({
  name: 'personalDetails',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default personalDetails.reducer;
