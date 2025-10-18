import postgres from "postgres";
import process from "node:process";
import * as schema from "./schema.ts";
import { env } from "$env/dynamic/private";
import { drizzle } from "drizzle-orm/postgres-js";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const client = postgres(env.DATABASE_URL);
export const db = drizzle(client, { schema });
