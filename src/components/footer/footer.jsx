import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Address: 500 Terry</p>
          <p>Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@mysite.com</p>
        </div>

        {/* SHOP */}
        <div className="footer-col">
          <h4>Shop</h4>
          <p>Shop All</p>
          <p>Plants</p>
          <p>Pots</p>
          <p>Sale</p>
          <p>Gift Card</p>
          <p>Subscriptions</p>
          <p>Care</p>
        </div>

        {/* HELP */}
        <div className="footer-col">
          <h4>Helpful Links</h4>
          <p>FAQ</p>
          <p>Shipping & Returns</p>
          <p>Terms & Conditions</p>
          <p>Payment Methods</p>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <p>Our Story</p>
          <p>Contact Us</p>
        </div>

        {/* OPENING HOURS */}
        <div className="footer-col">
          <h4>Opening Hours</h4>
          <p>Mon - Fri: 7am - 10pm</p>
          <p>Saturday: 8am - 10pm</p>
          <p>Sunday: 8am - 11pm</p>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        © 2035 by Sprout. Powered and secured by Wix
      </div>
    </footer>
  );
}
