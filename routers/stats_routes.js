import express from "express";
import { handleStats } from "../controllers/stats_controller.js";

export const router = express.Router();

router.get("/", handleStats);
