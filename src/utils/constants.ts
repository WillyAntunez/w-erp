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
    legal: 'L',
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

// * genders
export const genderNames = {
    male: 'M',
    female: 'F',
    other: 'O',
    preferNotToSay: 'X',
};

export const genders = {
    [genderNames.male]: {
        label: i18next.t('male'),
        value: genderNames.male,
    },
    [genderNames.female]: {
        label: i18next.t('female'),
        value: genderNames.female,
    },
    [genderNames.other]: {
        label: i18next.t('non-binary'),
        value: genderNames.other,
    },
    [genderNames.preferNotToSay]: {
        label: i18next.t('prefer-not-to-say'),
        value: genderNames.preferNotToSay,
    },
};

// * languages
export const languageNames = {
    en: 'en',
    es: 'es',
};

export const languages = {
    [languageNames.en]: {
        label: i18next.t('english'),
        value: languageNames.en,
    },
    [languageNames.es]: {
        label: i18next.t('spanish'),
        value: languageNames.es,
    },
};
