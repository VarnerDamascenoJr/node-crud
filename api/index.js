import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { backEndTestAlive, getAllBooks } from './controller/book.js'
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', backEndTestAlive)
app.get('/books', getAllBooks)

app.listen(process.env.PORT, () => console.log('Backend is working'))
