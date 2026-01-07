import "./category-section.css";

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="category-header">
        <p className="category-subtitle">Shop by Category</p>
        <h2 className="category-title">Discover Sprout</h2>
      </div>

        <div className="category-grid">
            <div className="category-card large-card">
                <img src="src/assets/categories/plants.jpg" alt="Plants" />
                <span className="cat-text">Plants</span>
            </div>

            <div className="right-grid">
                <div className="category-card">
                    <img src="src/assets/categories/pots.jpg" alt="Pots" />
                    <span className="cat-text">Pots</span>
                </div>

                <div className="category-card">
                    <img src="src/assets/categories/accessories.jpg" alt="Accessories" />
                    <span className="cat-text">Subscriptions</span>
                </div>
            </div>
        </div>

    </section>
  );
}
