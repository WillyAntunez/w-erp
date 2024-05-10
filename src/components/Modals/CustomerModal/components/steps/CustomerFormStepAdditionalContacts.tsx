import { H2, Paragraph } from '@/components/Typography';
import { Button, Grid } from '@mui/material';
import translations from '../../CustomerModal.t.json';
import useLocalTranslationResource from '@/hooks/useLocalTranslationResource';

import AddIcon from '@mui/icons-material/Add';
import { CustomTable } from '@/components/Tables/CustomTable';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
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
        headerName: 'Phone',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 90,
    },
];

export const CustomerFormStepAdditionalContacts = () => {
    const { t, lt } = useLocalTranslationResource({
        resource: translations,
        name: 'CustomerModalStepOne',
    });

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">{lt('step-additional-contacts-title')}</H2>
                <Paragraph>
                    {lt('step-additional-contacts-description')}
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
                            {lt('add-contact')}
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
                    noRowsText="No contacts found"
                />
            </Grid>
        </Grid>
    );
};
