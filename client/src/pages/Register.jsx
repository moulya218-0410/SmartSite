import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration successful!");

      navigate("/login");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="modern-auth-page">

      {/* LEFT SIDE */}

      <div className="auth-left">

        <span className="auth-label">
          JOIN NEXTGEN PROPERTY EXCHANGE
        </span>

        <h1>
          Create Your
          <br />
          Account
        </h1>

        <p>
          Create an account to explore properties, compare
          plots, make bookings and use our smart property
          assistant.
        </p>

        <div className="auth-benefits">

          <div>
            <span>🔎</span>
            <div>
              <strong>Explore Properties</strong>
              <p>Find properties that match your needs.</p>
            </div>
          </div>

          <div>
            <span>📊</span>
            <div>
              <strong>Compare & Choose</strong>
              <p>Compare plot sizes, prices and locations.</p>
            </div>
          </div>

          <div>
            <span>🏡</span>
            <div>
              <strong>Book Your Plot</strong>
              <p>Submit your booking request easily.</p>
            </div>
          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="auth-right">

        <div className="modern-auth-card">

          <div className="auth-card-heading">

            <span>
              CREATE ACCOUNT
            </span>

            <h2>
              Get started with NextGen
            </h2>

            <p>
              Enter your details to create your account.
            </p>

          </div>


          <form onSubmit={handleRegister}>

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />


            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />


            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />


            <button
              type="submit"
              className="modern-auth-button"
            >
              Create Account →
            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-register-text">
            Already have an account?
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;