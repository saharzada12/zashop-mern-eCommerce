import express from "express";
// controllers for this route
import {
  getAllUsers,
  deleteUser,
  getUser,
  addItem,
  deleteCart,
  updateUser,
} from "../controllers/Users.js";

import {
  verifyTokenAuth,
  verifyToken,
  verifyTokenAdmin,
} from "../routes/VerifyToken.js";
const router = express.Router();

// http://localhost:6001/api/v1 =>

// Get - for user finding
router.get("/users", verifyToken, getAllUsers);
// GET - FOR FINDING ONE USER
router.get("/users/:id", verifyToken, getUser);

// PUT - for user updates
router.put("/users/update/:id", verifyTokenAdmin, updateUser);

// PUT - FOR CART UPDATES
router.post("/new/:userId", addItem);

// DELETE - for user deletion
router.delete("/:id", verifyTokenAdmin, deleteUser);
router.delete("/delete/:userId", verifyToken, deleteCart);

export default router;
