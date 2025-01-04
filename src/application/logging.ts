import winston from "winston";
import dotenv from "dotenv";

dotenv.config();

const loggerLevel = process.env.LOGGER_LEVEL?.trim() || "info";

export const logger = winston.createLogger({
  level: loggerLevel,
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      level: loggerLevel,
    }),
  ],
});
