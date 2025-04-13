import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/home";
import PortfolioService from "../pages/portfolio";
import Services from "../pages/services";
import Contact from "../pages/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';



export default function Navbar() {

    const { t, i18n } = useTranslation();

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Router>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src="logo.png" alt="Logo" className="logo" />
                    </Link>
                </div>

                {/* Hamburger button */}
                <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation menu */}
                <div className={`nav-item-container ${menuOpen ? "active" : ""}`}>
                    <ul className="nav">
                        <li><Link to="/sobre" onClick={toggleMenu}>{t("Sobre Nós")}</Link></li>
                        <li><Link to="/servicos" onClick={toggleMenu}>{t("Nossos Serviços")}</Link></li>
                        <li><Link to="/portfolio" onClick={toggleMenu}>{t("Portfolio")}</Link></li>
                        <li><Link to="/contactos" onClick={toggleMenu}>{t("Contactos")}</Link></li>
                    </ul>
                </div>



                <div className="navbar-widgets">
                    <ul className="widgets">
                        <li onClick={() => switchLanguage('en')}>EN</li>
                        <li onClick={() => switchLanguage('pt')}>PT</li>
                        <li><img src="../search.svg" alt="search" style={{ width: "18px", }} /></li>
                    </ul>
                </div>
            </nav>

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
