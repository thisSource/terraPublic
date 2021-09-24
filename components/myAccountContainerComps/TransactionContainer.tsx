import styles from "../../styles/Main.module.css";

function TransactionContainer() {
  let transactionPlaceholder = [
    { date: "2021-09-24", seller: "Amazon", amount: 1000 },
    { date: "2021-09-23", seller: "Nike", amount: 200 },
    { date: "2021-09-22", seller: "SJ", amount: 500 }
  ];

  return (
      <div className={styles.transactionContainer}>
    <div className={styles.transactionContainerHeading}>Transactions</div>
    <div>
      {transactionPlaceholder.map((trans) => {
        return (
          <div className={styles.transactions}>
            <div className={styles.transdate}>{trans.date}</div>
            <div className={styles.transseller}>{trans.seller}</div>
            <div className={styles.transamount}>{trans.amount}</div>
          </div>
        );
      })}
    </div>
    </div>
  );
}
export default TransactionContainer;
