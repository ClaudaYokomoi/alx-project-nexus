import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext"; // Import CartContext
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext); // Use CartContext

  const handleAddToCart = () => {
    addToCart(product, product.id); // Add product to cart
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Product Image */}
        <img
          src={product.image_link}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* Product Name */}
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

        {/* Product Price */}
        <p className="text-lg mb-4">${product.price}</p>

        {/* Product Description */}
        <p className="text-gray-700 mb-6">
          {product.description || "No description available."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-4">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-[#FE71BA] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D94B1D] transition"
          >
            Add to Cart
          </button>

          {/* View Details Link */}
          <Link
            to={`/product/${product.id}`} // Replace with your product detail route
            className="text-center text-[#FE71BA] hover:text-[#D94B1D] transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;