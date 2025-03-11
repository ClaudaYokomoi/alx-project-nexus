import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/assets/makeup-banner.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h1 className="text-4xl font-bold mb-3">Enhance Your Beauty</h1>
          <p className="text-lg">Discover the latest trends in makeup & beauty.</p>
          <Link to="/shop" className="mt-4 inline-block bg-[#FE71BA] text-white px-6 py-3 rounded-lg hover:bg-[#D94B1D] transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Lipsticks', 'Foundations', 'Eyeshadows', 'Brushes'].map((category, index) => (
            <Link key={index} to={`/category/${category.toLowerCase()}`} className="p-4 bg-gray-100 rounded-lg hover:shadow-lg transition">
              <img src={`/assets/${category.toLowerCase()}.jpg`} alt={category} className="w-full h-32 object-cover mb-3 rounded-lg" />
              <p className="text-lg font-medium">{category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {/* Mock Product Cards */}
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src="/assets/sample-product.jpg" alt="Product" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="text-lg font-medium">Product {id}</h3>
              <p className="text-[#8E4585] font-semibold">$29.99</p>
              <Link to={`/product/${id}`} className="block mt-2 text-[#FE71BA] hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Beauty Club</h2>
        <p className="text-gray-600 mb-4">Sign up for exclusive deals & new product releases!</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 w-80 border border-gray-300 rounded-l-lg focus:outline-none" />
          <button className="px-6 bg-[#FE71BA] text-white font-semibold rounded-r-lg hover:bg-[#D94B1D] transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
