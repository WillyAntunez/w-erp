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

import { useTranslation } from 'react-i18next';
import i18next from '@/locales/config';

import translations from './CustomersListPage.t.json';
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
        header: i18next.t('name'),
        flex: 1,
        minWidth: 200,
        render: ({ data, value }) => {
            return <NavLink to={`/customers/${data.id}`}>{value}</NavLink>;
        },
    },
    {
        name: 'status',
        header: i18next.t('status'),
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
        header: i18next.t('type'),
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
        header: i18next.t('email'),
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
        header: i18next.t('phone'),
        render: ({ data }: { data: ICustomerSummary }) => {
            return <Typography>{data.contactInfo.phone}</Typography>;
        },
    },
    {
        name: 'firstContact',
        header: i18next.t('first-interaction'),
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
        header: i18next.t('last-interaction'),
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
        header: i18next.t('actions'),
        width: 90,
        render: ({ data }) => {
            return <ActionsCell row={data} />;
        },
    },
];

export const CustomersListPage = () => {
    const { t, i18n } = useTranslation('CustomersListPage');

    const [customers, setCustomers] = useState<ICustomerSummary[]>([]);

    i18n.addResourceBundle('es', 'CustomersListPage', translations.es);
    i18n.addResourceBundle('en', 'CustomersListPage', translations.en);

    const [isLoadingCustomers, setIsLoadingCustomers] = useState(false);

    const summaryData: ISummaryArray = useMemo(() => {
        return [
            {
                label: t('total-customers'),
                value: 15,
            },
            {
                label: t('active-customers'),
                value: 10,
            },
            {
                label: t('inactive-customers'),
                value: 5,
            },
            {
                label: t('new-customers'),
                value: 3,
            },
            {
                label: t('potential-customers'),
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
                title: t('error-loading-customers'),
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
        <Content title={t('title')} icon={'Contacts'}>
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
                <Typography fontSize={14}>{t('description')}</Typography>

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
                                        {t('filters', {
                                            ns: 'common',
                                        })}
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
                                    label={t('search', {
                                        ns: 'common',
                                    })}
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
                                    {t('refresh', {
                                        ns: 'common',
                                    })}
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
                                    {t('add-customers')}
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
                        emptyText={t('no-customers-found')}
                    />
                </Grid>

                <AbsoluteLoader
                    message={t('loading-customers')}
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
