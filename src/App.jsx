import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMemo, useState } from "react";
import Header from "./components/header/header";
import Hero from "./components/main-section/main-section";
import NewArrival from "./components/new-arrival/new-arrival";
import CategorySection from "./components/category-section/category-section";
import SeedSection from "./components/seed-section/seed-section";
import SubscriptionSection from "./components/subscription/subscription";
import BlogSection from "./components/blog/blog";
import GramSection from "./components/gram/gram";
import ProductModal from "./components/product-modal/product-modal";
import CartPopup from "./components/cartPopup/cartPopup";
import Plants from "./components/plants/plants";
import Footer from "./components/footer/footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  const cartValue = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems]
  );

  const addToCart = (product, qty) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { ...product, qty }];
    });
    setSelectedProduct(null);
    setOpenCart(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header
        cartValue={cartValue}
        onCartClick={() => setOpenCart(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NewArrival setSelectedProduct={setSelectedProduct} />
              <CategorySection />
              <SeedSection />
              <SubscriptionSection />
              <BlogSection />
              <GramSection />
            </>
          }
        />
        <Route
          path="/allProducts"
          element={<Plants onAddToCart={addToCart} />}
        />
        <Route
          path="/newArrivals"
          element={<Plants onAddToCart={addToCart} />}
        />
        <Route
          path="/plants"
          element={<Plants onAddToCart={addToCart} />}
        />
        <Route
          path="/pots"
          element={<Plants onAddToCart={addToCart} />}
        />
        <Route
          path="/sale"
          element={<Plants onAddToCart={addToCart} />}
        />
      </Routes>
      <ProductModal
        product={selectedProduct}
        closeModal={() => setSelectedProduct(null)}
        addToCart={(qty) =>
          selectedProduct && addToCart(selectedProduct, qty)
        }
      />
      <CartPopup
        isOpen={openCart && cartItems.length > 0}
        onClose={() => setOpenCart(false)}
        cartItems={cartItems}
        onQtyChange={updateQuantity}
        onRemove={removeItem}
      />
      <Footer/>
    </Router>
  );
}
export default App;
