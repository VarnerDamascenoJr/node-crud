import { Request, Response } from 'express'
import booksModels from '../models/booksModels'

async function findAllBooks(req: Request, res: Response) {
  const books = await booksModels.findAll({
    attributes: ['title', 'desc', 'cover', 'price']
  });

  res.json(books)
}

async function findBook(req: Request, res: Response) {
  const book = await booksModels.findByPk(req.params.id, {
    attributes: ['title', 'desc', 'cover', 'price']
  })
  res.json(book);
}


export {
  findAllBooks,
  findBook
}
