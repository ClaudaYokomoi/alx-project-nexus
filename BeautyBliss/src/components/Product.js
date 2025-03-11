import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Destructure product data
  const { id, image_link, name, product_type, price } = product;

  // Fallback image URL
  const fallbackImage = "https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image";

  return (
    <div className="flex flex-col items-center">
      <div className="border border-[#e4e4e4] rounded-lg p-4 shadow-sm hover:shadow-lg transition bg-white w-full">
        {/* Product Image */}
        <div className="h-[300px] mb-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center bg-[#f9f2f8] rounded-lg">
            <div className="w-[220px] mx-auto flex justify-center items-center">
              <img
                src={image_link || fallbackImage}
                alt={name}
                className="max-h-[180px] object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="absolute top-0 right-0 group-hover:right-4 bg-transparent flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="w-10 h-10 bg-[#FE71BA] text-white rounded-full flex justify-center items-center shadow-md hover:bg-opacity-80 transition">
                <BsPlus className="text-2xl" />
              </div>
            </button>

            <Link
              to={`/product/${id}`}
              className="w-10 h-10 bg-white text-[#FE71BA] rounded-full flex justify-center items-center shadow-md hover:bg-gray-200 transition"
            >
              <BsEyeFill className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Product Details */}
        <div className="text-center mt-3">
          <p className="text-sm text-gray-500 uppercase">{product_type}</p>
          <h2 className="text-lg font-semibold text-gray-800 hover:text-[#FE71BA] transition">
            {name}
          </h2>
          <p className="text-lg font-bold text-[#FE71BA]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
