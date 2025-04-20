import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = (
    <>
      <motion.li
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.5 }}
        className="hover:text-electricBlue cursor-pointer"
      >
        <Link to="/">Home</Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.5 }}
        className="hover:text-electricBlue cursor-pointer"
      >
        <Link to="/menu"> Our Menu </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.5 }}
        className="hover:text-electricBlue cursor-pointer"
      >
        <Link to="/order/salad"> Order Food </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.5 }}
        className="hover:text-electricBlue cursor-pointer"
      >
        <Link to="/secret"> Secret </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.5 }}
        className="hover:text-electricBlue cursor-pointer"
      >
        <Link to="/dashboard/cart" className="inline-block">
          <button className="relative flex items-center px-4 py-2  text-white rounded-md hover:bg-orange-600 transition duration-300">
            <FaShoppingCart className="mr-2 text-lg" />

            <span className="absolute -top-2 -right-2 bg-red-600 text-xs font-bold text-white rounded-full px-2 py-0.5">
              +{cart.length}
            </span>
          </button>
        </Link>
      </motion.li>
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button
            onClick={handleLogOut}
            className="px-4 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300 font-medium shadow-md"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            className="hover:text-electricBlue cursor-pointer"
          >
            <Link to="/login"> Login </Link>
          </motion.li>
        </>
      )}
    </>
  );
  return (
    <nav className="bg-midnight fixed left-0 right-0 z-50 max-w-screen-xl mx-auto text-white px-6 py-4 font-poppins">
      <div className=" flex items-center justify-between">
        {/* Logo */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/" className="text-2xl font-bold">
            FoodFusion
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">{navLinks}</ul>

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
        <ul className="flex flex-col space-y-4 text-center py-4">{navLinks}</ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
