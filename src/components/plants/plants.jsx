import "./plants.css";
import { useState } from "react";
import plantsData from "./plants.json";
import { NavLink, useLocation } from "react-router-dom";

export default function Plants({ onAddToCart }) {
  const location = useLocation();
  const [maxPrice, setMaxPrice] = useState(50);
  const path = location.pathname;
  let title = "All Products";
  let filteredProducts = plantsData;
  if (path === "/plants") {
    title = "Plants";
    filteredProducts = plantsData.filter((item) => item.category === "plants");
  } else if (path === "/pots") {
    title = "Pots"; 
    filteredProducts = plantsData.filter((item) => item.category === "pots");
  } else if (path === "/sale") {
    title = "Sale";
    filteredProducts = plantsData.filter((item) => item.sale);
  } else if (path === "/newArrivals") {
    title = "New Arrivals";
    filteredProducts = plantsData.filter((item) => item.isNew);
  } else if (path === "/allProducts") {
    title = "All Products";
    filteredProducts = plantsData;
  }
    filteredProducts = filteredProducts.filter(
    (item) => item.price <= maxPrice
    );
  return (
    <section className="plants-page">
      <div className="plants-layout">
        {/* LEFT FILTER */}
        <aside className="filters">
          <h4>Browse by</h4>
          <ul className="product-list">
            <li>
              <NavLink to="/allProducts">All Products</NavLink>
            </li>
            <li>
              <NavLink to="/newArrivals">New arrivals</NavLink>
            </li>
            <li>
              <NavLink to="/plants">Plants</NavLink>
            </li>
            <li>
              <NavLink to="/pots">Pots</NavLink>
            </li>
            <li>
              <NavLink to="/sale">Sale</NavLink>
            </li>
          </ul>
          <h4>Filter by</h4>
          <div className="filter-block">
                <label>
                    Price
                </label>
                <input
                    type="range"
                    min="10"
                    max="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="price-range">$10 – ${maxPrice}</div>
          </div>
        </aside>
        {/* RIGHT CONTENT */}
        {/* HERO */}
        <div className="plants-hero">
          <img src="src/assets/categories/plants.jpg" alt="Plants" />
          <div className="products-area">
            <div className="title">{title}</div>
            <p className="count">{filteredProducts.length} products</p>
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  {product.sale && <span className="sale-badge">Sale</span>}
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">
                    {product.oldPrice && (
                      <span className="strike">${product.oldPrice}</span>
                    )}
                    ${product.price}
                  </p>
                  <button
                    onClick={() =>
                      onAddToCart && onAddToCart(product, 1)
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
