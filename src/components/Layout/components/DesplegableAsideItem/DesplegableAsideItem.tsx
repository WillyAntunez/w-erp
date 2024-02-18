import { useEffect, useMemo, useRef, useState } from 'react';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import {
    AsideItemPropsBase,
    INavChildrenDisplayType,
    INavIconType,
} from '@/types/navigations';
import { Box, Grid, MenuItem } from '@mui/material';
import { AsideItem } from '../AsideItem/AsideItem';
import { StyledMenu } from '../StyledMenu/StyledMenu';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';

interface DesplegableAsideItemProps extends AsideItemPropsBase {
    children: JSX.Element[];
    type?: INavChildrenDisplayType;
    level?: number;
}

export const DesplegableAsideItem = ({
    type = 'FLOATING',
    children,
    level = 1,
    ...asideItemProps
}: DesplegableAsideItemProps) => {
    const {
        asideOpenMenus,
        onCloseAllAsideMenus,
        onToggleAsideMenus,
        onSetAsideMenu,
        onCloseAllAboveAsideMenus,
    } = useApplicationStore();

    const { isMobile } = useApplicationStore();

    const expandTypeToRender = isMobile ? 'DROPDOWN' : type;

    const ref = useRef<HTMLDivElement>(null);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const itemMenuUniqueKey = useMemo<string>(() => {
        return `${asideItemProps.label}-${level}`;
    }, []);

    const open = useMemo<boolean>(() => {
        return !!asideOpenMenus?.[itemMenuUniqueKey]?.open;
    }, [asideOpenMenus]);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();

        if (!anchorEl) {
            setAnchorEl(
                document.getElementById(itemMenuUniqueKey) as HTMLElement,
            );
        }

        if (!open && anchorEl) {
            // todo: close all above levels
            onCloseAllAboveAsideMenus(level);
            onSetAsideMenu(itemMenuUniqueKey, true, level);
        }
    };

    const handleClose = () => {
        onCloseAllAsideMenus();
        // onSetAsideMenu(itemMenuUniqueKey, false);
        // setAnchorEl(null);
    };

    const menuRef = useRef(null);

    useOutsideAlerter(ref, (e) => {
        const element = e.target as HTMLInputElement;

        if (e.target) {
            if (!element.matches('#aside-floating-menu *') && open) {
                handleClose();
            }
        }
    });

    return (
        <>
            <Box ref={ref} id={itemMenuUniqueKey}>
                <AsideItem
                    {...asideItemProps}
                    type="EXPANSIBLE"
                    expansibleType={expandTypeToRender}
                    isExpanded={open}
                    onClick={handleClick}
                    level={level}
                />
            </Box>

            {!open ? null : (
                <StyledMenu
                    id="aside-floating-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    ref={menuRef}
                    hideBackdrop
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {children}
                </StyledMenu>
            )}
        </>
    );
};
