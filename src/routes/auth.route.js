import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/auth.controller.js";
import {
  profileUpdateValidations,
  registerCreateValidations,
} from "../middlewares/validations/auth.validations.js";
import { applyValidation } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { matchedDataMiddleware } from "../middlewares/matchedDataMiddleware.js";

const routerAuth = Router();

routerAuth.post(
  "/auth/register",
  registerCreateValidations,
  applyValidation,
  matchedDataMiddleware,
  register
);
routerAuth.post("/auth/login", login);

routerAuth.get("/auth/profile", authMiddleware, getProfile);

routerAuth.put(
  "/auth/profile",
  authMiddleware,
  profileUpdateValidations,
  applyValidation,
  matchedDataMiddleware,
  updateProfile
);

routerAuth.post("/auth/logout", logout);

export default routerAuth;
