import { Router } from "express";
import ExampleController from "./api/events/event.controller";
import HealthController from "./api/health/health.controller";

const router = Router();

router.use("/events", ExampleController);
router.use("/health", HealthController);

export default router;
