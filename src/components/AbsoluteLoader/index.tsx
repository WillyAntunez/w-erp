import { Box, Typography } from '@mui/material';

import i18n from '@/locales/config';

type AbsoluteLoaderProps = {
    message?: string;
    open?: boolean;
};

export const AbsoluteLoader = ({
    message = i18n.t('loading'),
    open = false,
}) => {
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
                    color: '#1d1d1d',
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
