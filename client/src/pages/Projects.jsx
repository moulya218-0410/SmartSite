import { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [location, setLocation] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const [budget, setBudget] = useState("all");
  const [searchBudget, setSearchBudget] = useState("all");

  const [propertyType, setPropertyType] = useState("all");
  const [searchPropertyType, setSearchPropertyType] = useState("all");

  const [sortBy, setSortBy] = useState("default");

  const projects = [
    {
      id: 1,
      name: "Green Valley Layout",
      location: "Mysore, Karnataka",
      type: "Residential Plot",
      size: "1200 sq.ft",
      road: "30 ft Road",
      plots: "120+ Plots",
      price: "₹25 Lakhs",
      priceValue: 25,
      rating: 4.8,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Sunrise Enclave",
      location: "Bangalore, Karnataka",
      type: "Residential Plot",
      size: "1500 sq.ft",
      road: "40 ft Road",
      plots: "200+ Plots",
      price: "₹35 Lakhs",
      priceValue: 35,
      rating: 4.7,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Royal Garden Layout",
      location: "Tirupati, Andhra Pradesh",
      type: "Villa Plot",
      size: "1000 sq.ft",
      road: "30 ft Road",
      plots: "100+ Plots",
      price: "₹20 Lakhs",
      priceValue: 20,
      rating: 4.6,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Lake View Residency",
      location: "Coimbatore, Tamil Nadu",
      type: "Apartment",
      size: "1200 sq.ft",
      road: "25 ft Road",
      plots: "160+ Plots",
      price: "₹18 Lakhs",
      priceValue: 18,
      rating: 4.5,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      name: "Green Park Layout",
      location: "Hubli, Karnataka",
      type: "Commercial Property",
      size: "1000 sq.ft",
      road: "25 ft Road",
      plots: "100+ Plots",
      price: "₹18 Lakhs",
      priceValue: 18,
      rating: 4.4,
      status: "Coming Soon",
      image:
        "https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      name: "Royal Enclave",
      location: "Mysore, Karnataka",
      type: "Residential Plot",
      size: "1600 sq.ft",
      road: "40 ft Road",
      plots: "180+ Plots",
      price: "₹38 Lakhs",
      priceValue: 38,
      rating: 4.9,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    },
  ];

  // Filter properties
  const filteredProjects = projects.filter((project) => {
    const matchesLocation = project.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());

    let matchesBudget = true;

    if (searchBudget === "under20") {
      matchesBudget = project.priceValue < 20;
    }

    if (searchBudget === "20to30") {
      matchesBudget =
        project.priceValue >= 20 &&
        project.priceValue <= 30;
    }

    if (searchBudget === "30to40") {
      matchesBudget =
        project.priceValue > 30 &&
        project.priceValue <= 40;
    }

    if (searchBudget === "above40") {
      matchesBudget = project.priceValue > 40;
    }

    const matchesPropertyType =
      searchPropertyType === "all" ||
      project.type === searchPropertyType;

    return (
      matchesLocation &&
      matchesBudget &&
      matchesPropertyType
    );
  });

  // Sort properties
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "lowToHigh") {
      return a.priceValue - b.priceValue;
    }

    if (sortBy === "highToLow") {
      return b.priceValue - a.priceValue;
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });

  // Search button
  const handleSearch = () => {
    setSearchLocation(location);
    setSearchBudget(budget);
    setSearchPropertyType(propertyType);
  };

  // Reset button
  const handleReset = () => {
    setLocation("");
    setSearchLocation("");

    setBudget("all");
    setSearchBudget("all");

    setPropertyType("all");
    setSearchPropertyType("all");

    setSortBy("default");
  };

  return (
    <div className="projects-page">

      {/* HEADER */}
      <section className="projects-header">
        <div>
          <span className="projects-label">
            EXPLORE PROPERTIES
          </span>

          <h1>Find Your Perfect Property</h1>

          <p>
            Discover verified properties in prime
            locations across Karnataka and beyond.
          </p>
        </div>
      </section>


      {/* SEARCH SECTION */}
      <section className="property-search">

        {/* LOCATION */}
        <div className="search-field">
          <span>📍</span>

          <div>
            <small>Location</small>

            <input
              type="text"
              placeholder="Search location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />
          </div>
        </div>


        {/* PROPERTY TYPE */}
        <div className="search-field">
          <span>🏠</span>

          <div>
            <small>Property Type</small>

            <select
              value={propertyType}
              onChange={(e) =>
                setPropertyType(e.target.value)
              }
            >
              <option value="all">
                All Properties
              </option>

              <option value="Residential Plot">
                Residential Plot
              </option>

              <option value="Apartment">
                Apartment
              </option>

              <option value="Commercial Property">
                Commercial Property
              </option>

              <option value="Villa Plot">
                Villa Plot
              </option>
            </select>
          </div>
        </div>


        {/* BUDGET */}
        <div className="search-field">
          <span>💰</span>

          <div>
            <small>Budget</small>

            <select
              value={budget}
              onChange={(e) =>
                setBudget(e.target.value)
              }
            >
              <option value="all">
                Select budget
              </option>

              <option value="under20">
                Under ₹20 Lakhs
              </option>

              <option value="20to30">
                ₹20–30 Lakhs
              </option>

              <option value="30to40">
                ₹30–40 Lakhs
              </option>

              <option value="above40">
                Above ₹40 Lakhs
              </option>
            </select>
          </div>
        </div>


        {/* SEARCH + RESET */}
        <div className="search-actions">

          <button
            className="search-button"
            onClick={handleSearch}
          >
            🔍 Search
          </button>

          <button
            className="reset-button"
            onClick={handleReset}
          >
            🔄 Reset
          </button>

        </div>

      </section>


      {/* RESULTS HEADING */}
      <section className="results-heading">

        <div>
          <h2>Featured Properties</h2>

          <p>
            Showing {sortedProjects.length} properties
          </p>
        </div>


        {/* SORT */}
        <select
          className="sort-button"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="default">
            Sort by
          </option>

          <option value="lowToHigh">
            Price: Low to High
          </option>

          <option value="highToLow">
            Price: High to Low
          </option>

          <option value="name">
            Name: A to Z
          </option>
        </select>

      </section>


      {/* PROPERTY CARDS */}
      <section className="projects-grid">

        {sortedProjects.length > 0 ? (

          sortedProjects.map((project) => (

            <div
              className="modern-property-card"
              key={project.id}
            >

              {/* IMAGE */}
              <div className="property-card-image">

                <img
                  src={project.image}
                  alt={project.name}
                />

                <span
                  className={
                    project.status === "Available"
                      ? "status available"
                      : "status coming"
                  }
                >
                  {project.status}
                </span>

              </div>


              {/* CARD CONTENT */}
              <div className="property-card-content">

                <h3>{project.name}</h3>

                <p className="card-location">
                  📍 {project.location}
                </p>

                <p className="card-location">
                  🏠 {project.type}
                </p>


                {/* RATING */}
                <div className="property-rating">
                  ⭐ {project.rating}
                  <span> / 5</span>
                </div>


                {/* PROPERTY INFO */}
                <div className="property-info-row">

                  <span>
                    📐 {project.size}
                  </span>

                  <span>
                    🛣️ {project.road}
                  </span>

                </div>


                <div className="property-info-row">

                  <span>
                    🏘️ {project.plots}
                  </span>

                </div>


                {/* PRICE + DETAILS */}
                <div className="card-bottom">

                  <div>

                    <small>
                      Starting from
                    </small>

                    <strong>
                      {project.price}
                    </strong>

                  </div>


                  <Link
                    to={`/projects/${project.id}`}
                  >
                    <button>
                      View Details →
                    </button>
                  </Link>

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="no-properties">

            <h3>
              No properties found
            </h3>

            <p>
              Try changing your filters.
            </p>

          </div>

        )}

      </section>


      {/* CTA */}
      <section className="projects-cta">

        <div>

          <span>🏡</span>

          <div>

            <h2>
              Don't just find a property.
            </h2>

            <p>
              Find a place for your future.
            </p>

          </div>

        </div>


        <Link to="/">
          <button>
            Back to Home →
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Projects;