import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  Loader2,
  ShieldCheck,
  Sprout,
  Wallet
} from "lucide-react";

import "./payment.css";

function Payment({
  purchase,
  onBack,
  onSuccess
}) {
  const [status, setStatus] =
    useState("ready");

  const farm =
    purchase?.farm;

  const quantity =
    purchase?.quantity || 0;

  const total =
    purchase?.total || 0;

  const handlePayment = () => {
    setStatus("processing");

    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="payment-page">

      {/* HEADER */}

      <header className="payment-header">

        <button
          className="back-button"
          onClick={onBack}
          disabled={status === "processing"}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="payment-brand">

          <div>
            <Sprout size={20} />
          </div>

          <span>FarmLand</span>

        </div>

      </header>

      {/* MAIN */}

      <main className="payment-content">

        <section className="payment-intro">

          <span className="section-label">
            TESTNET PAYMENT
          </span>

          <h1>
            Confirm your
            <span> purchase.</span>
          </h1>

          <p>
            Review your farmland unit purchase
            before confirming the testnet transaction.
          </p>

          <div className="payment-security">

            <ShieldCheck size={22} />

            <div>
              <strong>
                Testnet Transaction
              </strong>

              <span>
                No real funds are used in this demo.
              </span>
            </div>

          </div>

        </section>

        <section className="payment-card">

          {/* READY */}

          {status === "ready" && (
            <>
              <div className="payment-card-header">

                <div>
                  <span>
                    ORDER SUMMARY
                  </span>

                  <h2>
                    {farm?.name ||
                      "Selected Farm"}
                  </h2>
                </div>

                <Wallet size={25} />

              </div>

              <div className="payment-details">

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
                    Price Per Unit
                  </span>

                  <strong>
                    {farm?.unitPrice || 0} SOL
                  </strong>
                </div>

                <div className="payment-total">
                  <span>
                    TOTAL PAYMENT
                  </span>

                  <strong>
                    {Number(total).toFixed(4)} SOL
                  </strong>
                </div>

              </div>

              <div className="payment-wallet">

                <Wallet size={20} />

                <div>
                  <strong>
                    Wallet Payment
                  </strong>

                  <span>
                    Connect wallet in the next step.
                  </span>
                </div>

              </div>

              <button
                className="pay-button"
                onClick={handlePayment}
              >
                <Wallet size={18} />

                Confirm Testnet Payment

              </button>

              <p className="payment-note">
                This demo simulates a testnet
                transaction. Real wallet integration
                will be added separately.
              </p>
            </>
          )}

          {/* PROCESSING */}

          {status === "processing" && (
            <div className="payment-processing">

              <Loader2
                size={45}
                className="payment-spinner"
              />

              <h2>
                Processing Transaction
              </h2>

              <p>
                Confirming your farmland
                unit purchase on testnet...
              </p>

            </div>
          )}

          {/* SUCCESS */}

          {status === "success" && (
            <div className="payment-success">

              <CheckCircle2 size={60} />

              <h2>
                Purchase Successful!
              </h2>

              <p>
                You successfully purchased
                {" "}
                {quantity.toLocaleString()}
                {" "}
                units of
                {" "}
                {farm?.name}.
              </p>

              <div className="success-summary">

                <span>
                  Transaction Amount
                </span>

                <strong>
                  {Number(total).toFixed(4)} SOL
                </strong>

              </div>

              <button
                className="success-button"
                onClick={onSuccess}
              >
                View My Portfolio
              </button>

            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default Payment;
