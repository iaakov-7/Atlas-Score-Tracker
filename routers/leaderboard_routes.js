import express from "express";
import { getLeaderBoardcont } from "../controllers/leaderboard_controller.js";

export const router = express.Router();

router.get("/", getLeaderBoardcont);

router.get("/:game", getLeaderBoardcont);
