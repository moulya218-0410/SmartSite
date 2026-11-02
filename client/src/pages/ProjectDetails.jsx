import { Link, useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    1: {
      name: "Green Valley Layout",
      location: "Mysore, Karnataka",
      type: "Residential Plot",
      price: "₹25 Lakhs",
      size: "1200 sq.ft",
      road: "30 Feet",
      plots: "120+",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    },

    2: {
      name: "Sunrise Enclave",
      location: "Bangalore, Karnataka",
      type: "Residential Plot",
      price: "₹35 Lakhs",
      size: "1500 sq.ft",
      road: "40 Feet",
      plots: "200+",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    },

    3: {
      name: "Royal Garden Layout",
      location: "Tirupati, Andhra Pradesh",
      type: "Villa Plot",
      price: "₹20 Lakhs",
      size: "1000 sq.ft",
      road: "30 Feet",
      plots: "100+",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    },

    4: {
      name: "Lake View Residency",
      location: "Coimbatore, Tamil Nadu",
      type: "Apartment",
      price: "₹18 Lakhs",
      size: "1200 sq.ft",
      road: "25 Feet",
      plots: "160+",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85",
    },

    5: {
      name: "Green Park Layout",
      location: "Hubli, Karnataka",
      type: "Commercial Property",
      price: "₹18 Lakhs",
      size: "1000 sq.ft",
      road: "25 Feet",
      plots: "100+",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?auto=format&fit=crop&w=1400&q=85",
    },

    6: {
      name: "Royal Enclave",
      location: "Mysore, Karnataka",
      type: "Residential Plot",
      price: "₹38 Lakhs",
      size: "1600 sq.ft",
      road: "40 Feet",
      plots: "180+",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    },
  };

  const project = projects[id] || projects[1];

  return (
    <div className="details-page">

      {/* TOP BAR */}
      <div className="details-top">

        <Link
          to="/projects"
          className="details-back"
        >
          ← Back to Properties
        </Link>

        <span className="details-verified">
          ✓ Verified Property
        </span>

      </div>


      {/* HERO */}
      <section className="details-hero">

        {/* IMAGE */}
        <div className="details-main-image">

          <img
            src={project.image}
            alt={project.name}
          />

          <div className="image-tag">
            🏡 {project.type}
          </div>

        </div>


        {/* INFORMATION */}
        <div className="details-info">

          <span className="details-category">
            {project.type.toUpperCase()}
          </span>

          <h1>
            {project.name}
          </h1>

          <p className="details-location">
            📍 {project.location}
          </p>

          {/* RATING */}
          <div className="details-rating">
            ⭐ {project.rating} / 5
          </div>


          {/* PRICE */}
          <div className="details-price">

            <small>
              Starting from
            </small>

            <strong>
              {project.price}
            </strong>

          </div>


          {/* STATS */}
          <div className="details-stats">

            <div>
              <span>📐</span>
              <strong>{project.size}</strong>
              <small>Plot Size</small>
            </div>

            <div>
              <span>🛣️</span>
              <strong>{project.road}</strong>
              <small>Road Width</small>
            </div>

            <div>
              <span>🏘️</span>
              <strong>{project.plots}</strong>
              <small>Plots</small>
            </div>

          </div>


          {/* PLOT BUTTON */}
          <Link
            to={`/plots/${id}`}
          >
            <button className="details-primary-btn">
              View Available Plots →
            </button>
          </Link>

        </div>

      </section>


      {/* ABOUT */}
      <section className="details-about">

        <div className="details-section-heading">

          <span>
            ABOUT THE PROPERTY
          </span>

          <h2>
            Everything You Need for a Better Future
          </h2>

        </div>

        <p>
          {project.name} is a thoughtfully planned
          {` ${project.type.toLowerCase()}`} located in{" "}
          {project.location}. The property offers
          well-planned spaces, convenient access and
          good connectivity to important facilities.
          It is suitable for building a dream home,
          business use or long-term investment.
        </p>

      </section>


      {/* FEATURES */}
      <section className="details-features">

        <div className="details-feature-card">

          <div className="feature-icon">
            📍
          </div>

          <div>
            <h3>
              Prime Location
            </h3>

            <p>
              Conveniently located with easy access
              to important areas and transportation.
            </p>
          </div>

        </div>


        <div className="details-feature-card">

          <div className="feature-icon">
            🛣️
          </div>

          <div>
            <h3>
              Wide Roads
            </h3>

            <p>
              Well-planned roads provide comfortable
              access to the property.
            </p>
          </div>

        </div>


        <div className="details-feature-card">

          <div className="feature-icon">
            🏫
          </div>

          <div>
            <h3>
              Nearby Facilities
            </h3>

            <p>
              Schools, hospitals, shops and other
              daily facilities are easily accessible.
            </p>
          </div>

        </div>


        <div className="details-feature-card">

          <div className="feature-icon">
            🔒
          </div>

          <div>
            <h3>
              Trusted Investment
            </h3>

            <p>
              A suitable property option for your
              future and long-term investment.
            </p>
          </div>

        </div>

      </section>


      {/* LOCATION */}
      <section className="details-location-section">

        <div>

          <span className="details-category">
            LOCATION ADVANTAGE
          </span>

          <h2>
            Everything Nearby
          </h2>

          <p>
            Enjoy convenient access to essential
            facilities around the property.
          </p>

        </div>


        <div className="location-items">

          <div>
            <span>🏫</span>
            <strong>Schools</strong>
            <small>Nearby</small>
          </div>

          <div>
            <span>🏥</span>
            <strong>Hospitals</strong>
            <small>Nearby</small>
          </div>

          <div>
            <span>🛒</span>
            <strong>Shopping</strong>
            <small>Nearby</small>
          </div>

          <div>
            <span>🚗</span>
            <strong>Transport</strong>
            <small>Easy Access</small>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="details-cta">

        <div>

          <small>
            READY TO TAKE THE NEXT STEP?
          </small>

          <h2>
            Find your perfect plot today.
          </h2>

        </div>

        <Link
          to={`/plots/${id}`}
        >
          <button>
            Explore Available Plots →
          </button>
        </Link>

      </section>

    </div>
  );
}

export default ProjectDetails;