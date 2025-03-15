import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Pushbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePushbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to open pushbar */}
      <button
        onClick={togglePushbar}
        className="p-3 bg-blue-500 text-white rounded-lg"
      >
        <img src="menu.png" alt="menu-open" className="menu-hamburguer"/>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={togglePushbar}
        />
      )}

      {/* Pushbar */}
      <motion.div
        initial={{ x: "-100%" }} // Start from left
        animate={{ x: isOpen ? "0%" : "-100%" }} // Slide in/out
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-5 z-50"
      >
        <button
          onClick={togglePushbar}
          className="absolute top-4 right-4 text-gray-600"
        >
          <X size={24} />
        </button>
              <div className="mobile-menu">
                    <ul className="nav-mobile">
                        <li><Link to="/sobre">Sobre Nós</Link></li>
                        <li><Link to="/servicos">Nossos Serviços</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contactos">Contactos</Link></li>
                    </ul>

                    <div className="navbar-widgets">
                    <ul className="widgets">
                        <li><button className="language-switch">EN</button></li>
                        <li><button className="search-btn">Search</button></li>
                        
                    </ul>
                </div>
                </div>
      </motion.div>
    </div>
  );
};

export default Pushbar;
