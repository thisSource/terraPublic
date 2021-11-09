import React, { Fragment } from "react";
import BalanceContainer from "../components/myAccountContainerComps/BalanceContainer";
import RedeemContainer from "../components/myAccountContainerComps/RedeemContainer";
import TransactionContainer from "../components/myAccountContainerComps/TransactionContainer";
import TinkLinkLogin from "../components/TinkLinkLogin";
import { useTransactions } from "../lib/hooks/useTransactions";

function MyAccount() {
  const { data, isLoading, error } = useTransactions();

  return (
    <Fragment>
      <BalanceContainer />
      <TransactionContainer
        transactions={data?.transactions?.map((t) => ({
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
