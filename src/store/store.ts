import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { applicationSlice } from './slices/applicationSlice';
import { authSlice } from './slices/authSlice';
import { settingsSlice } from './slices/configurationSlice';

// Create the store
const store = configureStore({
    reducer: {
        application: applicationSlice.reducer,
        auth: authSlice.reducer,
        settings: settingsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
