import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Cart Items */}
      <div className="mb-8">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img
                  src={item.image_link || "https://via.placeholder.com/150"} // Ensure correct image is displayed
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${parseFloat(item.price).toFixed(2)}</p>
                </div>
              </div>
              <p className="text-lg font-semibold">
                ${((parseFloat(item.price) || 0) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p>
            Your cart is empty.{" "}
            <Link to="/shop" className="text-blue-500">
              Continue shopping
            </Link>
          </p>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">Total:</h2>
        <p className="text-xl font-bold">${total.toFixed(2)}</p>
      </div>

      {/* Shipping and Payment Form */}
      <form className="mb-8">
        <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="p-2 border rounded" required />
          <input type="email" placeholder="Email" className="p-2 border rounded" required />
          <input type="text" placeholder="Address" className="p-2 border rounded" required />
          <input type="text" placeholder="City" className="p-2 border rounded" required />
          <input type="text" placeholder="State" className="p-2 border rounded" required />
          <input type="text" placeholder="Zip Code" className="p-2 border rounded" required />
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Payment Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Card Number" className="p-2 border rounded" required />
          <input type="text" placeholder="Expiration Date" className="p-2 border rounded" required />
          <input type="text" placeholder="CVV" className="p-2 border rounded" required />
        </div>
      </form>

      {/* Checkout Button */}
      <button
        onClick={() => {
          alert("Order placed successfully!");
          clearCart();
        }}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        disabled={cart.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
