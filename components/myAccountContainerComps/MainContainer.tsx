import styles from "../../styles/Main.module.css";
import BalanceContainer from "./BalanceContainer";
import TransactionContainer from "./TransactionContainer";

function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <BalanceContainer/>
      <TransactionContainer/>
    </div>
  );
}

export default MainContainer;
