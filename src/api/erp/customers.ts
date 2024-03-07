import {
    ICustomerSummary,
    ICustomersListApiResponse,
} from '@/types/api/customer';
import api from '../api';
import axios, { AxiosError } from 'axios';

// * get all customers
export const getCustomers = async () => {
    try {
        const response =
            await api.get<ICustomersListApiResponse>('/private/customers');

        const data = response.data;

        const customers: ICustomerSummary[] = data.data.map((customer) => {
            const name =
                customer.type === 'N'
                    ? `${customer.firstName} ${customer.lastName}`
                    : customer.tradeName || customer.legalName || 'No name';

            return {
                ...customer,
                name,
            };
        });

        return {
            status: response.status,
            success: data.success,
            data: customers,
            message: data.success
                ? 'Clientes obtenidos correctamente'
                : 'Error al obtener los clientes',
        };
    } catch (error) {
        console.error('Error al obtener los clientes', error);

        if (axios.isAxiosError(error)) {
            return {
                status: error.response?.status || 500,
                success: false,
                message:
                    error.response?.data.message ||
                    'Error al obtener los clientes',
                data: null,
            };
        } else {
            return {
                status: 500,
                success: false,
                message: 'Error al obtener los clientes',
                data: null,
            };
        }
    }
};
