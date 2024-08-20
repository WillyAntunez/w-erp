import { IInputDef } from '@/components/Autoform/types/AutoformTypes';
import { CustomerBasicInfo } from '../../../types/CustomerModal';
import * as yup from 'yup';

import { startOfDay, subYears } from 'date-fns';
import store from '@/store/store';

const settings = store.getState().settings.customers;

export const naturalPersonProfileAsideInputs: IInputDef<CustomerBasicInfo>[] = [
    {
        label: 'Nombres',
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
                () => 'Error: ' + 'Solo se permiten letras',
            ),
    },
    {
        label: 'Apellidos',
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
                () => 'Error: ' + 'Solo se permiten letras',
            ),
    },
    {
        label: 'Fecha de nacimiento',
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
                () => 'Edad minima permitida' + ': ' + settings.minAge,
            ),
    },
    {
        label: 'Género',
        name: 'gender',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 4,
        },
    },
    {
        label: 'Idioma preferido',
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
        label: 'Nombre legal',
        name: 'legalName',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        type: 'TEXT',
        label: 'Nombre comercial',
        name: 'tradeName',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        type: 'TEXT',
        label: 'Razón social',
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
            label: 'Informacion adicional',
            sizes: {
                xs: 12,
            },
        },
        {
            label: 'Estado civil',
            type: 'SELECT',
            name: 'maritalStatusId',
            sizes: {
                xs: 12,
                md: 6,
            },
        },
        {
            label: 'Ocupación',
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
        label: 'Informacion adicional',
        sizes: {
            xs: 12,
        },
    },
    {
        type: 'SELECT',
        label: 'Sector económico',
        name: 'economicActivityId',
        sizes: {
            xs: 12,
            md: 6,
        },
    },

    {
        type: 'SELECT',
        label: 'Tipo de empresa',
        name: 'preferredLanguage',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
];

export const segmentationInputs: IInputDef<CustomerBasicInfo>[] = [
    {
        label: 'Segmentación',
        type: 'DIVIDER',
        sizes: {
            xs: 12,
        },
    },
    {
        name: 'segmentId',
        label: 'Segmento por defecto',
        type: 'SELECT',
        sizes: {
            xs: 12,
            md: 6,
        },
    },
    {
        name: 'enableAutoSegmentation',
        label: 'Habilitar segmentación automática',
        type: 'CHECK',
    },
];
