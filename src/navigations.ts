import { lazy } from 'react';
import { INavigation } from './types/navigations';

export const navigations: INavigation[] = [
    {
        label: 'Inicio',
        icon: 'Home',
        component: lazy(() => import('./views/home/HomePage')),
        path: '/',
        type: 'PRINCIPAL',
    },
    {
        type: 'SEPARATOR',
    },
    {
        label: 'Clientes',
        icon: 'PeopleAlt',
        component: 'src/views/customers/CustomersPage.tsx',
        childrenDisplayType: 'FLOATING',
        children: [
            {
                label: 'Lista',
                iconType: 'MUI',
                icon: 'List',
                component: lazy(
                    () => import('./views/customers/CustomersListPage'),
                ),
                path: '/customers/list',
            },
            // todo: not displayed routes
        ],
    },
];
