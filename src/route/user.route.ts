import express from "express";
import { UserController } from "../controller/user.controller";

export const userRoute = express.Router();
userRoute.post("/users", UserController.createUser);
userRoute.patch("/users/:id", UserController.updateUser);
userRoute.get("/users", UserController.getAllUsers);
userRoute.delete("/users/:id", UserController.deleteUser);
