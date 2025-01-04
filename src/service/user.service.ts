import { toUserResponse } from "./../model/user.model";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response.error";
import {
  CreateUserRequest,
  GetAllRequest,
  UpdateUserRequest,
  UserResponse,
} from "../model/user.model";
import { UserValidation } from "../validation/user.validation";
import { Validation } from "../validation/validation";
import { Pageable } from "../model/page";

export class UserService {
  static async createUser(request: CreateUserRequest): Promise<UserResponse> {
    const createUserRequest = Validation.validate(
      UserValidation.CREATE_USER,
      request
    );

    const totalUserWithSameEmail = await prismaClient.user.count({
      where: {
        email: createUserRequest.email,
      },
    });

    if (totalUserWithSameEmail > 0) {
      throw new ResponseError(409, "email already exists");
    }

    const user = await prismaClient.user.create({
      data: {
        name: createUserRequest.name,
        email: createUserRequest.email,
        phone: createUserRequest.phone,
        active_status: createUserRequest.active_status,
        department: createUserRequest.department,
      },
    });

    return toUserResponse(user);
  }

  static async updateUser(request: UpdateUserRequest): Promise<UserResponse> {
    const updateUserRequest = Validation.validate(
      UserValidation.UPDATE_USER,
      request
    );

    let user = await prismaClient.user.findFirst({
      where: {
        id: updateUserRequest.id,
      },
    });

    if (!user) {
      throw new ResponseError(404, "User is not found");
    }

    if (updateUserRequest.email === user.email) {
      throw new ResponseError(409, "email is already exists");
    }

    const updatedData: Partial<any> = {};

    if (updateUserRequest.name) {
      updatedData.name = updateUserRequest.name;
    }

    if (updateUserRequest.email) {
      updatedData.email = updateUserRequest.email;
    }

    if (updateUserRequest.phone) {
      updatedData.phone = updateUserRequest.phone;
    }

    if (updateUserRequest.active_status !== undefined) {
      updatedData.active_status = updateUserRequest.active_status;
    }

    if (updateUserRequest.department) {
      updatedData.department = updateUserRequest.department;
    }

    const updatedUser = await prismaClient.user.update({
      where: {
        id: updateUserRequest.id,
      },
      data: updatedData,
    });

    return toUserResponse(updatedUser);
  }

  static async getAllUsers(
    request: GetAllRequest
  ): Promise<Pageable<UserResponse>> {
    const getAllRequest = Validation.validate(
      UserValidation.GET_ALL_USER_REQUEST,
      request
    );
    const skip = (getAllRequest.page - 1) * getAllRequest.size;
    const users = await prismaClient.user.findMany({
      take: getAllRequest.size,
      skip: skip,
    });

    const total = await prismaClient.user.count();
    console.log(total);

    return {
      data: users.map((user) => toUserResponse(user)),
      paging: {
        current_page: getAllRequest.page,
        total_page: Math.ceil(total / getAllRequest.size),
        size: getAllRequest.size,
      },
    };
  }

  static async deleteUser(id: number): Promise<UserResponse> {
    const user = await prismaClient.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new ResponseError(404, "User is not found");
    }

    const deletedUser = await prismaClient.user.delete({
      where: {
        id: id,
      },
    });

    if (!deletedUser) {
      throw new ResponseError(500, "Failed to delete user");
    }

    return toUserResponse(deletedUser);
  }
}
