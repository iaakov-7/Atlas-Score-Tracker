import { MongoClient } from "mongodb";

let dbInstance = null;

export async function coonnectToDb() {
  if (dbInstance) return;

  const client = new MongoClient(process.env.MONGO_UTI);

  await client.connect();

  console.log("Connected to Mongo DB!");

  dbInstance = client.db();
}

export function getDb() {
  if (!dbInstance) {
    throw new Error("Database is not connected");
  }
  return dbInstance;
}
