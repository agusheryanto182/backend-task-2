import express from "express";
import { userRoute } from "../route/user.route";
import { errorMiddleware } from "../middleware/error.middleware";
import morgan from "morgan";

export const web = express();
web.use(express.json());
web.use(morgan(process.env.PRODUCTION === "true" ? "combined" : "dev"));

web.use("/api/v1", userRoute);
web.use("/docs", (req, res) => {
  res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>BACKEND TEST</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background-color: black;
              color: white;
              text-align: center;
            }
            h1 {
              font-size: 2.5rem;
              color: white;
              margin-bottom: 1rem;
            }
            p {
              font-size: 1.2rem;
              margin-bottom: 1.5rem;
            }
            a {
              color: #007BFF;
              text-decoration: none;
              font-weight: bold;
            }
            a:hover {
              text-decoration: underline;
            }
            iframe {
              margin-top: 20px;
              border: none;
            }
          </style>
        </head>
        <body>
          <h1>Welcome to USER MANAGEMENT API Documentation</h1>
          <p>
            <a href="https://documenter.getpostman.com/view/32137512/2sAYJ99doP" target="_blank">Postman Documentation</a>
          </p>
        </body>
      </html>
    `);
});

web.use(errorMiddleware);
