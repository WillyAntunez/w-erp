import { IInputDef } from '@/components/Autoform/types/AutoformTypes';
import { CustomerBasicInfo } from '../../../types/CustomerModal';
import i18next, { t } from 'i18next';
import * as yup from 'yup';

import { startOfDay, subYears } from 'date-fns';
import store from '@/store/store';

const settings = store.getState().settings.customers;

export const naturalPersonProfileAsideInputs: IInputDef<CustomerBasicInfo>[] = [
    {
        label: t('first-name(s)'),
        name: 'firstName',
        type: 'TEXT',
        sizes: {
            xs: 12,
            md: 6,
        },
        yupValidation: yup
            .string()
            .min(2, 'Min: 2')
            .max(50, 'Max: 50')
            .matches(
                /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/,
                () => 'Error: ' + t('includes-invalid-characters'),
            ),
    },
    {
        label: t('last-names'),
        name: 'lastName',
        type: 'TEXT',
        sizes: {
            xs: 12,
            md: 6,
        },
        yupValidation: yup
            .string()
            .min(2, 'Min: 2')
            .max(50, 'Max: 50')
            .matches(
                /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/,
                () => 'Error: ' + t('includes-invalid-characters'),
            ),
    },
    {
        label: t('birth-date'),
        name: 'birthDate',
        type: 'DATE',
        sizes: {
            xs: 12,
            md: 4,
        },
        yupValidation: yup
            .date()
            .max(
                subYears(startOfDay(new Date()), settings.minAge),
                () => t('min-allowed-age') + ': ' + settings.minAge,
            ),
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

export const legalEntityProfileAsideInputs: IInputDef<CustomerBasicInfo>[] = [
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

export const naturalPersonAdditionalInfoInputs: IInputDef<CustomerBasicInfo>[] =
    [
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
            name: 'maritalStatusId',
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

export const legalEntityAdditionalInfoInputs: IInputDef<CustomerBasicInfo>[] = [
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
        name: 'economicActivityId',
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

export const segmentationInputs: IInputDef<CustomerBasicInfo>[] = [
    {
        label: 'Segmentation',
        type: 'DIVIDER',
        sizes: {
            xs: 12,
        },
    },
    {
        name: 'segmentId',
        label: 'Default segment',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        name: 'enableAutoSegmentation',
        label: 'Enable auto-segmentation',
        type: 'CHECK',
    },
];
