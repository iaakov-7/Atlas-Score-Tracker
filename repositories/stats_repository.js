import { getDb } from "../db.js";

export async function getStats() {
  const bestScore = await getDb()
    .collection("scores")
    .find()
    .sort({ points: -1 })
    .limit(1)
    .toArray();

  const scores = await getDb().collection("scores").find().toArray();

  const numScores = scores.length;

  const gameCount = scores.reduce((acc, current) => {
    if (!acc[current.game]) {
      acc[current.game] = 1;
    } else acc[current.game] += 1;
    return acc;
  }, {});
  const popularGame = Object.keys(gameCount).reduce((a, b) =>
    gameCount[a] > gameCount[b] ? a : b,
  );
  const averageScore =
    scores.reduce((acc, current) => {
      acc += current.points;
      return acc;
    }, 0) / numScores;
  return {
    bestScore: {
      game: bestScore[0].game,
      playerName: bestScore[0].playerName,
      points: bestScore[0].points,
    },
    numScores,
    popularGame,
    averageScore,
  };
}
