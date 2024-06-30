import {
    Box,
    Button,
    Grid,
    Modal,
    SxProps,
    Theme,
    Typography,
    useTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CardContainer from '../CardContainer';

interface ICustomModalProps {
    open: boolean;
    children?: ReactNode;
    onClose?: () => void;
    onConfirm?: () => void;
    onCancel?: () => void;

    confirmButtonText?: string;
    cancelButtonText?: string;

    maxWidth?: number;

    confirmButtonVariant?: 'outlined' | 'contained';
    cancelButtonVariant?: 'outlined' | 'contained';

    showActionButtons?: boolean;
    disableCancelButton?: boolean;
    disableConfirmButton?: boolean;
    hideConfirmButton?: boolean;
    hideCancelButton?: boolean;

    sx?: SxProps<Theme>;

    title?: string;
    description?: string;

    confirmButtonColor?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
    cancelButtonColor?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
}

export const CustomModal = ({
    open,
    onClose = () => {},
    children,
    maxWidth = 500,
    sx,
    title,
    description,
    showActionButtons = false,
    confirmButtonText = 'Confirmar',
    cancelButtonText = 'Cancelar',
    disableCancelButton = false,
    disableConfirmButton = false,
    hideConfirmButton = false,
    hideCancelButton = false,
    confirmButtonColor = 'primary',
    cancelButtonColor = 'primary',
    confirmButtonVariant = 'contained',
    cancelButtonVariant = 'outlined',
    onConfirm = () => {},
    onCancel = () => {},
}: ICustomModalProps) => {
    const theme = useTheme();

    return (
        <Modal open={open} onClose={onClose}>
            <Grid
                container
                sx={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '95%',
                    outline: 'none',
                    maxWidth,
                    ...sx,
                }}
            >
                <CardContainer
                    padding={2}
                    sx={{
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        height: '100%',
                        maxHeight: '95vh',
                        width: '100%',
                    }}
                >
                    {/* header */}
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant={'h3'}
                            sx={{
                                fontSize: 18,
                            }}
                        >
                            {title}
                        </Typography>

                        <CloseIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={onClose}
                        />
                    </Grid>

                    {/* divider */}
                    <Box
                        sx={{
                            width: '100%',
                            height: `1px`,
                            backgroundColor: theme.palette.grey[300],
                            marginY: 1,
                        }}
                    ></Box>

                    {/* content */}
                    <Grid item xs={12} sx={{ flex: 1, overflowY: 'auto' }}>
                        {children}
                    </Grid>

                    {showActionButtons ? (
                        <Grid
                            container
                            spacing={1}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 2,
                            }}
                        >
                            <Grid item xs={12} md={4}>
                                {!hideCancelButton ? (
                                    <Button
                                        variant={cancelButtonVariant}
                                        onClick={() =>
                                            onCancel ? onCancel() : onClose()
                                        }
                                        fullWidth
                                        disabled={disableCancelButton}
                                        color={cancelButtonColor}
                                    >
                                        {cancelButtonText}
                                    </Button>
                                ) : null}
                            </Grid>

                            <Grid item xs={12} md={4}>
                                {!hideConfirmButton ? (
                                    <Button
                                        variant={confirmButtonVariant}
                                        onClick={() =>
                                            onConfirm ? onConfirm() : onClose()
                                        }
                                        fullWidth
                                        disabled={disableConfirmButton}
                                        color={confirmButtonColor}
                                    >
                                        {confirmButtonText}
                                    </Button>
                                ) : null}
                            </Grid>
                        </Grid>
                    ) : null}
                </CardContainer>
            </Grid>
        </Modal>
    );
};
