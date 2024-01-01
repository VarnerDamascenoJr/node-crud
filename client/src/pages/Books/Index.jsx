import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from '../../components/Book'

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    const getAllBooks =async()=>{
      const response = await axios.get("http://localhost:8080/books/")
      const data = response.data
      setBooks(data)
    }

    getAllBooks()
  })
  return (
    <div>
      {books.map((book)=><Book key={book.id} book={book}/>)}
    </div>
  )
}

export default Books