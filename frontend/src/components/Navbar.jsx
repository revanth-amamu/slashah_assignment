import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">University Search</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className= "nav-link" to="/">Search</Link>
            </li>
            <li className="nav-item">
              <Link className= "nav-link" to="/favourites">Favourites</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;