const multer = require("multer");

const allowedImageMimetypes = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/svg",
  "image/bmp"
];

function getFileOriginalExtension(original, custom) {
  return custom + "." + original.split(".").pop();
}

module.exports = function(destination, fileName) {
  const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, destination);
    },
    filename: function(req, file, callback) {
      callback(
        null,
        fileName
          ? getFileOriginalExtension(file.originalname, fileName)
          : file.originalname
      );
    }
  });

  return multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
      callback(null, allowedImageMimetypes.indexOf(file.mimetype) >= 0);
    }
  });
};
