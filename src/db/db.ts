import {config} from "dotenv";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import pg from "pg";
import { Client } from "pg";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const client = new Client({
    connectionString: process.env.DB_URL
})

client.connect();

export const db = drizzle(client, {schema});