import React from "react";
import "./cartPopup.css";

export default function CartPopup({
  isOpen,
  onClose,
  cartItems = [],
  onQtyChange,
  onRemove
}) {

  if (!isOpen || cartItems.length === 0) return null;

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <button className="cart-close" onClick={onClose}>
          &times;
        </button>
        <div className="cart-title">Cart ({totalItems} item{totalItems === 1 ? "" : "s"})</div>
        <hr />
        {cartItems.length === 0 ? (
          <div className="cart-empty">Your cart is empty.</div>
        ) : (
          cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <img src={cartItem.image} className="cart-img" alt="" />

              <div className="cart-info">
                <div className="item-name">{cartItem.name}</div>
                <p className="item-price">${cartItem.price}</p>
                {cartItem.color && (
                  <p className="item-color">Color: {cartItem.color}</p>
                )}

                <div className="qty-box">
                  <button
                    onClick={() => onQtyChange(cartItem.id, -1)}
                    disabled={cartItem.qty <= 1}
                  >
                    −
                  </button>
                  <span>{cartItem.qty}</span>
                  <button onClick={() => onQtyChange(cartItem.id, 1)}>+</button>
                </div>
              </div>
              <div className="item-right">
                <button className="delete-item" onClick={() => onRemove(cartItem.id)}>
                  🗑
                </button>
                <span className="line-price">
                  ${(cartItem.price * cartItem.qty).toFixed(2)}
                </span>
              </div>
            </div>
          ))
        )}
        <hr />
        <div className="promo-code">
          <span>🏷️ Enter a promo code</span>
        </div>
        <hr />
        <div className="cart-total">
          <span>Estimated total</span>
          <span className="total-price">${totalPrice}</span>
        </div>
        <p className="shipping">
          Taxes and shipping are calculated at checkout.
        </p>
        <div className="secure">
          <button className="checkout-btn">Checkout</button>
          <button className="view-cart-btn">View Cart</button>
        </div>
      
        <div className="secure-checkout">🔒Secure Checkout</div>
      </div>
    </div>
  );
}
