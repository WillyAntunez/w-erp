import { ReactElement } from 'react';
import { Control, FieldValues } from 'react-hook-form';

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

export type IInputDef =
    | {
          type: IInputTypes;
          name: string;
          label: string;
          placeholder?: string;
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
      }
    | {
          type: 'DIVIDER';
          label?: string;
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
    control: ControlType;
    defaultSizes?: { xs: number; sm: number; md: number };
    spacing?: number;
    optionsData?: {
        [key: string]: IInputOption[];
    };
}
