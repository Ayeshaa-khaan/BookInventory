// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">📚 BookInventory</Link>
      <div className="nav-links">
        {user && (
          <>
            <Link to="/add">Add Book</Link>
            <Link to="/list">Manage Books</Link>
            <Link to="/order">Buy Books</Link>
          </>
        )}
        {user ? (
          <button onClick={logout} className="logout-btn">Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
