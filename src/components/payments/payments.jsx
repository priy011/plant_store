import { useState } from "react";
import "./payments.css";

export default function Payment({ onPay }) {
  const [method, setMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: ""
  });
  const [error, setError] = useState("");

  const handlePay = () => {
    if (!method) {
      setError("Please select a payment method");
      return;
    }

    if (method === "upi" && !upiId) {
      setError("Please enter UPI ID");
      return;
    }

    if (
      method === "card" &&
      (!card.number || !card.expiry || !card.cvv)
    ) {
      setError("Please enter complete card details");
      return;
    }

    setError("");
    onPay({ method, upiId, card });
  };

  return (
    <div className="payment-box">
      <h3>Payment Method</h3>

      {/* Select Method */}
      <label className="pay-option">
        <input
          type="radio"
          name="payment"
          value="upi"
          onChange={(e) => setMethod(e.target.value)}
        />
        UPI
      </label>

      <label className="pay-option">
        <input
          type="radio"
          name="payment"
          value="card"
          onChange={(e) => setMethod(e.target.value)}
        />
        Credit / Debit Card
      </label>

      {/* UPI */}
      {method === "upi" && (
        <input
          className="pay-input"
          placeholder="Enter UPI ID"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
      )}

      {/* Card */}
      {method === "card" && (
        <div className="card-box">
          <input
            className="pay-input"
            placeholder="Card Number"
            value={card.number}
            onChange={(e) =>
              setCard({ ...card, number: e.target.value })
            }
          />
          <input
            className="pay-input"
            placeholder="MM-YY"
            value={card.expiry}
            onChange={(e) =>
              setCard({ ...card, expiry: e.target.value })
            }
          />
          <input
            className="pay-input"
            placeholder="CVV"
            type="password"
            value={card.cvv}
            onChange={(e) =>
              setCard({ ...card, cvv: e.target.value })
            }
          />
        </div>
      )}

      {error && <p className="pay-error">{error}</p>}

      <button className="pay-btn" onClick={handlePay}>
        Pay Now
      </button>
    </div>
  );
}
