import { useTheme } from '@emotion/react';
import { FormLabel, Typography, styled } from '@mui/material';

export const CustomLabel = styled(FormLabel)(({ theme }) => ({
    color: theme.palette.grey[800],
    marginBottom: 4,
    fontSize: 14,
}));

type InputLabelProps = {
    label: string;
    required?: boolean;
    htmlFor: string;
};

export const InputLabel = ({
    label,
    required = false,
    htmlFor,
}: InputLabelProps) => {
    const theme = useTheme();

    return (
        <CustomLabel htmlFor={htmlFor}>
            {required && (
                <Typography
                    component={'span'}
                    sx={{ color: theme.palette.error.main }}
                >
                    *{' '}
                </Typography>
            )}
            {label}
        </CustomLabel>
    );
};
