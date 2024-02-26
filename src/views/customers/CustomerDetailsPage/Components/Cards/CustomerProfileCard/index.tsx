import CardContainer from '@/components/CardContainer';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { Avatar, Box, Chip, Grid, IconButton, Typography } from '@mui/material';

export const CustomerProfileCard = () => {
    return (
        <CardContainer
            containerProps={{
                position: 'relative',
            }}
        >
            <Grid
                container
                my={1.8}
                sx={{
                    textAlign: 'center',
                }}
            >
                {/* avatar */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar
                        sx={{
                            height: 80,
                            width: 80,
                        }}
                    >
                        TSA
                    </Avatar>
                </Grid>

                {/* name */}
                <Grid item xs={12} mt={2}>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: (theme) => theme.palette.grey[800],
                        }}
                    >
                        TechSoluciones S.A. de C.V.
                    </Typography>
                </Grid>

                {/* type */}
                <Grid item xs={12} mt={1}>
                    <Typography
                        sx={{
                            fontSize: 13,
                        }}
                    >
                        Persona jurídica
                    </Typography>
                </Grid>

                {/* email */}
                <Grid item xs={12} mt={1}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 400,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        contacto@TechSoluciones.com
                    </Typography>
                </Grid>

                {/* phone */}
                <Grid item xs={12} mt={1}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 400,
                        }}
                    >
                        +504 2323-2414
                    </Typography>
                </Grid>

                {/* buttons */}
                <Grid item xs={12} mt={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <IconButton size="small" color="primary">
                            <MuiIcon icon="Phone" />
                        </IconButton>

                        <IconButton size="small" color="primary">
                            <MuiIcon icon="Email" />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* absolute state tag */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 20,
                    right: -10,
                }}
            >
                <Chip
                    label="Activo"
                    size="small"
                    sx={{
                        backgroundColor: (theme) => theme.palette.primary.light,
                        color: (theme) => theme.palette.common.white,
                        borderRadius: 2,
                    }}
                />
            </Box>
        </CardContainer>
    );
};
export default CustomerProfileCard;
