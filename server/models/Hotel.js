// import mongoose from "mongoose";
// const { Schema } = mongoose;

// const hotelSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     contact: { type: String, required: true },
//     owner: { type: String, ref: "User", required: true },
//     city: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const Hotel = mongoose.model("Hotel", hotelSchema);

// export default Hotel

import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  city: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: String, // <-- store uploaded image filename
});

export default mongoose.model("Hotel", hotelSchema);
