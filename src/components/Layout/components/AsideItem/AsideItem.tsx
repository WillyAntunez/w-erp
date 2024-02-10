import { layoutConfig } from '@/components/Layout/config/layoutConfig';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import { IAsideItem } from '@/types/navigations';
import { Box, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const AsideItem = ({
    to = '',
    onClick = () => {},
    label = '',
    icon = null,
    iconType = 'MUI',
    type = 'INTERNAL',
    expansibleType = 'FLOATING',
}: IAsideItem = {}) => {
    const { isAsideExpanded, isMobile } = useApplicationStore();
    const navigate = useNavigate();

    console.log({ type, label, icon, iconType });

    const theme = useTheme();

    const onClickItem = () => {
        if (type === 'SEPARATOR') return;

        if (to.length > 0) {
            navigate(to);
        } else {
            onClick();
        }
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

    const renderedIcon = useMemo(() => {
        if (icon) {
            if (iconType === 'MUI') {
                return <MuiIcon icon={icon} />;
            } else {
                return <i className={icon} />;
            }
        }

        console.log('no icon');

        return null;
    }, [icon, iconType]);

    return (
        <Box
            sx={{
                width: '100%',
                height:
                    type === 'PRINCIPAL'
                        ? layoutConfig.header.height - 2
                        : '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: (theme) => theme.palette.grey[100],
                },
                transition: 'all 0.3s ease-in-out',
            }}
            onClick={onClickItem}
        >
            {/* icon */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    maxWidth: layoutConfig.aside.width.collapsed,
                    color: (theme) => theme.palette.text.secondary,
                }}
            >
                {renderedIcon}
            </Box>

            {/* label */}
            {(isAsideExpanded || isMobile) && label && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flex: 1,
                        height: '100%',
                        color: (theme) => theme.palette.text.secondary,
                        fontWeight: 500,
                        fontSize: 16,
                    }}
                >
                    {label}
                </Box>
            )}
        </Box>
    );
};
