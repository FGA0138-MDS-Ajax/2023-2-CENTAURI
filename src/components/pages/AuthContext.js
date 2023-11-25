import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setUser(userData); 
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

