import { Avatar, Box, Grid, IconButton, useTheme } from '@mui/material';
/* icons */
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { layoutConfig } from '../../config/layoutConfig';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import { useEffect, useRef, useState } from 'react';
import { responsiveSizes } from '@/config/responsive';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from '../AvatarMenu/AvatarMenu';

type HeaderProps = {
    classname?: string;
    gridTemplateArea?: string;
};

export const Header = ({
    classname = 'header',
    gridTemplateArea = 'header',
}: HeaderProps) => {
    const theme = useTheme();

    const config = layoutConfig.header;

    const { isAsideExpanded, onToggleMobileMenu } = useApplicationStore();

    const logoWidth = '150px';

    return (
        <Grid
            className={classname}
            sx={{
                width: '100%',
                gridArea: gridTemplateArea,
                height: `${layoutConfig.header.height}px`,
                border: '1px solid #EAEAEA',
                borderLeft: 'none',
                padding: '10px 20px',
                backgroundColor: theme.palette.background.default,
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                justifyContent: 'space-between',
            }}
        >
            <Grid
                item
                sx={{
                    [`@media (min-width: ${responsiveSizes.tablet}px)`]: {
                        display: 'none',
                    },
                }}
            >
                <IconButton size="small" onClick={onToggleMobileMenu}>
                    <MenuIcon />
                </IconButton>
            </Grid>

            {/* left */}
            <Grid
                container
                sx={{
                    display: 'flex',
                    width: 'max-content',
                    [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                        justifySelf: 'center',
                    },
                }}
                spacing={1}
            >
                {/* logo */}
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease-in-out',
                        width: isAsideExpanded ? '0px' : logoWidth,
                    }}
                >
                    <Box
                        // to="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            height: layoutConfig.header.height - 2,
                            position: 'absolute',
                            width: isAsideExpanded
                                ? layoutConfig.aside.width.expanded
                                : logoWidth,

                            left: isAsideExpanded
                                ? 0
                                : layoutConfig.aside.width.collapsed,

                            top: 0,
                            transition: 'all 0.3s ease-in-out',
                            userSelect: 'none',

                            [`@media (max-width: ${responsiveSizes.tablet}px)`]:
                                {
                                    position: 'relative',
                                    width: '100%',
                                    left: 0,
                                },
                        }}
                    >
                        <img
                            src="/assets/logos/logo.png"
                            alt="logo"
                            style={{ height: '40px', objectFit: 'contain' }}
                        />
                    </Box>
                </Box>

                {/* nav buttons (prev and next) */}
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        gap: 1,
                        [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    <IconButton
                        size="small"
                        sx={{
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            backgroundColor: theme.palette.grey[50],
                        }}
                    >
                        <ArrowLeftIcon
                            sx={{
                                color: theme.palette.grey[600],
                            }}
                        />
                    </IconButton>

                    <IconButton
                        size="small"
                        sx={{
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            backgroundColor: theme.palette.grey[50],
                        }}
                    >
                        <ArrowRightIcon
                            sx={{
                                color: theme.palette.grey[600],
                            }}
                        />
                    </IconButton>
                </Grid>

                {/* left slot */}
                <Grid
                    item
                    className={config.slotNames.left}
                    sx={{
                        [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    {/* this is the left slot to portal used by the Content component */}
                </Grid>
            </Grid>

            {/* center slot */}
            <Grid
                item
                className={config.slotNames.center}
                sx={{
                    [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                        display: 'none',
                    },
                }}
            >
                {/* this is the center slot to portal used by the Content component */}
            </Grid>

            {/* right */}
            <Grid
                container
                sx={{
                    display: 'flex',
                    width: 'max-content',
                    alignItems: 'center',
                }}
                spacing={1}
            >
                {/* right slot */}
                <Grid
                    item
                    className={config.slotNames.right}
                    sx={{
                        [`@media (max-width: ${responsiveSizes.tablet}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    {/* this is the right slot to portal used by the Content component */}
                </Grid>

                <Grid item>
                    <IconButton
                        size={'small'}
                        sx={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: theme.palette.grey[50],
                        }}
                    >
                        <NotificationsIcon />
                    </IconButton>
                </Grid>

                <Grid item>
                    <AccountMenu />
                </Grid>
            </Grid>

            {/* notificationIcon */}
            {/* userIcon */}
        </Grid>
    );
};
