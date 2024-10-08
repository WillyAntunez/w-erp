import { lazy } from 'react';
import { INavigation } from './types/navigations';

import { HiOutlineHome } from 'react-icons/hi2';
import { MdOutlinePerson } from 'react-icons/md';
import { MdOutlineEngineering } from 'react-icons/md';
import { MdOutlineInventory2 } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaBox } from 'react-icons/fa';
import { CiBoxes } from 'react-icons/ci';

export const navigations: INavigation[] = [
    {
        label: 'Inicio',
        icon: <HiOutlineHome />,
        component: lazy(() => import('./views/home/HomePage')),
        path: '/',
        type: 'PRINCIPAL',
    },
    {
        type: 'SEPARATOR',
    },
    {
        label: 'Cientes',
        icon: <MdOutlinePerson />,
        childrenDisplayType: 'FLOATING',
        component: lazy(() => import('./views/customers/CustomersListPage')),
        path: '/customers/list',
    },
    {
        label: 'Empleados',
        icon: <MdOutlineEngineering />,
        childrenDisplayType: 'FLOATING',
        component: lazy(() => import('./views/employees/EmployeesListPage')),
        path: '/employees/list',
    },
    {
        label: 'Productos',
        icon: <CiBoxes />,
        type: 'EXPANSIBLE',
        children: [
            {
                label: 'Administrar productos',
                icon: <FaBox />,
                path: '/products/list',
                component: lazy(
                    () => import('./views/products/ProductsListPage'),
                ),
            },
            {
                label: 'Categorías / Subcategorías',
                icon: <AiOutlineProduct />,
                path: '/products/categories',
                component: lazy(
                    () => import('./views/products/ProductsCategoriesPage'),
                ),
            },
        ],
    },
    {
        label: 'Inventario',
        type: 'EXPANSIBLE',
        icon: <MdOutlineInventory2 />,
        children: [
            {
                label: 'Connsultar',
                icon: <MdOutlineInventory2 />,
                path: '/inventory/list',
                component: lazy(() => import('./components/UnderConstruction')),
            },
            {
                label: 'Movimientos',
                icon: <MdOutlineInventory2 />,
                path: '/inventory/movements',
                component: lazy(() => import('./components/UnderConstruction')),
            },
            {
                label: 'Ubicaciones',
                icon: <CiLocationOn />,
                path: '/inventory/locations',
                component: lazy(() => import('./components/UnderConstruction')),
            },
        ],
    },
];
