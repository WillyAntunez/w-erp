import {
    Box,
    Button,
    Chip,
    ChipProps,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { Content } from '@/components/Layout/components/Content/Content';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { NavLink } from 'react-router-dom';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';
import { useEffect, useMemo, useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import Summary, { ISummaryArray } from '@/components/Summary';
import { ActionsCell } from '../../../components/Tables/ActionsCell';
import { getCustomers } from '@/api/erp/customers';
import { ICustomerSummary } from '@/types/customer';
import { dateFormatStrings, statuses } from '@/utils/constants';
import { getPersonType, getStatus } from '@/utils/getConstants';
import { formatDate } from '@/utils/formatDate';

import AbsoluteLoader from '@/components/AbsoluteLoader';
import Swal from 'sweetalert2';
import { CustomerModal } from '@/components/Modals/CustomerModal';

const customerDatagridColumns: TypeColumn[] = [
    {
        name: 'id',
        header: 'ID',
        type: 'number',
        width: 60,
    },
    {
        name: 'name',
        header: 'Nombre',
        flex: 1,
        minWidth: 200,
        render: ({ data, value }) => {
            return <NavLink to={`/customers/${data.id}`}>{value}</NavLink>;
        },
    },
    {
        name: 'status',
        header: 'Estado',
        width: 100,
        render: ({ data }) => {
            const statusObj = getStatus(data.status);

            return (
                <Chip
                    color={statusObj.color as ChipProps['color']}
                    label={statusObj.name}
                    size="small"
                />
            );
        },
    },
    {
        name: 'type',
        header: 'Tipo',
        width: 130,
        render: ({ data }) => {
            const personType = getPersonType(data.type);

            return (
                <Chip
                    color={personType.color as ChipProps['color']}
                    label={personType.name}
                    size="small"
                />
            );
        },
    },
    {
        name: 'email',
        header: 'Correo electrónico',
        render: ({ data }: { data: ICustomerSummary }) => {
            return (
                <a
                    href={`mailto:${data.contactInfo.email}`}
                    style={{ textDecoration: 'none' }}
                >
                    {data.contactInfo.email}
                </a>
            );
        },
    },
    {
        name: 'phone',
        header: 'Teléfono',
        render: ({ data }: { data: ICustomerSummary }) => {
            return <Typography>{data.contactInfo.phone}</Typography>;
        },
    },
    {
        name: 'firstContact',
        header: 'Primer contacto',
        width: 150,
        render: ({ data }: { data: ICustomerSummary }) => {
            return (
                <Typography>
                    {formatDate(data.createdAt, dateFormatStrings.dateWithTime)}
                </Typography>
            );
        },
    },
    {
        name: 'lastContact',
        header: 'Último contacto',
        width: 150,
        render: ({
            data,
            value,
        }: {
            data: ICustomerSummary;
            value: string | null;
        }) => {
            return (
                <Typography>
                    {formatDate(
                        value || data.createdAt,
                        dateFormatStrings.dateWithTime,
                    )}
                </Typography>
            );
        },
    },
    {
        name: 'actions',
        header: 'Acciones',
        width: 90,
        render: ({ data }) => {
            return <ActionsCell row={data} />;
        },
    },
];

export const CustomersListPage = () => {
    const [customers, setCustomers] = useState<ICustomerSummary[]>([]);

    const [isLoadingCustomers, setIsLoadingCustomers] = useState(false);

    const summaryData: ISummaryArray = useMemo(() => {
        return [
            {
                label: 'Total de clientes',
                value: 15,
            },
            {
                label: 'Clientes activos',
                value: 10,
            },
            {
                label: 'Nuevos clientes',
                value: 5,
            },
            {
                label: 'Clientes potenciales',
                value: 3,
            },
            {
                label: 'Clientes inactivos',
                value: 15,
            },
        ];
    }, []);

    // load customers data
    const loadData = async () => {
        setIsLoadingCustomers(true);

        const customersResponse = await getCustomers();

        if (customersResponse.success && customersResponse.data) {
            setCustomers(customersResponse.data);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error cargando clientes',
                text: `${customersResponse.status}: ${customersResponse.message}`,
            });
        }

        setIsLoadingCustomers(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    // handle create customer modal
    const [isCustomerModalOpen, setIsCustomerModalOpen] =
        useState<boolean>(false);

    const onOpenCustomerModal = () => {
        setIsCustomerModalOpen(true);
    };

    const onCloseCustomerModal = () => {
        setIsCustomerModalOpen(false);
    };

    return (
        <Content title={'Clientes'} icon={'Contacts'}>
            <Box
                padding={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    flex: 1,
                    position: 'relative',
                }}
            >
                {/* description */}
                <Typography fontSize={14}>
                    La vista de administración de clientes proporciona una
                    interfaz centralizada para gestionar y acceder a la
                    información de todos los clientes registrados en el sistema.
                </Typography>

                {/* summary */}
                <Summary
                    data={summaryData}
                    containerProps={{
                        mt: 1,
                    }}
                />

                {/* table actions */}
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    mt={2}
                >
                    {/* right */}
                    <Grid item>
                        {/* filters button */}
                        <Grid container spacing={1}>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        fontSize: 13,
                                    }}
                                    endIcon={<MuiIcon icon="FilterList" />}
                                >
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontSize: 'inherit',
                                        }}
                                    >
                                        Filtros
                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid item>
                                <Chip
                                    label="Estado: Activo"
                                    size="small"
                                    onDelete={() => {}}
                                />
                            </Grid>

                            <Grid item>
                                <Chip
                                    label="Tipo: Natural"
                                    size="small"
                                    onDelete={() => {}}
                                />
                            </Grid>

                            <Grid item>
                                <Chip
                                    label="Segmento: Clientes potenciales"
                                    size="small"
                                    onDelete={() => {}}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* left */}
                    <Grid item>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            spacing={1}
                        >
                            {/* search input */}
                            <Grid item>
                                <TextField
                                    label={'Buscar clientes'}
                                    size="small"
                                    variant={'standard'}
                                    /* end adornment */
                                    InputProps={{
                                        endAdornment: (
                                            <MuiIcon
                                                icon="Search"
                                                iconProps={{
                                                    fontSize: 'small',
                                                }}
                                            />
                                        ),
                                    }}
                                />
                            </Grid>

                            {/* update button */}
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        fontSize: 13,
                                    }}
                                    endIcon={<MuiIcon icon="Refresh" />}
                                    onClick={loadData}
                                >
                                    Actualizar
                                </Button>
                            </Grid>

                            {/* add button */}
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        fontSize: 13,
                                    }}
                                    endIcon={<MuiIcon icon="Add" />}
                                    onClick={onOpenCustomerModal}
                                >
                                    Agregar cliente
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* table */}
                <Grid container mt={2} flex={1}>
                    <ReactDataGrid
                        columns={customerDatagridColumns}
                        dataSource={customers}
                        emptyText={'No se encontraron clientes.'}
                    />
                </Grid>

                <AbsoluteLoader
                    message={'Cargando clientes...'}
                    open={isLoadingCustomers}
                />
            </Box>

            <CustomerModal
                open={isCustomerModalOpen}
                onClose={onCloseCustomerModal}
            />
        </Content>
    );
};

export default CustomersListPage;
