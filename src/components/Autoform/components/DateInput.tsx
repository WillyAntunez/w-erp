import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const DateInput = ({
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

                    <DatePicker
                        {...field}
                        value={value || null}
                        // // minDate={min}
                        readOnly={readOnly}
                        // // disablePast={disablePast}
                        onChange={(newValue) => {
                            field.onChange(newValue);
                        }}
                        slotProps={{
                            textField: {
                                size: 'small',
                                error: !!error,
                                id: `${name}Input`,
                                disabled: disabled,
                                label,
                            },
                        }}
                    />

                    {error ? (
                        <FormHelperText>{error?.message || ''}</FormHelperText>
                    ) : null}
                </FormControl>
            )}
        />
    );
};
