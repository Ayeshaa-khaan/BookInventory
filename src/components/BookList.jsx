// src/components/BookList.jsx
import React from 'react';
import './BookList.css';

const BookList = ({ books, deleteBook }) => {
  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <div>
                <strong>{book.title}</strong> by {book.author} <br />
                <em>Genre:</em> {book.genre} | <em>Price:</em> Rs. {book.price}
              </div>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
