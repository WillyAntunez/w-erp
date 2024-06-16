import { CustomModal } from '@/components/CustomModal';
import { useEffect, useMemo, useState } from 'react';

interface IImagePreviewModalProps {
    open: boolean;
    onClose: () => void;
    imageSrc: string;
    imageName?: string;
}

export const ImagePreviewModal = ({
    open,
    onClose,
    imageSrc,
    imageName,
}: IImagePreviewModalProps) => {
    return (
        <CustomModal
            title={'Image preview' + (imageName ? ` - ${imageName}` : '')}
            open={open}
            onClose={onClose}
            maxWidth={900}
            showActionButtons={false}
        >
            <img
                src={imageSrc}
                alt={imageName ? imageName : 'Image preview'}
                style={{ width: '100%' }}
            />
        </CustomModal>
    );
};
