import dayjs from "dayjs";
import React, { Fragment } from "react";
import BalanceContainer from "../components/myAccountContainerComps/BalanceContainer";
import RedeemContainer from "../components/myAccountContainerComps/RedeemContainer";
import TransactionContainer from "../components/myAccountContainerComps/TransactionContainer";
import TinkLinkLogin from "../components/TinkLinkLogin";
import { useTransactions } from "../lib/hooks/useTransactions";
import Link from "next/link";
import { getServerSideProps } from "./callback";

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

  let transactionsForDisplay: any | undefined = data?.transactions;
  let paymentTransactions = [];
  let transactionsCurrentMonth = [];
  let currentMonth = dayjs(data?.transactions[0].dates.booked).month();

  for (let i = 0; i < transactionsForDisplay.length; i++) {
    if (
      transactionsForDisplay[i].amount.value.unscaledValue < 0 &&
      dayjs(transactionsForDisplay[i].dates.booked).month() === currentMonth
    ) {
      paymentTransactions.push(transactionsForDisplay[i]);
    }
  }

  transactionsCurrentMonth = paymentTransactions.slice(
    0,
    paymentTransactions.length
  );

  let sumOfTransactionsCurrentMonth = 0;
  for (let i = 0; i < transactionsCurrentMonth.length; i++) {
    sumOfTransactionsCurrentMonth += parseFloat(
      transactionsCurrentMonth[i].amount.value.unscaledValue
    );
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
