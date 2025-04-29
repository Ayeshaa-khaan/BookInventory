// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const handleAdd = (book) => setBooks([...books, book]);
  const handleDelete = (id) => setBooks(books.filter((b) => b.id !== id));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook onAdd={handleAdd} />} />
        <Route path="/books" element={<BookList books={books} onDelete={handleDelete} />} />
      </Routes>
    </Router>
  );
}

export default App;
