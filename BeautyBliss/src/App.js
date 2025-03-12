import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import GetInTouch from "./pages/GetInTouch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout"; // Import the Checkout page
import CartPage from "./pages/CartPage"; // Import the CartPage (optional)
import Offers from "./pages/Offers"; // Import the Offers page

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Context Providers
import AuthProvider from "./contexts/AuthContext";
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";
import SidebarProvider from "./contexts/SidebarContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <SidebarProvider>
              {/* Header */}
              <Header />

              {/* Layout wrapper to prevent Sidebar overlap */}
              <div className="flex min-h-screen">
                {/* Sidebar */}
                <Sidebar className="hidden md:block w-64 bg-gray-100" />

                {/* Main Content */}
                <main className="flex-1 overflow-hidden pt-16 px-4">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop/:category" element={<Shop />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/contact" element={<GetInTouch />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/checkout" element={<Checkout />} /> 
                    <Route path="/cart" element={<CartPage />} /> 
                    <Route path="/offers" element={<Offers />} /> 
                  </Routes>
                </main>
              </div>

              {/* Footer */}
              <Footer />
            </SidebarProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
