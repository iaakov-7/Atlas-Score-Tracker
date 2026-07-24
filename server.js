import express from "express";
import "dotenv/config";
import { router as scoresRouter } from "./routers/scores_routes.js";
import { router as leaderboardRouter } from "./routers/leaderboard_routes.js";
import { router as playerRouter } from "./routers/player_routes.js";
import { client } from "./db.js";
import { errorHandler } from "./middlewares/error_handler.js";
import { success } from "zod";

const server = express();

server.use(express.json());
server.use("/scores", scoresRouter);
server.use("/leaderboard", leaderboardRouter);
server.use("/player", playerRouter);

await client.connect();
console.log("Connected to mongoDB");
server.use((req, res) =>
  res.status(404).json({
    success: false,
    message: `Route ${req.url} is not exists for ${req.method}`,
  }),
);
server.use(errorHandler);

server.listen(3000, () => console.log("Server is listening on port 3000..."));
