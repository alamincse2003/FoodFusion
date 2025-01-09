import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-midnight text-white py-8 ">
      <div className="px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section - Logo and Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-poppins animate-pulse">
              <a href="/">FoodFusion</a>
            </h2>
            <p className="mt-2 text-gray-400 font-inter">
              Bringing the finest flavors together for an unforgettable dining
              experience.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-2 font-poppins">
            <h3 className="text-lg font-semibold ">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.5 }}
              >
                <a href="#" className="hover:text-electricBlue">
                  Home
                </a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.5 }}
              >
                <a href="#" className="hover:text-electricBlue">
                  Products
                </a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.5 }}
              >
                <a href="#" className="hover:text-electricBlue">
                  About
                </a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.5 }}
              >
                <a href="#" className="hover:text-electricBlue">
                  Contact
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="space-y-2 font-poppins">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center space-x-6 text-gray-400 animate-bounce">
              <a href="#" className="hover:text-electricBlue ">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-electricBlue">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-electricBlue">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-electricBlue">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 font-inter">
            &copy; 2025 FoodFusion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
