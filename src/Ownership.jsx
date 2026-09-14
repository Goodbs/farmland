import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sprout,
  FileCheck,
  Ruler
} from "lucide-react";

import "./ownership.css";

function Ownership({ onContinue, onBack }) {
  const [form, setForm] = useState({
    farmName: "",
    location: "",
    state: "",
    landSize: "",
    landUnit: "Acres",
    cropType: "",
    ownershipType: "Individual"
  });

  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.farmName ||
      !form.location ||
      !form.state ||
      !form.landSize ||
      !form.cropType
    ) {
      setError(
        "Please complete all required property details."
      );
      return;
    }

    const propertyData = {
      ...form,
      landSize: Number(form.landSize),
      id: `FARM-${Date.now()}`
    };

    onContinue?.(propertyData);
  };

  return (
    <div className="ownership-page">

      {/* HEADER */}

      <header className="ownership-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="ownership-brand">
          <div>
            <Sprout size={20} />
          </div>

          <span>FarmLand</span>
        </div>

      </header>

      {/* PROGRESS */}

      <div className="progress-wrap">

        <div className="progress-top">

          <span>
            FARMER ONBOARDING
          </span>

          <strong>
            STEP 1 OF 3
          </strong>

        </div>

        <div className="progress-bar">
          <span></span>
        </div>

      </div>

      {/* CONTENT */}

      <main className="ownership-content">

        <section className="ownership-intro">

          <span className="section-label">
            PROPERTY REGISTRATION
          </span>

          <h1>
            Tell us about
            <span> your farmland.</span>
          </h1>

          <p>
            Add your property information to begin
            the verification and FarmScore process.
          </p>

          <div className="ownership-benefits">

            <div>
              <FileCheck size={20} />

              <div>
                <strong>
                  Transparent Verification
                </strong>

                <span>
                  Property details are prepared
                  for review.
                </span>
              </div>
            </div>

            <div>
              <Ruler size={20} />

              <div>
                <strong>
                  Land-Based Scoring
                </strong>

                <span>
                  FarmScore considers location,
                  size and farm information.
                </span>
              </div>
            </div>

            <div>
              <MapPin size={20} />

              <div>
                <strong>
                  Marketplace Ready
                </strong>

                <span>
                  Verified farms can continue
                  toward marketplace review.
                </span>
              </div>
            </div>

          </div>

        </section>

        {/* FORM */}

        <form
          className="ownership-form"
          onSubmit={handleSubmit}
        >

          <div className="form-header">

            <div className="form-icon">
              <Sprout size={24} />
            </div>

            <div>
              <h2>
                Property Details
              </h2>

              <p>
               
