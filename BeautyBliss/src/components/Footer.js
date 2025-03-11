import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#FFB82E] via-[#FE71BA] to-[#D94B1D] text-white py-12">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Branding & Socials */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">Beauty Bliss</h2>
            <p className="mt-2 text-sm opacity-90">
              Elevate your beauty with premium products.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-[#FE71BA] hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-[#FE71BA] hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-full hover:bg-[#FE71BA] hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-full hover:bg-[#FE71BA] hover:text-white transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link to="/" className="hover:underline hover:text-[#FFB82E] transition">
                Home
              </Link>
              <Link to="/shop" className="hover:underline hover:text-[#FFB82E] transition">
                Shop
              </Link>
              <Link to="/offers" className="hover:underline hover:text-[#FFB82E] transition">
                Offers
              </Link>
              <Link to="/about" className="hover:underline hover:text-[#FFB82E] transition">
                About
              </Link>
              <Link to="/contact" className="hover:underline hover:text-[#FFB82E] transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm opacity-80">Subscribe to get exclusive offers & beauty tips.</p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full bg-white text-[#D94B1D] py-2 rounded-md font-semibold hover:bg-[#FE71BA] hover:text-white transition"
              >
                Subscribe
              </button>
              {message && (
                <p className="mt-2 text-sm text-white">{message}</p>
              )}
            </form>
          </div>

        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm opacity-80 text-center">
          © {new Date().getFullYear()} Beauty Bliss. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;