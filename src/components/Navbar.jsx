import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/concept">Concept</Link>
      <Link to="/cats">Chats</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}