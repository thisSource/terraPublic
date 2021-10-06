import { Fragment } from "react";
import BalanceContainer from "./BalanceContainer";
import RedeemContainer from "./RedeemContainer";
import TransactionContainer from "./TransactionContainer";

function MainContainer() {
  return (
    <Fragment>
      <BalanceContainer />
      <TransactionContainer />
      <RedeemContainer />
    </Fragment>
  );
}

export default MainContainer;
