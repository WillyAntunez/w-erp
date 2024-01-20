import {
    Avatar,
    Box,
    Button,
    Fab,
    Grid,
    IconButton,
    useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
/* icons */
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { layoutConfig } from '../../config/layoutConfig';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import { useEffect, useRef, useState } from 'react';

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

    const { isAsideExpanded } = useApplicationStore();

    const logoRef = useRef<HTMLImageElement>(null);
    const [currentLogoWidth, setCurrentLogoWidth] = useState(0);

    useEffect(() => {
        if (logoRef?.current) {
            setCurrentLogoWidth(logoRef.current.offsetWidth);
        }
    }, [isAsideExpanded]);

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
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {/* left */}
            <Grid
                container
                sx={{
                    display: 'flex',
                    width: 'max-content',
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
                        width: isAsideExpanded ? '0px' : currentLogoWidth,
                    }}
                >
                    <NavLink
                        to="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            height: layoutConfig.header.height - 2,
                            position: 'absolute',
                            width: isAsideExpanded
                                ? layoutConfig.aside.width.expanded
                                : currentLogoWidth,

                            left: isAsideExpanded
                                ? 0
                                : layoutConfig.aside.width.collapsed,

                            top: 0,
                            transition: 'all 0.3s ease-in-out',
                            userSelect: 'none',
                        }}
                    >
                        <img
                            src="/assets/logos/logo.png"
                            alt="logo"
                            style={{ height: '40px', objectFit: 'contain' }}
                            ref={logoRef}
                        />
                    </NavLink>
                </Box>

                {/* nav buttons (prev and next) */}
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        gap: 1,
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
                <Grid item className={config.slotNames.left}>
                    {/* this is the left slot to portal used by the Content component */}
                </Grid>
            </Grid>

            {/* center slot */}
            <Grid item className={config.slotNames.center}>
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
                <Grid item className={config.slotNames.right}>
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
                    <IconButton
                        sx={{
                            width: '32px',
                            height: '32px',
                        }}
                    >
                        <Avatar
                            sx={{
                                width: '32px',
                                height: '32px',
                                fontSize: '14px',
                            }}
                        >
                            WA
                        </Avatar>
                    </IconButton>
                </Grid>
            </Grid>

            {/* notificationIcon */}
            {/* userIcon */}
        </Grid>
    );
};
