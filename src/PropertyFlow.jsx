import { useState } from "react";

import App from "./App.jsx";
import Ownership from "./Ownership.jsx";
import Verification from "./Verification.jsx";
import FarmScore from "./FarmScore.jsx";
import Marketplace from "./Marketplace.jsx";
import BuyUnits from "./BuyUnits.jsx";
import Payment from "./Payment.jsx";
import Portfolio from "./Portfolio.jsx";

function PropertyFlow() {
  const [page, setPage] = useState("home");
  const [property, setProperty] = useState(null);
  const [purchase, setPurchase] = useState(null);

  // HOME
  if (page === "home") {
    return (
      <App
        onFarmer={() => setPage("ownership")}
        onInvestor={() => setPage("marketplace")}
      />
    );
  }

  // STEP 1: OWNERSHIP
  if (page === "ownership") {
    return (
      <Ownership
        onContinue={(propertyData) => {
          setProperty(propertyData);
          setPage("verification");
        }}
        onBack={() => setPage("home")}
      />
    );
  }

  // STEP 2: VERIFICATION
  if (page === "verification") {
    return (
      <Verification
        property={property}
        onContinue={() => setPage("farmscore")}
        onBack={() => setPage("ownership")}
      />
    );
  }

  // STEP 3: FARM SCORE
  if (page === "farmscore") {
    return (
      <FarmScore
        property={property}
        onMarketplace={() => setPage("marketplace")}
        onBack={() => setPage("verification")}
      />
    );
  }

  // MARKETPLACE
  if (page === "marketplace") {
    return (
      <Marketplace
        onBuy={(farm) => {
          setProperty(farm);
          setPage("buy");
        }}
        onHome={() => setPage("home")}
      />
    );
  }

  // BUY UNITS
  if (page === "buy") {
    return (
      <BuyUnits
        farm={property}
        onBack={() => setPage("marketplace")}
        onPurchase={(purchaseData) => {
          setPurchase(purchaseData);
          setPage("payment");
        }}
      />
    );
  }

  // PAYMENT
  if (page === "payment") {
    return (
      <Payment
        property={property}
        purchase={purchase}
        onBack={() => setPage("buy")}
        onSuccess={() => setPage("portfolio")}
      />
    );
  }

  // PORTFOLIO
  if (page === "portfolio") {
    return (
      <Portfolio
        purchase={purchase}
        property={property}
        onMarketplace={() => setPage("marketplace")}
        onHome={() => setPage("home")}
      />
    );
  }

  return <App />;
}

export default PropertyFlow;
