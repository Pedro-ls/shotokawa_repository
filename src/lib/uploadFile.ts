import multer, { diskStorage } from "multer";
import path from "path";

export const uploadFile = (dest: string) => multer({
    storage: diskStorage({
    destination: `./uploads/${dest}/`,
    filename(req, file, callback) {

      const fileName = file.originalname.split(".");
      const fileExtName = fileName[fileName.length - 1];
      const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join(Date.now().toString());
      callback(null, `${randomName}.${fileExtName}`);
    },
  }),

  fileFilter: (req, file, callback) => {

    let ext = path.extname(file.originalname).toLocaleLowerCase();
    if (!(['.png', ".jpg", ".jpeg", ".gif"]).find((value) => value === ext)) {
        console.log("Arquivo não aceito, tipo não permitido")
      callback(null, false);
    }

    return callback(null, true);
  }

})