import React from "react";
import "./subscription.css";

export default function SubscriptionSection() {
  return (
    <section className="subscription-section">

      <div className="subscription-image"></div>

      <div className="subscription-content">
        <h2>Shop Our Plant <br /> Subscription Boxes</h2>
        <p className="subtitle">
          and look forward to a new plant every month
        </p>

        <div className="subscription-options">

          <div className="option">
            <div className="icon-box">
              <img src="src/assets/cactus.svg" alt="cactus" />
            </div>
            <span>Cactus Lover Subscription</span>
          </div>

          <div className="option">
            <div className="icon-box">
              <img src="src/assets/leaf.svg" alt="leaf" />
            </div>
            <span>Exotic Plants Subscription</span>
          </div>

        </div>

        <button className="primary-btn">Subscription Boxes</button>
      </div>
    </section>
  );
}
