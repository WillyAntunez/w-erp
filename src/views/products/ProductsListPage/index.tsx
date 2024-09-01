import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Content } from '@/components/Layout/components/Content/Content';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';
import { useEffect, useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import { ActionsCell } from '../../../components/Tables/ActionsCell';
import { ICustomerSummary } from '@/types/customer';

import AbsoluteLoader from '@/components/AbsoluteLoader';

import { FaBox } from 'react-icons/fa';

const productsDatagridColumns: TypeColumn[] = [
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
    },
    {
        name: 'status',
        header: 'Estado',
        width: 100,
    },
    {
        name: 'stock',
        header: 'Stock',
        width: 100,
    },
    {
        name: 'type',
        header: 'Categoría',
        width: 130,
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

export const ProductsListPage = () => {
    const [products, setProducts] = useState<ICustomerSummary[]>([]);

    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    // load customers data
    const loadData = async () => {};

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Content title={'Productos'} icon={<FaBox />}>
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
                    En esta sección podrás visualizar y administrar los
                    productos físicos de tu negocio.
                </Typography>

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
                                    label={'Buscar producto'}
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
                                >
                                    Agregar producto
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* table */}
                <Grid container mt={2} flex={1}>
                    <ReactDataGrid
                        columns={productsDatagridColumns}
                        dataSource={products}
                        emptyText={'No se encontraron productos.'}
                    />
                </Grid>

                <AbsoluteLoader
                    message={'Cargando productos...'}
                    open={isLoadingProducts}
                />
            </Box>
        </Content>
    );
};

export default ProductsListPage;
