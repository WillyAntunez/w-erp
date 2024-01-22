import { layoutConfig } from '@/components/Layout/config/layoutConfig';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type AsideItemProps = {
    to?: string;
    onClick?: () => void;
    label?: string;
    muiIcon?: React.ReactNode;
    type?: 'BUTTON' | 'SEPARATOR' | 'BOX';
};

export const AsideItem = ({
    to = '',
    onClick = () => {},
    label = '',
    muiIcon = null,
    type = 'BUTTON',
}: AsideItemProps = {}) => {
    const { isAsideExpanded, isMobile } = useApplicationStore();
    const navigate = useNavigate();

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
                    height: '1px',
                    backgroundColor: '#EAEAEA',
                }}
            />
        );
    }

    return (
        <Box
            sx={{
                width: '100%',
                height:
                    type === 'BOX' ? layoutConfig.header.height - 2 : '40px',
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
                {muiIcon}
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
