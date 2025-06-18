import { createContext, useState, useEffect, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  // Login function
  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find(u => u.email === email && u.password === password);
    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('user', JSON.stringify(existingUser));
      return true;
    }
    return false;
  };

  // Signup function
  const signup = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (storedUsers.some(u => u.email === email)) return false; // Email already exists
    const newUser = { email, password };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // For future extensibility (optional)
  const getCurrentUser = () => user;

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext easily
export const useAuth = () => useContext(AuthContext);
