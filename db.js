import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGO_URI);

export const getDb = () => client.db("score-tracker");
