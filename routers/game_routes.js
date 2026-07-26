import express from "express";
import { handleGetGames } from "../controllers/game_controller.js";

export const router = express.Router();

router.get("/", handleGetGames);
