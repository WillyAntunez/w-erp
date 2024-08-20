import { H2, Paragraph } from '@/components/Typography';
import { Button, Grid } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { CustomTable } from '@/components/Tables/CustomTable';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Nombre',
        flex: 1.5,
        minWidth: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'phone',
        headerName: 'Teléfono',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 90,
    },
];

export const CustomerFormStepAdditionalContacts = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">Contactos adicionales</H2>
                <Paragraph>
                    Por favor, proporcione los contactos adicionales para el
                    cliente.
                </Paragraph>
            </Grid>

            <Grid item xs={12}>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Grid item xs={12} md={3} xl={2}>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            onClick={() => {}}
                            startIcon={<AddIcon />}
                        >
                            Agregar contacto
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                item
                xs={12}
                mt={2}
                sx={{
                    height: '300px',
                }}
            >
                <CustomTable
                    columns={columns}
                    rows={[]}
                    noRowsText={
                        'No se han agregado contactos adicionales para el cliente.'
                    }
                />
            </Grid>
        </Grid>
    );
};
