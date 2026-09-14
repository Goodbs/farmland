import { useState } from "react";
import {
  Sprout,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Coins,
  Users,
  BarChart3
} from "lucide-react";

import "./app.css";

function App() {
  const [activeRole, setActiveRole] = useState(null);

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">
            <Sprout size={22} />
          </div>

          <span>FarmLand</span>
        </div>

        <div className="nav-links">
          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#invest">
            Invest
          </a>
        </div>

        <button
          className="nav-button"
          onClick={() => setActiveRole("investor")}
        >
          Explore Farms
          <ArrowRight size={16} />
        </button>

      </nav>

      {/* HERO */}

      <main className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            <ShieldCheck size={15} />
            VERIFIED FARMLAND ON SOLANA
          </div>

          <h1>
            Invest in
            <span> Real Farmland.</span>
            <br />
            Grow Together.
          </h1>

          <p>
            FarmLand connects verified farmland,
            farmers and investors through transparent
            digital ownership and on-chain settlement.
          </p>

          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() =>
                setActiveRole("farmer")
              }
            >
              <Sprout size={18} />
              List Your Farmland
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                setActiveRole("investor")
              }
            >
              <TrendingUp size={18} />
              Invest in Farms
            </button>

          </div>

          {activeRole && (

            <div className="role-message">

              {activeRole === "farmer" ? (
                <>
                  <Sprout size={20} />

                  <span>
                    Farmer flow will start with
                    property registration.
                  </span>
                </>
              ) : (
                <>
                  <TrendingUp size={20} />

                  <span>
                    Investor flow will open the
                    farmland marketplace.
                  </span>
                </>
              )}

            </div>

          )}

        </div>

        {/* HERO CARD */}

        <div className="hero-card">

          <div className="hero-card-top">

            <div>
              <span>
                FEATURED PROPERTY
              </span>

              <h2>
                Green Valley Farm
              </h2>
            </div>

            <div className="verified-icon">
              <ShieldCheck size={20} />
            </div>

          </div>

          <div className="farm-image">

            <Sprout size={64} />

            <span>
              VERIFIED FARMLAND
            </span>

          </div>

          <div className="farm-details">

            <div>
              <span>FARMSCORE</span>
              <strong>87 / 100</strong>
            </div>

            <div>
              <span>AVAILABLE UNITS</span>
              <strong>10,000</strong>
            </div>

            <div>
              <span>EST. PROFIT SHARE</span>
              <strong>70%</strong>
            </div>

          </div>

          <button
            className="card-button"
            onClick={() =>
              setActiveRole("investor")
            }
          >
            View Investment
            <ArrowRight size={17} />
          </button>

        </div>

      </main>

      {/* STATS */}

      <section className="stats">

        <div>
          <Coins size={22} />
          <strong>Fractional Ownership</strong>
          <span>
            Buy farmland units with SOL
          </span>
        </div>

        <div>
          <ShieldCheck size={22} />
          <strong>Land Verification</strong>
          <span>
            Transparent property records
          </span>
        </div>

        <div>
          <Users size={22} />
          <strong>Farmer Proposals</strong>
          <span>
            Vote on farm plans
          </span>
        </div>

        <div>
          <BarChart3 size={22} />
          <strong>Profit Tracking</strong>
          <span>
            Follow farm performance
          </span>
        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            Farmland ownership,
            <span> made transparent.</span>
          </h2>

        </div>

        <div className="steps-grid">

          <div className="step-card">
            <span className="step-number">
              01
            </span>

            <Sprout size={25} />

            <h3>
              Register Land
            </h3>

            <p>
              Landowners submit property details
              and ownership information.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">
              02
            </span>

            <ShieldCheck size={25} />

            <h3>
              Verify & Score
            </h3>

            <p>
              Properties are reviewed and receive
              a transparent FarmScore.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">
              03
            </span>

            <Coins size={25} />

            <h3>
              Invest in Units
            </h3>

            <p>
              Investors purchase fractional units
              using their Solana wallet.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">
              04
            </span>

            <TrendingUp size={25} />

            <h3>
              Track Returns
            </h3>

            <p>
              Follow farm performance and
              transparent profit distribution.
            </p>
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        className="features-section"
        id="features"
      >

        <div className="feature-highlight">

          <span className="section-label">
            BUILT FOR REAL FARMS
          </span>

          <h2>
            Farmers manage.
            <span> Investors participate.</span>
          </h2>

          <p>
            Farm unit owners can participate in
            important proposals while farmers
            continue managing daily agricultural
            operations.
          </p>

        </div>

        <div className="feature-list">

          <div>
            <ShieldCheck size={22} />
            Verified property process
          </div>

          <div>
            <Coins size={22} />
            Fractional farm units
          </div>

          <div>
            <Users size={22} />
            Community proposals
          </div>

          <div>
            <BarChart3 size={22} />
           
