import React ,{ useEffect, useState }from 'react'
import axios from 'axios'
import Book from '../components/Book';

function Books() {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const listAllBooks = async()=>{
            const res = await axios.get("http://localhost:8080/books");
            const data = await res.data;
            setBooks(data);
        }

        listAllBooks()
    },[books])

    
  return (
    <div>
        <h1>This is all books</h1>
        {
            books.map(book=><Book key={book.id}  book={book}/>)
        }
        <button>Add a New Book</button>
    </div>
  )
}

export default Books