import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ApplicationState = {
    isDarkMode: boolean;
    isAsideExpanded: boolean;
    screenWidth: number;
    isMobileMenuOpen: boolean;
    asideOpenMenus: {
        [key: string]: {
            open: boolean;
            level: number;
        };
    };
};

const initialState: ApplicationState = {
    isDarkMode: false,
    isAsideExpanded: false,
    screenWidth: window.innerWidth,
    isMobileMenuOpen: false,
    asideOpenMenus: {},
};

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        // dark mode
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        // screen width and responsive
        setScreenWidth: (state, action: PayloadAction<number>) => {
            state.screenWidth = action.payload;
        },
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        setMobileMenu: (state, action: PayloadAction<boolean>) => {
            state.isMobileMenuOpen = action.payload;
        },
        // aside
        toggleAsideExpanded: (state) => {
            state.isAsideExpanded = !state.isAsideExpanded;
        },
        setAsideExpanded: (state, action: PayloadAction<boolean>) => {
            state.isAsideExpanded = action.payload;
        },
        // asideOpenMenus
        toggleAsideMenus: (
            state,
            action: PayloadAction<{
                open: boolean;
                level: number;
                menuName: string;
            }>,
        ) => {
            const { menuName, open } = action.payload;
            state.asideOpenMenus[menuName] = {
                open: !state.asideOpenMenus[menuName],
                level: action.payload.level || 1,
            };
        },
        setAsideMenu: (
            state,
            action: PayloadAction<{
                open: boolean;
                level: number;
                menuName: string;
            }>,
        ) => {
            state.asideOpenMenus[action.payload.menuName] = {
                open: action.payload.open,
                level: action.payload.level || 1,
            };
        },
        closeAllAsideMenus: (state) => {
            state.asideOpenMenus = {};
        },
        closeAllAboveAsideMenus: (state, action: PayloadAction<number>) => {
            Object.keys(state.asideOpenMenus).forEach((key) => {
                if (state.asideOpenMenus[key].level >= action.payload) {
                    state.asideOpenMenus[key] = {
                        open: false,
                        level: state.asideOpenMenus[key].level,
                    };
                }
            });
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
    toggleAsideMenus,
    closeAllAsideMenus,
    setAsideMenu,
    closeAllAboveAsideMenus,
} = applicationSlice.actions;
