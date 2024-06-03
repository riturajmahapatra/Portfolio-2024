import { createSlice } from '@reduxjs/toolkit';

export const userDetails = createSlice({
  name: 'userDetails',
  initialState: {
    portfolioData: null,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    ShowLoading: (state) => {
      state.loading = true;
    },
    SetPortFolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export default userDetails.reducer;
export const { ShowLoading, SetPortFolioData } = userDetails.actions;
