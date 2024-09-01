import { layoutConfig } from '@/components/Layout/config/layoutConfig';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import { IAsideItem } from '@/types/navigations';
import { Box, MenuItem, Tooltip, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const AsideItem = ({
    path = '',
    onClick = () => {},
    label = '',
    icon = null,
    type = 'INTERNAL',
    expansibleType = 'FLOATING',
    isExpanded = false,
    level = 1,
    active,
    onMouseOver = () => {},
    keepAsideOpen = false,
}: IAsideItem = {}) => {
    const {
        isAsideExpanded,
        isMobile,
        onCloseAllAsideMenus,
        onSetAsideExpanded,
        onSetMobileMenu,
    } = useApplicationStore();

    const navigate = useNavigate();

    const theme = useTheme();

    const onClickItem = (event: React.MouseEvent<HTMLElement>) => {
        if (type === 'SEPARATOR') return;

        if (type === 'EXPANSIBLE') {
            event.preventDefault();
        } else {
            onCloseAllAsideMenus();
            if (!keepAsideOpen) {
                onSetAsideExpanded(false);
                onSetMobileMenu(false);
            }
            navigate(path || '#');
        }

        onClick(event);
    };

    if (type === 'SEPARATOR') {
        return (
            <Box
                sx={{
                    width: '100%',
                    borderBottom: '1px solid',
                    borderColor: (theme) => theme.palette.grey[100],
                }}
            />
        );
    }

    return (
        <MenuItem
            onMouseOver={(event) => {
                event.stopPropagation();
                onMouseOver(event);
            }}
            onClick={onClickItem}
            sx={{
                width: '100%',
            }}
            onAuxClick={(event) => {
                console.log('b');
                if (type === 'INTERNAL') {
                    event.preventDefault();
                    window.open(path, '_blank');
                }
            }}
        >
            <NavLink
                to={type !== 'EXPANSIBLE' ? path : '#'}
                style={{
                    textDecoration: 'none',
                    display: 'block',
                    width: '100%',
                }}
            >
                <Tooltip title={label} placement="right" arrow>
                    <Box
                        sx={{
                            height:
                                type === 'PRINCIPAL'
                                    ? layoutConfig.header.height - 2
                                    : '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            width: '100%',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: (theme) =>
                                    theme.palette.grey[100],
                            },
                            backgroundColor: active
                                ? theme.palette.grey[100]
                                : 'inherit',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        {/* icon */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: level > 1 && label ? 'auto' : '100%',
                                height: '100%',
                                mr: level > 1 && label ? 1 : 0,
                                maxWidth: layoutConfig.aside.width.collapsed,
                                color: (theme) => theme.palette.text.secondary,
                            }}
                        >
                            {icon}
                        </Box>

                        {/* label */}
                        {(isAsideExpanded || isMobile || level > 1) &&
                            label && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flex: 1,
                                        height: '100%',
                                        color: (theme) =>
                                            theme.palette.text.secondary,
                                        fontWeight: 500,
                                        fontSize: 16,
                                        width: 'auto',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {label}
                                </Box>
                            )}

                        {/* expand icon */}
                        {type === 'EXPANSIBLE' &&
                            (isAsideExpanded || level > 1) &&
                            (expansibleType === 'DROPDOWN' ? (
                                <Box
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.text.secondary,
                                    }}
                                >
                                    {isExpanded ? (
                                        <MuiIcon
                                            icon="ArrowDropUp"
                                            iconProps={{
                                                color: 'inherit',
                                            }}
                                        />
                                    ) : (
                                        <MuiIcon
                                            icon="ArrowDropDown"
                                            iconProps={{
                                                color: 'inherit',
                                            }}
                                        />
                                    )}
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.text.secondary,
                                    }}
                                >
                                    <MuiIcon
                                        icon="ArrowRight"
                                        iconProps={{
                                            color: 'inherit',
                                        }}
                                    />
                                </Box>
                            ))}
                    </Box>
                </Tooltip>
            </NavLink>
        </MenuItem>
    );
};
