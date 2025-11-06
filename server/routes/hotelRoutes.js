// import express from "express";
// import { protect } from "../middleware/authMiddleware.js";
// import { registerHotel } from "../controllers/hotelController.js";

// const hotelRouter = express.Router();

// hotelRouter.post("/", protect, registerHotel);

// export default hotelRouter;


import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../controllers/hotelController.js";
import multer from "multer";

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // folder to store images
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

const hotelRouter = express.Router();

// Use multer middleware to handle image upload
hotelRouter.post("/", protect, upload.single("image"), registerHotel);

export default hotelRouter;
