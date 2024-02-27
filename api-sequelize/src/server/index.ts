import 'dotenv/config';
import express from 'express';


//Put the route file here
import { bookRoute } from '../routes/booksRoute';
const app = express()


app.use(express.json())

app.use('/', bookRoute)// route here

export {
  app
}



