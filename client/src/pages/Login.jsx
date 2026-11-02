import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      alert("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="modern-auth-page">

      <div className="auth-left">

        <span className="auth-label">
          NEXTGEN PROPERTY EXCHANGE
        </span>

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to explore properties, manage your bookings
          and get assistance from our smart property platform.
        </p>

        <div className="auth-benefits">

          <div>
            <span>🏠</span>
            <div>
              <strong>Verified Properties</strong>
              <p>Explore trusted property listings.</p>
            </div>
          </div>

          <div>
            <span>🤖</span>
            <div>
              <strong>AI Property Assistant</strong>
              <p>Get help finding the right property.</p>
            </div>
          </div>

          <div>
            <span>🔒</span>
            <div>
              <strong>Secure Platform</strong>
              <p>Your account information stays protected.</p>
            </div>
          </div>

        </div>

      </div>


      <div className="auth-right">

        <div className="modern-auth-card">

          <div className="auth-card-heading">
            <span>ACCOUNT LOGIN</span>
            <h2>Sign in to your account</h2>
            <p>
              Enter your details to continue.
            </p>
          </div>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="modern-auth-button"
            >
              Login →
            </button>

          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-register-text">
            Don't have an account?
            <Link to="/register">
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;