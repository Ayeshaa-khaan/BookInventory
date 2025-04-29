import React, { useState } from 'react';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 4, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki' },
    { id: 5, title: 'Think and Grow Rich', author: 'Napoleon Hill' },
    { id: 6, title: 'Deep Work', author: 'Cal Newport' },
    { id: 7, title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey' },
    { id: 8, title: 'Start With Why', author: 'Simon Sinek' },
    { id: 9, title: 'The Power of Now', author: 'Eckhart Tolle' },
    { id: 10, title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson' },
    { id: 11, title: 'Educated', author: 'Tara Westover' },
    { id: 12, title: 'The Lean Startup', author: 'Eric Ries' },
    { id: 13, title: 'Hooked', author: 'Nir Eyal' },
    { id: 14, title: 'Outliers', author: 'Malcolm Gladwell' },
    { id: 15, title: 'Can’t Hurt Me', author: 'David Goggins' },
    { id: 16, title: 'The Psychology of Money', author: 'Morgan Housel' },
    { id: 17, title: 'Zero to One', author: 'Peter Thiel' },
    { id: 18, title: 'Crushing It!', author: 'Gary Vaynerchuk' },
    { id: 19, title: 'Tools of Titans', author: 'Tim Ferriss' },
    { id: 20, title: 'Digital Minimalism', author: 'Cal Newport' },
  ]);

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <strong>{book.title}</strong> by {book.author}
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
