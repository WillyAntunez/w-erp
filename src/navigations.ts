import { INavigation } from './types/navigations';

export const navigations: INavigation[] = [
    {
        label: 'Inicio',
        iconType: 'MUI',
        icon: 'Home',
        component: 'src/views/home/HomePage',
        path: '/',
    },
    {
        label: 'Clientes',
        iconType: 'MUI',
        icon: 'PeopleAlt',
        component: 'src/views/customers/CustomersPage.tsx',
        childrenDisplayType: 'FLOATING',
        children: [
            {
                label: 'Lista',
                iconType: 'MUI',
                icon: 'List',
                component: 'src/views/customers/CustomersListPage',
                path: '/customers/list',
            },
        ],
    },
];
