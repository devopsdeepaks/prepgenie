import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_rGQaHzoi65Kb@ep-hidden-smoke-a80s9ed7-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
});
