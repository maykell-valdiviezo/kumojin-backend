import { Event } from "../api/events/event.model";

export const TEST_ORM_CONFIG = {
  type: "sqlite",
  database: ":memory:",
  entities: [Event],
  logging: false,
  synchronize: true,
  dropSchema: true,
};
