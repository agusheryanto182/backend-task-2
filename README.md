# Getting Started

## How to Use

Clone the project

```bash
  git clone https://github.com/agusheryanto182/user-management.git
```

Copy `.env.example` file to `.env` file

```bash
  cp .env.example .env
```

Setting Environmental Variable on `.env` file

```bash
DATABASE_URL="mysql://root:@localhost:3306/backend-test-2"
LOGGER_LEVEL= debug
PORT=3000
```

Run Testing

```bash
npm run test
```

Build and run

```bash
make up
```

Run the endpoints as in the postman documentation

API Documentation: <br>
<a href="https://documenter.getpostman.com/view/32137512/2sAYJ99doP">
<img src="https://img.shields.io/badge/backend-test-purple?logo=postman&logoColor=white" alt="Postman Badge">
</a>

# About Project

<p align="justify">
  The project is a simple API that allows you to create, update, get all, and delete users.
</p>

### Features available in this project:

| Feature | Method |
| ------- | ------ |
| Create  | POST   |
| Update  | PATCH  |
| Get All | GET    |
| Delete  | DELETE |

## 🛠️ Tech Stack

| Feature/Functionality | Package                                              |
| --------------------- | ---------------------------------------------------- |
| Server-Side Framework | [Express](https://expressjs.com/)                    |
| JavaScript Runtime    | [Node.js](https://nodejs.org/)                       |
| Package Management    | [npm](https://www.npmjs.com/)                        |
| Environment Variables | [dotenv](https://www.npmjs.com/package/dotenv)       |
| TypeScript            | [TypeScript](https://www.typescriptlang.org/)        |
| Database ORM          | [Prisma](https://www.prisma.io/)                     |
| Database              | [MySQL](https://www.mysql.com/)                      |
| Logger                | [Winston](https://www.npmjs.com/package/winston)     |
| HTTP Request Logger   | [Morgan](https://www.npmjs.com/package/morgan)       |
| Data Validation       | [Zod](https://www.npmjs.com/package/zod)             |
| Testing Framework     | [Jest](https://jestjs.io/)                           |
| HTTP Testing          | [Supertest](https://www.npmjs.com/package/supertest) |

## Contributor

**Agus Heryanto**
<br>
[![Agus Heryanto - LinkedIn](https://img.shields.io/badge/Agus_Heryanto-blue?logo=linkedin)](https://www.linkedin.com/in/agus-heryanto-b34561284/)
[![Agus Heryanto - GitHub](https://img.shields.io/badge/Agus_Heryanto-black?logo=github)](https://github.com/agusheryanto182)
