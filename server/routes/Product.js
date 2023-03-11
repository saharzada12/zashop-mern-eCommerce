import express from "express";
// controllers for this route
import { verifyTokenAdmin, verifyToken } from "../routes/VerifyToken.js";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} from "../controllers/Product.js";

const router = express.Router();
// http://localhost:6001/api/products=>

// GET
router.get("/", getAllProducts);
router.get("/find/:id", getSingleProduct);
// CREATE
router.post("/new", verifyTokenAdmin, createProduct);
// PUT
router.put("/:id", verifyTokenAdmin, updateProduct);
// DELETE
router.delete("/:id", verifyTokenAdmin, deleteProduct);

export default router;
