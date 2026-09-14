import { useState } from "react";

import App from "./App.jsx";
import Ownership from "./Ownership.jsx";
import Verification from "./Verification.jsx";
import FarmScore from "./FarmScore.jsx";
import Marketplace from "./Marketplace.jsx";
import BuyUnits from "./BuyUnits.jsx";
import PurchaseSuccess from "./PurchaseSuccess.jsx";
import Portfolio from "./Portfolio.jsx";

function PropertyFlow() {
  const [page, setPage] = useState("home");
  const [property, setProperty] = useState(null);
  const [purchase, setPurchase] = useState(null);

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

  if (page === "verification") {
    return (
      <Verification
        property={property}
        onContinue={() => setPage("farmscore")}
        onBack={() => setPage("ownership")}
      />
    );
  }

  if (page === "farmscore") {
    return (
      <FarmScore
        property={property}
        onMarketplace={() => setPage("marketplace")}
        onBack={() => setPage("verification")}
      />
    );
  }

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

  if (page === "buy") {
    return (
      <BuyUnits
        property={property}
        onContinue={(purchaseData) => {
          setPurchase(purchaseData);
          setPage("success");
        }}
        onBack={() => setPage("marketplace")}
      />
    );
  }

  if (page === "success") {
    return (
      <PurchaseSuccess
        purchase={purchase}
        onPortfolio={() => setPage("portfolio")}
      />
    );
  }

  if (page === "portfolio") {
    return (
      <Portfolio
        purchase={purchase}
        onMarketplace={() => setPage("marketplace")}
        onHome={() => setPage("home")}
      />
    );
  }

  return (
    <App
      onFarmer={() => setPage("ownership")}
      onInvestor={() => setPage("marketplace")}
    />
  );
}

export default PropertyFlow;
