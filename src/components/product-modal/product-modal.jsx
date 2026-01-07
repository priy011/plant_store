import { useState } from "react";
import "./product-modal.css";

export default function ProductModal({ product, closeModal, addToCart }) {
  const [size, setSize] = useState("");        // Selected size
  const [qty, setQty] = useState(1);           // Quantity

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={closeModal}>✕</button>

        <div className="modal-content">

          {/* LEFT IMAGE */}
          <div className="modal-left">
            <img src={product.image} alt={product.name} />
          </div>

          {/* RIGHT CONTENT */}
          <div className="modal-right">

            <div className="product-name">{product.name}</div>
            <p className="price">${product.price}</p>

            {/* SIZE SELECT */}
            <label className="label">Size *</label>
            <select
              className="select-box"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>

            {/* QUANTITY */}
            <label className="label">Quantity *</label>

            <div className="qty-box">
              <button onClick={() => setQty((prev) => Math.max(1, prev - 1))}>
                –
              </button>

              <span>{qty}</span>

              <button onClick={() => setQty((prev) => prev + 1)}>
                +
              </button>
            </div>

            {/* ADD TO CART */}
            <button
              className="modal-add-btn"
              onClick={() => {
                if (!size) {
                  alert("Please select a size");
                  return;
                }

                addToCart(qty); // pass quantity to parent
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
