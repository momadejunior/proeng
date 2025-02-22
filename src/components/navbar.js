import HomePage from "../pages/home";
import PortfolioService from "../pages/portfolio";
import Services from "../pages/services";
import Contact from "../pages/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pushbar from "./pushbar";



export default function Navbar() {
    return (
   
        <Router>
           {/* <Pushbar />*/}
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/"><img src="logo.png" alt="Logo" className="logo" /></Link>
                </div>

                <div className="nav-item-container">
                    <ul className="nav">
                        <li><Link to="/sobre">Sobre Nós</Link></li>
                        <li><Link to="/servicos">Nossos Serviços</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contactos">Contactos</Link></li>
                    </ul>
                </div>

                <div className="navbar-widgets">
                    <ul className="widgets">
                        <li><button className="language-switch">EN</button></li>
                        <li><button className="search-btn">Search</button></li>
                        
                    </ul>
                </div>
            </nav>

                <Routes>
                    <Route  path="/" element={<HomePage/>} />
                    <Route  path="/sobre" element={<HomePage/>} />
                    <Route  path="/servicos" element={<Services/>} />
                    <Route  path="/portfolio" element={<PortfolioService/>} />
                    <Route  path="/contactos" element={<Contact/>} />
                </Routes>
            </Router>
          
    );
}
