import React, { useState, useEffect } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const BookInventory = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
      const defaultBooks = [
        { id: 1, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-help', price: 999 },
        { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', price: 699 },
        { id: 3, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', price: 1299 },
        { id: 4, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', genre: 'Finance', price: 849 },
        { id: 5, title: 'Think and Grow Rich', author: 'Napoleon Hill', genre: 'Self-help', price: 749 },
        { id: 6, title: 'Deep Work', author: 'Cal Newport', genre: 'Productivity', price: 950 },
        { id: 7, title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', genre: 'Self-help', price: 880 },
        { id: 8, title: 'Start With Why', author: 'Simon Sinek', genre: 'Business', price: 799 },
        { id: 9, title: 'The Power of Now', author: 'Eckhart Tolle', genre: 'Spirituality', price: 899 },
        { id: 10, title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', genre: 'Self-help', price: 999 },
        { id: 11, title: 'Educated', author: 'Tara Westover', genre: 'Memoir', price: 899 },
        { id: 12, title: 'The Lean Startup', author: 'Eric Ries', genre: 'Startup', price: 950 },
        { id: 13, title: 'Hooked', author: 'Nir Eyal', genre: 'Product Design', price: 820 },
        { id: 14, title: 'Outliers', author: 'Malcolm Gladwell', genre: 'Psychology', price: 880 },
        { id: 15, title: 'Can’t Hurt Me', author: 'David Goggins', genre: 'Motivation', price: 1050 },
        { id: 16, title: 'The Psychology of Money', author: 'Morgan Housel', genre: 'Finance', price: 890 },
        { id: 17, title: 'Zero to One', author: 'Peter Thiel', genre: 'Startup', price: 780 },
        { id: 18, title: 'Crushing It!', author: 'Gary Vaynerchuk', genre: 'Marketing', price: 920 },
        { id: 19, title: 'Tools of Titans', author: 'Tim Ferriss', genre: 'Business', price: 1300 },
        { id: 20, title: 'Digital Minimalism', author: 'Cal Newport', genre: 'Technology', price: 870 },
      ];
      setBooks(defaultBooks);
      localStorage.setItem('books', JSON.stringify(defaultBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    const newBook = {
      id: Date.now(),
      ...book,
    };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <div>
      <AddBook addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default BookInventory;
