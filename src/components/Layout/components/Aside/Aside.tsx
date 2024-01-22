import { AsideItem } from '../AsideItem/AsideItem';
import { Box, Grid } from '@mui/material';
import { layoutConfig } from '@/components/Layout/config/layoutConfig';
import { responsiveSizes } from '@/config/responsive';
import { Theme as MuiTheme } from '@mui/material/styles';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import { useRef } from 'react';
import { useTheme } from '@emotion/react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HomeIcon from '@mui/icons-material/Home';

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}

export const Aside = () => {
    const {
        isAsideExpanded,
        isMobile,
        isMobileMenuOpen,
        onSetMobileMenu,
        onToggleAsideExpanded,
        onToggleMobileMenu,
    } = useApplicationStore();

    const theme: MuiTheme = useTheme();

    const asideRef = useRef<HTMLDivElement>(null);

    useOutsideAlerter(asideRef, () => {
        if (isMobile) {
            onSetMobileMenu(false);
        }
    });

    return (
        <Box
            gridArea={'sidebar'}
            sx={{
                height: '100%',
                [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                    width: '100%',
                    backgroundColor: '#0000007a',
                    position: 'absolute',
                    zIndex: 100,

                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? 'all' : 'none',
                    transition: 'opacity 0.3s ease-in-out',
                },
            }}
        >
            <Box
                ref={asideRef}
                sx={{
                    width: isAsideExpanded
                        ? layoutConfig.aside.width.expanded
                        : layoutConfig.aside.width.collapsed,
                    backgroundColor: theme.palette.background.default,
                    height: '100%',
                    border: '1px solid #EAEAEA',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    // move to a side if the screen is small
                    [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                        position: 'absolute',
                        left: !isMobileMenuOpen ? '-100%' : 0,
                        zIndex: 100,
                        width: '85%',
                    },
                }}
            >
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: layoutConfig.header.height,
                        borderBottom: '1px solid #EAEAEA',
                        userSelect: 'none',
                        [`@media (min-width: ${responsiveSizes.tablet}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    <img
                        src="/assets/logos/logo.png"
                        alt="logo"
                        style={{ height: '40px', objectFit: 'contain' }}
                    />
                </Grid>

                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        height: isAsideExpanded
                            ? layoutConfig.header.height - 2
                            : '0px',
                        transition: 'height 0.3s ease-in-out',
                        [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                            display: 'none',
                        },
                    }}
                ></Grid>

                <Grid
                    sx={{
                        [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    {isAsideExpanded ? <AsideItem type="SEPARATOR" /> : null}
                </Grid>

                {/* expand and collapse item */}
                <Grid
                    sx={{
                        display: 'flex',
                        marginTop: 'auto',
                        flexDirection: 'column',
                    }}
                >
                    <AsideItem
                        type="BOX"
                        label="Inicio"
                        muiIcon={<HomeIcon />}
                    />
                    <AsideItem type="SEPARATOR" />
                </Grid>

                {/* aside items */}
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flex: 1,
                        width: '100%',
                    }}
                ></Grid>

                {/* expand and collapse item */}
                <Grid
                    sx={{
                        display: 'flex',
                        marginTop: 'auto',
                        flexDirection: 'column',
                    }}
                >
                    <AsideItem type="SEPARATOR" />
                    <AsideItem
                        type="BOX"
                        muiIcon={
                            isAsideExpanded || isMobile ? (
                                <ArrowLeftIcon />
                            ) : (
                                <ArrowRightIcon />
                            )
                        }
                        onClick={() => {
                            isMobile
                                ? onToggleMobileMenu()
                                : onToggleAsideExpanded();
                        }}
                    />
                </Grid>
            </Box>
        </Box>
    );
};
