import { Link, useParams } from "react-router-dom";

function PlotLayout() {
  const { id } = useParams();

  const projectNames = {
    1: "Green Valley Layout",
    2: "Sunrise Enclave",
    3: "Royal Garden Layout",
    4: "Lake View Residency",
    5: "Green Park Layout",
    6: "Royal Enclave",
  };

  const projectName = projectNames[id] || "Property Layout";

  const plots = [
    { number: "A-01", size: "1200 sq.ft", price: "₹25 Lakhs", status: "Available" },
    { number: "A-02", size: "1200 sq.ft", price: "₹25 Lakhs", status: "Booked" },
    { number: "A-03", size: "1500 sq.ft", price: "₹30 Lakhs", status: "Available" },
    { number: "A-04", size: "1500 sq.ft", price: "₹30 Lakhs", status: "Available" },
    { number: "A-05", size: "1800 sq.ft", price: "₹35 Lakhs", status: "Booked" },
    { number: "A-06", size: "1200 sq.ft", price: "₹25 Lakhs", status: "Available" },
    { number: "B-01", size: "1000 sq.ft", price: "₹20 Lakhs", status: "Available" },
    { number: "B-02", size: "1000 sq.ft", price: "₹20 Lakhs", status: "Booked" },
    { number: "B-03", size: "1500 sq.ft", price: "₹30 Lakhs", status: "Available" },
    { number: "B-04", size: "1800 sq.ft", price: "₹35 Lakhs", status: "Available" },
    { number: "B-05", size: "1200 sq.ft", price: "₹25 Lakhs", status: "Booked" },
    { number: "B-06", size: "1500 sq.ft", price: "₹30 Lakhs", status: "Available" },
  ];

  return (
    <div className="plot-page">

      {/* HEADER */}
      <section className="plot-header">

        <Link to={`/projects/${id}`} className="plot-back">
          ← Back to Property
        </Link>

        <span className="plot-label">
          PLOT LAYOUT
        </span>

        <h1>{projectName}</h1>

        <p>
          Select an available plot that matches your
          requirements.
        </p>

      </section>


      {/* LEGEND */}
      <section className="plot-legend">

        <div>
          <span className="legend-box available-box"></span>
          Available
        </div>

        <div>
          <span className="legend-box booked-box"></span>
          Booked
        </div>

      </section>


      {/* PLOT GRID */}
      <section className="plot-section">

        <div className="plot-section-heading">

          <div>
            <span>AVAILABLE OPTIONS</span>
            <h2>Choose Your Plot</h2>
          </div>

          <p>
            {plots.filter(
              (plot) => plot.status === "Available"
            ).length}{" "}
            plots available
          </p>

        </div>


        <div className="plot-grid">

          {plots.map((plot) => (

            <div
              className={`plot-card ${
                plot.status === "Available"
                  ? "plot-available"
                  : "plot-booked"
              }`}
              key={plot.number}
            >

              <div className="plot-number">
                {plot.number}
              </div>

              <div className="plot-road">
                🛣️ Road
              </div>

              <h3>
                Plot {plot.number}
              </h3>

              <p>
                📐 {plot.size}
              </p>

              <strong>
                {plot.price}
              </strong>

              <span className="plot-status">
                {plot.status}
              </span>

              {plot.status === "Available" ? (
                <Link to={`/booking/${id}/${plot.number}`}>
                  <button className="plot-book-button">
                    Select Plot →
                  </button>
                </Link>
              ) : (
                <button
                  className="plot-booked-button"
                  disabled
                >
                  Already Booked
                </button>
              )}

            </div>

          ))}

        </div>

      </section>


      {/* INFO */}
      <section className="plot-info">

        <div>
          <span>💡</span>

          <div>
            <h3>How to select a plot?</h3>

            <p>
              Choose any plot marked as Available.
              Check its size and price, then click
              "Select Plot" to continue with booking.
            </p>
          </div>
        </div>

      </section>


      {/* FOOTER CTA */}
      <section className="plot-cta">

        <div>
          <small>
            FIND YOUR PERFECT SPACE
          </small>

          <h2>
            Choose a plot for your future.
          </h2>
        </div>

        <Link to={`/projects/${id}`}>
          <button>
            Back to Property →
          </button>
        </Link>

      </section>

    </div>
  );
}

export default PlotLayout;