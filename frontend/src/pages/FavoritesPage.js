import React, { useState, useEffect } from 'react';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await fetch('http://localhost:8080/universities/favorites');
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites: ', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Favorite Universities</h1>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>State/Province</th>
            <th>Web Pages</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite, index) => (
            <tr key={index}>
              <td>{favorite.name}</td>
              <td>{favorite.state_province}</td>
              <td>
                <ul className="list-unstyled">
                  {favorite.web_pages.map((webPage, index) => (
                    <li key={index}><a href={webPage} target="_blank">{webPage}</a></li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritesPage;
