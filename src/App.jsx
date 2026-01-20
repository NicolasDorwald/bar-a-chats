import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CatsList from "./pages/CatsList";
import Concept from "./pages/Concept";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"
import "./App.css";

function LandingPage({ onEnter }) {
    return (
        <div className="landing" onClick={onEnter}>
            <h2>Cliquez pour entrer</h2>
            <img src="/images/room.webp" alt="Bienvenue" className="landing-img" />
        </div>
    );
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
            <Navbar />
            <Routes>
                <Route path="/" element={<Policy />} />
                <Route path="/concept" element={<Concept />} />        
                <Route path="/cats" element={<CatsList />} />
                <Route path="/contact" element={<Contact />} />        
            </Routes>
        </Router>
    );
}

export default App;
