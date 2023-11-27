
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { applicationSlice } from './slices/applicationSlice';	

// Create the store
const store = configureStore({
  reducer : {
    application: applicationSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
