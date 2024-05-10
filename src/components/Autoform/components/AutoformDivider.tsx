import { Controller } from 'react-hook-form';
import { IInputComponentProps } from '../types/AutoformTypes';
import {
    Divider,
    FormControl,
    FormHelperText,
    TextField,
    Typography,
} from '@mui/material';
import { InputLabel } from './InputLabel';

export const AutoformDivider = ({
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
        <Divider>
            {label && (
                <Typography
                    sx={{
                        color: (theme) => theme.palette.grey[700],
                    }}
                >
                    {label}
                </Typography>
            )}
        </Divider>
    );
};
