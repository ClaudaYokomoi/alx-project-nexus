import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleOrder = () => {
    if (!name || !address || !email) {
      alert('Please fill in all shipping details.');
      return;
    }
    alert('Order placed successfully!');
    clearCart();
    setName('');
    setAddress('');
    setEmail('');
  };

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full md:w-[30vw] xl:w-[25vw] bg-white fixed top-0 h-full shadow-2xl transition-all duration-300 z-20 px-4`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold text-[#8E4585]">
          Shopping Bag ({cart.length})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center text-[#FE71BA] hover:text-[#8E4585] transition"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-y-2 h-[300px] lg:h-[400px] overflow-y-auto overflow-x-hidden">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <p className="text-center text-gray-500">Your cart is empty 💄</p>
        )}
      </div>

      {/* Sidebar Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t">
        {/* Total Section */}
        <div className="bg-[#FCE4EC] flex flex-col gap-3 py-4 rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center font-semibold text-[#8E4585] text-lg">
            <span>Total:</span> <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Mini Checkout Form */}
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-lg font-semibold text-[#8E4585] mb-2">Shipping Details</h2>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded mb-2" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-2" required />
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border rounded mb-2" required />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={handleOrder}
            className="bg-[#FE71BA] text-white w-full py-3 rounded-lg hover:bg-[#8E4585] transition"
            disabled={cart.length === 0}
          >
            Place Order
          </button>
          <Link
            to="/checkout"
            className="bg-blue-500 text-white text-center w-full py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Go to Full Checkout
          </Link>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white w-full py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-red-600 transition"
          >
            <FiTrash2 className="text-xl" />
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
