import { H2, Paragraph } from '@/components/Typography';
import { Grid } from '@mui/material';
import { IInputDef } from '@/components/Autoform/types/AutoformTypes';
import Autoform from '@/components/Autoform';
import { useForm } from 'react-hook-form';

const contactInfoInputs: IInputDef<string>[] = [
    {
        type: 'DIVIDER',
        label: 'Contact info',
        sizes: {
            xs: 12,
        },
    },
    {
        label: 'country',
        name: 'country',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'city',
        name: 'city',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'Phone',
        name: 'phone',
        type: 'PHONE',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'Second phone (optional)',
        name: 'secondPhone',
        type: 'PHONE',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'Email',
        name: 'email',
        type: 'TEXT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'Second email (optional)',
        name: 'secondEmail',
        type: 'TEXT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },

    {
        label: 'Address Line 1',
        name: 'address',
        type: 'MULTILINE',
        rows: 1,
        sizes: {
            xs: 12,
        },
    },
    {
        label: 'Address Line 2',
        name: 'address',
        type: 'MULTILINE',
        rows: 1,
        sizes: {
            xs: 12,
        },
    },
    {
        label: 'Contact Comment',
        name: 'contactComment',
        type: 'MULTILINE',
        sizes: {
            xs: 12,
        },
    },
];

export const CustomerFormStepTwo = () => {
    const { control } = useForm();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">Paso 2: Información de Contacto</H2>
                <Paragraph>
                    Por favor, proporcione la información de contacto sobre el
                    cliente.
                </Paragraph>
            </Grid>

            {/* contact */}
            <Grid item xs={12}>
                <Autoform inputs={contactInfoInputs} control={control} />
            </Grid>
        </Grid>
    );
};
