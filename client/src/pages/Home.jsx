import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">

        <div className="home-hero-content">

          <span className="home-label">
            SMART PROPERTY PLATFORM
          </span>

          <h1>
            Find Your
            <br />
            Perfect Property
          </h1>

          <p>
            Discover verified properties, compare plots,
            predict prices and book your dream property
            with ease.
          </p>

          <div className="home-buttons">
            <Link to="/projects">
              <button className="home-primary-btn">
                Explore Properties →
              </button>
            </Link>

            <Link to="/chatbot">
              <button className="home-secondary-btn">
                🤖 Ask Assistant
              </button>
            </Link>
          </div>

        </div>

        <div className="home-hero-image">
          <div className="hero-property-card">
            <span>🏡</span>
            <div>
              <strong>Verified Properties</strong>
              <p>Find your future home</p>
            </div>
          </div>
        </div>

      </section>


      {/* STATS */}
      <section className="home-stats">

        <div>
          <strong>100+</strong>
          <span>Properties</span>
        </div>

        <div>
          <strong>500+</strong>
          <span>Available Plots</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Locations</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>AI Assistance</span>
        </div>

      </section>


      {/* FEATURES */}
      <section className="home-features">

        <div className="home-section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Everything You Need in One Place</h2>
          <p>
            Our platform makes property searching and booking
            simple, smart and convenient.
          </p>
        </div>

        <div className="home-feature-grid">

          <div className="home-feature-card">
            <div className="home-feature-icon">🏠</div>
            <h3>Property Search</h3>
            <p>
              Search properties based on your location,
              budget and requirements.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon">🤖</div>
            <h3>AI Recommendations</h3>
            <p>
              Get smart property suggestions based on
              your preferences.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon">💰</div>
            <h3>Price Prediction</h3>
            <p>
              Get estimated property prices using
              machine learning technology.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon">🔒</div>
            <h3>Secure Booking</h3>
            <p>
              Book your selected plot through a simple
              and secure process.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="home-how">

        <div className="home-section-heading">
          <span>SIMPLE PROCESS</span>
          <h2>How It Works</h2>
        </div>

        <div className="home-steps">

          <div className="home-step">
            <div className="step-number">01</div>
            <h3>Explore</h3>
            <p>
              Browse verified properties and find
              locations that match your needs.
            </p>
          </div>

          <div className="home-step">
            <div className="step-number">02</div>
            <h3>Compare</h3>
            <p>
              Compare plot sizes, prices and
              available options.
            </p>
          </div>

          <div className="home-step">
            <div className="step-number">03</div>
            <h3>Book</h3>
            <p>
              Select your plot and submit your
              booking details.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="home-cta">

        <div>
          <span>🏡</span>

          <div>
            <small>YOUR FUTURE STARTS HERE</small>

            <h2>
              Ready to find your perfect property?
            </h2>

            <p>
              Explore our properties and take the
              first step towards your future.
            </p>
          </div>
        </div>

        <Link to="/projects">
          <button>
            Explore Properties →
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Home;