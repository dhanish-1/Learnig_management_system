import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

// User registration route
router.post("/register", registerUser);

// User login route
router.post("/login", loginUser);

export default router;
