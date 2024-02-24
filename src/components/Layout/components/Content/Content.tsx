import { INavIconType } from '@/types/navigations';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { layoutConfig } from '../../config/layoutConfig';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';

type IContentProps = {
    children?: React.ReactNode;
    title: string;
    showTitleBar?: boolean;
    showFooter?: boolean;
    icon?: null | string;
    iconType?: INavIconType;
};

export const Content = ({
    children,
    title,
    showTitleBar = true,
    showFooter = true,
    icon,
    iconType = 'MUI',
}: IContentProps) => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            {/* titleBar */}
            {showTitleBar ? (
                <Box
                    sx={{
                        height: `${layoutConfig.header.height}px`,
                        borderBottom: '1px solid #EAEAEA',
                        backgroundColor: (theme) => 'white',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                    }}
                >
                    <Box
                        sx={{
                            color: (theme) => theme.palette.grey[600],
                            fontSize: 16,

                            mt: '2px',
                        }}
                    >
                        {icon && iconType === 'MUI' ? (
                            <MuiIcon
                                icon={icon}
                                iconProps={{
                                    fontSize: 'inherit',
                                }}
                            />
                        ) : null}
                        {icon && iconType === 'FA' ? (
                            <i
                                className={icon}
                                style={{ marginRight: '10px' }}
                            />
                        ) : null}
                    </Box>

                    <Box
                        sx={{
                            fontSize: 16,
                            color: (theme) => theme.palette.grey[600],
                            ml: 1,
                        }}
                    >
                        {title}
                    </Box>
                </Box>
            ) : null}

            {/* content */}
            <Box
                sx={{
                    boxShadow: 'inset 0px 4px 42px 0px rgb(60 60 60 / 5%)',
                    flex: 1,
                }}
            >
                {children}
            </Box>

            {/* footer */}
            {showFooter && (
                <Box
                    sx={{
                        // height: `${layoutConfig.footer.height}px`,
                        height: '60px',
                        borderTop: '1px solid #EAEAEA',
                        backgroundColor: (theme) =>
                            theme.palette.background.default,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.grey[400],
                            fontSize: 11,
                            padding: '10px 20px',
                        }}
                    >
                        © 2024 Willy Emanuel Antunez Gonzales | Contacto:
                        willyantunezg@gmail.com
                    </Typography>
                </Box>
            )}
        </Box>
    );
};
