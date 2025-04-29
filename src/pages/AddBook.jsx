import './AddBook.css';
import { useState } from 'react';
import useBookInventory from '../components/BookInventory';

const AddBook = () => {
  const { addBook } = useBookInventory();
  const [form, setForm] = useState({ 
    title: '', 
    author: '', 
    genre: '', 
    price: '' 
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.genre || isNaN(form.price)) {
      setMessage('Please fill all fields correctly!');
      return;
    }
    addBook({ ...form, price: Number(form.price) });
    setForm({ title: '', author: '', genre: '', price: '' });
    setMessage('Book added successfully!');
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          placeholder="Author"
          required
        />
        <input
          type="text"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
          placeholder="Genre"
          required
        />
        <input
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Price (₹)"
          required
          min="0"
        />
        <button type="submit">Add Book</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddBook;