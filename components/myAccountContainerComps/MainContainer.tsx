import styles from "../../styles/MyAccount.module.css";
import BalanceContainer from "./BalanceContainer";
import RedeemContainer from "./RedeemContainer";
import TransactionContainer from "./TransactionContainer";


function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <BalanceContainer/>
      <TransactionContainer/>
      <RedeemContainer/>
    </div>
  );
}

export default MainContainer;
