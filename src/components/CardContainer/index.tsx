import { Box, Grid, GridProps, SxProps, Theme, useTheme } from '@mui/material';
import { ReactNode } from 'react';

type ICardContainerProps = {
    children?: ReactNode;
    containerProps?: GridProps;
    sx?: SxProps<Theme>;
    padding: number;
};

export const CardContainer = ({
    children,
    containerProps,
    sx = {},
}: ICardContainerProps) => {
    const theme = useTheme();

    return (
        <Grid
            container
            sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                borderRadius: 2,
                ...sx,
                padding: 1,
            }}
            {...containerProps}
        >
            {children}
        </Grid>
    );
};

export default CardContainer;
