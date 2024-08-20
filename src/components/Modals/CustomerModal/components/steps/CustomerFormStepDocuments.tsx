import { Button, Grid } from '@mui/material';
import { H2, Paragraph } from '@/components/Typography';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';
import AddIcon from '@mui/icons-material/Add';
import ReactDataGrid from '@inovua/reactdatagrid-community';

const columns: TypeColumn[] = [
    {
        name: 'type',
        header: 'Tipo',
        defaultFlex: 1,
    },
    {
        name: 'name',
        header: 'Nombre',
        defaultFlex: 1.5,
    },
    {
        name: 'number',
        header: 'Número',
        defaultFlex: 1,
    },
    {
        name: 'issueDate',
        header: 'Expedición',
        defaultFlex: 1,
    },
    {
        name: 'expirationDate',
        header: 'Expiración',
        defaultFlex: 1,
    },
    {
        name: 'attachment',
        header: 'Adjunto',
        defaultWidth: 80,
    },
    {
        name: 'actions',
        header: 'Acciones',
        defaultWidth: 90,
    },
];

export const CustomerFormStepDocuments = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">Documentos adicionales</H2>
                <Paragraph>
                    Por favor, proporcione los documentos relevantes del
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
                    <Grid item xs={12} md={3} xl={3}>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            onClick={() => {}}
                            startIcon={<AddIcon />}
                        >
                            Agregar documento
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <ReactDataGrid
                    columns={columns}
                    dataSource={[]}
                    emptyText={'No se encontraron documentos.'}
                />
            </Grid>
        </Grid>
    );
};
