import express from "express";
import { createUser, loginUser } from "../controllers/Users.js";

const router = express.Router();

// Register
router.post("/register", createUser);
// LOGIN
router.post("/login", loginUser);

export default router;
