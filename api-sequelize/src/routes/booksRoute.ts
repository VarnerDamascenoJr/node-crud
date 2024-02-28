import express, { Request, Response } from 'express'
const bookRoute = express()
import { createBook, findAllBooks, findBook, deleteBook, updateBook } from '../controllers/booksController'

bookRoute.get('/books', (req: Request, res: Response) => {
  return res.json('hello')
})

bookRoute.get('/all-books', findAllBooks)
bookRoute.get('/books/:id', findBook)
bookRoute.post('/books/create', createBook)
bookRoute.delete('/books/delete/:id', deleteBook)
bookRoute.put('/books/update/:id', updateBook)


export {
  bookRoute,
}


