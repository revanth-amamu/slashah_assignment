import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import FavouritesPage from './pages/FavouritesPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
