import React from "react";
import "./main-section.css";

function Hero({ scrolled }) {
  return (
    <section className={`hero ${scrolled ? "hero-out" : ""}`}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Is There Such a Thing as Too Many Plants?</h1>
          <p>Discover the latest addition to your growing plant collection</p>
          <button className="shop-btn">Shop Plants</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
