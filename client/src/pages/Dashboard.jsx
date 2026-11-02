import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <span className="dashboard-label">MY ACCOUNT</span>

          <h1>Welcome to Your Dashboard 👋</h1>

          <p>
            Manage your property bookings, payments and preferences.
          </p>
        </div>

        <Link to="/projects">
          <button className="dashboard-explore-btn">
            Explore Properties →
          </button>
        </Link>
      </div>


      {/* DASHBOARD CARDS */}
      <div className="dashboard-cards">

        {/* BOOKINGS */}
        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            🏠
          </div>

          <span>MY BOOKINGS</span>

          <h2>1</h2>

          <p>
            Active property booking
          </p>

          <Link to="/projects">
            View Properties →
          </Link>
        </div>


        {/* PAYMENT */}
        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            💳
          </div>

          <span>PAYMENT STATUS</span>

          <h2>Pending</h2>

          <p>
            Payment waiting for completion
          </p>

          {/* FIXED LINK */}
          <Link to="/payment">
            Check Payment →
          </Link>
        </div>


        {/* AI ASSISTANT */}
        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            🤖
          </div>

          <span>PROPERTY ASSISTANT</span>

          <h2>AI Assistant</h2>

          <p>
            Get help finding the right property
          </p>

          <Link to="/chatbot">
            Open Chatbot →
          </Link>
        </div>

      </div>


      {/* RECENT BOOKING */}
      <section className="dashboard-booking">

        <div className="dashboard-section-title">

          <div>
            <span>RECENT ACTIVITY</span>

            <h2>
              My Property Booking
            </h2>
          </div>

          <span className="booking-active">
            ● Active
          </span>

        </div>


        <div className="dashboard-booking-details">

          <div>
            <small>PROPERTY</small>

            <strong>
              Green Valley Layout
            </strong>

            <p>
              📍 Mysore, Karnataka
            </p>
          </div>


          <div>
            <small>PLOT</small>

            <strong>
              Plot A-01
            </strong>

            <p>
              1200 sq.ft
            </p>
          </div>


          <div>
            <small>PRICE</small>

            <strong>
              ₹25 Lakhs
            </strong>

            <p>
              Starting price
            </p>
          </div>


          {/* FIXED LINK */}
          <Link to="/payment">
            <button>
              View Payment
            </button>
          </Link>

        </div>

      </section>


      {/* HELP SECTION */}
      <section className="dashboard-help">

        <div>

          <span>
            🤖
          </span>

          <div>

            <h2>
              Need help finding a property?
            </h2>

            <p>
              Ask our Property Assistant about
              locations, plots, prices and more.
            </p>

          </div>

        </div>


        <Link to="/chatbot">
          <button>
            Ask Assistant →
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Dashboard;