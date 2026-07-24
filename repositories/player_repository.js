import { getDb } from "../db.js";

export async function getPlayer(name) {
  const playerScores = await getDb()
    .collection("scores")
    .find(name)
    .sort({ points: -1 })
    .toArray();

  const allScores = playerScores.sort((a, b) => b.createdAt - a.createdAt);

  const bestPerGame = Object.values(
    playerScores.reduce((acc, current) => {
      if (!acc[current.game] || current.points > acc[current.game].best) {
        acc[current.game] = { game: current.game, best: current.points };
      }
      return acc;
    }, {}),
  );

  return { allScores, bestPerGame };
}
