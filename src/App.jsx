import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function LandingPage({ onEnter }) {
  return (
    <div className="landing" onClick={onEnter}>
      <img src="/images/room.webp" alt="Bienvenue" className="landing-img" />
      <h1>Cliquez sur le chat pour entrer</h1>
    </div>
  );
}

function Home() {
  return <h2>Accueil du Bar à Chats</h2>;
}

function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  if (!entered) {
    return <LandingPage onEnter={handleEnter} />;
  }

  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | 
        <Link to="/concept">Concept</Link> |     
        <Link to="/cats">Chats</Link> | 
        <Link to="/contact">Contact</Link> | 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<h2>Le concept</h2>} />        
        <Route path="/cats" element={<h2>Liste des chats ici</h2>} />
        <Route path="/contact" element={<h2>Contact</h2>} />        
      </Routes>
    </Router>
  );
}

export default App;
