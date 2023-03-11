import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    cart: [
      {
        productId: { type: String, required: true },
        productTitle: { type: String, required: true },
        productImg: { type: String, required: true },
        productCat: { type: Array, required: true },
        productDesc: { type: String, required: true },
        productPrice: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);

export default User;
