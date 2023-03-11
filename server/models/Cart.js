import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    Products: [
      {
        productId: {
          type: String,
        },
        productTitle: {
          type: String,
          required: true,
        },
        productImg: {
          type: String,
        },
        productCat: { type: Array },
        productDesc: {
          type: String,
        },
        productPrice: {
          type: Number,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        total: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
