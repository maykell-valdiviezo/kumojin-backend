import { createServer } from "http";
import { initializeDatabase } from "./database/database";
import { Logger } from "./logger";
import app from "./app";
import controllers from "./controllers";
import { config } from "./configuration/config";

export async function main() {
  const logger = Logger.getInstance();

  await initializeDatabase();

  const server = createServer(app);

  server.listen(config.port, async () => {
    try {
      logger.info(`Api Service listen on ${config.host}:${config.port}`);
      logger.info(`Env : ${process.env.NODE_ENV}`);
    } catch (error: any) {
      logger.error(`Error : ${error.message}`);
    }
  });
}

main().catch((error) => console.log("error : ", error));
