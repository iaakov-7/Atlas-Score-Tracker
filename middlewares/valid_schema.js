import z from "zod";

export const scoreSchema = z.object({
  playerName: z.string().min(2),
  game: z.enum(["tetris", "snake", "space-invaders"]),
  points: z.number().int().positive(),
  level: z.number().int().positive().optional(),
  duration: z.number().int().positive().optional(),
});

export function validateBody(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const fieldsError = JSON.parse(result.error)
        .map((e) => e.path + "= " + e.message)
        .join(",    ");
      const error = new Error(fieldsError);
      error.statusCode = 400;
      throw error;
    }
    req.body = result.data;
    next();
  };
}
