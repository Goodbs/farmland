import { useState } from "react";

import PropertyFlow from "./PropertyFlow";
import Ownership from "./Ownership";
import Verification from "./Verification";
import FarmScore from "./FarmScore";
import Marketplace from "./Marketplace";
import BuyUnits from "./BuyUnits";
import Payment from "./Payment";
import Portfolio from "./Portfolio";

function AppRouter() {
  const [page, setPage] = useState("home");

  const [selectedFarm, setSelectedFarm] =
    useState(null);

  const [purchase, setPurchase] =
    useState(null);

  if (page === "home") {
    return (
      <PropertyFlow
        onNext={() =>
          setPage("ownership")
        }
      />
    );
  }

  if (page === "ownership") {
    return (
      <Ownership
        onNext={() =>
          setPage("verification")
        }
        onBack={() =>
          setPage("home")
        }
      />
    );
  }

  if (page === "verification") {
    return (
      <Verification
        onNext={() =>
          setPage("farmscore")
        }
        onBack={() =>
          setPage("ownership")
        }
      />
    );
  }

  if (page === "farmscore") {
    return (
      <FarmScore
        onNext={() =>
          setPage("marketplace")
        }
        onBack={() =>
          setPage("verification")
        }
      />
    );
  }

  if (page === "marketplace") {
    return (
      <Marketplace
        onHome={() =>
          setPage("home")
        }
        onBuy={(farm) => {
          setSelectedFarm(farm);
          setPage("buy");
        }}
      />
    );
  }

  if (page === "buy") {
    return (
      <BuyUnits
        farm={selectedFarm}
        onBack={() =>
          setPage("marketplace")
        }
        onPurchase={(order) => {
          setPurchase(order);
          setPage("payment");
        }}
      />
    );
  }

  if (page === "payment") {
    return (
      <Payment
        purchase={purchase}
        onBack={() =>
          setPage("buy")
        }
        onSuccess={() =>
          setPage("portfolio")
        }
      />
    );
  }

  if (page === "portfolio") {
    return (
      <Portfolio
        purchase={purchase}
        onMarketplace={() =>
          setPage("marketplace")
        }
      />
    );
  }

  return (
    <PropertyFlow
      onNext={() =>
        setPage("ownership")
      }
    />
  );
}

export default AppRouter;
