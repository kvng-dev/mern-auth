import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../controller/authController.js";
import userAuth from "../middleware/userAuth.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.post("/logout", logout);
route.get("/is-auth", userAuth, isAuthenticated);
route.post("/send-verify-otp", userAuth, sendVerifyOtp);
route.post("/verify-account", userAuth, verifyEmail);
route.post("/send-reset-otp", sendResetOtp);
route.post("/reset-password", resetPassword);

export default route;
