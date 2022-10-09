import React, { useEffect, useState } from "react";
import BalanceContainer from "./BalanceContainer";
import TransactionContainer from "./TransactionContainer";
import Link from "next/link";
import { useSearch } from "../../lib/hooks/useTransactionSearch";
import TransferContainer from "./TransferContainer";

interface AccountProps {
  userData: {
    balance: number;
    user_id: string;
  }[];
  transactionsMonthly: {
    some(arg0: (item: any) => boolean): any;
    find(arg0: (monthTransaction: { year_month: string }) => boolean): unknown;
    map(arg0: (month: any) => void): unknown;
    balance: number;
    yearMonth: string;
    value: number;
    user_id: string;
  };
}

function AccountComponent({ userData, transactionsMonthly }: AccountProps) {
  let { data, isLoading } = useSearch();
  let [savings, setSavings] = useState(userData[0].balance);
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
        <Link href="/signin-bank">
          <a className="underline cursor-pointer text-yellow-700">
            Please login to view your transactions
          </a>
        </Link>
      </div>
    );
  }

  let monthsForDisplay = [...data?.periodAmounts].reverse();

  monthsForDisplay = monthsForDisplay.map((month, index) => ({
    ...month,
    user_id: userData[0].user_id,
    balance: userData[0].balance,
    match: transactionsMonthly.some((item) => item.year_month === month.key),
    isCurrentMonth: transactionsMonthly.some((item) => index === 0),
  }));

  return (
    <div className="">
      <BalanceContainer
        value={savings}
        CO2perSEK={co2dataValueSEK}
        currentTransfer={monthsForDisplay[0].value}
      />
      <div className="mt-20">
        <h1 className="text-xl font-semibold text-gray-900">
          {" "}
          Transfer to your fund savings
        </h1>
        <div className="overflow-y-scroll scroll-smooth h-96">
          {monthsForDisplay.map((month) => (
            <TransferContainer
              key={month.key}
              sumTransactions={month.value}
              currentMonth={month.key}
              updateSavings={setSavings}
              value={month.value * 0.01 * -1}
              co2perSEK={co2dataValueSEK}
              match={month.match}
              user_id={month.user_id}
              balance={month.balance}
              isCurrentMonth={month.isCurrentMonth}
            />
          ))}
        </div>
        <TransactionContainer co2perSEK={co2dataValueSEK} />
      </div>
    </div>
  );
}

export default AccountComponent;
