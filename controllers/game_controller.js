import { success } from "zod/mini";
import { getGames } from "../repositories/game_repository.js";

export async function handleGetGames(req, res) {
  const games = await getGames();
  res.json({ success: true, games });
}
