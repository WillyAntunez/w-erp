import { AutoformDivider } from './components/AutoformDivider';
import { ButtonChoiceInput } from './components/ButtonChoiceInput';
import { CheckInput } from './components/CheckInput';
import { DateInput } from './components/DateInput';
import { MultilineInput } from './components/MultilineInput';
import { PhoneInput } from './components/PhoneInput';
import { RadioGroupInput } from './components/RadioGroupInput';
import { SelectInput } from './components/SelectInput';
import { TextInput } from './components/TextInput';
import { IInputTypeDef } from './types/AutoformTypes';

export const inputsCollection: IInputTypeDef[] = [
    {
        name: 'TEXT',
        Component: TextInput,
    },
    {
        name: 'PHONE',
        Component: PhoneInput,
    },
    {
        name: 'DATE',
        Component: DateInput,
    },
    {
        name: 'BUTTON_CHOICE',
        Component: ButtonChoiceInput,
    },
    {
        name: 'SELECT',
        Component: SelectInput,
    },
    {
        name: 'RADIO_GROUP',
        Component: RadioGroupInput,
    },
    {
        name: 'DIVIDER',
        Component: AutoformDivider,
    },
    {
        name: 'MULTILINE',
        Component: MultilineInput,
    },
    {
        name: 'CHECK',
        Component: CheckInput,
    },
];
