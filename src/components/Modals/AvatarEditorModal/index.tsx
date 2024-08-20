import { CustomModal } from '@/components/CustomModal';
import { H3, Paragraph } from '@/components/Typography';
import { Grid, Slider, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { CustomLabel } from '../../Autoform/components/InputLabel';
import { MuiFileInput } from 'mui-file-input';

import PhotoIcon from '@mui/icons-material/Photo';
import AvatarEditor from 'react-avatar-editor';
import { dataUrlToBlob } from '@/utils/dataUrlToBlob';

interface IAvatarEditorModalProps {
    image: string | File | null;
    open: boolean;
    onClose: () => void;
    onImageChange: (image: File) => void;
}

export const AvatarEditorModal = ({
    image,
    open,
    onClose,
    onImageChange,
}: IAvatarEditorModalProps) => {
    const editorRef = useRef<AvatarEditor>(null);

    const [currentImage, setCurrentImage] = useState<string | File | null>(
        null,
    );
    const [imageError, setImageError] = useState<string | null>(null);

    useEffect(() => {
        if (open) {
            setCurrentImage(image);
        } else {
            setCurrentImage(null);
            setImageError(null);
        }
    }, [open]);

    const onSelectImage = (file: File) => {
        setImageError(null);

        const maxSize = 5 * 1024 * 1024; // 5mb
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        if (file.size > maxSize) {
            setImageError('Máximo 5mb');
            return;
        }

        const extension = file.name.split('.').pop() || '';

        if (!allowedExtensions.includes(extension)) {
            setImageError(
                'Extension invalida, permitidas:' +
                    ' ' +
                    allowedExtensions.join(', '),
            );
            return;
        }

        if (!allowedTypes.includes(file.type)) {
            setImageError('Tipo de archivo invalido, permitidos: ');
            return;
        }

        setImageError(null);
        setCurrentImage(file);
    };

    const [slideValue, setSlideValue] = useState(10);

    const onSaveImage = () => {
        if (editorRef.current) {
            const canvas: HTMLCanvasElement = editorRef.current.getImage();
            const dataUrl: string = canvas.toDataURL('image/jpeg');
            const blob: Blob = dataUrlToBlob(dataUrl);

            const file: File = new File([blob], 'avatar.jpg', {
                type: blob.type,
            });

            onImageChange(file);

            onClose();
        }
    };

    return (
        <CustomModal
            title={!currentImage ? 'Upload your image' : 'Edit your image'}
            open={open}
            onClose={onClose}
            maxWidth={currentImage ? 400 : 500}
            showActionButtons={!!currentImage}
            confirmButtonText={'Guardar'}
            onConfirm={onSaveImage}
            onCancel={onClose}
            cancelButtonText={'Cancelar'}
        >
            {!currentImage ? (
                <Grid container>
                    <Grid item xs={12}>
                        <Paragraph
                            style={{
                                color: '#666',
                            }}
                        >
                            Puedes subir una imagen aqui para usarla como tu
                            avatar
                        </Paragraph>
                    </Grid>

                    <Grid item xs={12} mt={2}>
                        {/* mui file input */}

                        {/* label */}
                        <CustomLabel
                            htmlFor="upload-image"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                border: (theme) =>
                                    !!imageError
                                        ? '1px solid red'
                                        : `1px solid ${theme.palette.grey[400]}`,
                                borderRadius: '5px',
                                padding: 2,
                            }}
                        >
                            <PhotoIcon
                                sx={{
                                    marginRight: 1,
                                    color: (theme) => theme.palette.grey[600],
                                }}
                            />{' '}
                            <Typography
                                sx={{
                                    color: (theme) => theme.palette.grey[600],
                                }}
                            >
                                Click aqui para subir una imagen
                            </Typography>
                        </CustomLabel>

                        <Typography
                            sx={{
                                color: (theme) => theme.palette.error.light,
                            }}
                        >
                            {imageError}
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <AvatarEditor
                            image={currentImage}
                            ref={editorRef}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px',
                            }}
                            borderRadius={150}
                            scale={slideValue / 10}
                            color={[0, 0, 0, 0.72]}
                            backgroundColor="#f0f0f0"
                        />
                        <Slider
                            min={10}
                            max={50}
                            sx={{
                                margin: '0 auto',
                                width: '70%',
                            }}
                            size="medium"
                            defaultValue={slideValue}
                            value={slideValue}
                            onChange={(
                                e: Event,
                                newValue: number | number[],
                            ) => {
                                const value = newValue as number;
                                setSlideValue(value);
                            }}
                        />

                        <Grid container mt={2}>
                            {/* label */}
                            <CustomLabel
                                htmlFor="upload-image"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    border: (theme) =>
                                        !!imageError
                                            ? '1px solid red'
                                            : `1px solid ${theme.palette.grey[400]}`,
                                    borderRadius: '5px',
                                    padding: 1,
                                    width: '100%',
                                }}
                            >
                                <PhotoIcon
                                    sx={{
                                        marginRight: 1,
                                        color: (theme) =>
                                            theme.palette.grey[600],
                                    }}
                                />{' '}
                                <Typography
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.grey[600],
                                    }}
                                >
                                    Upload another image
                                </Typography>
                            </CustomLabel>

                            <Typography
                                sx={{
                                    color: (theme) => theme.palette.error.light,
                                }}
                            >
                                {imageError}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            <TextField
                type="file"
                fullWidth
                id="upload-image"
                placeholder="Upload your image"
                label={<PhotoIcon />}
                sx={{
                    display: 'none',
                }}
                inputProps={{
                    accept: 'image/*',
                    onChange: (e) => {
                        const event = e as React.ChangeEvent<HTMLInputElement>;

                        const file = event.target.files?.[0];
                        if (file) {
                            onSelectImage(file);
                        }
                    },
                    value: '',
                }}
            />
        </CustomModal>
    );
};

export default AvatarEditorModal;
