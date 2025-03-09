import multer from 'multer';

// Define storage settings
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        // Set the destination folder for file upload
        cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
        // Corrected to use the `file` parameter
        cb(null, file.originalname); // Use `file.originalname` to get the original name of the file
    },
});

// Create the multer upload instance with the storage settings
export const upload = multer({
    storage,
});
