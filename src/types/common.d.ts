import { genders, personTypes, languages } from '../utils/constants';

export type IPersonType = keyof personTypes;
export type Gender = keyof genders;
export type Language = keyof languages;
