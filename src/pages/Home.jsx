import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">📚 Welcome to Book Inventory</h1>
        <p className="home-subtitle">Manage your books efficiently — Add, View, and Order with ease.</p>
        <div className="home-buttons">
          <button 
            className="home-button add-btn"
            onClick={() => navigate('/add')}
          >
            ➕ Add Book
          </button>
          <button 
            className="home-button view-btn"
            onClick={() => navigate('/list')}
          >
            📖 View Books
          </button>
          <button 
            className="home-button order-btn"
            onClick={() => navigate('/order')}
          >
            🛒 Order Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
