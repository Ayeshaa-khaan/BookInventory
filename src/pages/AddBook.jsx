import { useState } from 'react';
import { toast } from 'react-toastify';
import useBookInventory from '../components/BookInventory';
 // adjust path if needed
import './AddBook.css';

const AddBook = () => {
  const { addBook } = useBookInventory();
  const [form, setForm] = useState({
    title: '',
    author: '',
    price: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.price) {
      toast.error('Please fill in all fields');
      return;
    }

    const newBook = {
      title: form.title,
      author: form.author,
      price: parseFloat(form.price),
    };

    addBook(newBook);
    toast.success('Book added successfully!');
    setForm({ title: '', author: '', price: '' });
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (PKR)"
          value={form.price}
          onChange={handleChange}
          required
        />
        <button type="submit">➕ Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
