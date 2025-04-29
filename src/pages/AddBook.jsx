import React, { useState } from 'react';
import './AddBook.css';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      setMessage('Please fill in all fields.');
      return;
    }

    addBook({ title, author });
    setMessage('Book added successfully!');
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddBook;
