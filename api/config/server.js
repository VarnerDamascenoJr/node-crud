import "dotenv/config";
import express from "express";
import cors from "cors";

import bookRouter from "../routes/books.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", bookRouter);


export {
	app
};