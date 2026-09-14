import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  MapPin,
  Ruler,
  Sprout,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

import "./farmscore.css";

function FarmScore({
  property,
  onMarketplace,
  onBack
}) {
  const landSize =
    Number(property?.landSize) || 0;

  // Land size score
  const landScore =
    landSize >= 20
      ? 25
      : landSize >= 10
      ? 20
      : landSize >= 5
      ? 15
      : 10;

  // Location score
  const locationScore =
    property?.location
      ? 25
      : 10;

  // Crop score
  const cropScore =
    property?.cropType
      ? 25
      : 10;

  // Verification score
  const verificationScore = 25;

  const totalScore =
    landScore +
    locationScore +
    cropScore +
    verificationScore;

  const score =
    Math.min(totalScore, 100);

  let level = "Developing";
  let message =
    "More property information may improve investment readiness.";

  if (score >= 85) {
    level = "Investment Ready";
    message =
      "This farmland shows strong readiness for marketplace review.";
  } else if (score >= 70) {
    level = "Strong Potential";
    message =
      "This farmland has good fundamentals for investment.";
  } else if (score >= 50) {
    level = "Growing Potential";
    message =
      "This farmland has potential and can improve over time.";
  }

  return (
    <div className="farmscore-page">

      {/* HEADER */}

      <header className="farmscore-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="farmscore-brand">

          <div>
            <Sprout size={20} />
          </div>

          <span>FarmLand</span>

        </div>

      </header>

      {/* PROGRESS */}

      <div className="farmscore-progress">

        <div className="farmscore-progress-top">

          <span>
            FARMER ONBOARDING
          </span>

          <strong>
            STEP 3 OF 3
          </strong>

        </div>

        <div className="farmscore-progress-bar">
          <span />
        </div>

      </div>

      {/* MAIN */}

      <main className="farmscore-content">

        {/* LEFT */}

        <section className="farmscore-intro">

          <span className="section-label">
            FARMSCORE RESULT
          </span>

          <h1>
            Your farm is
            <span> being measured.</span>
          </h1>

          <p>
            FarmScore combines farmland size,
            location, crop information and
            verification status into a transparent
            readiness score.
          </p>

          <div className="farm-summary">

            <div className="farm-summary-icon">
              <Sprout size={24} />
            </div>

            <div>

              <span>PROPERTY</span>

              <strong>
                {property?.farmName ||
                  "Your Farmland"}
              </strong>

              <p>
                <MapPin size={13} />

                {property
                  ? `${property.location}, ${property.state}`
                  : "Property Location"}
              </p>

            </div>

          </div>

        </section>

        {/* SCORE CARD */}

        <section className="score-card">

          <div className="score-card-top">

            <div>

              <span>
                FARMLAND READINESS
              </span>

              <h2>
                FarmScore
              </h2>

            </div>

            <Award size={28} />

          </div>

          {/* BIG SCORE */}

          <div className="big-score">

            <div className="score-circle">

              <strong>
                {score}
              </strong>

              <span>
                / 100
              </span>

            </div>

            <div>

              <span className="score-level">
                {level}
              </span>

              <p>
                {message}
              </p>

            </div>

          </div>

          {/* SCORE DETAILS */}

          <div className="score-breakdown">

            <div className="score-row">

              <div>
                <Ruler size={18} />

                <span>
                  Land Size
                </span>
              </div>

              <strong>
                {landScore} / 25
              </strong>

            </div>

            <div className="score-row">

              <div>
                <MapPin size={18} />

                <span>
                  Location
                </span>
              </div>

              <strong>
                {locationScore} / 25
              </strong>

            </div>

            <div className="score-row">

              <div>
                <Sprout size={18} />

                <span>
                  Crop Information
                </span>
              </div>

              <strong>
                {cropScore} / 25
              </strong>

            </div>

            <div className="score-row">

              <div>
                <ShieldCheck size={18} />

                <span>
                  Verification
                </span>
              </div>

              <strong>
                {verificationScore} / 25
              </strong>

            </div>

          </div>

          {/* STATUS */}

          <div className="score-status">

            <CheckCircle2 size={19} />

            <div>

              <strong>
                Property Profile Complete
              </strong>

              <span>
                Your farm can now continue
                to marketplace review.
              </span>

            </div>

          </div>

          {/* ACTION */}

          <button
            className="marketplace-button"
            onClick={onMarketplace}
          >

            <TrendingUp size={18} />

            Explore Marketplace

            <ArrowRight size={18} />

          </button>

        </section>

      </main>

    </div>
  );
}

export default FarmScore;
