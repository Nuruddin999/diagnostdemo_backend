const util = require("util");
const multer = require("multer");
const maxSize = 2 * 3024 * 3024;

let storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;