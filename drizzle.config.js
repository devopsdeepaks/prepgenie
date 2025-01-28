import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:npg_H9GuNj5zKkrl@ep-royal-dream-a58xtmh2-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
});
