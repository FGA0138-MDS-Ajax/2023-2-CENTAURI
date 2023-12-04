import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Error from './components/pages/Error';
import Pesquisa from './components/pages/Pesquisa';
import Usuario from './components/pages/Usuario';
import Favoritos from './components/pages/favoritos'

import { AuthProvider } from './components/contexts/AuthContext';
// import FavoritesProvider from './contexts/Favorites';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/error' element={<Error />} />
              <Route exact path='/pesquisa' element={<Pesquisa />} />
              <Route exact path='/usuario' element={<Usuario />} />
              <Route exact path='/favoritos' element={<Favoritos />} />
            </Routes>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
