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
    // floating example
    {
        label: 'Clientes',
        icon: 'PeopleAlt',
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
            {
                label: 'Prospectos',
                iconType: 'MUI',
                icon: 'ListAlt',
                component: lazy(
                    () => import('./views/customers/ProspectsPage'),
                ),
                path: '/customers/prospects',
            },
            {
                label: 'Children 2',
                iconType: 'MUI',
                icon: 'ListAlt',
                children: [
                    {
                        label: 'Children 2.1',
                        iconType: 'MUI',
                        icon: 'ListAlt',
                        component: lazy(
                            () => import('./views/customers/ProspectsPage'),
                        ),
                        path: '/customers/prospects',
                    },
                    {
                        label: 'Children 2.2',
                        iconType: 'MUI',
                        icon: 'ListAlt',
                        component: lazy(
                            () => import('./views/customers/ProspectsPage'),
                        ),
                        path: '/customers/prospects',
                    },
                    {
                        label: 'Children 2.3',
                        iconType: 'MUI',
                        icon: 'ListAlt',
                        children: [
                            {
                                label: 'Children 2.3.1',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                            {
                                label: 'Children 2.3.2',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                            {
                                label: 'Children 2.3.3',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Children 3',
                iconType: 'MUI',
                icon: 'ListAlt',
                children: [
                    {
                        label: 'Children 3.1',
                        iconType: 'MUI',
                        icon: 'ListAlt',
                        component: lazy(
                            () => import('./views/customers/ProspectsPage'),
                        ),
                        path: '/customers/prospects',
                    },
                    {
                        label: 'Children 3.2',
                        iconType: 'MUI',
                        icon: 'ListAlt',
                        component: lazy(
                            () => import('./views/customers/ProspectsPage'),
                        ),
                        path: '/customers/prospects',
                    },
                    {
                        label: 'Children 3.3',
                        iconType: 'MUI',
                        icon: 'ListAlt',
                        children: [
                            {
                                label: 'Children 3.3.1',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                            {
                                label: 'Children 3.3.2',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                            {
                                label: 'Children 3.3.3',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                        ],
                    },
                ],
            },

            // todo: not displayed routes
        ],
    },
    // dropdown example
    {
        label: 'Productos',
        icon: 'LocalMall',
        childrenDisplayType: 'DROPDOWN',
        children: [
            {
                label: 'Lista',
                iconType: 'MUI',
                icon: 'List',
                component: lazy(
                    () => import('./views/customers/ProspectsPage'),
                ),
                path: '/products/list',
            },
            {
                label: 'Categorías',
                iconType: 'MUI',
                icon: 'Category',
                component: lazy(
                    () => import('./views/customers/ProspectsPage'),
                ),
                path: '/products/categories',
            },
            {
                label: 'Marcas',
                iconType: 'MUI',
                icon: 'LocalOffer',
                childrenDisplayType: 'DROPDOWN',
                children: [
                    {
                        label: 'Lista',
                        iconType: 'MUI',
                        icon: 'List',
                        component: lazy(
                            () => import('./views/customers/ProspectsPage'),
                        ),
                        path: '/products/brands/list',
                    },
                    {
                        label: 'Children 2',
                        iconType: 'MUI',
                        icon: 'ListAlt',
                        childrenDisplayType: 'DROPDOWN',
                        children: [
                            {
                                label: 'Children 2.1',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                            {
                                label: 'Children 2.2',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                component: lazy(
                                    () =>
                                        import(
                                            './views/customers/ProspectsPage'
                                        ),
                                ),
                                path: '/customers/prospects',
                            },
                            {
                                label: 'Children 2.3',
                                iconType: 'MUI',
                                icon: 'ListAlt',
                                childrenDisplayType: 'DROPDOWN',
                                children: [
                                    {
                                        label: 'Children 2.3.1',
                                        iconType: 'MUI',
                                        icon: 'ListAlt',
                                        component: lazy(
                                            () =>
                                                import(
                                                    './views/customers/ProspectsPage'
                                                ),
                                        ),
                                        path: '/customers/prospects',
                                    },
                                    {
                                        label: 'Children 2.3.2',
                                        iconType: 'MUI',
                                        icon: 'ListAlt',
                                        component: lazy(
                                            () =>
                                                import(
                                                    './views/customers/ProspectsPage'
                                                ),
                                        ),
                                        path: '/customers/prospects',
                                    },
                                    {
                                        label: 'Children 2.3.3',
                                        iconType: 'MUI',
                                        icon: 'ListAlt',
                                        component: lazy(
                                            () =>
                                                import(
                                                    './views/customers/ProspectsPage'
                                                ),
                                        ),
                                        path: '/customers/prospects',
                                    },

                                    // hidden routes
                                    {
                                        label: 'Ruta oculta 1',
                                        type: 'ROUTE-ONLY',
                                        component: lazy(
                                            () =>
                                                import(
                                                    './views/customers/ProspectsPage'
                                                ),
                                        ),
                                        path: '/hidden/route/1',
                                    },
                                    {
                                        label: 'Ruta oculta 2',
                                        type: 'ROUTE-ONLY',
                                        component: lazy(
                                            () =>
                                                import(
                                                    './views/customers/ProspectsPage'
                                                ),
                                        ),
                                        path: '/hidden/route/2',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
