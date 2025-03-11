import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import CartProvider, { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  const [showCartPreview, setShowCartPreview] = useState(false);

  return (
    <div>
      {/* Cart Icon with Hover Preview */}
      <div className="relative">
        <div
          className="cursor-pointer relative"
          onMouseEnter={() => setShowCartPreview(true)}
          onMouseLeave={() => setShowCartPreview(false)}
          onClick={() => setIsOpen(true)}
        >
          <BsCart3 className="text-2xl text-white" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cart.length}</span>
          )}
        </div>
        
        {showCartPreview && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg p-4 rounded-lg z-30 transition-opacity duration-300">
            {cart.length > 0 ? (
              cart.slice(0, 3).map((item) => <CartItem item={item} key={item.id} />)
            ) : (
              <p className="text-center text-gray-500">Your cart is empty 💄</p>
            )}
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full md:w-[30vw] xl:w-[25vw] bg-white fixed top-0 h-full shadow-2xl transition-all duration-300 z-20 px-4`}>
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold text-[#8E4585]">Shopping Bag ({cart.length})</div>
          <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center text-[#FE71BA] hover:text-[#8E4585] transition">
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-y-2 h-[500px] lg:h-[600px] overflow-y-auto overflow-x-hidden">
          {cart.length > 0 ? (
            cart.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <p className="text-center text-gray-500">Your cart is empty 💄</p>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t">
          <div className="flex justify-between items-center">
            <button onClick={clearCart} className="flex items-center gap-2 text-red-500 hover:text-red-700 transition">
              <FiTrash2 className="text-xl" />
              Clear Cart
            </button>
            <Link to="/checkout" className="bg-[#FE71BA] text-white px-4 py-2 rounded-lg hover:bg-[#8E4585] transition">
              Checkout
            </Link>
          </div>

          {/* Total Section */}
          <div className="bg-[#FCE4EC] flex flex-col gap-3 py-4 mt-4 rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center font-semibold text-[#8E4585] text-lg">
              <span>Total:</span> <span>${total.toFixed(2)}</span>
            </div>
            <button onClick={clearCart} className="cursor-pointer bg-red-500 text-white w-full py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-red-600 transition">
              <FiTrash2 className="text-xl" />
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProvider;
