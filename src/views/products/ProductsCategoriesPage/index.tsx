import { Box, Button, Grid, Typography } from '@mui/material';
import { Content } from '@/components/Layout/components/Content/Content';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';
import { TypeColumn } from '@inovua/reactdatagrid-community/types';
import { useEffect, useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import { ActionsCell } from '../../../components/Tables/ActionsCell';
import { ICustomerSummary } from '@/types/customer';

import AbsoluteLoader from '@/components/AbsoluteLoader';

import { AiOutlineProduct } from 'react-icons/ai';
import { H2 } from '@/components/Typography';

const categoriesDatagridColumns: TypeColumn[] = [
    {
        name: 'id',
        header: 'ID',
        type: 'number',
        width: 40,
    },
    {
        name: 'name',
        header: 'Nombre',
        flex: 1,
        minWidth: 200,
    },
    {
        name: 'productsCount',
        header: 'Productos',
        width: 100,
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

const subcategoriessDatagridColumns: TypeColumn[] = [
    {
        name: 'id',
        header: 'ID',
        type: 'number',
        width: 40,
    },
    {
        name: 'name',
        header: 'Nombre',
        flex: 1,
        minWidth: 200,
    },
    {
        name: 'parentCategory',
        header: 'Categoría',
        width: 150,
    },
    {
        name: 'productsCount',
        header: 'Productos',
        width: 100,
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

export const ProductsCategoriesListPage = () => {
    const [products, setProducts] = useState<ICustomerSummary[]>([]);

    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    // load customers data
    const loadData = async () => {};

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Content title={'Categorias de Productos'} icon={<AiOutlineProduct />}>
            {/* description */}
            <Grid px={2} py={2} pb={0}>
                {/* description */}
                <Typography fontSize={14}>
                    En esta sección podrás administrar las categorías y
                    subcategorías de tus productos.
                </Typography>
            </Grid>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    flex: 1,
                    p: 2,
                    gap: 2,
                }}
            >
                {/* categories */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        flex: 1,
                        position: 'relative',
                    }}
                >
                    {/* table actions */}
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {/* right */}
                        <Grid item>
                            <H2
                                sx={{
                                    fontWeight: 500,
                                }}
                            >
                                Categorías
                            </H2>
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
                                {/* add button */}
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            fontSize: 13,
                                        }}
                                        endIcon={<MuiIcon icon="Add" />}
                                    >
                                        Agregar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* table */}
                    <Grid container mt={2} flex={1}>
                        <ReactDataGrid
                            columns={categoriesDatagridColumns}
                            dataSource={products}
                            emptyText={'No se encontraron productos.'}
                        />
                    </Grid>
                </Box>

                {/* subcategories */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        flex: 1,
                        position: 'relative',
                    }}
                >
                    {/* table actions */}
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {/* right */}
                        <Grid item>
                            <H2
                                sx={{
                                    fontWeight: 500,
                                }}
                            >
                                Subcategorías
                            </H2>
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
                                {/* add button */}
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            fontSize: 13,
                                        }}
                                        endIcon={<MuiIcon icon="Add" />}
                                    >
                                        Agregar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* table */}
                    <Grid container mt={2} flex={1}>
                        <ReactDataGrid
                            columns={subcategoriessDatagridColumns}
                            dataSource={products}
                            emptyText={'No se encontraron productos.'}
                        />
                    </Grid>
                </Box>
            </Box>

            <AbsoluteLoader
                message={'Cargando productos...'}
                open={isLoadingProducts}
            />
        </Content>
    );
};

export default ProductsCategoriesListPage;
