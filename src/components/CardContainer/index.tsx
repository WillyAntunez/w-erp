import { Box, GridProps, useTheme } from '@mui/material';
import { ReactNode } from 'react';

type ICardContainerProps = {
    children?: ReactNode;
    title?: string | null;
    containerProps?: GridProps;
};

export const CardContainer = ({
    children,
    title,
    containerProps,
}: ICardContainerProps) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                padding: 1,
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                borderRadius: 2,
            }}
            {...containerProps}
        >
            {children}
        </Box>
    );
};

export default CardContainer;
