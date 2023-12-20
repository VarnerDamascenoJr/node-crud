import React from 'react'

function Book({book}) {
  return (
    <div>
        <img src={book.cover} alt="" />
        <h2>{book.title}</h2>
        <p>{book.desc}</p>
        <p>{book.price}</p>
        <button>Delete</button>
        <button>Update</button>
    </div>
  )
}

export default Book