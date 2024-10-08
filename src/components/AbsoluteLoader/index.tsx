import { Box, Typography } from '@mui/material';

type AbsoluteLoaderProps = {
    message?: string;
    open?: boolean;
};

export const AbsoluteLoader = ({
    message = 'cargando',
    open = false,
}: AbsoluteLoaderProps) => {
    return open ? (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1000,
                flexDirection: 'column',
            }}
        >
            {/* gif */}
            <Box
                sx={{
                    display: 'flex',
                    width: '200px',
                    height: '200px',
                }}
            >
                <img
                    src="/assets/gifs/walking-duck.gif"
                    alt="loading"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>

            {/* message */}
            <Typography
                sx={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: (theme) => theme.palette.text.primary,
                    textAlign: 'center',
                }}
            >
                {message}
                <span className="dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </span>
            </Typography>
        </Box>
    ) : null;
};

export default AbsoluteLoader;
