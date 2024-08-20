// * status
export const statusNames = {
    active: 'A',
    inactive: 'I',
    blocked: 'B',
    deleted: 'D',
};

export const statuses = {
    A: {
        name: 'Activo',
        color: 'success',
    },
    I: {
        name: 'Inactivo',
        color: 'danger',
    },
    B: {
        name: 'Bloqueado',
        color: 'warning',
    },
    D: {
        name: 'Eliminado',
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
        name: 'Persona natural',
        color: 'primary',
    },
    [personTypesNames.legal]: {
        name: 'Persona jurídica',
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
        label: 'Masculino',
        value: genderNames.male,
    },
    [genderNames.female]: {
        label: 'Femenino',
        value: genderNames.female,
    },
    [genderNames.other]: {
        label: 'No binario',
        value: genderNames.other,
    },
    [genderNames.preferNotToSay]: {
        label: 'Prefiero no decir',
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
        label: 'Inglés',
        value: languageNames.en,
    },
    [languageNames.es]: {
        label: 'Español',
        value: languageNames.es,
    },
};
