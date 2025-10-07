import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "mysql",
    schema: "./src/schema.ts",
    out: "./migrations",
    strict: true,
    verbose: true
});