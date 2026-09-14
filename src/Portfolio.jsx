import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Sprout,
  TrendingUp,
  Wallet
} from "lucide-react";

import "./portfolio.css";

function Portfolio({
  purchase,
  onMarketplace
}) {
  const farm = purchase?.farm;

  const quantity =
    purchase?.quantity || 0;

  const total =
    purchase?.total || 0;

  const unitPrice =
    farm?.unitPrice || 0;

  const farmName =
    farm?.name || "Your Farmland";

  const farmLocation =
    farm?.location || "Property Location";

  return (
    <div className="portfolio-page">

      {/* HEADER */}

      <header className="portfolio-header">

        <button
          className="back-button"
          onClick={onMarketplace}
        >
          <ArrowLeft size={18} />
          Marketplace
        </button>

        <div className="portfolio-brand">

          <div>
            <Sprout size={20} />
          </div>

          <span>FarmLand</span>

        </div>

      </header>

      {/* HERO */}

      <section className="portfolio-hero">

        <div>

          <span className="section-label">
            MY PORTFOLIO
          </span>

          <h1>
            Your farmland
            <span> ownership.</span>
          </h1>

          <p>
            Track your purchased farmland units
            and review your ownership portfolio.
          </p>

        </div>

        <button
          className="explore-button"
          onClick={onMarketplace}
        >
          <Sprout size={18} />
          Explore More Farms
        </button>

      </section>

      {/* SUMMARY */}

      <section className="portfolio-summary">

        <div className="portfolio-stat">

          <div className="portfolio-stat-icon">
            <Wallet size={22} />
          </div>

          <div>
            <span>
              TOTAL INVESTED
            </span>

            <strong>
              {Number(total).toFixed(4)} SOL
            </strong>
          </div>

        </div>

        <div className="portfolio-stat">

          <div className="portfolio-stat-icon">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <span>
              TOTAL UNITS
            </span>

            <strong>
              {quantity.toLocaleString()}
            </strong>
          </div>

        </div>

        <div className="portfolio-stat">

          <div className="portfolio-stat-icon">
            <TrendingUp size={22} />
          </div>

          <div>
            <span>
              ACTIVE FARMS
            </span>

            <strong>
              {farm ? 1 : 0}
            </strong>
          </div>

        </div>

      </section>

      {/* OWNERSHIP */}

      <main className="portfolio-content">

        <div className="portfolio-content-header">

          <div>

            <span className="section-label">
              OWNERSHIP
            </span>

            <h2>
              My Farmland Units
            </h2>

          </div>

          <span className="ownership-count">
            {farm ? 1 : 0} Active
          </span>

        </div>

        {farm ? (

          <article className="portfolio-farm-card">

            <div className="portfolio-farm-image">

              <Sprout size={52} />

              <span>
                VERIFIED FARMLAND
              </span>

            </div>

            <div className="portfolio-farm-info">

              <div className="portfolio-farm-top">

                <div>

                  <h2>
                    {farmName}
                  </h2>

                  <p>
                    <MapPin size={14} />
                    {farmLocation}
                  </p>

                </div>

                <div className="portfolio-score">
                  {farm.score}
                </div>

              </div>

              <div className="portfolio-details">

                <div>

                  <span>
                    YOUR UNITS
                  </span>

                  <strong>
                    {quantity.toLocaleString()}
                  </strong>

                </div>

                <div>

                  <span>
                    PURCHASE PRICE
                  </span>

                  <strong>
                    {unitPrice} SOL
                  </strong>

                </div>

                <div>

                  <span>
                    TOTAL VALUE
                  </span>

                  <strong>
                    {Number(total).toFixed(4)} SOL
                  </strong>

                </div>

              </div>

              <div className="portfolio-card-footer">

                <span>
                  Ownership recorded on testnet
                </span>

                <ArrowUpRight size={18} />

              </div>

            </div>

          </article>

        ) : (

          <section className="portfolio-empty">

            <Sprout size={45} />

            <h2>
              No farmland units yet
            </h2>

            <p>
              Explore the marketplace and
              purchase your first farmland units.
            </p>

            <button
              onClick={onMarketplace}
            >
              Explore Marketplace
            </button>

          </section>

        )}

      </main>

    </div>
  );
}

export default Portfolio;
