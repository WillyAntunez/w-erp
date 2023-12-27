import { layoutConfig } from '@/config/layoutConfig';
import { Avatar, Button, Fab, Grid, IconButton, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
/* icons */
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

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

    return (
        <Grid
            className={classname}
            sx={{
                width: '100%',
                gridArea: gridTemplateArea,
                height: `${layoutConfig.header.height}px`,
                boxShadow: '0px 4px 42px 0px rgba(0, 0, 0, 0.05)',
                border: '1px solid #EAEAEA',
                padding: '10px 20px',
                backgroundColor: '#fff',
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
                <Grid item>
                    <NavLink to="/">
                        <img
                            src="/assets/logos/logo.png"
                            alt="logo"
                            style={{ height: '40px' }}
                        />
                    </NavLink>
                </Grid>

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
