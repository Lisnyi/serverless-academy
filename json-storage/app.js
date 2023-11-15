import express, { json } from "express";

import { storageRouter } from "./routes/api/index.js";

const app = express();

app.use(json());

app.use(storageRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export { app };
