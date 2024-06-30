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
        label: 'Cientes',
        icon: 'Contacts',
        childrenDisplayType: 'FLOATING',
        component: lazy(() => import('./views/customers/CustomersListPage')),
        path: '/customers/list',
    },
    {
        label: 'Cliente',
        type: 'ROUTE-ONLY',
        path: '/customers/:id',
        component: lazy(() => import('./views/customers/CustomerDetailsPage')),
    },
    {
        label: 'Empleados',
        icon: 'Engineering',
        childrenDisplayType: 'FLOATING',
        component: lazy(() => import('./views/employees/EmployeesListPage')),
        path: '/employees/list',
    },
];
