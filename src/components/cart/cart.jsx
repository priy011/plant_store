export default function Cart({ cartValue }) {
  return (
    <div className="cart">
      <button className="wishlist">
        <img src="src/assets/wishlist.svg" alt="wishlist" />
      </button>

      <button className="cart-img">
        <img src="src/assets/cartt.svg" alt="cart" />
      </button>

      <div className="cart-value">
      <span className="cart-text">Cart</span>
      <span className="cart-value">{cartValue}</span>
      </div>
    </div>
  );
}
