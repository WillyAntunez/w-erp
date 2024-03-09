import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const UnderConstruction = () => {
    const { t } = useTranslation();

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
                pointerEvents: 'none',
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
                    src="/assets/illustrations/goose-under-construction.png"
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
                    <strong>¡Oops!</strong>
                </Typography>
                <Typography
                    sx={{
                        fontSize: 19,
                        textAlign: 'center',
                    }}
                >
                    {t('section-under-construction-message')}
                </Typography>
            </Box>
        </Box>
    );
};

export default UnderConstruction;
