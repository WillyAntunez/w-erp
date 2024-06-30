import styled from '@emotion/styled';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CircularProgress, Stack, Typography } from '@mui/material';

import { CustomDatagridPagination } from '../CustomDatagridPagination';

export const MuiTable = styled(DataGrid)(({ theme }) => ({
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
        outline: 'none !important',
    },
}));

interface ICustomTableProps {
    rows?: any[];
    columns: GridColDef[];
    loading?: boolean;
    error?: boolean;
    errorMessage?: string;
    loadingText?: string;
    noRowsText?: string;
    noResultsText?: string;
    pageSizeOptions?: number[];
    defaultPageSize?: number;
    [key: string]: any;
}

export const CustomTable = ({
    rows = [],
    columns,
    loading = false,
    error = false,
    errorMessage = 'Error al cargar la información',
    loadingText = 'Cargando...',
    noRowsText = 'No se encontraron registros',
    noResultsText = 'No se encontraron registros',
    pageSizeOptions = [5, 10, 25, 50, 100],
    defaultPageSize = 10,
    ...moreProps
}: ICustomTableProps) => {
    return (
        <MuiTable
            rows={rows || []}
            columns={columns}
            disableRowSelectionOnClick
            components={{
                Pagination: CustomDatagridPagination,
                NoRowsOverlay: () => (
                    <Stack
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {loading ? (
                            <>
                                <CircularProgress />
                                <Typography sx={{ mt: 2 }}>
                                    {loadingText}
                                </Typography>
                            </>
                        ) : error ? (
                            <>
                                <Typography sx={{ mt: 2 }}>
                                    {errorMessage}
                                </Typography>
                            </>
                        ) : (
                            <Typography
                                fontSize={18}
                                fontWeight={300}
                                sx={{ textAlign: 'center' }}
                            >
                                {noRowsText}
                            </Typography>
                        )}
                    </Stack>
                ),
                NoResultsOverlay: () => (
                    <Stack
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        No se encontraron registros
                    </Stack>
                ),
            }}
            initialState={{
                pagination: { paginationModel: { pageSize: defaultPageSize } },
            }}
            pageSizeOptions={pageSizeOptions}
            {...moreProps}
        />
    );
};
