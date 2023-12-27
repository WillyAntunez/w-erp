import { Layout } from '@/components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

export const DashboardRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>Dashboard Home</h1>} />
      </Routes>
    </Layout>
  );
};
