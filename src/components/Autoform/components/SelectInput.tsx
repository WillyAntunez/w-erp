import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import {
    FormControl,
    FormHelperText,
    MenuItem,
    TextField,
    useTheme,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const SelectInput = ({
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
                    {/* {label && (
                        <InputLabel
                            label={label}
                            required={required}
                            htmlFor={`${name}_input`}
                        />
                    )} */}

                    <TextField
                        select
                        id={`${name}Input`}
                        size={'small'}
                        {...field}
                        value={value || ''}
                        onChange={(e) => {
                            field.onChange(e.target.value);
                        }}
                        label={label}
                        placeholder="placeholder"
                        error={!!error}
                        InputProps={{
                            sx: {
                                color:
                                    !value && placeholder
                                        ? theme.palette.grey[400]
                                        : '',
                            },
                            readOnly,
                        }}
                    >
                        {/* {placeholder ? (
                            <MenuItem value={'none'} disabled>
                                {placeholder}
                            </MenuItem>
                        ) : null} */}

                        {options
                            ? options.map((option, index) =>
                                  option ? (
                                      <MenuItem
                                          key={index}
                                          value={option.value}
                                      >
                                          {option.label}
                                      </MenuItem>
                                  ) : null,
                              )
                            : null}
                    </TextField>

                    {error ? (
                        <FormHelperText>{error?.message || ''}</FormHelperText>
                    ) : null}
                </FormControl>
            )}
        />
    );
};
