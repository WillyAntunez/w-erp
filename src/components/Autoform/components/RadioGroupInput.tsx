import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    useTheme,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const RadioGroupInput = ({
    control,
    name,
    placeholder,
    label,
    required = false,
    disabled = false,
    readOnly = false,

    startAdornment,
    endAdornment,

    options = [],
}: IInputComponentProps) => {
    const theme = useTheme();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, ...field }, fieldState: { error } }) => (
                <FormControl fullWidth>
                    {label && <FormLabel>{label}</FormLabel>}

                    <RadioGroup
                        id={`${name}Input`}
                        {...field}
                        value={value || 'none'}
                        onChange={(e, value) => {
                            if (!readOnly) {
                                field.onChange(e.target.value);
                            }
                        }}
                        row
                    >
                        {placeholder ? (
                            <FormControlLabel
                                control={<Radio />}
                                value={'none'}
                                disabled
                                label={placeholder}
                            />
                        ) : null}

                        {options
                            ? options.map((option, index) => (
                                  <FormControlLabel
                                      control={
                                          <Radio
                                              checked={option.value === value}
                                              disabled={disabled}
                                          />
                                      }
                                      key={index}
                                      value={option.value}
                                      label={option.label}
                                      sx={{ color: error ? 'red' : null }}
                                  />
                              ))
                            : null}
                    </RadioGroup>

                    {error ? (
                        <FormHelperText>{error?.message || ''}</FormHelperText>
                    ) : null}
                </FormControl>
            )}
        />
    );
};
