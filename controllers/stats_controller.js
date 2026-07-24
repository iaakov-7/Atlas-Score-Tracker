import { getStats } from "../repositories/stats_repository.js";

export async function handleStats(req, res) {
  const stats = await getStats();
  res.json({ sucess: true, stats });
}
