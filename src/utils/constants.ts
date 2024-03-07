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
    legal: 'J',
};

export const personTypes = {
    [personTypesNames.natural]: {
        name: 'Natural',
        color: 'primary',
    },
    [personTypesNames.legal]: {
        name: 'Jurídica',
        color: 'info',
    },
};

// * date formats
export const dateFormatStrings = {
    date: 'dd/MM/yyyy',
    dateWithTime: 'dd/MM/yyyy HH:mm',
};
