import { useNavigate } from "react-router-dom";
import "./orderSuccess.css";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Order Placed Successfully!</h1>
        <p className="order-id">
          Order ID: <strong>#{orderId}</strong>
        </p>

        <p className="success-msg">
          Thank you for shopping with <strong>Sprout</strong>. 
          Your plants will be delivered soon🌱
        </p>

        <div className="success-actions">
          <button onClick={() => navigate("/")}>
            Continue Shopping
          </button>

          <button
            className="secondary"
            onClick={() => navigate("/allProducts")}
          >
            View more Products
          </button>
        </div>
      </div>
    </main>
  );
}
