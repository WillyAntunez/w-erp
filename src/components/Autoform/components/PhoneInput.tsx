import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { InputLabel } from './InputLabel';
import { MuiTelInput } from 'mui-tel-input';

export const PhoneInput = ({
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
                    <MuiTelInput
                        defaultCountry="HN"
                        size="small"
                        label={label}
                        onChange={(value) => {
                            field.onChange(value);
                        }}
                        value={value}
                    />

                    {error ? (
                        <FormHelperText>{error?.message || ''}</FormHelperText>
                    ) : null}
                </FormControl>
            )}
        />
    );
};
