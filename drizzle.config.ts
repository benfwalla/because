import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";

dotenv.config({
    path: ".env.local",
});

export default {
    schema: './db/schema.ts',
    out: './db/drizzle',
    driver: 'mysql2',
    dbCredentials: {
        uri: process.env.DATABASE_URL ?? '',
    },
} satisfies Config;

