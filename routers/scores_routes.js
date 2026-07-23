import express from "express";
import { handleSaveScore } from "../controllers/score_controller.js";
import { validateBody, scoreSchema } from "../middlewares/valid_schema.js";

export const router = express.Router();

router.post("/", validateBody(scoreSchema), handleSaveScore);
