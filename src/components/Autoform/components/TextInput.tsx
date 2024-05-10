import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { InputLabel } from './InputLabel';

export const TextInput = ({
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

                    <TextField
                        {...field}
                        id={`${name}Input`}
                        error={!!error}
                        size={'small'}
                        label={label}
                        placeholder={placeholder}
                        InputProps={{
                            startAdornment,
                            endAdornment,
                        }}
                        value={!value ? '' : value}
                        disabled={disabled}
                        inputProps={{ readOnly }}
                    />

                    {error ? (
                        <FormHelperText>{error?.message || ''}</FormHelperText>
                    ) : null}
                </FormControl>
            )}
        />
    );
};
