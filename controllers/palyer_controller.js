import { getPlayer } from "../repositories/player_repository.js";

export async function handleGetPlayer(req, res) {
  const playerName = req.params.name;
  const result = await getPlayer({ playerName });
  if (result.allScores.length === 0) {
    const error = new Error(`Player ${playerName} is not found`);
    error.statusCode = 404;
    throw error;
  }
  res.json({ success: true, result });
}
