import 'dotenv/config'
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.json('Backend is alive!!')
})

app.listen(process.env.PORT, () => console.log('Backend is working'))
