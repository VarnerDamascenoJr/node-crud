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

async function createBook(req: Request, res: Response) {
  const { title, desc, cover, price, createdAt, updatedAt } = req.body;
  const book = { title, desc, cover, price, createdAt, updatedAt }

  await booksModels.create(book);

  res.json(book)
}

async function deleteBook(req: Request, res: Response) {
  const bookId = req.params.id;


  await booksModels.destroy({
    where: {
      id: bookId
    }
  })

  res.json('Book deleted')
}

async function updateBook(req: Request, res: Response) {
  const bookId = req.params.id;


  const { title, desc, cover, price } = req.body;



  const book = {
    title: title,
    desc: desc,
    cover: cover,
    price: price,
  }

  await booksModels.update(book, {
    where: {
      id: bookId,
    }
  })
}

export {
  findAllBooks,
  findBook,
  createBook,
  deleteBook,
  updateBook,
}
