import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import {
    Button,
    ButtonGroup,
    FormControl,
    FormHelperText,
    FormLabel,
    TextField,
} from '@mui/material';
// import { InputLabel } from './InputLabel';

export const ButtonChoiceInput = ({
    control,
    name,
    placeholder,
    label,
    required = false,
    disabled = false,
    readOnly = false,

    startAdornment,
    endAdornment,
}: IInputComponentProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, ...field }, fieldState: { error } }) => (
                <FormControl fullWidth>
                    {label && <FormLabel>{label}</FormLabel>}

                    <ButtonGroup fullWidth>
                        <Button>Masculino</Button>
                        <Button>Femenino</Button>
                        <Button>Otro</Button>
                    </ButtonGroup>

                    {error ? (
                        <FormHelperText>{error?.message || ''}</FormHelperText>
                    ) : null}
                </FormControl>
            )}
        />
    );
};
