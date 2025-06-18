import useBookInventory from '../components/BookInventory';
import { toast } from 'react-toastify';
import './BookList.css';

const BookList = () => {
  const { books, deleteBook } = useBookInventory();

  const handleDelete = (id) => {
    deleteBook(id);
    toast.success('Book deleted!');
  };

  return (
    <div className="book-list-container">
      <h2>📚 All Books</h2>
      {books.length === 0 ? (
        <p className="no-books">No books available.</p>
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: PKR {book.price}</p>
              <button onClick={() => handleDelete(book.id)} className="delete-btn">
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
