import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { navigations } from '@/navigations';
import { INavigation } from '@/types/navigations';

export const ComponentLoader = ({ path }: { path: string }) => {
    const Component = React.lazy(() => import(`../../../${path}`));

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Component />
        </React.Suspense>
    );
};

export const getRoutes = (navigations: INavigation[]): JSX.Element[] => {
    let routes: JSX.Element[] = [];

    const getRoutesInternal = (navigations: INavigation[]): JSX.Element[] => {
        let result: JSX.Element[] = [];

        navigations.forEach((navigation) => {
            if (navigation.children) {
                result = [...result, ...getRoutesInternal(navigation.children)];
            } else if (navigation.path) {
                result.push(
                    <Route
                        key={navigation.path}
                        path={navigation.path}
                        element={
                            <ComponentLoader path={navigation.component} />
                        }
                    />,
                );
            }
        });

        return result;
    };

    routes = getRoutesInternal(navigations);

    return routes;
};

export const DashboardRouter = () => {
    return (
        <Layout>
            <Routes>{getRoutes(navigations)}</Routes>
        </Layout>
    );
};

export default DashboardRouter;
