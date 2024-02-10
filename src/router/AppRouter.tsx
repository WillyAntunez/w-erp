import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';
import { DashboardRouter } from './dashboard/DashboardRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* dashboard */}
                <Route path="/*" element={<DashboardRouter />} />
            </Routes>
        </BrowserRouter>
    );
};
