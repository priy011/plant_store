import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export default function Checkout({ cartItems = [] }) {
  const navigate = useNavigate();

  /* -------------------- STATE -------------------- */
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  /* -------------------- GUARD: EMPTY CART -------------------- */
  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      navigate("/plants", { replace: true });
    }
  }, [cartItems, navigate]);

  if (!cartItems || cartItems.length === 0) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  /* -------------------- VALIDATIONS -------------------- */
  const isValidPincode = (pin) => /^\d{6}$/.test(pin);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);
  const isValidUPI = (upi) => /^[\w.-]+@[\w.-]+$/.test(upi);

  /* -------------------- PLACE ORDER -------------------- */
  const handlePlaceOrder = () => {
    const { name, phone, street, city, state, pincode } = address;

    if (!name || !phone || !street || !city || !state || !pincode) {
      alert("Please fill complete delivery address");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    if (!isValidPincode(pincode)) {
      alert("Enter valid 6-digit pincode");
      return;
    }

    if (!paymentMethod) {
      alert("Select a payment method");
      return;
    }

    if (paymentMethod === "upi" && !isValidUPI(upiId)) {
      alert("Enter a valid UPI ID");
      return;
    }

    if (
      paymentMethod === "card" &&
      (!card.number || !card.expiry || !card.cvv)
    ) {
      alert("Enter complete card details");
      return;
    }

    navigate("/order-success");
  };

  /* -------------------- UI -------------------- */
  return (
    <main className="checkout-page">
      <h1 className="checkout-title">Secure Checkout</h1>

      <div className="checkout-layout">
        {/* LEFT */}
        <section className="checkout-left">
          {/* ADDRESS */}
          <div className="checkout-card">
            <h3>Shipping Address</h3>

            <input
              placeholder="Full Name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />

            <input
              placeholder="Phone (10 digits)"
              value={address.phone}
              onChange={(e) =>
                setAddress({ ...address, phone: e.target.value })
              }
            />

            <input
              placeholder="Street Address"
              value={address.street}
              onChange={(e) =>
                setAddress({ ...address, street: e.target.value })
              }
            />

            <div className="row">
              <input
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
              <input
                placeholder="State"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
              />
            </div>

            <input
              placeholder="pincode"
              value={address.pincode}
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
            />
          </div>
          {/* PAYMENT */}
          <div className="checkout-card">
            {" "}
            <div className="title">Please Select Payment Method</div>{" "}
            <label className="radio">
              {" "}
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />{"  "}
              UPI{" "}
            </label>{" "}
            {paymentMethod === "upi" && (
              <input
                placeholder="example@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            )}{" "}
            <label className="radio">
              {" "}
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />{" "}
              Credit/Debit Card{" "}
            </label>{" "}
            {paymentMethod === "card" && (
              <>
                {" "}
                <input
                  placeholder="Card Number"
                  value={card.number}
                  onChange={(e) => setCard({...card,number:e.target.value })}
                />{" "}
                <div className="row">
                  {" "}
                  <input
                    placeholder="MM/YY"
                    value={card.expiry}
                    onChange={(e) =>
                      setCard({ ...card, expiry: e.target.value })
                    }
                  />{" "}
                  <input
                    placeholder="CVV"
                    value={card.cvv}
                    onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                  />{" "}
                </div>{" "}
              </>
            )}{" "}
            <label className="radio">
              {" "}
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />{" "}
              Cash on Delivery{" "}
            </label>{" "}
          </div>{" "}
        </section>
        {/* RIGHT */}
        <aside className="checkout-right">
          <div className="checkout-card">
            <h3>Order Summary</h3>

            {cartItems.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={item.image} alt="" />
                <div>
                  <p>{item.name}</p>
                  <span>Qty: {item.qty}</span>
                </div>
                <strong>${(item.price * item.qty).toFixed(2)}</strong>
              </div>
            ))}

            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="place-order" onClick={handlePlaceOrder}>
              Place Order
            </button>

            <p className="secure-text"> payment is Secure</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

