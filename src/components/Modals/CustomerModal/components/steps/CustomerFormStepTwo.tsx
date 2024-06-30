import { H2, Paragraph } from '@/components/Typography';
import { Grid } from '@mui/material';
import translations from '../../CustomerModal.t.json';
import useLocalTranslationResource from '@/hooks/useLocalTranslationResource';
import { IInputDef } from '@/components/Autoform/types/AutoformTypes';
import Autoform from '@/components/Autoform';
import { useForm } from 'react-hook-form';

const contactInfoInputs: IInputDef[] = [
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
    const { t, lt } = useLocalTranslationResource({
        resource: translations,
        name: 'CustomerModalStepOne',
    });

    const { control } = useForm();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">{lt('step-2-title')}</H2>
                <Paragraph>{lt('step-2-description')}</Paragraph>
            </Grid>

            {/* contact */}
            <Grid item xs={12}>
                <Autoform inputs={contactInfoInputs} control={control} />
            </Grid>
        </Grid>
    );
};
