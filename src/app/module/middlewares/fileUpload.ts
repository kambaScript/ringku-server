import crypto from 'crypto';
import multer from 'multer';
import path from 'path';

export default function configureMulter() {
  return {
    storage: multer.diskStorage({
      destination: path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        'public/uploads',
      ),
      filename(
        request: unknown,
        file: { originalname: unknown },
        callback: (arg0: null, arg1: string) => void,
      ) {
        const hash = crypto.randomBytes(6).toString('hex');
        const filename = `${hash}-${file.originalname}`;
        callback(null, filename);
      },
    }),
  };
}
