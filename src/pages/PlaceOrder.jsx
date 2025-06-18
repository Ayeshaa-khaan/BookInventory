import { useState } from 'react';
import { toast } from 'react-toastify';
import useBookInventory from '../components/BookInventory'; // adjust path
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { books } = useBookInventory();
  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleAddToCart = (book) => {
    const existing = cart.find((item) => item.id === book.id);
    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
    toast.success(`${book.title} added to cart`);
  };

  const handleQuantityChange = (id, qty) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateReceipt = () => {
    if (cart.length === 0) {
      toast.error('Cart is empty. Add books to generate receipt.');
      return;
    }
    setShowReceipt(true);
  };

  return (
    <div className="order-container">
      <h2>🛒 Place Order</h2>

      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: PKR {book.price}</p>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p className="no-cart">No books in cart.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.title}</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
                <span>PKR {item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        )}
        <h4>Total Amount: PKR {totalAmount}</h4>
        <button className="receipt-btn" onClick={generateReceipt}>
          Generate Receipt
        </button>
      </div>

      {showReceipt && (
        <div className="receipt-section">
          <h3>🧾 Receipt</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} × {item.quantity} = PKR {item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h4>Total: PKR {totalAmount}</h4>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
