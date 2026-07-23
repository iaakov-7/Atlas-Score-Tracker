import { getLeaderBoard } from "../repositories/lraderboard_repository.js";

export async function handleGetleaderboard(req, res) {
  const game = req.params || {};
  const leaderBoard = await getLeaderBoard(game);
  res.json({ success: true, message: leaderBoard });
}
