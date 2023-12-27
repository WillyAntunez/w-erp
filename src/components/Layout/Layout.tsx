import { Grid } from '@mui/material';
import { Header } from '../Header/Header';

import './Layout.scss';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    //  todo: scss y clases para el layout
    return (
        <div className="layout">
            <Header />
            <Grid
                className="content"
                sx={{ gridArea: 'content', minHeight: '100%' }}
            >
                {children}
            </Grid>
        </div>
    );
};
