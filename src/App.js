import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/list" element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;
