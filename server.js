import express from "express";
import "dotenv/config";
import { router as scoresRouter } from "./routers/scores_routes.js";
import { client } from "./db.js";

const server = express();

server.use(express.json());
server.use("/scores", scoresRouter);

await client.connect();
console.log("Connected to mongoDB");

server.listen(3000, () => console.log("Server is listening on port 3000..."));
