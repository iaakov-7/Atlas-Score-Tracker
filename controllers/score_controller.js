import { saveScore } from "../repositories/score_repository.js";

export async function handleSaveScore(req, res) {
  const scoreData = req.body;
  const newId = await saveScore(scoreData);
  res
    .status(201)
    .json({ success: true, message: `Save new score with id ${newId}` });
}
