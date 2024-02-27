import { Content } from '@/components/Layout/components/Content/Content';
import { CustomerGeneralInfoCard } from './Components/Cards/CustomerGeneralInfoCard';
import { Box, Grid, Typography } from '@mui/material';
import CustomerProfileCard from './Components/Cards/CustomerProfileCard';
import CardContainer from '@/components/CardContainer';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { CustomerContactCard } from './Components/Cards/CustomerContactCard';
import RoutedTabs from '@/components/RoutedTabs';

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
                    <CustomerContactCard />
                </Grid>

                <Grid item xs={12}>
                    <Grid container>
                        <RoutedTabs
                            tabs={[
                                {
                                    label: 'Resumen',
                                    slug: 'summary',
                                    content: <h2>Resumen</h2>,
                                },
                                {
                                    label: 'Contactos',
                                    slug: 'contacts',
                                    content: <h2>Contactos</h2>,
                                },
                                {
                                    label: 'Historial de compras',
                                    slug: 'purchases',
                                    content: <h2>Historial de compras</h2>,
                                },
                                {
                                    label: 'Oportunidades de venta',
                                    slug: 'sales-opportunities',
                                    content: <h2>Oportunidades de venta</h2>,
                                },
                                {
                                    label: 'Saldos y pagos',
                                    slug: 'balances-payments',
                                    content: <h2>Saldos y pagos</h2>,
                                },
                                {
                                    label: 'Envios y logistica',
                                    slug: 'shipping-logistics',
                                    content: <h2>Envios y logistica</h2>,
                                },
                                {
                                    label: 'Historial de actividad',
                                    slug: 'activity-history',
                                    content: <h2>Historial de actividad</h2>,
                                },
                                {
                                    label: 'Tickets de soporte',
                                    slug: 'support-tickets',
                                    content: <h2>Tickets de soporte</h2>,
                                },
                                {
                                    label: 'Notas y comentarios',
                                    slug: 'notes-comments',
                                    content: <h2>Notas y comentarios</h2>,
                                },
                            ]}
                            queryMode
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    );
};

export default CustomerDetailsPage;
