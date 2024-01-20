import { layoutConfig } from '@/components/Layout/config/layoutConfig';
import { useApplicationStore } from '@/hooks/useApplicationStore';
import { useTheme } from '@emotion/react';
import { Box, Grid, Theme } from '@mui/material';

import { Theme as MuiTheme } from '@mui/material/styles';
import { AsideItem } from '../AsideItem/AsideItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import { useRef } from 'react';

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}

export const Aside = () => {
    const { isAsideExpanded, onToggleAsideExpanded } = useApplicationStore();

    const theme: MuiTheme = useTheme();

    return (
        <Box
            gridArea={'sidebar'}
            sx={{
                width: isAsideExpanded
                    ? layoutConfig.aside.width.expanded
                    : layoutConfig.aside.width.collapsed,
                backgroundColor: theme.palette.background.default,
                height: '100%',
                border: '1px solid #EAEAEA',
                display: 'flex',
                flexDirection: 'column',
                transition: 'width 0.3s ease-in-out',
            }}
        >
            {/* lofo if is expanded */}

            <>
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        height: isAsideExpanded
                            ? layoutConfig.header.height - 2
                            : '0px',
                        transition: 'height 0.3s ease-in-out',
                    }}
                ></Grid>
                {isAsideExpanded ? <AsideItem type="SEPARATOR" /> : null}
            </>

            {/* expand and collapse item */}
            <Grid
                sx={{
                    display: 'flex',
                    marginTop: 'auto',
                    flexDirection: 'column',
                }}
            >
                <AsideItem type="BOX" label="Inicio" muiIcon={<HomeIcon />} />
                <AsideItem type="SEPARATOR" />
            </Grid>

            {/* aside items */}
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1,
                    width: '100%',
                }}
            ></Grid>

            {/* expand and collapse item */}
            <Grid
                sx={{
                    display: 'flex',
                    marginTop: 'auto',
                    flexDirection: 'column',
                }}
            >
                <AsideItem type="SEPARATOR" />
                <AsideItem
                    type="BOX"
                    muiIcon={
                        isAsideExpanded ? <ArrowLeftIcon /> : <ArrowRightIcon />
                    }
                    onClick={onToggleAsideExpanded}
                />
            </Grid>
        </Box>
    );
};
