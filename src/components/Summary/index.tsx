import {
    Grid,
    GridProps,
    GridTypeMap,
    Typography,
    useTheme,
} from '@mui/material';
import { OverridableComponent } from '@mui/types';

type ISummaryItem = {
    label: string;
    value: string | number;
};

export type ISummaryArray = ISummaryItem[];

type ISummaryProps = {
    data?: ISummaryArray;
    containerProps?: GridProps;
};

export const Summary = ({ data, containerProps }: ISummaryProps) => {
    const theme = useTheme();

    return (
        <Grid container spacing={2} {...containerProps}>
            {data?.map((item, index) => {
                return (
                    <Grid
                        item
                        key={index}
                        sx={{
                            borderRight:
                                index + 1 < data.length
                                    ? `1px solid ${theme.palette.grey[600]}`
                                    : 'none',

                            paddingRight: index + 1 < data.length ? 2 : 0,
                        }}
                    >
                        <Typography fontSize={12}>{item.label}</Typography>
                        <Typography fontSize={24} mt={0.5}>
                            {item.value}
                        </Typography>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Summary;
