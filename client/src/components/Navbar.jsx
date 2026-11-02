import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="navbar-logo">
        <div className="navbar-logo-icon">
          🏡
        </div>

        <div>
          <strong>NextGen</strong>
          <span>Property Exchange</span>
        </div>
      </Link>


      {/* NAVIGATION */}
      <div className="navbar-links">

        <Link
          to="/"
          className={isActive("/") ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/projects"
          className={
            isActive("/projects") ? "active" : ""
          }
        >
          Properties
        </Link>

        <Link
          to="/dashboard"
          className={
            isActive("/dashboard") ? "active" : ""
          }
        >
          Dashboard
        </Link>

        <Link
          to="/chatbot"
          className={
            isActive("/chatbot") ? "active" : ""
          }
        >
          🤖 Assistant
        </Link>

      </div>


      {/* RIGHT SIDE */}
      <div className="navbar-actions">

        <Link to="/login">
          <button className="navbar-login">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="navbar-register">
            Get Started →
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;