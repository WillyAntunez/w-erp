import { createSlice } from '@reduxjs/toolkit';

export type settingsState = {
    customers: {
        minAge: number;
        maxAge: number;
    };
};

const initialState: settingsState = {
    customers: {
        minAge: 17,
        maxAge: 999999,
    },
};

export const settingsSlice = createSlice({
    name: 'Settings',
    initialState,
    reducers: {},
});

export const {} = settingsSlice.actions;
