import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());




// eslint-disable-next-line no-undef
app.listen(process.env.PORT, ()=>{return console.log("Backend Online!!!");});