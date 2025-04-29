// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>📚 Welcome to Book Inventory</h1>
      <p>Manage your library with ease!</p>
      <div className="home-buttons">
        <button onClick={() => navigate("/add-book")}>➕ Add New Book</button>
        <button onClick={() => navigate("/books")}>📖 View Book List</button>
      </div>
    </div>
  );
};

export default Home;
