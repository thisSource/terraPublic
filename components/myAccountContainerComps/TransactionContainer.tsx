import styles from "../../styles/MyAccount.module.css";

function TransactionContainer() {
  let transactionPlaceholder = [
    {
      date: "Date",
      seller: "Seller",
      amount: "Transaction",
      investment: "To savings"
    },
    {
      date: "2021-09-24",
      seller: "Amazon",
      amount: 1000,
      investment: 1000 * 0.01
    },
    { date: "2021-09-23", seller: "Nike", amount: 200, investment: 200 * 0.01 },
    { date: "2021-09-22", seller: "SJ", amount: 500, investment: 500 * 0.01 },
    { date: "2021-09-21", seller: "Coop", amount: 300, investment: 300 * 0.02 },
    { date: "2021-09-20", seller: "SL", amount: 500, investment: 500 * 0.01 },
    { date: "2021-09-19", seller: "Nike", amount: 200, investment: 200 * 0.01 },
    { date: "2021-09-19", seller: "Apple", amount: 500, investment: 500 * 0.01 },
    { date: "2021-09-18", seller: "Coop", amount: 300, investment: 300 * 0.02 },
    { date: "2021-09-17", seller: "LivsOchMat", amount: 500, investment: 500 * 0.01 }
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
              <div className={styles.transinvest}>{trans.investment}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TransactionContainer;
