import {
    Avatar,
    Button,
    ClickAwayListener,
    Stack,
    Tooltip,
    styled,
} from '@mui/material';

import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
import useLocalTranslationResource from '@/hooks/useLocalTranslationResource';

import translations from './AvatarEditable.t.json';
import AvatarEditorModal from '../Modals/AvatarEditorModal';
import { ImagePreviewModal } from '../Modals/ImagePreviewModal';

const TooltopButton = styled(Button)(({ theme }) => ({
    fontSize: 14,
    borderRadius: '5px',
    border: 'none',
    fontWeight: 200,
    color: 'inherit',
    ['&:hover']: {
        backgroundColor: theme.palette.grey[700],
        border: 'none',
    },
}));

interface IAvatarEditableProps {
    image: string | File | null;
    onImageChange?: (image: File) => void;
    onImageRemove?: () => void;
}

export const AvatarEditable = ({
    image,
    onImageChange,
    onImageRemove,
}: IAvatarEditableProps) => {
    // handle tooltip
    const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

    const handleTooltipClose = () => {
        setIsTooltipOpen(false);
    };

    const handleTooltipOpen = () => {
        setIsTooltipOpen(true);
    };

    const { t, lt } = useLocalTranslationResource({
        resource: translations,
        name: 'CustomerModalStepOne',
    });

    // handle avatar editor modal
    const [isAvatarEditorModalOpen, setIsAvatarEditorModalOpen] =
        useState<boolean>(false);

    const onAvatarEditorModalClose = () => {
        setIsAvatarEditorModalOpen(false);
    };

    const onAvatarEditorModalOpen = () => {
        setIsAvatarEditorModalOpen(true);
    };

    const [currentImageSrc, setCurrentImageSrc] = useState<string | undefined>(
        '',
    );

    // handle image change
    useEffect(() => {
        if (image) {
            if (typeof image === 'string') {
                setCurrentImageSrc(image);
            } else {
                const reader = new FileReader();
                reader.onload = () => {
                    setCurrentImageSrc(reader.result as string);
                };
                reader.readAsDataURL(image);
            }
        } else {
            setCurrentImageSrc(undefined);
        }
    }, [image]);

    const intOnImageChange = (image: File) => {
        if (onImageChange) {
            onImageChange(image);
        } else {
            console.error(
                'onImageChange is not provided to AvatarEditable component',
            );
        }
    };

    const intOnRemoveImage = () => {
        if (onImageRemove) {
            onImageRemove();
        } else {
            console.error(
                'onImageRemove is not provided to AvatarEditable component',
            );
        }
    };

    const onEditImage = () => {
        onAvatarEditorModalOpen();
    };

    // handle avatar preview
    const [isAvatarPreviewModalOpen, setIsAvatarPreviewModalOpen] =
        useState<boolean>(false);

    const onOpenAvatarPreview = () => {
        setIsAvatarPreviewModalOpen(true);
    };

    const onCloseAvatarPreview = () => {
        setIsAvatarPreviewModalOpen(false);
    };

    return (
        <>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                    componentsProps={{
                        tooltip: {
                            sx: {
                                paddingX: '5px',
                                backgroundColor: (theme) =>
                                    theme.palette.grey[800],
                                width: '344px',
                            },
                        },
                        arrow: {
                            sx: {
                                color: (theme) => theme.palette.grey[800],
                            },
                        },
                    }}
                    sx={{
                        backgroundColor: (theme) => theme.palette.grey[800],
                    }}
                    arrow
                    title={
                        <Stack>
                            {!image ? (
                                <TooltopButton
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    startIcon={<FileUploadIcon />}
                                    onClick={onAvatarEditorModalOpen}
                                >
                                    {lt('upload-image')}
                                </TooltopButton>
                            ) : (
                                <>
                                    <TooltopButton
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        startIcon={<DeleteIcon />}
                                        onClick={intOnRemoveImage}
                                    >
                                        {lt('remove-image')}
                                    </TooltopButton>

                                    <TooltopButton
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        startIcon={<EditIcon />}
                                        onClick={onEditImage}
                                    >
                                        {lt('edit-image')}
                                    </TooltopButton>

                                    <TooltopButton
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        startIcon={<VisibilityIcon />}
                                        onClick={onOpenAvatarPreview}
                                    >
                                        {lt('view-image')}
                                    </TooltopButton>
                                </>
                            )}
                        </Stack>
                    }
                    onClose={handleTooltipClose}
                    open={isTooltipOpen}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                >
                    <Avatar
                        sx={{
                            width: '80px',
                            height: '80px',
                            cursor: 'pointer',
                        }}
                        src={currentImageSrc}
                        onClick={handleTooltipOpen}
                    ></Avatar>
                </Tooltip>
            </ClickAwayListener>

            <AvatarEditorModal
                image={image}
                open={isAvatarEditorModalOpen}
                onClose={onAvatarEditorModalClose}
                onImageChange={intOnImageChange}
            />

            <ImagePreviewModal
                open={isAvatarPreviewModalOpen}
                onClose={onCloseAvatarPreview}
                imageSrc={currentImageSrc || ''}
            />
        </>
    );
};

export default AvatarEditable;
