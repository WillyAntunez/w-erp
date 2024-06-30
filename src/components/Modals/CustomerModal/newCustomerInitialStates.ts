import { personTypesNames } from '@/utils/constants';
import { CustomerBasicInfo } from './types/CustomerModal';

export const initialCustomerBasicInformation: CustomerBasicInfo = {
    type: personTypesNames.natural,
    preferredLanguage:
        (import.meta.env.VITE_DEFAULT_LANGUAGE as string) || 'en',
    enableAutoSegmentation: true,
};
