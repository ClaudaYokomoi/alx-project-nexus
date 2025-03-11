import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartPage = () => {
  const { cart, total, removeFromCart, increaseAmount, decreaseAmount, clearCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                {/* Product Image */}
                <div className="flex items-center gap-4">
                  <img src={item.image_link} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-4">
                  <button onClick={() => decreaseAmount(item.id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                  <span>{item.amount}</span>
                  <button onClick={() => increaseAmount(item.id)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                </div>

                {/* Remove Button */}
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 border-t pt-4">
            <p className="text-xl font-semibold">Total: ${total}</p>
            <div className="flex gap-4 mt-4">
              <button onClick={clearCart} className="px-4 py-2 bg-red-500 text-white rounded">
                Clear Cart
              </button>
              <Link to="/checkout" className="px-4 py-2 bg-green-500 text-white rounded">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
