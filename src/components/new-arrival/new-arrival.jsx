import newArrivals from "./new-arrival.json";
import "./new-arrival.css";

export default function NewArrival({ setSelectedProduct }) {
  return (
    <section className="new-arrivals">
      <div className="heading">
        <div className="title">New Arrivals</div>
        <button className="shop-all">Shop All</button>
      </div>
      <div className="arrival-list">
        {newArrivals.map((item) => (
          <div className="arrival-card" key={item.id}>
            <div className="badge">{item.tag}</div>
            <img src={item.image} alt={item.name} className="product-img" />
            <div className="product-name">{item.name}</div>
            {item.rating && (
              <div className="rating">
                ⭐ {item.rating} <span className="reviews">({item.reviews})</span>
              </div>
            )}
            <p className="price">${item.price}</p>
            <button
              className="add-to-cart"
              onClick={() => setSelectedProduct(item)}
            > Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
