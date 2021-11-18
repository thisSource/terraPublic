import dayjs from "dayjs";
import React, { Fragment } from "react";
import BalanceContainer from "../components/myAccountContainerComps/BalanceContainer";
import RedeemContainer from "../components/myAccountContainerComps/RedeemContainer";
import TransactionContainer from "../components/myAccountContainerComps/TransactionContainer";
import { useTransactions } from "../lib/hooks/useTransactions";
import Link from "next/link";

function MyAccount() {
  const { data, isLoading, error } = useTransactions();

  if (data?.transactions === undefined) {
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
  let transactionsCurrentMonth = [];
  let currentMonth = dayjs(data?.transactions[0].dates.booked).month();

  for (let i = 0; i < transactionsForDisplay.length; i++) {
    if (
      Number(transactionsForDisplay[i].amount.value.unscaledValue) < 0 &&
      dayjs(transactionsForDisplay[i].dates.booked).month() === currentMonth
    ) {
      transactionsCurrentMonth.push(transactionsForDisplay[i]);
    }
  }

  return (
    <Fragment>
      <BalanceContainer />
      <TransactionContainer
        transactions={transactionsCurrentMonth?.map((t) => ({
          id: t.id,
          amount:
            parseInt(t.amount.value.unscaledValue) /
            Math.pow(10, parseInt(t.amount.value.scale)),
          seller: t.descriptions.display,
          date: t.dates.booked,
          investment:
            (parseInt(t.amount.value.unscaledValue) /
              Math.pow(10, parseInt(t.amount.value.scale))) *
            0.01,
          CO2: 2,
        }))}
        loading={isLoading}
      />
      <RedeemContainer />
    </Fragment>
  );
}

export default MyAccount;
