import express from "express";
import { handleGetleaderboard } from "../controllers/leaderboard_controller.js";

export const router = express.Router();

router.get("/", handleGetleaderboard);

router.get("/:game", handleGetleaderboard);
