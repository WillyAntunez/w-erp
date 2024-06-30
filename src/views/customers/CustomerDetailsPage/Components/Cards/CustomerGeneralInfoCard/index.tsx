import CardContainer from '@/components/CardContainer';
import { Chip, Grid, Typography } from '@mui/material';
import React from 'react';

export const CustomerGeneralInfoCard = () => {
    return (
        <CardContainer
            title="Datos generales"
            sx={{
                height: '100%',
            }}
        >
            <Grid container>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: (theme) => theme.palette.grey[800],
                        }}
                    >
                        Descripción
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        TechSoluciones es una empresa especializada en
                        soluciones tecnológicas para la gestión empresarial.
                        Ofrecen servicios de desarrollo de software
                        personalizado.
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: 14,
                            fontWeight: 500,
                            color: (theme) => theme.palette.grey[800],
                        }}
                    >
                        Actividad económica
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        Desarrollo de software a la medida
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: 14,
                            fontWeight: 500,
                            color: (theme) => theme.palette.grey[800],
                        }}
                    >
                        Segmentación
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: (theme) => theme.palette.grey[600],
                        }}
                    >
                        Clientes preferenciales
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: 14,
                            fontWeight: 500,
                            color: (theme) => theme.palette.grey[800],
                        }}
                    >
                        Etiquetas
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    mt={1}
                    sx={{
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    <Chip label="Tecnología" color="primary" size="small" />

                    <Chip label="Desarrollo" color="primary" size="small" />
                </Grid>
            </Grid>
        </CardContainer>
    );
};
