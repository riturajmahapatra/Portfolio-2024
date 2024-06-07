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
      dispatch(ReloadData(false));
    } catch (error) {
      error;
    }
  }
);

interface PortfolioData {
  intro: { _id: { $oid: string }; introduction: string }[];
  about: { _id: { $oid: string }; about: string }[];
  introduction: string;
  projects: {
    _id: { $oid: string };
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    imgHref: string;
  }[];
  experiences: {
    _id: { $oid: string };
    title: string;
    company: string;
    location: string;
    description: string;
    date: string;
  }[];
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
    reloadData: false,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    SetPortFolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
  },
});

export default userDetails.reducer;
export const { SetPortFolioData, ReloadData } = userDetails.actions;
