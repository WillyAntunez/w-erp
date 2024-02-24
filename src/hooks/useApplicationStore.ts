import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import {
    ApplicationState,
    setScreenWidth,
    toggleAsideExpanded,
    toggleDarkMode,
    toggleMobileMenu,
    setMobileMenu,
    setAsideExpanded,
    toggleAsideMenus,
    closeAllAsideMenus,
    setAsideMenu,
    closeAllAboveAsideMenus,
} from '../store/slices/applicationSlice';
import { useMemo } from 'react';
import { responsiveSizes } from '@/config/responsive';

export const useApplicationStore = () => {
    const applicationState: ApplicationState = useSelector(
        (state: RootState): ApplicationState => state.application,
    );
    const { isAsideExpanded, screenWidth, isMobileMenuOpen } = applicationState;

    const dispatch = useAppDispatch();

    const isMobile = useMemo(
        () => screenWidth < responsiveSizes.tablet,
        [screenWidth],
    );

    const onToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    const onToggleAsideExpanded = () => {
        dispatch(toggleAsideExpanded());
    };

    const onSetAsideExpanded = (isExpanded: boolean) => {
        dispatch(setAsideExpanded(isExpanded));
    };

    const onSetScreenWidth = (width: number) => {
        dispatch(setScreenWidth(width));
    };

    const onToggleMobileMenu = () => {
        dispatch(toggleMobileMenu());
    };

    const onSetMobileMenu = (isOpen: boolean) => {
        dispatch(setMobileMenu(isOpen));
    };

    const listenScreenWidth = () => {
        const lsitenerFunction = () => {
            if (isMobileMenuOpen) {
                dispatch(setMobileMenu(false));
            }

            if (isAsideExpanded) {
                dispatch(setAsideExpanded(false));
            }

            onSetScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', lsitenerFunction);

        onSetScreenWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', lsitenerFunction);
        };
    };

    const onToggleAsideMenus = (menuName: string, level: number) => {
        dispatch(
            toggleAsideMenus({
                menuName,
                level,
                open: !applicationState.asideOpenMenus[menuName]?.open,
            }),
        );
    };

    const onCloseAllAsideMenus = () => {
        dispatch(closeAllAsideMenus());
    };

    const onSetAsideMenu = (
        menuName: string,
        isOpen: boolean,
        level: number,
    ) => {
        dispatch(
            setAsideMenu({
                menuName,
                level,
                open: isOpen,
            }),
        );
    };

    const onCloseAllAboveAsideMenus = (level: number) => {
        dispatch(closeAllAboveAsideMenus(level));
    };

    return {
        ...applicationState,

        // properties
        isMobile,

        // methods
        onToggleDarkMode,
        onToggleAsideExpanded,
        onSetScreenWidth,
        onToggleMobileMenu,
        onSetMobileMenu,
        onSetAsideExpanded,
        onToggleAsideMenus,
        onCloseAllAsideMenus,
        onSetAsideMenu,
        onCloseAllAboveAsideMenus,

        // listeners
        listenScreenWidth,
    };
};
