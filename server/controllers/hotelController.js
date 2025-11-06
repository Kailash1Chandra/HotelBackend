// import Hotel from "../models/Hotel.js";
// import User from "../models/User.js";

// // API to create a new hotel
// // POST /api/hotels
// export const registerHotel = async (req, res) => {
//   try {

//     const { name, address, contact, city } = req.body;
//     const owner = req.user._id;

//     // Check if User Already Registered
//     const hotel = await Hotel.findOne({ owner });
//     if (hotel) {
//       return res.json({ success: false, message: "Hotel Already Registered" });
//     }

//     await Hotel.create({ name, address, contact, city, owner });

//     // Update User Role
//     await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

//     res.json({ success: true, message: "Hotel Registered Successfully" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };


import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// POST /api/hotels
export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;

    // Check if user already registered a hotel
    const existingHotel = await Hotel.findOne({ owner });
    if (existingHotel) {
      return res.json({ success: false, message: "Hotel Already Registered" });
    }

    // Save image filename if uploaded (from multer)
    const image = req.file ? req.file.filename : null;

    // Create new hotel
    const hotel = await Hotel.create({
      name,
      address,
      contact,
      city,
      owner,
      image
    });

    // Update user role to hotelOwner
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    // Return the saved hotel object
    res.status(201).json({
      success: true,
      message: "Hotel Registered Successfully",
      hotel // <-- now frontend can access _id and image
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
