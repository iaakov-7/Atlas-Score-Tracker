import { getDb } from "../db.js";

export async function getLeaderBoard(filter) {
  const result = await getDb()
    .collection("scores")
    .find(filter)
    .sort({ points: -1 })
    .limit(10)
    .toArray();
  return result;
}
