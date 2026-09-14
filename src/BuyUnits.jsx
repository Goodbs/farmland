import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Minus,
  Plus,
  ShieldCheck,
  Sprout,
  Wallet
} from "lucide-react";

import "./buyunits.css";

function BuyUnits({ farm, onBack, onPurchase }) {
  const [quantity, setQuantity] = useState(1);

  const unitPrice = Number(farm?.unitPrice || 0);
  const availableUnits = Number(farm?.availableUnits || 0);

  const total = quantity * unitPrice;

  const increaseQuantity = () => {
    if (quantity < availableUnits) {
      setQuantity((current) => current + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((current) => current - 1);
    }
  };

  const handlePurchase = () => {
    if (!farm || availableUnits < 1) return;

    if (onPurchase) {
      onPurchase({
        farm,
        quantity,
        unitPrice,
        total
      });
    }
  };

  return (
    <div className="buyunits-page">

      <header className="buyunits-header">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Marketplace
        </button>

        <div className="buyunits-brand">
          <div>
            <Sprout size={20} />
          </div>
          <span>FarmLand</span>
        </div>
      </header>

      <main className="buyunits-content">

        <section className="buyunits-intro">

          <span className="section-label">
            FRACTIONAL FARMLAND
          </span>

          <h1>
            Buy units of
            <span> verified farmland.</span>
          </h1>

          <p>
            Choose how many units you want to purchase.
            Review your order before continuing.
          </p>

          <div className="selected-farm">
            <div className="selected-farm-icon">
              <Sprout size={28} />
            </div>

            <div>
              <span>SELECTED FARM</span>

              <strong>
                {farm?.name || "Farmland"}
              </strong>

              <p>
                FarmScore: {farm?.score || 0}
              </p>
            </div>
          </div>

          <div className="buyunits-features">

            <div>
              <ShieldCheck size={19} />
              <span>Verified property profile</span>
            </div>

            <div>
              <Wallet size={19} />
              <span>Wallet payment on testnet</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Transparent unit ownership</span>
            </div>

          </div>
        </section>

        <section className="purchase-card">

          <div className="purchase-card-header">
            <div>
              <span>PURCHASE UNITS</span>
              <h2>{farm?.name || "Selected Farm"}</h2>
            </div>

            <div className="purchase-score">
              {farm?.score || 0}
            </div>
          </div>

          <div className="unit-price-box">
            <span>PRICE PER UNIT</span>
            <strong>{unitPrice} SOL</strong>
          </div>

          <div className="quantity-section">

            <div className="quantity-label">
              <span>NUMBER OF UNITS</span>

              <strong>
                Available: {availableUnits.toLocaleString()}
              </strong>
            </div>

            <div className="quantity-control">

              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus size={18} />
              </button>

              <strong>
                {quantity.toLocaleString()}
              </strong>

              <button
                type="button"
                onClick={increaseQuantity}
                disabled={
                  availableUnits < 1 ||
                  quantity >= availableUnits
                }
              >
                <Plus size={18} />
              </button>

            </div>
          </div>

          <div className="purchase-summary">

            <div>
              <span>Units</span>
              <strong>{quantity.toLocaleString()}</strong>
            </div>

            <div>
              <span>Price per unit</span>
              <strong>{unitPrice} SOL</strong>
            </div>

            <div className="purchase-total">
              <span>TOTAL</span>
              <strong>{total.toFixed(4)} SOL</strong>
            </div>

          </div>

          <button
            type="button"
            className="confirm-purchase-button"
            onClick={handlePurchase}
            disabled={!farm || availableUnits < 1}
          >
            <Wallet size={18} />
            Continue to Payment
          </button>

          <p className="purchase-note">
            Testnet transaction. No real funds are used.
          </p>

        </section>

      </main>
    </div>
  );
}

export default BuyUnits;              <p>
                FarmScore: {farm?.score || 0}
              </p>

            </div>

          </div>

          <div className="buyunits-features">

            <div>
              <ShieldCheck size={19} />

              <span>
                Verified property profile
              </span>
            </div>

            <div>
              <Wallet size={19} />

              <span>
                Wallet payment on testnet
              </span>
            </div>

            <div>
              <CheckCircle2 size={19} />

              <span>
                Transparent unit ownership
              </span>
            </div>

          </div>

        </section>

        {/* PURCHASE CARD */}

        <section className="purchase-card">

          <div className="purchase-card-header">

            <div>

              <span>
                PURCHASE UNITS
              </span>

              <h2>
                {farm?.name || "Selected Farm"}
              </h2>

            </div>

            <div className="purchase-score">
              {farm?.score || 0}
            </div>

          </div>

          {/* PRICE */}

          <div className="unit-price-box">

            <span>
              PRICE PER UNIT
            </span>

            <strong>
              {unitPrice} SOL
            </strong>

          </div>

          {/* QUANTITY */}

          <div className="quantity-section">

            <div className="quantity-label">

              <span>
                NUMBER OF UNITS
              </span>

              <strong>
                Available:
                {" "}
                {availableUnits.toLocaleString()}
              </strong>

            </div>

            <div className="quantity-control">

              <button
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus size={18} />
              </button>

              <strong>
                {quantity.toLocaleString()}
              </strong>

              <button
                onClick={increaseQuantity}
                disabled={
                  quantity >= availableUnits
                }
              >
                <Plus size={18} />
              </button>

            </div>

          </div>

          {/* SUMMARY */}

          <div className="purchase-summary">

            <div>

              <span>
                Units
              </span>

              <strong>
                {quantity.toLocaleString()}
              </strong>

            </div>

            <div>

              <span>
                Price per unit
              </span>

              <strong>
                {unitPrice} SOL
              </strong>

            </div>

            <div className="purchase-total">

              <span>
                TOTAL
              </span>

              <strong>
                {total.toFixed(4)} SOL
              </strong>

            </div>

          </div>

          {/* BUY */}

          <button
            className="confirm-purchase-button"
            onClick={() =>
              onPurchase({
                farm,
                quantity,
                total
              })
            }
          >

            <Wallet size={18} />

            Continue to Payment

          </button>

          <p className="purchase-note">
            Testnet transaction. No real funds are used.
          </p>

        </section>

      </main>

    </div>
  );
}

export default BuyUnits;
