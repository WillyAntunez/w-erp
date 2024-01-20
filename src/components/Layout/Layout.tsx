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
                    boxShadow: 'inset 0px 4px 42px 0px rgba(0, 0, 0, 0.05)',
                    padding: 2,
                }}
            >
                {children}
            </Grid>
        </div>
    );
};
