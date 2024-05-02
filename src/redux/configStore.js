import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import phimSlice from './slice/phimSlice';
import loadingSlice from './slice/loadingSlice';

export const store = configureStore({
  reducer: {
    userSlice,
    phimSlice,
    loadingSlice,
  },
});
