import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      {/* MAIN FOOTER */}
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              🏡
            </div>

            <div>
              <strong>NextGen</strong>
              <span>Property Exchange</span>
            </div>
          </Link>

          <p>
            A smart property platform that helps you
            discover, compare and book properties with ease.
          </p>

          <div className="footer-social">
            <span>f</span>
            <span>𝕏</span>
            <span>in</span>
            <span>◎</span>
          </div>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/projects">
            Properties
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/chatbot">
            AI Assistant
          </Link>

        </div>


        {/* ACCOUNT */}
        <div className="footer-column">

          <h3>
            Account
          </h3>

          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Create Account
          </Link>

          <Link to="/dashboard">
            My Bookings
          </Link>

          <Link to="/payment">
            Payments
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h3>
            Contact Us
          </h3>

          <p>
            📍 Karnataka, India
          </p>

          <p>
            📧 support@nextgenproperty.com
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            🕐 Mon - Sat, 9 AM - 6 PM
          </p>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 NextGen Property Exchange.
          All rights reserved.
        </p>

        <div>
          <span>
            Privacy Policy
          </span>

          <span>
            Terms & Conditions
          </span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;