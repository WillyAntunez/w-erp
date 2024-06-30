import { Button, Grid } from '@mui/material';
import { H2, Paragraph } from '@/components/Typography';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';
import AddIcon from '@mui/icons-material/Add';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import translations from '../../CustomerModal.t.json';
import useLocalTranslationResource from '@/hooks/useLocalTranslationResource';

const columns: TypeColumn[] = [
    {
        name: 'type',
        header: 'Type',
        defaultFlex: 1,
    },
    {
        name: 'name',
        header: 'Name',
        defaultFlex: 1.5,
    },
    {
        name: 'number',
        header: 'Number',
        defaultFlex: 1,
    },
    {
        name: 'issueDate',
        header: 'Issued',
        defaultFlex: 1,
    },
    {
        name: 'expirationDate',
        header: 'Expiration',
        defaultFlex: 1,
    },
    {
        name: 'attachment',
        header: 'Attachment',
        defaultWidth: 80,
    },
    {
        name: 'actions',
        header: 'Actions',
        defaultWidth: 90,
    },
];

export const CustomerFormStepDocuments = () => {
    const { t, lt } = useLocalTranslationResource({
        resource: translations,
        name: 'CustomerModalStepOne',
    });

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">{lt('step-additional-documents-title')}</H2>
                <Paragraph>
                    {lt('step-additional-documents-description')}
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
                            {lt('add-document')}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <ReactDataGrid
                    columns={columns}
                    dataSource={[]}
                    emptyText={lt('no-documents-found')}
                />
            </Grid>
        </Grid>
    );
};
