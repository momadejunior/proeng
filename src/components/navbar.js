import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "../pages/home";
import PortfolioService from "../pages/portfolio";
import Services from "../pages/services";
import Contact from "../pages/contact";
import { useTranslation } from "../context/TranslationContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NavbarContent() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, language, changeLanguage } = useTranslation();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="logo.png" alt="Logo" className="logo" />
                </Link>
            </div>

            <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className={`nav-item-container ${menuOpen ? "active" : ""}`}>
                <ul className="nav">
                    <li>
                        <Link to="/sobre" onClick={toggleMenu} className={isActive("/sobre") ? "active" : ""}>
                            {t.about}
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicos" onClick={toggleMenu} className={isActive("/servicos") ? "active" : ""}>
                            {t.services}
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" onClick={toggleMenu} className={isActive("/portfolio") ? "active" : ""}>
                            {t.portfolio}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactos" onClick={toggleMenu} className={isActive("/contactos") ? "active" : ""}>
                            {t.contact}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-widgets">
                <ul className="widgets">
                    <li onClick={() => changeLanguage("en")} style={{ cursor: "pointer" }}>EN</li>
                    <li onClick={() => changeLanguage("pt")} style={{ cursor: "pointer" }}>PT</li>
                    <li><img src="../search.svg" alt="search" style={{ width: "18px" }} /></li>
                </ul>
            </div>
        </nav>
    );
}

export default function Navbar() {
    return (
        <Router>
            <NavbarContent />
            <Routes>
                <Route path="/" element={<PortfolioService />} />
                <Route path="/sobre" element={<HomePage />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/portfolio" element={<PortfolioService />} />
                <Route path="/contactos" element={<Contact />} />
            </Routes>
        </Router>
    );
}
