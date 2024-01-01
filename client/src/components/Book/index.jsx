import React from 'react'

const Book = ({book}) => {
  return (
    <div>
        <img src={book.cover} width={200}height={300} alt="" />
        <h2>{book.title}</h2>
        <p>{book.desc}</p>
        <p>{book.price}</p>
    </div>
  )
}

export default Book