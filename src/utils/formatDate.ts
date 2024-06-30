import { format } from 'date-fns';

// format date using date-fns
export const formatDate = (
    date: string | Date,
    formatString: string = 'dd/MM/yy',
): string => {
    return format(new Date(date), formatString);
};
