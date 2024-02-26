

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://bwppdwpoab.execute-api.us-east-1.amazonaws.com/dev/employee/personalInfo', data);
    
    console.log(response);
    // return response.data; 
    const hrDetails = await axios.get(`https://bwppdwpoab.execute-api.us-east-1.amazonaws.com/dev/employee/${response.data.id}`,{
      params:{userId:response.data.id}}
    );
    console.log("hr data",hrDetails.data);

    return hrDetails.data


  } catch (error) {
    console.log("error",error);
    console.log("error of the axios",error.message);
    
    return rejectWithValue(error.message);
    
  }
}
);

// organization details of the hr
export const createCompany = createAsyncThunk('createCompany', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.put('https://bwppdwpoab.execute-api.us-east-1.amazonaws.com/dev/organization', data);
    
    console.log(response);
    // return response.data; 

  } catch (error) {
    console.log("error",error);
    console.log("error of the axios",error.message);
    
    // return rejectWithValue(error.message);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error data:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);

      // Optionally, you can reject with custom error message or error response
      // This is useful for providing more detailed feedback to your Redux store
      return rejectWithValue(error.response.data);
    
    }
  }
});



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
      })

  },
});

export const { setPersonalData, setCompanyData } = personalDetails.actions;
export default personalDetails.reducer;
