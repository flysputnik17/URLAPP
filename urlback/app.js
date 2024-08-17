import express from "express";
import mongoose from "mongoose";
import router from "./router/index.js";
import cors from "cors";
import { requestLogger, errorLogger } from "./middlewares/logger.js";
import { DB_CONNECTION_STRING, PORT } from "./utils/config.js";

const app = express();

mongoose
  .connect(DB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to DB URLSEARCHER_DB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err.message);
    process.exit(1);
  });
app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use("/", router);
app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
