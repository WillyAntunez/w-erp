import { Typography, styled } from '@mui/material';

export const H1 = styled(Typography)(({ theme }) => ({
    variant: 'h1',
    color: theme.palette.primary.dark,
    fontSize: 21,
    fontWeight: 400,
}));

export const H2 = styled(Typography)(({ theme }) => ({
    variant: 'h2',
    color: theme.palette.primary.dark,
    fontSize: 18,
    fontWeight: 400,
}));

export const H3 = styled(Typography)(({ theme }) => ({
    variant: 'h3',
    color: theme.palette.primary.dark,
    fontSize: 16,
    fontWeight: 400,
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
    variant: 'body1',
    color: theme.palette.grey[800],
    fontSize: 15,
    fontWeight: 400,
}));
