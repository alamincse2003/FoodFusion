import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-midnight text-white px-6 py-4 font-poppins">
      <div className=" flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.5 }}
        >
          FoodFusion
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            About
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            Contact
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            Products
          </motion.li>
        </ul>

        {/* Mobile Toggle Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {!isOpen ? (
            <FaBars className="text-white text-2xl" />
          ) : (
            <FaTimes className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className={`md:hidden overflow-hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-500`}
      >
        <ul className="flex flex-col space-y-4 text-center py-4">
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            Products
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            About
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            Contact
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;