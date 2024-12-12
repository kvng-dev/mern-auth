import express from "express";
import { getUserData } from "../controller/userController.js";
import userAuth from "../middleware/userAuth.js";
const route = express.Router();

route.get("/data", userAuth, getUserData);

export default route;
