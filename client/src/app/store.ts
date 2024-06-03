import { configureStore } from '@reduxjs/toolkit';
import userDetails from './features/userDetailSlice';

export const store = configureStore({
  reducer: {
    app: userDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
