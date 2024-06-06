import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useAppDispatch } from '../hooks';

export const fetchPortfolioData = createAsyncThunk(
  'userDetails/fetchPortfolioData',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        'https://portfolio-2024-server.vercel.app/api/v1/data'
      );
      dispatch(SetPortFolioData(response.data));
      console.log(response.data);
    } catch (error) {
      error;
    }
  }
);

interface PortfolioData {
  portfolioData?: {
    intro: string;
    about: string;
  };
  intro: {
    introduction: string;
  };
  about: string;
  projects: {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    imgHref: string;
  };
  technologies: string[];
  links: {
    website?: string;
    github?: string;
  };
}

export const userDetails = createSlice({
  name: 'userDetails',
  initialState: {
    portfolioData: null as PortfolioData | null,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    SetPortFolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export default userDetails.reducer;
export const { SetPortFolioData } = userDetails.actions;
