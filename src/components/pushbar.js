import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

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
        Open Pushbar
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
        <h2 className="text-lg font-semibold">Pushbar Content</h2>
        <p className="text-gray-500">This is a simple pushbar from scratch!</p>
      </motion.div>
    </div>
  );
};

export default Pushbar;
