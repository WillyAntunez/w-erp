import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    TextField,
} from '@mui/material';
import { InputLabel } from './InputLabel';

export const CheckInput = ({
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
                    {/* {label && (
                        <InputLabel
                            label={label}
                            required={required}
                            htmlFor={`${name}_input`}
                        />
                    )} */}

                    <FormControlLabel
                        control={
                            <Checkbox
                                {...field}
                                id={`${name}Input`}
                                size={'small'}
                                checked={!!value}
                                disabled={disabled}
                                inputProps={{ readOnly }}
                                onClick={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    field.onChange({
                                        target: { value: target.checked },
                                    });
                                }}
                            />
                        }
                        label={label}
                    />
                </FormControl>
            )}
        />
    );
};
