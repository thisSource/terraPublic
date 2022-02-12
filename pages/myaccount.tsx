import dayjs from "dayjs";
import React, { Fragment, useEffect, useState } from "react";
import BalanceContainer from "../components/myAccountContainerComps/BalanceContainer";
import RedeemContainer from "../components/myAccountContainerComps/RedeemContainer";
import TransactionContainer from "../components/myAccountContainerComps/TransactionContainer";
import { useTransactions } from "../lib/hooks/useTransactions";
import Link from "next/link";
import TransferContainer from "../components/myAccountContainerComps/TransferContainer";
import { Transaction } from "../lib/tink/transactions";
import { amountHandler } from "../lib/helpers";

function negativeTransactionFromMonth(
  targetMonth: number,
  transactions: Transaction[]
) {
  return transactions.filter((tran) => {
    const isTargetMonth = dayjs(tran.dates.booked).month() === targetMonth;
    const isWithdrawal = parseInt(tran.amount.value.unscaledValue) < 0;
    return isTargetMonth && isWithdrawal;
  });
}

function sumOfNegativeTransactions(
  targetMonth: number,
  transactionsForDisplay: Transaction[]
) {
  let sumOfTrans = negativeTransactionFromMonth(
    targetMonth,
    transactionsForDisplay
  ).reduce((acc, curr) => acc + parseInt(curr.amount.value.unscaledValue), 10);
  return sumOfTrans / 100;
}

function transactions(
  currentMonth: number,
  transactionsForDisplay: Transaction[],
  co2valueSEK: number
) {
  return negativeTransactionFromMonth(
    currentMonth,
    transactionsForDisplay
  )?.map((t) => ({
    id: t.id,
    amount: amountHandler(t, 1, 1),
    seller: t.descriptions.display,
    date: t.dates.booked,
    investment: amountHandler(t, 0.01, -1),
    CO2: amountHandler(t, co2valueSEK, -1),
  }));
}

function MyAccount() {
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

  const { data, isLoading, error } = useTransactions();
  let [savings, setSavings] = useState(0);
  let currentMonth = dayjs(data?.transactions[0].dates.booked).month();
  if (data?.transactions === undefined || data?.transactions.length === 0) {
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

  let transactionsForDisplay = data?.transactions;

  const availableMonths = [
    ...Array.from(
      new Set(
        transactionsForDisplay.map((trans) => dayjs(trans.dates.booked).month())
      )
    ),
  ];
  let sumOfNegativeTransactionsByMonth = availableMonths.map((month) =>
    sumOfNegativeTransactions(month, transactionsForDisplay)
  );

  return (
    <Fragment>
      <BalanceContainer value={savings} CO2perSEK={co2dataValueSEK} />

      <h1 className="text-xl font-semibold font-display lg:mr-80 md:mr-10 border-b">
        Transfer to your savings
      </h1>

      {availableMonths.map((month) => (
        <TransferContainer
          key={month}
          sumOfTrans={sumOfNegativeTransactionsByMonth[currentMonth - month]}
          currentMonth={(currentMonth + month).toString()}
          updateSavings={setSavings}
          value={
            savings +
            sumOfNegativeTransactionsByMonth[currentMonth - month] * 0.01 * -1
          }
          co2perSEK={co2dataValueSEK}
        />
      ))}

      <TransactionContainer
        transactions={transactions(
          currentMonth,
          transactionsForDisplay,
          co2dataValueSEK / 100
        )}
        loading={isLoading}
      />
      <RedeemContainer value={savings} />
    </Fragment>
  );
}

export default MyAccount;
