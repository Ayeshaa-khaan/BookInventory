import './BookList.css';
import useBookInventory from '../components/BookInventory';

const BookList = () => {
  const { books, deleteBook } = useBookInventory();

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p className="empty-message">No books available.</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <div className="book-info">
                <strong>{book.title}</strong> by {book.author} <br />
                <span className="book-meta">Genre: {book.genre} | Price: ₹{book.price}</span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;