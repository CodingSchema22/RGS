import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  const mobileMenu = {
    hidden: { x: "100%" },
    show: {
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    },
    exit: { x: "100%" }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">

      <motion.img
  src="/images/RGS logo.png"
  alt="RGS Logo"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
  className="h-20 sm:h-15 w-auto"
/>

        {/* Desktop Links */}
        <motion.div
          className="hidden md:flex space-x-6 text-gray-700 font-medium"
          variants={menuVariants}
          initial="hidden"
          animate="show"
        >
          <Link className="hover:text-red-600 transition" to="/">Home</Link>
          <Link className="hover:text-red-600 transition" to="/classes">Classes</Link>
          <Link className="hover:text-red-600 transition" to="/about">About</Link>
          <Link className="hover:text-red-600 transition" to="/admission">Admission</Link>
          <Link className="hover:text-red-600 transition" to="/contact">Contact</Link>
        </motion.div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-2xl
                       flex flex-col items-start p-8 space-y-6 md:hidden"
          >
            <button
              className="self-end text-2xl mb-6"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/classes">Classes</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/admissions">Admissions</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}