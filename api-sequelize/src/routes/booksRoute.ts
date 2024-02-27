import express, { Request, Response } from 'express'
const bookRoute = express()
import { findAllBooks, findBook } from '../controllers/booksController'

bookRoute.get('/books', (req: Request, res: Response) => {
  return res.json('hello')
})

bookRoute.get('/all-books', findAllBooks)
bookRoute.get('/books/:id', findBook)

export {
  bookRoute,
}


