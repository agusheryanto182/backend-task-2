import { prismaClient } from "../src/application/database";

export class UserTest {
  static async delete() {
    await prismaClient.user.deleteMany();
  }

  static async create() {
    await prismaClient.user.create({
      data: {
        name: "test",
        email: "test@gmail.com",
        phone: "088981211223",
        active_status: true,
        department: "Technology",
      },
    });
  }

  static async get(email: string) {
    return await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  static async createMany() {
    await prismaClient.user.createMany({
      data: [
        {
          name: "test1",
          email: "test1@gmail.com",
          phone: "088282822991",
          active_status: true,
          department: "Technology",
        },
        {
          name: "test2",
          email: "test2@gmail.com",
          phone: "088282822991",
          active_status: true,
          department: "Technology",
        },
        {
          name: "test3",
          email: "test3@gmail.com",
          phone: "088282822991",
          active_status: true,
          department: "Technology",
        },
      ],
    });
  }
}
