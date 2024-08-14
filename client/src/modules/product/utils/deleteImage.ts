import { v2 as cloudinary } from 'cloudinary';


export async function deleteImage(publicId: string) {
    return cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
            return error;
        } else {
            return result;
        }
    })
}