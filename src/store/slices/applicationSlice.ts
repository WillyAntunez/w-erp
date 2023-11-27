import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ApplicationState = {
    isDarkMode: boolean;
    isAsideExpanded: boolean;
    screenWidth: number;
}

const initialState: ApplicationState = {
    isDarkMode: false,
    isAsideExpanded: false,
    screenWidth: window.innerWidth,
};

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        toggleAsideExpanded: (state) => {
            state.isAsideExpanded = !state.isAsideExpanded;
        },
        setScreenWidth: (state, action: PayloadAction<number>) => {
            state.screenWidth = action.payload;
        }
    }
});

export const {toggleDarkMode, toggleAsideExpanded, setScreenWidth} = applicationSlice.actions;