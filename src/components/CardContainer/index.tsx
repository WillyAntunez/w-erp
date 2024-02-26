import { Box, GridProps, SxProps, Theme, useTheme } from '@mui/material';
import { ReactNode } from 'react';

type ICardContainerProps = {
    children?: ReactNode;
    title?: string | null;
    containerProps?: GridProps;
    sx?: SxProps<Theme>;
};

export const CardContainer = ({
    children,
    title,
    containerProps,
    sx = {},
}: ICardContainerProps) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                borderRadius: 2,
                ...sx,
            }}
            {...containerProps}
        >
            {title && (
                <Box
                    padding={1}
                    sx={{
                        fontSize: 16,
                        borderBottom: `1px solid ${theme.palette.grey[300]}`,
                    }}
                >
                    {title}
                </Box>
            )}
            <Box padding={1}>{children}</Box>
        </Box>
    );
};

export default CardContainer;
