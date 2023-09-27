import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/files");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage: storage });
router.post('/', upload.single("file"), (req, res) => {
    try {
        console.log(req.body,'file body')
        console.log(req.file,'file uploaded file')
        return res.status(200).json("File uploaded Successfully")
    } catch (error) {
        console.log(error)
    }
});


export default router;