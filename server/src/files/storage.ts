import { diskStorage } from "multer";

type FileType = {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string
}

const generateId = () => 
    Array(18)
    .fill(null)
    .map(
        () => Math.round(Math.random() * 16).toString(16)
    )
    .join('')

const normalizeFileName = (req, file: FileType, callback)=>{
    console.log(file)
    const fileExtName = file.originalname.split('.').pop();

    callback(null, `${generateId()}.${fileExtName}`);
}

export const fileStorage = diskStorage({
    destination: './uploads',
    filename: normalizeFileName,
});