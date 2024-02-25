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
        icon: 'Group',
        childrenDisplayType: 'FLOATING',
        component: lazy(() => import('./views/customers/CustomersListPage')),
        path: '/customers/list',
    },
    {
        label: 'Empleados',
        icon: 'Badge',
        childrenDisplayType: 'FLOATING',
        component: lazy(() => import('./views/employees/EmployeesListPage')),
        path: '/employees/list',
    },
];
