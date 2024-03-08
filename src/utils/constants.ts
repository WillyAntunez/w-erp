import i18next from '@/locales/config';

// * status
export const statusNames = {
    active: 'A',
    inactive: 'I',
    blocked: 'B',
    deleted: 'D',
};

export const statuses = {
    A: {
        name: i18next.t('active'),
        color: 'success',
    },
    I: {
        name: i18next.t('inactive'),
        color: 'danger',
    },
    B: {
        name: i18next.t('blocked'),
        color: 'warning',
    },
    D: {
        name: i18next.t('deleted'),
        color: 'danger',
    },
};

// * person type
export const personTypesNames = {
    natural: 'N',
    legal: 'J',
};

export const personTypes = {
    [personTypesNames.natural]: {
        name: i18next.t('natural-person'),
        color: 'primary',
    },
    [personTypesNames.legal]: {
        name: i18next.t('legal-person'),
        color: 'info',
    },
};

// * date formats
export const dateFormatStrings = {
    date: 'dd/MM/yyyy',
    dateWithTime: 'dd/MM/yyyy HH:mm',
};
