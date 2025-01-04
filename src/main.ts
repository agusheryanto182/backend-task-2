import dotenv from "dotenv";
import { web } from "./application/web";
import { logger } from "./application/logging";

dotenv.config();

web.listen(process.env.PORT || 3000, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
  logger.info(`Database URL: ${process.env.DATABASE_URL}`);
  logger.info(
    `Documentation: http://localhost:${process.env.PORT || 3000}/docs`
  );
  logger.info("Logger level: " + process.env.LOGGER_LEVEL);
});
