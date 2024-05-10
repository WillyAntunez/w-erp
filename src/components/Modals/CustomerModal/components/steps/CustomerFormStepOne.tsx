import Autoform from '@/components/Autoform';
import { H2, Paragraph } from '@/components/Typography';
import {
    Avatar,
    Button,
    ButtonGroup,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import translations from '../../CustomerModal.t.json';
import React, { useState } from 'react';
import useLocalTranslationResource from '@/hooks/useLocalTranslationResource';
import { useForm } from 'react-hook-form';
import { genders, languages, personTypesNames } from '@/utils/constants';
import { IPersonType } from '@/types/common';
import { IInputDef } from '@/components/Autoform/types/AutoformTypes';

const naturalPersonProfileAsideInputs: IInputDef[] = [
    {
        label: 'First name',
        name: 'firstName',
        type: 'TEXT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'Last name',
        name: 'lastName',
        type: 'TEXT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'Birthdate',
        name: 'birthdate',
        type: 'DATE',
        sizes: {
            xs: 12,
            md: 4,
        },
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 4,
        },
    },
    {
        label: 'Preferred language',
        name: 'preferredLanguage',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 4,
        },
    },
];

const legalEntityProfileAsideInputs: IInputDef[] = [
    {
        type: 'TEXT',
        label: 'Legal name',
        name: 'legalName',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        type: 'TEXT',
        label: 'Trade name',
        name: 'tradeName',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        type: 'TEXT',
        label: 'Description',
        name: 'description',
        sizes: {
            xs: 12,
        },
    },
];

const naturalPersonAdditionalInfoInputs: IInputDef[] = [
    {
        type: 'DIVIDER',
        label: 'Additional info',
        sizes: {
            xs: 12,
        },
    },
    {
        label: 'Marital status',
        type: 'SELECT',
        name: 'maritalStatus',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        label: 'Occupation',
        type: 'TEXT',
        name: 'occupation',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
];

const legalEntityAdditionalInfoInputs: IInputDef[] = [
    {
        type: 'DIVIDER',
        label: 'Additional info',
        sizes: {
            xs: 12,
        },
    },
    {
        type: 'SELECT',
        label: 'Economic activity',
        name: 'economicActivity',
        sizes: {
            xs: 12,
            md: 6,
        },
    },

    {
        type: 'SELECT',
        label: 'Preferred language',
        name: 'preferredLanguage',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
];

const segmentationInputs: IInputDef[] = [
    {
        label: 'Segmentation',
        type: 'DIVIDER',
        sizes: {
            xs: 12,
        },
    },
    {
        name: 'segment',
        label: 'Default segment',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        name: 'autoSegmentation',
        label: 'Enable auto-segmentation',
        type: 'CHECK',
    },
];

interface ICustomerFormStepOneProps {}

export const CustomerFormStepOne = ({}: ICustomerFormStepOneProps) => {
    // translations
    const { t, lt } = useLocalTranslationResource({
        resource: translations,
        name: 'CustomerModalStepOne',
    });

    // forms
    const { control } = useForm();

    // handle person type
    const [personType, setPersonType] = useState<IPersonType>('N');

    const onChangePersonType = (type: IPersonType) => {
        setPersonType(type);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">{lt('step-1-title')}</H2>
                <Paragraph>{lt('step-1-description')}</Paragraph>
            </Grid>

            <Grid item xs={12}>
                <Divider>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.grey[700],
                        }}
                    >
                        {lt('customer-type')}
                    </Typography>
                </Divider>
            </Grid>

            {/* customer type select */}
            <Grid item xs={12}>
                <ButtonGroup fullWidth>
                    <Button
                        variant={
                            personType === personTypesNames.natural
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => onChangePersonType('N')}
                        size="small"
                    >
                        {t('natural-person', {
                            ns: 'common',
                        })}
                    </Button>

                    <Button
                        variant={
                            personType === personTypesNames.legal
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => onChangePersonType('L')}
                        size="small"
                    >
                        {t('legal-person', {
                            ns: 'common',
                        })}
                    </Button>
                </ButtonGroup>
            </Grid>

            {/* contact info */}
            <Grid item xs={12}>
                <Divider>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.grey[700],
                        }}
                    >
                        General info
                    </Typography>
                </Divider>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {/* profile image */}
                    <Grid item>
                        <Avatar
                            sx={{
                                width: '80px',
                                height: '80px',
                            }}
                        ></Avatar>
                    </Grid>

                    {/* profile aside inputs information */}
                    <Grid item flex={1}>
                        <Autoform
                            inputs={
                                personType === personTypesNames.legal
                                    ? legalEntityProfileAsideInputs
                                    : naturalPersonProfileAsideInputs
                            }
                            control={control}
                            optionsData={{
                                gender: [...Object.values(genders)],
                                preferredLanguage: [
                                    ...Object.values(languages),
                                ],
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                {personType === personTypesNames.natural ? (
                    <Autoform
                        inputs={naturalPersonAdditionalInfoInputs}
                        control={control}
                    />
                ) : (
                    <Autoform
                        inputs={legalEntityAdditionalInfoInputs}
                        control={control}
                    />
                )}
            </Grid>

            {/* contact form */}
            <Grid item xs={12}>
                <Autoform inputs={segmentationInputs} control={control} />
            </Grid>
        </Grid>
    );
};
