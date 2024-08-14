import { rejects } from 'assert';
import { v2 as cloudinary } from 'cloudinary';
import { error } from 'console';
import { resolve } from 'path';
import PreviousMap from 'postcss/lib/previous-map';
import { Readable } from 'stream';
const PATH = 'inventory-ecomerce';

export async function uploadImageFromBuffer<T>(buffer: Buffer, path: string) {
    return new Promise<T>((resolve, rejects) => {
        const stream = cloudinary.uploader.upload_stream({
            folder: `${PATH}/${path}`,
            use_filename: true
        }, (error, result) => {
            if (error) {
                rejects(error);
            } else {
                resolve(result as T);
            }
        })
        const readableStream = new Readable();
        readableStream._read = () => { };
        readableStream.push(buffer);
        readableStream.push(null);
        readableStream.pipe(stream);
    })
}