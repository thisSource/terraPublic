import BalanceContainer from "./BalanceContainer";
import RedeemContainer from "./RedeemContainer";
import TransactionContainer from "./TransactionContainer";

function MainContainer() {
  return (
    <div>
      <BalanceContainer />
      <TransactionContainer />
      <RedeemContainer />
    </div>
  );
}

export default MainContainer;
