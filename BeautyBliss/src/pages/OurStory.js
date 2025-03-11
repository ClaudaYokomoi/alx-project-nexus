import React from "react";
import { Link } from "react-router-dom";

import team1 from "../image/team1.jpg";
import team2 from "../image/team2.jpg";
import team3 from "../image/team3.jpg";
import storyImage from "../image/story.jpg";

const OurStory = () => {
  return (
    <div className="w-full font-sans bg-[#F8F0FB] text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center px-4 shadow-lg"
        style={{ backgroundImage: `url(${storyImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl">
            Discover the journey behind Beauty Bliss.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 text-center bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-[#D94B1D]">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto">
            At Beauty Bliss, our mission is to empower individuals to feel confident and beautiful in their own skin. We believe in providing high-quality, cruelty-free products that enhance natural beauty while promoting self-expression and self-care.
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-[#F8F0FB]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#D94B1D]">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">From Humble Beginnings</h3>
              <p className="text-lg mb-4">
                Beauty Bliss started as a small idea in 2015, born out of a passion for makeup and a desire to create products that are both luxurious and accessible. Our founder, Jane Doe, began mixing her own formulas in her kitchen, driven by a vision to revolutionize the beauty industry.
              </p>
              <p className="text-lg">
                Today, we are proud to be a global brand, loved by millions for our innovative products and commitment to sustainability.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={storyImage}
                alt="Our Journey"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#D94B1D]">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src={team1}
                alt="Jane Doe"
                className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Jane Doe</h3>
              <p className="text-lg text-gray-700">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src={team2}
                alt="John Smith"
                className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">John Smith</h3>
              <p className="text-lg text-gray-700">Head of Product Development</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src={team3}
                alt="Emily Johnson"
                className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Emily Johnson</h3>
              <p className="text-lg text-gray-700">Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFB82E] via-[#FE71BA] to-[#D94B1D] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Join the Beauty Bliss Family</h2>
          <p className="text-xl mb-8">
            Explore our products and discover the beauty of self-expression.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-[#D94B1D] px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-80 transition transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;