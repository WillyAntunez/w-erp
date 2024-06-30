import { Gender, IPersonType, Language } from '@/types/common';
import { personTypes, genders, personTypesNames } from '@/utils/constants';

interface CustomerBasicInfo {
    avatar?: string | File | null;
    type: IPersonType;
    firstName?: string | null;
    lastName?: string | null;
    legalName?: string | null;
    tradeName?: string | null;
    description?: string | null;
    economicActivityId?: number | null;
    birthDate?: date | null;
    gender?: Gender | null;
    preferredLanguage: Language;
    occupation?: string | null;
    enableAutoSegmentation: boolean;
    maritalStatusId?: number | null;
    segmentId?: number | null;
}
