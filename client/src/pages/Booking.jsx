import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Booking() {
  const { id, plotNumber } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const projectNames = {
    1: "Green Valley Layout",
    2: "Sunrise Enclave",
    3: "Royal Garden Layout",
    4: "Lake View Residency",
    5: "Green Park Layout",
    6: "Royal Enclave",
  };

  const projectName = projectNames[id] || "Property";

  const handleBooking = (e) => {
    e.preventDefault();

    alert("Booking request submitted successfully!");

    navigate("/payment");
  };

  return (
    <div className="booking-page">

      {/* HEADER */}
      <section className="booking-header">

        <Link
          to={`/plots/${id}`}
          className="booking-back"
        >
          ← Back to Plot Layout
        </Link>

        <span>BOOK YOUR PLOT</span>

        <h1>Complete Your Booking</h1>

        <p>
          Enter your details to submit your property
          booking request.
        </p>

      </section>


      {/* CONTENT */}
      <section className="booking-container">

        {/* SELECTED PLOT */}
        <div className="selected-plot-card">

          <span className="booking-label">
            SELECTED PROPERTY
          </span>

          <h2>{projectName}</h2>

          <div className="selected-plot">

            <div className="selected-plot-icon">
              🏡
            </div>

            <div>
              <small>Selected Plot</small>
              <strong>{plotNumber}</strong>
            </div>

          </div>

          <div className="booking-summary">

            <div>
              <span>📐 Plot Size</span>
              <strong>1200 sq.ft</strong>
            </div>

            <div>
              <span>💰 Starting Price</span>
              <strong>₹25 Lakhs</strong>
            </div>

            <div>
              <span>📍 Location</span>
              <strong>Mysore, Karnataka</strong>
            </div>

          </div>

        </div>


        {/* FORM */}
        <div className="booking-form-card">

          <div className="booking-form-heading">

            <span className="booking-label">
              YOUR DETAILS
            </span>

            <h2>Booking Information</h2>

            <p>
              Please provide your details so our team
              can contact you.
            </p>

          </div>


          <form onSubmit={handleBooking}>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />


            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />


            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
            />


            <label>Message (Optional)</label>

            <textarea
              placeholder="Any questions or requirements?"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              rows="4"
            />


            <button
              type="submit"
              className="booking-submit"
            >
              Submit Booking Request →
            </button>

          </form>

        </div>

      </section>


      {/* NOTE */}
      <section className="booking-note">

        <span>🔒</span>

        <div>
          <strong>Your information is secure</strong>

          <p>
            Your details will only be used for processing
            your booking request and contacting you.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Booking;