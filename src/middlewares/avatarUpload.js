const { uploader } = require("../utlitis/singleUploadFile");

exports.avatarUpload = (req, res, next) => {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    10000,
    "Only .jpg, jpeg or .png format allowed"
  );
  upload.array()("productPictures");
};
