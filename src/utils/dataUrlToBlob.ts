export const dataUrlToBlob = (dataUrl: string): Blob => {
    const byteString = atob(dataUrl.split(',')[1]);
    const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
};

export const dataUrlToFile = (dataUrl: string, fileName: string): File => {
    const blob = dataUrlToBlob(dataUrl);
    return new File([blob], fileName, { type: blob.type });
};
