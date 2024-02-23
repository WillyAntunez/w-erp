import { useEffect, useMemo, useRef, useState } from 'react';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import {
    AsideItemPropsBase,
    INavChildrenDisplayType,
    INavIconType,
} from '@/types/navigations';
import { Box, Grid, MenuItem, useTheme } from '@mui/material';
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
    const theme = useTheme();

    const {
        asideOpenMenus,
        onCloseAllAsideMenus,
        onToggleAsideMenus,
        onSetAsideMenu,
        onCloseAllAboveAsideMenus,
        isAsideExpanded,
    } = useApplicationStore();

    const { isMobile } = useApplicationStore();

    const expandTypeToRender = isMobile
        ? 'DROPDOWN'
        : !isAsideExpanded
          ? 'FLOATING'
          : type;

    const ref = useRef<HTMLDivElement>(null);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const itemMenuUniqueKey = useMemo<string>(() => {
        return `${asideItemProps.label}-${level}`
            .replace(/\s/g, '')
            .replace(/[^\w-]/g, '');
    }, []);

    const open = useMemo<boolean>(() => {
        return !!asideOpenMenus?.[itemMenuUniqueKey]?.open;
    }, [asideOpenMenus]);

    const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();

        const newAnchorEl = document.getElementById(
            itemMenuUniqueKey,
        ) as HTMLElement;

        if (newAnchorEl) {
            setAnchorEl(newAnchorEl);
        }

        if (!open && newAnchorEl) {
            onCloseAllAboveAsideMenus(level);
            onSetAsideMenu(itemMenuUniqueKey, true, level);
        } else if (open && expandTypeToRender === 'DROPDOWN') {
            onCloseAllAboveAsideMenus(level);
        }
    };

    const handleClose = () => {
        onCloseAllAsideMenus();
    };

    const menuRef = useRef(null);

    useOutsideAlerter(ref, (e) => {
        const element = e.target as HTMLInputElement;

        if (e.target) {
            if (
                !element.matches('#aside-floating-menu *') &&
                !element.matches(`#${itemMenuUniqueKey} *`) &&
                open
            ) {
                handleClose();
            }
        }
    });

    return (
        <>
            <Box id="aside-floating-menu">
                <Box ref={ref} id={itemMenuUniqueKey}>
                    <AsideItem
                        {...asideItemProps}
                        type="EXPANSIBLE"
                        expansibleType={expandTypeToRender}
                        isExpanded={open}
                        onMouseOver={
                            expandTypeToRender === 'FLOATING'
                                ? handleMouseOver
                                : () => {}
                        }
                        onClick={
                            expandTypeToRender === 'DROPDOWN'
                                ? handleMouseOver
                                : () => {}
                        }
                        level={level}
                        active={open}
                    />
                </Box>

                {expandTypeToRender === 'FLOATING' ? (
                    !open ? null : (
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
                    )
                ) : null}

                {expandTypeToRender === 'DROPDOWN' ? (
                    open ? (
                        <Box
                            sx={{
                                paddingLeft: '5px',
                                backgroundColor: 'rgb(245 245 245 / 17%)',
                            }}
                            id="aside-floating-menu"
                        >
                            <Box
                                sx={{
                                    paddingLeft: '10px',
                                    borderLeft: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                {children}
                            </Box>
                        </Box>
                    ) : null
                ) : null}
            </Box>
        </>
    );
};
