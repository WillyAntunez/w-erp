import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';
import {
    DashboardRouter,
    NoLayoutDashboardRouter,
} from './dashboard/DashboardRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* dashboard */}
                <Route path="/*" element={<DashboardRouter />} />
                {/* no layout dashboard */}
                <Route
                    path="/no-layout/*"
                    element={<NoLayoutDashboardRouter />}
                />
            </Routes>
        </BrowserRouter>
    );
};
