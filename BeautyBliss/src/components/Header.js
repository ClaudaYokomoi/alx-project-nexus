import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { FaShoppingCart, FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-plum-shadow shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-ffb82e font-bold text-2xl">
          Beauty Bliss
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>

        {/* Centered Navigation */}
        <nav
          className={`flex-1 md:flex justify-center items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white">
            <li>
              <Link to="/" className="hover:text-ffb82e transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/our-story" className="hover:text-ffb82e transition duration-300">
                Our Story
              </Link>
            </li>
            <li className="relative group">
              <Link to="/shop" className="hover:text-ffb82e transition duration-300">
                Shop
              </Link>
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg hidden group-hover:block text-gray-800 w-32 text-center rounded-lg transition-opacity duration-300">
                <li>
                  <Link to="/shop/face" className="block px-4 py-2 hover:bg-gray-200">
                    Face
                  </Link>
                </li>
                <li>
                  <Link to="/shop/eyes" className="block px-4 py-2 hover:bg-gray-200">
                    Eyes
                  </Link>
                </li>
                <li>
                  <Link to="/shop/lips" className="block px-4 py-2 hover:bg-gray-200">
                    Lips
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ffb82e transition duration-300">
                Get in Touch
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right-Aligned Login & Cart */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-ffb82e hidden md:inline">{user.email}</span>
              <button
                onClick={() => logout(navigate)}
                className="hover:text-ffb82e transition duration-300"
              >
                <FaSignOutAlt className="h-6 w-6" />
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-ffb82e transition duration-300">
              <FaUser className="h-6 w-6" />
            </Link>
          )}

          {/* Shopping Cart */}
          <div className="relative">
            <Link to="/cart" className="hover:text-ffb82e transition duration-300">
              <FaShoppingCart className="h-6 w-6" />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FE71BA] text-white text-xs px-2 py-1 rounded-full animate-bounce">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;