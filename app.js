import express from "express";
import dotenv from "dotenv";
import path from "path";
import appRouter from "./src/app.routes.js";

const configPath = path.resolve("src", "config", "env", "test.env");
dotenv.config({ path: configPath });

const app = express();

app.use("/api/cubastion", appRouter);

export default app;
