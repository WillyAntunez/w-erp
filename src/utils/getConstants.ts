import { personTypes, statuses } from './constants';

type IStatusObj = {
    name: string;
    color: string;
};

export const getStatus = (status: string): IStatusObj => {
    const statusObj: IStatusObj = statuses[status as keyof typeof statuses];

    return (
        statusObj || {
            name: status,
            color: 'default',
        }
    );
};

export const getPersonType = (type: string) => {
    const personTypeObj: IStatusObj =
        personTypes[type as keyof typeof personTypes];

    return (
        personTypeObj || {
            name: type,
            color: 'default',
        }
    );
};
