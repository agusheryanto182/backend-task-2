import { logger } from "../src/application/logging";
import { web } from "./../src/application/web";
import supertest from "supertest";
import { UserTest } from "./test.util";

describe("POST /api/v1/users", () => {
  beforeEach(async () => {
    await UserTest.delete();
  });

  it("should return 400 when request is invalid", async () => {
    const response = await supertest(web).post("/api/v1/users").send({
      name: "",
      email: "",
      phone: "",
      active_status: false,
      department: "",
    });
    logger.debug(response.body);

    expect(response.statusCode).toBe(400);
    expect(response.body.errors).toBeDefined();
  });

  it("should created a new user", async () => {
    const response = await supertest(web).post("/api/v1/users").send({
      name: "test",
      email: "test@gmail.com",
      phone: "088981211223",
      active_status: true,
      department: "Technology",
    });
    logger.debug(response.body);

    expect(response.statusCode).toBe(201);
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.email).toBe("test@gmail.com");
    expect(response.body.data.phone).toBe("088981211223");
    expect(response.body.data.active_status).toBe(true);
    expect(response.body.data.department).toBe("Technology");
  });

  it("should return error 409 when email already exists", async () => {
    await UserTest.create();
    const response = await supertest(web).post("/api/v1/users").send({
      name: "test",
      email: "test@gmail.com",
      phone: "088981211223",
      active_status: true,
      department: "Technology",
    });
    logger.debug(response.body);

    expect(response.statusCode).toBe(409);
    expect(response.body.errors).toBeDefined();
  });
});

describe("PATCH /api/v1/users/:id", () => {
  beforeEach(async () => {
    await UserTest.delete();
    await UserTest.create();
  });

  it("should return 400 when request is invalid", async () => {
    const user = await UserTest.get("test@gmail.com");
    const response = await supertest(web)
      .patch(`/api/v1/users/${user?.id}`)
      .send({
        name: "",
        email: "",
        phone: "",
        active_status: false,
        department: "",
      });
    logger.debug(response.body);

    expect(response.statusCode).toBe(400);
    expect(response.body.errors).toBeDefined();
  });

  it("should updated a user", async () => {
    const user = await UserTest.get("test@gmail.com");

    const response = await supertest(web)
      .patch(`/api/v1/users/${user?.id}`)
      .send({
        name: "test update",
        email: "testupdate@gmail.com",
        phone: "088981211220",
        active_status: false,
        department: "Technology update",
      });
    logger.debug(response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body.data.name).toBe("test update");
    expect(response.body.data.email).toBe("testupdate@gmail.com");
    expect(response.body.data.phone).toBe("088981211220");
    expect(response.body.data.active_status).toBe(false);
    expect(response.body.data.department).toBe("Technology update");

    const updated = await UserTest.get("testupdate@gmail.com");
    expect(updated?.name).toBe("test update");
    expect(updated?.email).toBe("testupdate@gmail.com");
    expect(updated?.phone).toBe("088981211220");
    expect(updated?.active_status).toBe(false);
    expect(updated?.department).toBe("Technology update");
  });

  it("should return error 409 when email already exists", async () => {
    const user = await UserTest.get("test@gmail.com");
    const response = await supertest(web)
      .patch(`/api/v1/users/${user?.id}`)
      .send({
        email: "test@gmail.com",
      });
    logger.debug(response.body);

    expect(response.statusCode).toBe(409);
    expect(response.body.errors).toBeDefined();
  });
});

describe("GET /api/v1/users", () => {
  beforeEach(async () => {
    await UserTest.delete();
    await UserTest.createMany();
  });

  it("should be fetched a list of users", async () => {
    const response = await supertest(web).get(`/api/v1/users`);
    logger.debug(response.body);

    expect(response.statusCode).toBe(200);
  });
});

describe("DELETE /api/v1/users", () => {
  beforeEach(async () => {
    await UserTest.delete();
    await UserTest.create();
  });

  it("should be return 404", async () => {
    const user = await UserTest.get("test@gmail.com");
    const response = await supertest(web).delete(
      `/api/v1/users/${user?.id}` + 1
    );
    logger.debug(response.body);

    expect(response.statusCode).toBe(404);
    expect(response.body.errors).toBeDefined();
  });

  it("should be deleted a user", async () => {
    const user = await UserTest.get("test@gmail.com");
    const response = await supertest(web).delete(`/api/v1/users/${user?.id}`);
    logger.debug(response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.email).toBe("test@gmail.com");
    expect(response.body.data.phone).toBe("088981211223");
    expect(response.body.data.active_status).toBe(true);
    expect(response.body.data.department).toBe("Technology");

    const check = await UserTest.get("test@gmail.com");
    expect(check).toBeNull();
  });
});
