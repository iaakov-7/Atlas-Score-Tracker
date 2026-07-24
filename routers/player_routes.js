import express from "express";
import { handleGetPlayer } from "../controllers/palyer_controller.js";

export const router = express.Router();

router.get("/:name", handleGetPlayer);
