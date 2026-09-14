import { useMemo, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Search,
  Sprout,
  ShieldCheck,
  TrendingUp,
  X
} from "lucide-react";

import "./marketplace.css";

const farms = [
  {
    id: "green-valley",
    name: "Green Valley Farm",
    location: "Nashik, Maharashtra",
    crop: "Grapes",
    landSize: 24,
    landUnit: "Acres",
    score: 92,
    availableUnits: 10000,
    unitPrice: 0.05,
    returnLabel: "Performance based",
    verified: true
  },
  {
    id: "sunrise",
    name: "Sunrise Organic Farm",
    location: "Pune, Maharashtra",
    crop: "Vegetables",
    landSize: 18,
    landUnit: "Acres",
    score: 88,
    availableUnits: 7500,
    unitPrice: 0.04,
    returnLabel: "Performance based",
    verified: true
  },
  {
    id: "riverbend",
    name: "Riverbend Farm",
    location: "Satara, Maharashtra",
    crop: "Sugarcane",
    landSize: 35,
    landUnit: "Acres",
    score: 85,
    availableUnits: 12000,
    unitPrice: 0.06,
    returnLabel: "Performance based",
    verified: true
  },
  {
    id: "golden-fields",
    name: "Golden Fields",
    location: "Ahmednagar, Maharashtra",
    crop: "Pomegranate",
    landSize: 12,
    landUnit: "Acres",
    score: 79,
    availableUnits: 5000,
    unitPrice: 0.03,
    returnLabel: "Performance based",
    verified: true
  }
];

function Marketplace({
  onBuy,
  onHome
}) {
  const [search, setSearch] = useState("");
  const [minScore, setMinScore] = useState("all");

  const filteredFarms = useMemo(() => {
    return farms.filter((farm) => {
      const text =
        `${farm.name} ${farm.location} ${farm.crop}`
          .toLowerCase();

      const matchesSearch =
        text.includes(search.toLowerCase());

      const matchesScore =
        minScore === "all" ||
        farm.score >= Number(minScore);

      return matchesSearch && matchesScore;
    });
  }, [search, minScore]);

  return (
    <div className="marketplace-page">

      {/* HEADER */}

      <header className="marketplace-header">

        <button
          className="back-button"
          onClick={onHome}
        >
          <ArrowLeft size={18} />
          Home
        </button>

        <div className="marketplace-brand">

          <div>
            <Sprout size={20} />
          </div>

          <span>FarmLand</span>

        </div>

        <div className="marketplace-count">
          {filteredFarms.length} Farms
        </div>

      </header>

      {/* HERO */}

      <section className="marketplace-hero">

        <div>

          <span className="section-label">
            FARMLAND MARKETPLACE
          </span>

          <h1>
            Discover verified
            <span> farmland.</span>
          </h1>

          <p>
            Explore property profiles, FarmScores
            and available fractional units before
            making an investment decision.
          </p>

        </div>

        <div className="marketplace-trust">

          <ShieldCheck size={22} />

          <div>
            <strong>
              Verified Listings
            </strong>

            <span>
              Review property information
              before investing.
            </span>
          </div>

        </div>

      </section>

      {/* FILTERS */}

      <section className="marketplace-tools">

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search farms, locations or crops..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
            >
              <X size={16} />
            </button>
          )}

        </div>

        <select
          value={minScore}
          onChange={(event) =>
            setMinScore(event.target.value)
          }
        >
          <option value="all">
            All FarmScores
          </option>

          <option value="90">
            FarmScore 90+
          </option>

          <option value="85">
            FarmScore 85+
          </option>

          <option value="80">
            FarmScore 80+
          </option>
        </select>

      </section>

      {/* FARM GRID */}

      <main className="farm-grid">

        {filteredFarms.map((farm) => (

          <article
            className="market-farm-card"
            key={farm.id}
          >

            <div className="farm-card-image">

              <Sprout size={50} />

              <span>
                VERIFIED FARMLAND
              </span>

              {farm.verified && (
                <div className="farm-verified">
                  <ShieldCheck size={14} />
                  Verified
                </div>
              )}

            </div>

            <div className="farm-card-content">

              <div className="farm-card-title">

                <div>
                  <h2>{farm.name}</h2>

                  <p>
                    <MapPin size={14} />
                    {farm.location}
                  </p>
                </div>

                <div className="score-badge">
                  {farm.score}
                </div>

              </div>

              <div className="farm-tags">

                <span>
                  {farm.crop}
                </span>

                <span>
                  {farm.landSize} {farm.landUnit}
                </span>

              </div>

              <div className="farm-stats">

                <div>

                  <span>
                    AVAILABLE
                  </span>

                  <strong>
                    {farm.availableUnits.toLocaleString()}
                    {" "}Units
                  </strong>

                </div>

                <div>

                  <span>
                    UNIT PRICE
                  </span>

                  <strong>
                    {farm.unitPrice} SOL
                  </strong>

                </div>

              </div>

              <div className="farm-return">

                <TrendingUp size={17} />

                <span>
                  {farm.returnLabel}
                </span>

              </div>

              <button
                className="buy-units-button"
                onClick={() => onBuy(farm)}
              >

                View & Buy Units

              </button>

            </div>

          </article>

        ))}

      </main>

      {/* EMPTY STATE */}

      {filteredFarms.length === 0 && (

        <section className="marketplace-empty">

          <Sprout size={40} />

          <h2>
            No farms found
          </h2>

          <p>
            Try changing your search or
            FarmScore filter.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setMinScore("all");
            }}
          >
            Reset Filters
          </button>

        </section>

      )}

    </div>
  );
}

export default Marketplace;
