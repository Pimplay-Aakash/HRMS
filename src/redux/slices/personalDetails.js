

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://bwppdwpoab.execute-api.us-east-1.amazonaws.com/dev/employee/personalInfo', data);

    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// export const createCompany = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
//   try {
//     const response = await axios.put('https://bwppdwpoab.execute-api.us-east-1.amazonaws.com/dev/organization', data);

//     return response.data; 
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

export const personalDetails = createSlice({
  name: 'personalDetails',
  initialState: {
    personalData:{},
    companyData:{},
    OnboardingData:null,
    loading: false,
    error: null,
  },
  reducers: {
    setPersonalData:(state,action) => {
      state.personalData = action.payload
    },
    setCompanyData:(state,action) => {
      state.companyData = action.payload
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'succeeded';
        // state.OnboardingData.push(action.payload);
        state.OnboardingData = action.payload
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setPersonalData, setCompanyData } = personalDetails.actions;
export default personalDetails.reducer;
