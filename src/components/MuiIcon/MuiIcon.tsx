import * as Icons from '@mui/icons-material';
import { SvgIconOwnProps } from '@mui/material';

export const MuiIcon = ({
    icon,
    iconProps,
}: {
    icon: string;
    iconProps?: SvgIconOwnProps;
}) => {
    const IconComponent = Icons[icon as keyof typeof Icons] || Icons.Error;

    if (!Icons[icon as keyof typeof Icons])
        console.error(
            // beauty console log error with emoji
            '🚨',
            `The icon ${icon} does not exist in Mui Icons.`,
        );

    return <IconComponent {...iconProps} />;
};
