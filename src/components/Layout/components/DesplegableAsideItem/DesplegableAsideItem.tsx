import { useState } from 'react';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import {
    AsideItemPropsBase,
    INavChildrenDisplayType,
    INavIconType,
} from '@/types/navigations';
import { Box, Grid } from '@mui/material';
import { AsideItem } from '../AsideItem/AsideItem';

interface DesplegableAsideItemProps extends AsideItemPropsBase {
    children: JSX.Element[];
    type?: INavChildrenDisplayType;
}

export const DesplegableAsideItem = ({
    type = 'FLOATING',
    children,
    ...asideItemProps
}: DesplegableAsideItemProps) => {
    const { isMobile } = useApplicationStore();

    const expandTypeToRender = isMobile ? 'FLOATING' : type;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box>
            <AsideItem {...asideItemProps} type="EXPANSIBLE" />
        </Box>
    );
};
