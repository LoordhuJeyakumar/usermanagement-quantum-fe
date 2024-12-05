import { PropTypes } from "prop-types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
  { to: "/dashboard", label: "Dashboard" },
];

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: "-20%", height: 0 },
  visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.5 } },
  exit: { opacity: 0, y: "-10%", height: 0, transition: { duration: 0.4 } },
};

const RenderNavLink = ({ to, label }) => (
  <motion.div
    variants={linkVariants}
    className="hover:scale-105 transition-transform duration-200"
  >
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-md ${
          isActive
            ? "bg-accent text-black font-semibold"
            : "hover:text-accent transition-colors duration-200"
        }`
      }
    >
      {label}
    </NavLink>
  </motion.div>
);

RenderNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary p-4 mx-auto md:w-2/3 w-11/12 shadow-md rounded-md mt-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lime-100 text-2xl font-bold">Quantam</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 text-lime-50">
          <ul className="md:flex space-x-4 text-lime-50">
            {navLinks.map((link, index) => {
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileTap={{ scale: 0.9 }}
                  whileFocus={{ scale: 1.1 }}
                >
                  <RenderNavLink
                    key={link.to}
                    to={link.to}
                    label={link.label}
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            className="text-lime-50"
          >
            {isOpen ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                animate={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </motion.svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="md:hidden mt-4 space-y-2 text-lime-50"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={{ scale: 0.9 }}
                whileFocus={{ scale: 1.1 }}
              >
                <RenderNavLink key={link.to} to={link.to} label={link.label} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarHome;
