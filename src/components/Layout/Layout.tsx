import { Grid } from '@mui/material';

import { Header } from './components/Header/Header';
import { Aside } from './components/Aside/Aside';

import './styles/Layout.scss';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout">
            <Aside />
            <Header />
            <Grid
                className="content"
                sx={{
                    gridArea: 'content',
                    minHeight: '100%',
                }}
            >
                {children}
            </Grid>
        </div>
    );
};
