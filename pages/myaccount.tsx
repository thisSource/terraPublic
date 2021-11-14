import dayjs from "dayjs";
import React, { Fragment } from "react";
import BalanceContainer from "../components/myAccountContainerComps/BalanceContainer";
import RedeemContainer from "../components/myAccountContainerComps/RedeemContainer";
import TransactionContainer from "../components/myAccountContainerComps/TransactionContainer";
import TinkLinkLogin from "../components/TinkLinkLogin";
import { useTransactions } from "../lib/hooks/useTransactions";
import Id from "./accounts/[id]/transactions";
import Link from "next/link";

function formatDate(date: string) {
  return dayjs(date).format("MM");
}

function MyAccount() {
  const { data, isLoading, error } = useTransactions();

  if (data?.transactions.length === 0 || data?.transactions === undefined) {
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
  let numberOfTransactionsToDisplay = 0;

  //Get current month (first month in array) and set it to an Int. (Setting it to int for later useage.)
  let getCurrentMonth = data?.transactions[0].dates.booked;
  let currentMonth = parseInt(formatDate(getCurrentMonth));

  //Get payment transactions only
  for (let i = 0; i < transactionsForDisplay.length; i++) {
    if (transactionsForDisplay[i].amount.value.unscaledValue < 0) {
      paymentTransactions.push(transactionsForDisplay[i]);
    }
  }

  //Get transactions for current month only
  for (let i = 0; i < paymentTransactions.length; i++) {
    transactionsCurrentMonth.push(
      parseInt(formatDate(paymentTransactions[i].dates.booked))
    );
    if (transactionsCurrentMonth[i] === currentMonth) {
      numberOfTransactionsToDisplay = transactionsCurrentMonth.length;
    }
  }

  transactionsCurrentMonth = paymentTransactions.slice(
    0,
    numberOfTransactionsToDisplay
  );

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
