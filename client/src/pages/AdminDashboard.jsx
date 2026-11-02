import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="admin-page">

      {/* HEADER */}
      <section className="admin-header">
        <div>
          <span className="admin-label">
            ADMIN PANEL
          </span>

          <h1>
            Admin Dashboard 👨‍💼
          </h1>

          <p>
            Manage properties, plots, bookings and
            payments from one place.
          </p>
        </div>

        <Link to="/projects">
          <button className="admin-view-btn">
            View Properties →
          </button>
        </Link>
      </section>


      {/* STAT CARDS */}
      <section className="admin-stats">

        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            🏠
          </div>

          <div>
            <span>TOTAL PROPERTIES</span>
            <h2>100+</h2>
            <p>Listed properties</p>
          </div>
        </div>


        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            📐
          </div>

          <div>
            <span>TOTAL PLOTS</span>
            <h2>500+</h2>
            <p>Available plots</p>
          </div>
        </div>


        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            📋
          </div>

          <div>
            <span>BOOKINGS</span>
            <h2>28</h2>
            <p>Total bookings</p>
          </div>
        </div>


        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            👥
          </div>

          <div>
            <span>USERS</span>
            <h2>150+</h2>
            <p>Registered users</p>
          </div>
        </div>

      </section>


      {/* MAIN CONTENT */}
      <section className="admin-content">

        {/* RECENT BOOKINGS */}
        <div className="admin-panel-card">

          <div className="admin-panel-heading">

            <div>
              <span>
                RECENT ACTIVITY
              </span>

              <h2>
                Recent Bookings
              </h2>
            </div>

            <span className="admin-status">
              Live
            </span>

          </div>


          <div className="admin-booking-list">

            <div className="admin-booking-row">

              <div className="admin-user-icon">
                👤
              </div>

              <div>
                <strong>
                  Customer Booking
                </strong>

                <p>
                  Green Valley Layout • Plot A-01
                </p>
              </div>

              <span className="booking-pending">
                Pending
              </span>

            </div>


            <div className="admin-booking-row">

              <div className="admin-user-icon">
                👤
              </div>

              <div>
                <strong>
                  Customer Booking
                </strong>

                <p>
                  Sunrise Enclave • Plot B-03
                </p>
              </div>

              <span className="booking-confirmed">
                Confirmed
              </span>

            </div>


            <div className="admin-booking-row">

              <div className="admin-user-icon">
                👤
              </div>

              <div>
                <strong>
                  Customer Booking
                </strong>

                <p>
                  Royal Enclave • Plot A-06
                </p>
              </div>

              <span className="booking-pending">
                Pending
              </span>

            </div>

          </div>

        </div>


        {/* PAYMENT OVERVIEW */}
        <div className="admin-panel-card">

          <div className="admin-panel-heading">

            <div>
              <span>
                PAYMENT OVERVIEW
              </span>

              <h2>
                Payment Status
              </h2>
            </div>

          </div>


          <div className="payment-overview">

            <div className="payment-overview-item">
              <span className="overview-icon">
                💰
              </span>

              <div>
                <strong>
                  ₹4.5 Cr
                </strong>

                <p>
                  Total booking value
                </p>
              </div>
            </div>


            <div className="payment-overview-item">
              <span className="overview-icon">
                ✅
              </span>

              <div>
                <strong>
                  20
                </strong>

                <p>
                  Payments completed
                </p>
              </div>
            </div>


            <div className="payment-overview-item">
              <span className="overview-icon">
                ⏳
              </span>

              <div>
                <strong>
                  8
                </strong>

                <p>
                  Payments pending
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* MANAGEMENT */}
      <section className="admin-management">

        <div className="admin-section-title">

          <span>
            MANAGEMENT
          </span>

          <h2>
            Quick Actions
          </h2>

          <p>
            Quickly access important administration
            functions.
          </p>

        </div>


        <div className="admin-action-grid">

          <div className="admin-action-card">
            <div>🏠</div>

            <h3>
              Properties
            </h3>

            <p>
              View and manage property listings.
            </p>

            <Link to="/projects">
              Manage Properties →
            </Link>
          </div>


          <div className="admin-action-card">
            <div>📐</div>

            <h3>
              Plot Layouts
            </h3>

            <p>
              Check available and booked plots.
            </p>

            <Link to="/projects">
              Manage Plots →
            </Link>
          </div>


          <div className="admin-action-card">
            <div>📋</div>

            <h3>
              Bookings
            </h3>

            <p>
              Review customer booking requests.
            </p>

            <Link to="/dashboard">
              View Bookings →
            </Link>
          </div>


          <div className="admin-action-card">
            <div>💳</div>

            <h3>
              Payments
            </h3>

            <p>
              Monitor payment status and transactions.
            </p>

            <Link to="/payment">
              View Payments →
            </Link>
          </div>

        </div>

      </section>


      {/* FOOTER ACTION */}
      <section className="admin-bottom">

        <div>
          <span>
            🤖
          </span>

          <div>
            <h2>
              Property Assistant
            </h2>

            <p>
              Check the AI assistant and help users
              find suitable properties.
            </p>
          </div>
        </div>

        <Link to="/chatbot">
          <button>
            Open Assistant →
          </button>
        </Link>

      </section>

    </div>
  );
}

export default AdminDashboard;