import { ReactElement } from 'react';
import { Control, FieldValues } from 'react-hook-form';

import * as yup from 'yup';
import { languages } from '../../../utils/constants';

type ControlType = Control<FieldValues, any>;

export type IInputTypes =
    | 'TEXT'
    | 'NUMERIC'
    | 'MULTILINE'
    | 'SELECT'
    | 'AUTOCOMPLETE'
    | 'PHONE'
    | 'BUTTON_CHOICE'
    | 'DATE'
    | 'RADIO_GROUP'
    | 'DIVIDER'
    | 'CHECK';

export type multilangTexObj = {
    en: string;
    es: string;
};

export type IInputDef<T> =
    | {
          type: IInputTypes;
          name: keyof T;
          label?: string | multilangTexObj;
          placeholder?: string | multilangTexObj;
          rows?: number;

          required?: boolean;
          disabled?: boolean;
          readOnly?: boolean;
          sizes?: {
              xs?: number;
              sm?: number;
              md?: number;
              lg?: number;
              xl?: number;
          };
          yupValidation?: yup.ISchema;
      }
    | {
          type: 'DIVIDER';
          label?: string | multilangTexObj;
          sizes?: {
              xs?: number;
              sm?: number;
              md?: number;
              lg?: number;
              xl?: number;
          };
      };

export interface IInputTypeDef {
    name: IInputTypes;
    Component: (IInputComponentProps) => JSX.Element;
    defaults?: IInputDef;
}

export interface IInputOption {
    value: any;
    label: string;
}

export interface IInputComponentProps {
    control: ControlType;
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;

    rows?: number;

    options?: IInputOption[];

    startAdornment?: ReactElement;
    endAdornment?: ReactElement;
}

export interface IAutoformProps {
    inputs: IInputDef[];
    control: Control<any, any>;
    defaultSizes?: { xs: number; sm: number; md: number };
    spacing?: number;
    optionsData?: {
        [key: string]: IInputOption[];
    };
}
