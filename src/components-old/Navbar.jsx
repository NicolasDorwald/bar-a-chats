import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/home">Accueil</Link>
      <Link to="/concept">Concept</Link>
      <Link to="/cats">Les Stars</Link>
    </nav>
  );
}

