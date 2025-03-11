import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../components/Header";
import makeupBanner from "../image/makeup-banner.jpg";
import { FaSmile, FaStar, FaGift, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductModal from '../components/ProductModal';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]); // Simple cart state

  // Fetch featured products from the Makeup API
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch(
          "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
        );
        const data = await response.json();
        setFeaturedProducts(data.slice(0, 10)); // Show the first 10 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  // Beauty Tips Data
  const beautyTips = [
    { tip: "Perfect your base with primer!", icon: <FaSmile className="w-12 h-12 mb-4 text-[#FE71BA]" /> },
    { tip: "Use setting spray for long-lasting makeup.", icon: <FaStar className="w-12 h-12 mb-4 text-[#A78BFA]" /> },
    { tip: "Blend eyeshadow for a flawless look.", icon: <FaGift className="w-12 h-12 mb-4 text-[#6EE7B7]" /> },
  ];

  // Handle Beauty Tips Carousel Navigation
  const handleNextTip = () => {
    setCurrentTip((prev) => (prev + 1) % beautyTips.length);
  };

  const handlePrevTip = () => {
    setCurrentTip((prev) => (prev - 1 + beautyTips.length) % beautyTips.length);
  };

  // Handle Sign Up for Notifications
  const handleSignUp = () => {
    alert("Thank you for signing up!"); // Replace with actual functionality
  };

  // Handle opening the modal
  const openModal = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedProduct(null); // Clear the selected product
    setIsModalOpen(false); // Close the modal
  };

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="w-full font-sans bg-[#F8F0FB] text-gray-900">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center px-4 shadow-lg"
        style={{ backgroundImage: `url(${makeupBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FE71BA]/80 to-[#D94B1D]/80"></div>
        <div className="relative z-10 bg-black bg-opacity-60 p-8 rounded-3xl max-w-2xl">
          <h1 className="text-6xl font-extrabold mb-6">Enhance Your Beauty</h1>
          <p className="text-2xl mb-8">Discover the latest trends in makeup & beauty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-block bg-[#FE71BA] text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#D94B1D] transition transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>

        {/* Scrolling Marquee */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-lg">
            <span className="mx-4">✨ Trending: Matte Lipsticks</span>
            <span className="mx-4">✨ New Arrival: Glitter Eyeshadows</span>
            <span className="mx-4">✨ Best Seller: Foundation</span>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-4xl font-bold mb-12 text-[#FE71BA]">Featured Products</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-8"
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative group">
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-2xl">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg">${product.price}</p>
                  <button
                    onClick={() => openModal(product)}
                    className="mt-2 bg-[#FE71BA] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#D94B1D] transition transform hover:scale-105"
                  >
                    Quick Shop
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Beauty Tips Carousel */}
      <section className="py-20 text-center bg-[#F8F0FB]">
        <h2 className="text-4xl font-bold mb-12 text-[#D94B1D]">Beauty Tips</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow-xl transform transition duration-300 border border-[#FE71BA]">
            <div className="flex justify-center">{beautyTips[currentTip].icon}</div>
            <p className="text-xl font-medium text-gray-700">{beautyTips[currentTip].tip}</p>
          </div>
          <button
            aria-label="Previous tip"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#FE71BA] hover:text-white transition"
            onClick={handlePrevTip}
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next tip"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#FE71BA] hover:text-white transition"
            onClick={handleNextTip}
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#D94B1D]">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[
            { review: "Love this product!", rating: 5, avatar: "https://randomuser.me/api/portraits/women/1.jpg", name: "Jane Doe" },
            { review: "Amazing quality!", rating: 5, avatar: "https://randomuser.me/api/portraits/women/2.jpg", name: "Emily Smith" },
            { review: "Highly recommend!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/1.jpg", name: "John Doe" },
          ].map((review, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg text-gray-700 transform hover:-rotate-2 hover:scale-105 transition duration-300 border border-[#FE71BA]"
            >
              <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-lg">"{review.review}"</p>
              <p className="text-sm mt-2">- {review.name}</p>
            </div>
          ))}
        </div>
        <Link
          to="/write-review"
          className="mt-8 inline-block bg-[#FE71BA] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D94B1D] transition transform hover:scale-105"
        >
          Write a Review
        </Link>
      </section>

      {/* Exclusive Offers */}
      <section className="py-20 text-center bg-plum-shadow text-white">
        <h2 className="text-4xl font-bold mb-6">Exclusive Offers</h2>
        <p className="text-2xl mb-8">Get special discounts and early access to sales!</p>
        <div className="text-3xl font-bold mb-8">
          <span className="bg-white text-plum-shadow px-4 py-2 rounded-full">24:59:59</span>
        </div>
        <div className="w-1/2 mx-auto bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-[#FE71BA] h-2 rounded-full" style={{ width: "60%" }}></div>
        </div>
        <Link
          to="/offers"
          className="bg-white text-plum-shadow px-10 py-5 rounded-full text-xl font-bold hover:bg-opacity-80 transition transform hover:scale-105"
        >
          View Offers
        </Link>
        <button
          onClick={handleSignUp}
          className="mt-4 block mx-auto bg-[#FE71BA] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D94B1D] transition transform hover:scale-105"
        >
          Sign Up for Notifications
        </button>
      </section>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Home;