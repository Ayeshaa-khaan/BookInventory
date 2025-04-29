import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">📚 Welcome to Book Inventory</h1>
        <p className="home-subtitle">Manage your library with ease!</p>
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
        </div>
      </div>
    </div>
  );
};

export default Home;