import winston, { Logger, createLogger } from "winston";

export default class Log {
  private static instance: Log;
  private logger: Logger;
  private constructor() {
    this.logger = createLogger({
      level: "info",
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
      transports: [new winston.transports.Console()],
    });
  }
  public static getInstance(): Log {
    if (!Log.instance) {
      Log.instance = new Log();
    }

    return Log.instance;
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public error(message: string) {
    this.logger.error(message);
  }
}
