import { NextFunction, Request, Response } from "express";
import {
  CreateUserRequest,
  GetAllRequest,
  UpdateUserRequest,
} from "../model/user.model";
import { UserService } from "../service/user.service";

export class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.createUser(request);
      res.status(201).json({
        success: true,
        message: "user created successfully",
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = parseInt(req.params.id, 10);
      const request: UpdateUserRequest = req.body as UpdateUserRequest;
      request.id = userId;
      const response = await UserService.updateUser(request);
      res.status(200).json({
        success: true,
        message: "user updated successfully",
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const request: GetAllRequest = {
        page: req.query.page ? Number(req.query.page) : 1,
        size: req.query.size ? Number(req.query.size) : 10,
      };

      const response = await UserService.getAllUsers(request);
      res.status(200).json({
        success: true,
        message: "user fetched successfully",
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = parseInt(req.params.id, 10);
      const response = await UserService.deleteUser(userId);
      res.status(200).json({
        success: true,
        message: "user deleted successfully",
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }
}
