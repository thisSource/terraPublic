import React, { useEffect, useState } from "react";
import BalanceContainer from "../myAccountContainerComps/BalanceContainer";
import RedeemContainer from "../myAccountContainerComps/RedeemContainer";
import TransactionContainer from "../myAccountContainerComps/TransactionContainer";
import Link from "next/link";
import { useSearch } from "../../lib/hooks/useTransactionSearch";
import TransferContainer from "../myAccountContainerComps/TransferContainer";
import SavingOptionSelect from "./SaveOptionSelect";

function Account() {
  let { data, isLoading } = useSearch();
  let [savings, setSavings] = useState(0);
  let [co2dataValueSEK, setCo2dataValueSEK] = useState(0);

  async function fetchPortfolio() {
    const res = await fetch("api/portfolio/iexbase");
    if (res.status != 200) {
      setCo2dataValueSEK(0);
    } else {
      let data = await res.json();
      setCo2dataValueSEK(data[1].co2KgPerSEK);
    }
  }
  useEffect(() => {
    fetchPortfolio();
  }, []);

  if (data?.periodAmounts === undefined || data?.periodAmounts.length === 0) {
    return (
      <div className="h-full my-44 justify-center flex flex-col items-center">
        <Link href="/login">
          <a className="underline cursor-pointer text-yellow-700">
            Please login to view your transactions
          </a>
        </Link>
      </div>
    );
  }

  const monthsForDisplay = [...data?.periodAmounts].reverse();

  return (
    <div className="">
      <BalanceContainer value={savings} CO2perSEK={co2dataValueSEK} />
      <div className="mt-20">
        <h1 className="text-xl font-semibold text-gray-900">
          {" "}
          Transfered to your savings
        </h1>
        {/* <div className="overflow-y-scroll h-96"> */}
        <div className="overflow-y-scroll scroll-smooth h-96">

          {monthsForDisplay.map((month) => (
            <TransferContainer
              key={month.key}
              sumOfTrans={month.value}
              currentMonth={month.key}
              updateSavings={setSavings}
              value={savings + month.value * 0.01 * -1}
              co2perSEK={co2dataValueSEK}
            />
          ))}
        </div>
        <TransactionContainer co2perSEK={co2dataValueSEK} />
      </div>

      <div className="mt-10">
        <SavingOptionSelect />
      </div>
      <RedeemContainer value={savings} />
    </div>
  );
}

export default Account;
