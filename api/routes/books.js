import express from "express";
const bookRouter = express();

import {home, getAllBooks, deleteBook, addBook, putBook } from"../Controller/bookController.js";

bookRouter.get("/", home);
bookRouter.get("/books", getAllBooks);
bookRouter.post("/books", addBook);
bookRouter.delete("/books/:id", deleteBook);
bookRouter.put("/books/:id",putBook);
export  default bookRouter;