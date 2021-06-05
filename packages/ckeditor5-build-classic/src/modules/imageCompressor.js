import imageCompression from 'browser-image-compression';

export default class ImageHelper {
    async resizeBase64Image(base64Image) {
        const options = {
            maxSizeMB: 0.15, // (default: Number.POSITIVE_INFINITY)
            maxWidthOrHeight: 1392, // compress file ratio (default: undefined)
            useWebWorker: true, // optional, use multi-thread web worker, fallback to run in main-thread (default: true)
            maxIteration: 10 // optional, max number of iteration to compress the image (default: 10)
        };

        const fileImage = await imageCompression.getFilefromDataUrl(base64Image, this.makeid());

        const compressImage = await imageCompression(fileImage, options);
        const base64 = await imageCompression.getDataUrlFromFile(compressImage);

        return base64;
    }

    makeid(length = 5) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
