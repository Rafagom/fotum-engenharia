import { VercelRequest, VercelResponse } from "@vercel/node";
import { Db } from "mongodb";
import url from "url";

const { MongoClient, ServerApiVersion } = require("mongodb");

let cachedDb: Db;

async function connectToDatabase(uri: string) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // const dbName = url.parse(uri).pathname?.substring(1);

  const db = client.db("Cluster0");
  cachedDb = db;
  return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {
  const username = request.body.username;
  const { email } = request.body.email;
  const { subject } = request.body.subject;
  const { cost } = request.body.cost;
  const { message } = request.body.message;
  // const { anexo } = request.file;
  const db = await connectToDatabase(`${process.env.MONGODB_URL}`);
  const collection = db.collection("clients");

  await collection.insertOne({
    email,
    subscribedAt: new Date(),
  });
  return response.status(201).json({ ok: true });
};
