import './App.css';
import CarPage from './pages/CarPage';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    //todo nav bar here
    <Router>
      <Routes>
        <Route index element={<CarPage />} />
        <Route path='/home' element={<CarPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/account' element={<AccountPage />} />
      </Routes>
    </Router>
  )
}

export default App;
