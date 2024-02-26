import { Content } from '@/components/Layout/components/Content/Content';
import { CustomerGeneralInfoCard } from './Components/Cards/CustomerGeneralInfoCard';
import { Box, Grid, Typography } from '@mui/material';
import CustomerProfileCard from './Components/Cards/CustomerProfileCard';
import CardContainer from '@/components/CardContainer';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';

export const CustomerDetailsPage = () => {
    return (
        <Content
            title="Detalles del cliente - TechSoluciones S.A. de C.V."
            icon={'Person'}
        >
            <Grid
                container
                sx={{
                    padding: 2,
                }}
                spacing={2}
            >
                {/* profile data */}
                <Grid item xs={12} md={3} lg={2}>
                    <CustomerProfileCard />
                </Grid>

                {/* general info */}
                <Grid
                    item
                    xs={12}
                    md={9}
                    lg={7}
                    sx={{
                        height: 'auto',
                    }}
                >
                    <CustomerGeneralInfoCard />
                </Grid>

                {/* contact info */}
                <Grid
                    item
                    xs={12}
                    lg={3}
                    sx={{
                        height: 'auto',
                    }}
                >
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
                                    }}
                                >
                                    Avenida Innovación #123, Parque Tecnológico,
                                    Ciudad Tecnológica, Estado TecLand.
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
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
                                        color: (theme) =>
                                            theme.palette.grey[600],
                                    }}
                                >
                                    contacto2@email.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContainer>
                </Grid>
            </Grid>
        </Content>
    );
};

export default CustomerDetailsPage;
