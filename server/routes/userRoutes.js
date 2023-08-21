import express from "express";
import { creatUser } from "../controller/userController.js";

const router = express.Router();

router.post("/register", creatUser);

export { router as authRoute };
