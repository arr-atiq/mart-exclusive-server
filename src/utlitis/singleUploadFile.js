// const multer = require("multer");
// const path = require("path");

// exports.uploader = (
//   subfolder_path,
//   allowed_file_type,
//   max_file_size,
//   error_msg
// ) => {
//   // file upload folder
//   const UPLOADS_FOLDER = `${__dirname}//../public/uploads/${subfolder_path}`;

//   //   define the storage
//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, UPLOADS_FOLDER);
//     },
//     // create dynamic fileName
//     filename: (req, file, cb) => {
//       const fileExt = path.extname(file.originalname);
//       const fileName =
//         file.originalname
//           .replace(fileExt, "")
//           .toLowerCase()
//           .split(" ")
//           .join("-") +
//         "-" +
//         Date.now();
//       cb(null, fileName + fileExt);
//     },
//   });

//   //   prepare the final multer upload object
//   const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: max_file_size,
//     },
//     fileFilter: (req, file, cb) => {
//       if (allowed_file_type.includes(file.mimetype)) {
//         cb(null, true);
//       } else {
//         cb(error_msg);
//       }
//     },
//   });
//   return upload;
// };
