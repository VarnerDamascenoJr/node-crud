import { db } from '../config/dataBase.js'

export const backEndTestAlive = (req, res) => {
  res.json('Backend is alive')
}

export const getAllBooks = (req, res) => {
  const q = 'SELECT * FROM books'

  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

export const addBook = (req, res) => {
  // const q = 'INSERTO INTO books VALUES=(?)'
}
