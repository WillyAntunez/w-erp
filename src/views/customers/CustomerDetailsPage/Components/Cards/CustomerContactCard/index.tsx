import CardContainer from '@/components/CardContainer';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { Box, Grid, Typography } from '@mui/material';

export const CustomerContactCard = () => {
    return (
        <CardContainer
            title="Información de contacto"
            sx={{
                height: '100%',
            }}
        >
            <Grid container spacing={2} pt={1}>
                {/* address */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            color: (theme) => theme.palette.primary.light,
                        }}
                    >
                        <MuiIcon
                            icon="LocationOn"
                            iconProps={{
                                color: 'inherit',
                                fontSize: 'small',
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        Avenida Innovación #123, Parque Tecnológico, Ciudad
                        Tecnológica, Estado TecLand.
                    </Typography>
                </Grid>

                {/* phone */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            color: (theme) => theme.palette.primary.light,
                        }}
                    >
                        <MuiIcon
                            icon="Phone"
                            iconProps={{
                                color: 'inherit',
                                fontSize: 'small',
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        +504 2323-2414
                    </Typography>
                </Grid>

                {/* email 1 */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            color: (theme) => theme.palette.primary.light,
                        }}
                    >
                        <MuiIcon
                            icon="Email"
                            iconProps={{
                                color: 'inherit',
                                fontSize: 'small',
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        contacto@email.com
                    </Typography>
                </Grid>

                {/* email 2 */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            color: (theme) => theme.palette.primary.light,
                        }}
                    >
                        <MuiIcon
                            icon="Email"
                            iconProps={{
                                color: 'inherit',
                                fontSize: 'small',
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        contacto2@email.com
                    </Typography>
                </Grid>
            </Grid>
        </CardContainer>
    );
};
