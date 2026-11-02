import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const navigate = useNavigate();

  const [paymentStarted, setPaymentStarted] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setPaymentStarted(true);

    // Frontend demo payment
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1500);
  };

  return (
    <div className="payment-page">

      {/* HEADER */}
      <section className="payment-header">
        <span>PAYMENT STATUS</span>

        <h1>
          {paymentSuccess
            ? "Payment Successful"
            : "Complete Your Payment"}
        </h1>

        <p>
          {paymentSuccess
            ? "Your property booking payment has been completed successfully."
            : "Review your booking details and complete the payment."}
        </p>
      </section>


      {/* MAIN CONTAINER */}
      <section className="payment-container">

        {/* SUCCESS CARD */}
        {paymentSuccess ? (
          <div className="payment-success-card">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Payment Successful!
            </h2>

            <p>
              Your booking for Green Valley Layout
              has been successfully confirmed.
            </p>

            <span className="payment-success-badge">
              ✓ Payment Completed
            </span>

            <div className="payment-success-details">

              <div>
                <small>PROPERTY</small>
                <strong>Green Valley Layout</strong>
              </div>

              <div>
                <small>PLOT</small>
                <strong>A-01</strong>
              </div>

              <div>
                <small>AMOUNT PAID</small>
                <strong>₹25 Lakhs</strong>
              </div>

            </div>

          </div>
        ) : (
          <>

            {/* BOOKING SUMMARY */}
            <div className="payment-details-card">

              <div className="payment-card-heading">
                <span>BOOKING DETAILS</span>

                <h2>
                  Green Valley Layout
                </h2>

                <p>
                  📍 Mysore, Karnataka
                </p>
              </div>


              <div className="payment-detail-row">
                <span>Plot Number</span>
                <strong>A-01</strong>
              </div>

              <div className="payment-detail-row">
                <span>Plot Size</span>
                <strong>1200 sq.ft</strong>
              </div>

              <div className="payment-detail-row">
                <span>Property Type</span>
                <strong>Residential Plot</strong>
              </div>

              <div className="payment-detail-row">
                <span>Booking Status</span>

                <span className="payment-status-badge">
                  ⏳ Pending
                </span>
              </div>


              <div className="payment-total">

                <div>
                  <small>
                    TOTAL AMOUNT
                  </small>

                  <strong>
                    ₹25 Lakhs
                  </strong>
                </div>

              </div>

            </div>


            {/* PAYMENT CARD */}
            <div className="payment-info-card">

              <div className="payment-card-heading">
                <span>PAYMENT</span>

                <h2>
                  Complete Your Payment
                </h2>

                <p>
                  This is a frontend payment demonstration.
                  The real payment gateway will be connected
                  later with the backend.
                </p>
              </div>


              <div className="payment-method">

                <div className="payment-method-icon">
                  💳
                </div>

                <div>
                  <strong>
                    Online Payment
                  </strong>

                  <p>
                    Secure payment through our platform
                  </p>
                </div>

              </div>


              <button
                className="payment-primary-btn"
                onClick={handlePayment}
                disabled={paymentStarted}
              >
                {paymentStarted
                  ? "Processing Payment..."
                  : "💳 Make Payment →"}
              </button>

            </div>

          </>
        )}


        {/* ACTIONS */}
        <div className="payment-actions">

          <Link to="/dashboard">
            <button className="payment-secondary-btn">
              ← Go to Dashboard
            </button>
          </Link>

          <Link to="/projects">
            <button className="payment-secondary-btn">
              Explore More Properties
            </button>
          </Link>

        </div>


        {/* NOTE */}
        {!paymentSuccess && (
          <div className="payment-info-note">

            <span>🔒</span>

            <div>
              <strong>
                Secure Payment
              </strong>

              <p>
                Your payment information is protected.
                The actual payment gateway will be integrated
                when the backend is connected.
              </p>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}

export default Payment;