import React, { useState } from "react";
import { Routes, Route, useActionData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";

function App() {
  const [cart, setCart] = useState({});

  function handleAddToCart(productId, count) {
    const oldCount = cart[productID];
    const newCount = { ...cart, [productId]: oldCount + count };
    setCart(newCount);
  }

  return (
    <div class="bg-gray-200 h-screen overflow-scroll flex flex-col">
      <Navbar productCount={cart} />
      <div className="grow">
        <Routes>
          <Route path={"/"} element={<ProductListPage />} />
          <Route
            path="/products/:id/"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
