import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                paddingY: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flex: 1,

                userSelect: 'none',
            }}
        >
            {/* illustration */}
            <Box
                sx={{
                    display: 'flex',
                    width: '200px',
                    height: '200px',
                }}
            >
                <img
                    src="/assets/illustrations/lost-goose.png"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Box>
            {/* text */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    color: (theme) => theme.palette.text.primary,
                }}
            >
                <Typography
                    sx={{
                        fontSize: 24,
                        fontWeight: 700,
                        marginBottom: 1,
                    }}
                >
                    <strong>¡404!</strong>
                </Typography>
                <Typography
                    sx={{
                        fontSize: 19,
                        textAlign: 'center',
                    }}
                >
                    Lo sentimos, la página que buscas no existe.
                </Typography>
            </Box>
            {/* go back home button */}
            <Box
                sx={{
                    display: 'flex',
                    padding: 2,
                }}
            >
                <NavLink to="/">
                    <Button variant="contained" color="primary">
                        Ir al inicio
                    </Button>
                </NavLink>
            </Box>
        </Box>
    );
};

export default NotFound;
