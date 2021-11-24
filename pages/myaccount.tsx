import dayjs from "dayjs";
import React, { Fragment, useState } from "react";
import BalanceContainer from "../components/myAccountContainerComps/BalanceContainer";
import RedeemContainer from "../components/myAccountContainerComps/RedeemContainer";
import TransactionContainer from "../components/myAccountContainerComps/TransactionContainer";
import { useTransactions } from "../lib/hooks/useTransactions";
import Link from "next/link";
import TransferContainer from "../components/myAccountContainerComps/TransferContainer";
import { Transaction } from "../lib/tink/transactions";

function MyAccount() {
  const { data, isLoading, error } = useTransactions();

  let [savings, setSavings] = useState(0);

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
  let currentMonth = dayjs(data?.transactions[0].dates.booked).month();

  function availableMonths() {
    let months: number[] = [];
    transactionsForDisplay.forEach((trans: { dates: { booked: string } }) => {
      months.push(dayjs(trans.dates.booked).month());
    });
    return months.filter((v, i, a) => a.indexOf(v) === i);
  }

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

  function sumOfNegativeTransactions(targetMonth: number) {
    return (
      negativeTransactionFromMonth(targetMonth, transactionsForDisplay)
        .map((items) => {
          return parseInt(items.amount.value.unscaledValue);
        })
        .reduce((acc, curr) => {
          return acc + curr;
        }) / 100
    );
  }
  return (
    <Fragment>
      <BalanceContainer value={savings} />

      <h1 className="text-xl font-semibold font-display lg:mr-80 md:mr-10 border-b">
        Transfer to your savings
      </h1>

      {availableMonths().map((month) => (
        <TransferContainer
          key={month + Math.random()}
          sumOfTrans={sumOfNegativeTransactions(month)}
          currentMonth={(month + 1).toString()}
          updateSavings={setSavings}
          value={savings + sumOfNegativeTransactions(month) * 0.01 * -1}
        />
      ))}

      <TransactionContainer
        transactions={negativeTransactionFromMonth(
          currentMonth,
          transactionsForDisplay
        )?.map((t) => ({
          id: t.id,
          amount:
            parseInt(t.amount.value.unscaledValue) /
            Math.pow(10, parseInt(t.amount.value.scale)),
          seller: t.descriptions.display,
          date: t.dates.booked,
          investment:
            (parseInt(t.amount.value.unscaledValue) /
              Math.pow(10, parseInt(t.amount.value.scale))) *
            0.01 *
            -1,
          CO2:
            (parseInt(t.amount.value.unscaledValue) /
              Math.pow(10, parseInt(t.amount.value.scale))) *
            0.002 *
            -1,
        }))}
        loading={isLoading}
      />
      <RedeemContainer value={savings} />
    </Fragment>
  );
}

export default MyAccount;
