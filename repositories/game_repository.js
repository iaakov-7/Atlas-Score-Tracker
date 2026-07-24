import { getDb } from "../db.js";

export async function getGames() {
  const games = await getDb().collection("scores").distinct("game");
  return games;
}
