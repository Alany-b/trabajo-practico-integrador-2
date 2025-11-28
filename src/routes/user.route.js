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

export const routerUser = Router();

// ruta para traer todos los usuarios
routerUser.get("/users", authMiddleware, adminMiddleware, getAllUser);

// ruta para crear un usuario
routerUser.post("/users", authMiddleware, adminMiddleware, createUser);

// ruta para traer un solo usuario
routerUser.get("/users/:id", authMiddleware, adminMiddleware, getUserById);

// ruta para actualizar un usuario
routerUser.put("/users/:id", authMiddleware, adminMiddleware, updateUser);

// ruta para eliminar un usuario
routerUser.delete("/users/:id", deleteUser);
