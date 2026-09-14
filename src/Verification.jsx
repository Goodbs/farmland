import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  MapPin,
  Sprout,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

import "./verification.css";

function Verification({
  property,
  onContinue,
  onBack
}) {
  const [checks, setChecks] = useState({
    ownership: false,
    location: false,
    farmland: false
  });

  const toggleCheck = (name) => {
    setChecks((previous) => ({
      ...previous,
      [name]: !previous[name]
    }));
  };

  const completed =
    Object.values(checks).filter(Boolean).length;

  const ready =
    completed === 3;

  const farmName =
    property?.farmName ||
    "Your Farmland";

  const location =
    property
      ? `${property.location}, ${property.state}`
      : "Property Location";

  return (
    <div className="verification-page">

      {/* HEADER */}

      <header className="verification-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="verification-brand">

          <div>
            <Sprout size={20} />
          </div>

          <span>FarmLand</span>

        </div>

      </header>

      {/* PROGRESS */}

      <div className="verification-progress">

        <div className="verification-progress-top">

          <span>
            FARMER ONBOARDING
          </span>

          <strong>
            STEP 2 OF 3
          </strong>

        </div>

        <div className="verification-progress-bar">
          <span />
        </div>

      </div>

      {/* MAIN */}

      <main className="verification-content">

        <section className="verification-intro">

          <span className="section-label">
            PROPERTY REVIEW
          </span>

          <h1>
            Verify your
            <span> farmland details.</span>
          </h1>

          <p>
            Review the submitted property information
            before generating a FarmScore.
          </p>

          <div className="verification-property">

            <div className="verification-property-icon">
              <Sprout size={24} />
            </div>

            <div>
              <span>PROPERTY</span>

              <strong>
                {farmName}
              </strong>

              <p>
                <MapPin size={13} />
                {location}
              </p>
            </div>

          </div>

          <div className="verification-status">

            <div>

              <span>
                VERIFICATION PROGRESS
              </span>

              <strong>
                {completed} / 3 Complete
              </strong>

            </div>

            <div className="status-circle">
              {completed}/3
            </div>

          </div>

        </section>

        {/* CHECKLIST */}

        <section className="verification-card">

          <div className="verification-card-header">

            <div>
              <h2>
                Verification Checklist
              </h2>

              <p>
                Confirm each property requirement.
              </p>
            </div>

            <ShieldCheck size={24} />

          </div>

          {/* OWNERSHIP */}

          <button
            type="button"
            className={
              `verification-item ${
                checks.ownership
                  ? "checked"
                  : ""
              }`
            }
            onClick={() =>
              toggleCheck("ownership")
            }
          >

            <div className="verification-item-icon">
              <FileCheck size={22} />
            </div>

            <div className="verification-item-content">

              <strong>
                Ownership Information
              </strong>

              <span>
                Confirm that ownership details
                are accurate and available for review.
              </span>

            </div>

            <div className="check-icon">

              {checks.ownership ? (
                <CheckCircle2 size={24} />
              ) : (
                <div className="empty-check" />
              )}

            </div>

          </button>

          {/* LOCATION */}

          <button
            type="button"
            className={
              `verification-item ${
                checks.location
                  ? "checked"
                  : ""
              }`
            }
            onClick={() =>
              toggleCheck("location")
            }
          >

            <div className="verification-item-icon">
              <MapPin size={22} />
            </div>

            <div className="verification-item-content">

              <strong>
                Property Location
              </strong>

              <span>
                Confirm the district and state
                match the farmland location.
              </span>

            </div>

            <div className="check-icon">

              {checks.location ? (
                <CheckCircle2 size={24} />
              ) : (
                <div className="empty-check" />
              )}

            </div>

          </button>

          {/* FARM DETAILS */}

          <button
            type="button"
            className={
              `verification-item ${
                checks.farmland
                  ? "checked"
                  : ""
              }`
            }
            onClick={() =>
              toggleCheck("farmland")
            }
          >

            <div className="verification-item-icon">
              <Sprout size={22} />
            </div>

            <div className="verification-item-content">

              <strong>
                Farm Information
              </strong>

              <span>
                Confirm land size, crop information
                and property details.
              </span>

            </div>

            <div className="check-icon">

              {checks.farmland ? (
                <CheckCircle2 size={24} />
              ) : (
                <div className="empty-check" />
              )}

            </div>

          </button>

          {/* NOTICE */}

          {!ready && (

            <div className="verification-notice">

              <AlertCircle size={17} />

              <span>
                Complete all three checks to
                continue to FarmScore.
              </span>

            </div>

          )}

          {ready && (

            <div className="verification-ready">

              <CheckCircle2 size={18} />

              <span>
                Property review completed.
                Ready to generate FarmScore.
              </span>

            </div>

          )}

          {/* BUTTON */}

          <button
            className="verification-continue"
            disabled={!ready}
            onClick={onContinue}
          >

            Generate FarmScore

            <ArrowRight size={18} />

          </button>

        </section>

      </main>

    </div>
  );
}

export default Verification;
