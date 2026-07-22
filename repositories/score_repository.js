import { getDb } from "../db.js";

export async function saveScore(scoreData) {
  const newScore = { ...scoreData, createdAt: new Date() };
  const result = await getDb().collection("scores").insertOne(newScore);
  return result.insertedId;
}
