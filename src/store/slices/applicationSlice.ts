import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ApplicationState = {
    isDarkMode: boolean;
    isAsideExpanded: boolean;
    screenWidth: number;
    isMobileMenuOpen: boolean;
};

const initialState: ApplicationState = {
    isDarkMode: false,
    isAsideExpanded: false,
    screenWidth: window.innerWidth,
    isMobileMenuOpen: false,
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
        },
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        setMobileMenu: (state, action: PayloadAction<boolean>) => {
            state.isMobileMenuOpen = action.payload;
        },
        setAsideExpanded: (state, action: PayloadAction<boolean>) => {
            state.isAsideExpanded = action.payload;
        },
    },
});

export const {
    toggleDarkMode,
    toggleAsideExpanded,
    setScreenWidth,
    toggleMobileMenu,
    setMobileMenu,
    setAsideExpanded,
} = applicationSlice.actions;
