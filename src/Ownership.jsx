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
      setError("Please complete all required property details.");
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
      <header className="ownership-header">
        <button
          type="button"
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

      <div className="progress-wrap">
        <div className="progress-top">
          <span>FARMER ONBOARDING</span>
          <strong>STEP 1 OF 3</strong>
        </div>

        <div className="progress-bar">
          <span></span>
        </div>
      </div>

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
            Add your property information to begin the
            verification and FarmScore process.
          </p>

          <div className="ownership-benefits">
            <div>
              <FileCheck size={20} />
              <div>
                <strong>Transparent Verification</strong>
                <span>
                  Property details are prepared for review.
                </span>
              </div>
            </div>

            <div>
              <Ruler size={20} />
              <div>
                <strong>Land-Based Scoring</strong>
                <span>
                  FarmScore considers location, size and
                  farm information.
                </span>
              </div>
            </div>

            <div>
              <MapPin size={20} />
              <div>
                <strong>Marketplace Ready</strong>
                <span>
                  Verified farms can continue toward
                  marketplace review.
                </span>
              </div>
            </div>
          </div>
        </section>

        <form
          className="ownership-form"
          onSubmit={handleSubmit}
        >
          <div className="form-header">
            <div className="form-icon">
              <Sprout size={24} />
            </div>

            <div>
              <h2>Property Details</h2>
              <p>
                Enter accurate information about your farmland.
              </p>
            </div>
          </div>

          <div className="form-group">
            <label>Farm Name *</label>
            <input
              type="text"
              value={form.farmName}
              onChange={(event) =>
                updateField("farmName", event.target.value)
              }
              placeholder="Enter farm name"
            />
          </div>

          <div className="form-group">
            <label>Location / Village *</label>
            <input
              type="text"
              value={form.location}
              onChange={(event) =>
                updateField("location", event.target.value)
              }
              placeholder="Enter village or location"
            />
          </div>

          <div className="form-group">
            <label>State *</label>
            <input
              type="text"
              value={form.state}
              onChange={(event) =>
                updateField("state", event.target.value)
              }
              placeholder="Enter state"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Land Size *</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.landSize}
                onChange={(event) =>
                  updateField("landSize", event.target.value)
                }
                placeholder="0"
              />
            </div>

            <div className="form-group">
              <label>Unit</label>
              <select
                value={form.landUnit}
                onChange={(event) =>
                  updateField("landUnit", event.target.value)
                }
              >
                <option>Acres</option>
                <option>Hectares</option>
                <option>Sq. Meters</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Primary Crop *</label>
            <input
              type="text"
              value={form.cropType}
              onChange={(event) =>
                updateField("cropType", event.target.value)
              }
              placeholder="Example: Wheat, Rice, Cotton"
            />
          </div>

          <div className="form-group">
            <label>Ownership Type</label>
            <select
              value={form.ownershipType}
              onChange={(event) =>
                updateField(
                  "ownershipType",
                  event.target.value
                )
              }
            >
              <option>Individual</option>
              <option>Joint Ownership</option>
              <option>Family Owned</option>
              <option>Leased</option>
            </select>
          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="continue-button"
          >
            Continue
            <ArrowRight size={18} />
          </button>
        </form>
      </main>
    </div>
  );
}

export default Ownership;            verification and FarmScore process.
          </p>

          <div className="ownership-benefits">

            <div>
              <FileCheck size={20} />
              <div>
                <strong>Transparent Verification</strong>
                <span>
                  Property details are prepared for review.
                </span>
              </div>
            </div>

            <div>
              <Ruler size={20} />
              <div>
                <strong>Land-Based Scoring</strong>
                <span>
                  FarmScore considers location, size and
                  farm information.
                </span>
              </div>
            </div>

            <div>
              <MapPin size={20} />
              <div>
                <strong>Marketplace Ready</strong>
                <span>
                  Verified farms can continue toward
                  marketplace review.
                </span>
              </div>
            </div>

          </div>
        </section>

        <form
          className="ownership-form"
          onSubmit={handleSubmit}
        >

          <div className="form-header">

            <div className="form-icon">
              <Sprout size={24} />
            </div>

            <div>
              <h2>Property Details</h2>

              <p>
                Enter accurate information about your
                farmland.
              </p>
            </div>

          </div>

          <div className="form-group">
            <label>Farm Name *</label>

            <input
              type="text"
              value={form.farmName}
              onChange={(event) =>
                updateField("farmName", event.target.value)
              }
              placeholder="Enter farm name"
            />
          </div>

          <div className="form-group">
            <label>Location / Village *</label>

            <input
              type="text"
              value={form.location}
              onChange={(event) =>
                updateField("location", event.target.value)
              }
              placeholder="Enter village or location"
            />
          </div>

          <div className="form-group">
            <label>State *</label>

            <input
              type="text"
              value={form.state}
              onChange={(event) =>
                updateField("state", event.target.value)
              }
              placeholder="Enter state"
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Land Size *</label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={form.landSize}
                onChange={(event) =>
                  updateField("landSize", event.target.value)
                }
                placeholder="0"
              />
            </div>

            <div className="form-group">
              <label>Unit</label>

              <select
                value={form.landUnit}
                onChange={(event) =>
                  updateField("landUnit", event.target.value)
                }
              >
                <option>Acres</option>
                <option>Hectares</option>
                <option>Sq. Meters</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label>Primary Crop *</label>

            <input
              type="text"
              value={form.cropType}
              onChange={(event) =>
                updateField("cropType", event.target.value)
              }
              placeholder="Example: Wheat, Rice, Cotton"
            />
          </div>

          <div className="form-group">
            <label>Ownership Type</label>

            <select
              value={form.ownershipType}
              onChange={(event) =>
                updateField(
                  "ownershipType",
                  event.target.value
                )
              }
            >
              <option>Individual</option>
              <option>Joint Ownership</option>
              <option>Family Owned</option>
              <option>Leased</option>
            </select>
          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="continue-button"
          >
            Continue
            <ArrowRight size={18} />
          </button>

        </form>

      </main>

    </div>
  );
}

export default Ownership;
