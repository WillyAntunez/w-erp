import { Content } from '@/components/Layout/components/Content/Content';
import CustomerProfileCard from './Components/Cards/CustomerProfileCard';
import { Grid } from '@mui/material';

export const CustomerDetailsPage = () => {
    return (
        <Content title="Detalles del cliente" icon={'Person'}>
            <Grid
                container
                sx={{
                    padding: 2,
                }}
            >
                <Grid item xs={12} md={2}>
                    <CustomerProfileCard />
                </Grid>
            </Grid>
        </Content>
    );
};

export default CustomerDetailsPage;
