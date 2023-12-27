import { HashRouter, Route, Routes } from 'react-router-dom';
import { DashboardRouter } from './dashboard/DashboardRouter';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* dashboard */}
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </HashRouter>
  );
};
