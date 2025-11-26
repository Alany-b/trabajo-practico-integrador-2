import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

export const userRoutes = Router();

// ruta para traer todos los usuarios
userRoutes.get("/users", authMiddleware, adminMiddleware, getAllUser);

// ruta para crear un usuario
userRoutes.post("/users", authMiddleware, adminMiddleware, createUser);

// ruta para traer un solo usuario
userRoutes.get("/users/:id", authMiddleware, adminMiddleware, getUserById);

// ruta para actualizar un usuario
userRoutes.put("/users/:id", authMiddleware, adminMiddleware, updateUser);

// ruta para eliminar un usuario
userRoutes.delete("/users/:id", deleteUser);
