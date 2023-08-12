import "reflect-metadata";
import express from "express";
import { Logger } from "./logger";
import controllers from "./controllers";
const cors = require("cors");
const app = express();

app.use(express.json());

const logIncomingHttp = (request: express.Request, _response: express.Response, next: Function) => {
  const logger = Logger.getInstance();

  logger.info(`${request.method} ${request.baseUrl} ${request.path} `);

  next();
};

app.use(cors());
app.use(logIncomingHttp);
app.use("/", controllers);
export default app;
