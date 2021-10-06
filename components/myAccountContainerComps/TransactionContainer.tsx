function TransactionContainer() {
  let transactionHeaders = {
    date: "Date",
    seller: "Seller",
    amount: "Transaction",
    investment: "To savings",
    CO2: "CO2 reduct. KG",
  };

  let transactionPlaceholder = [
    {
      date: "2021-09-24",
      seller: "Amazon",
      amount: 1000,
      investment: 1000 * 0.01,
      CO2: 2.3,
    },
    {
      date: "2021-09-23",
      seller: "Nike",
      amount: 200,
      investment: 200 * 0.01,
      CO2: 1.1,
    },
    {
      date: "2021-09-22",
      seller: "SJ",
      amount: 500,
      investment: 500 * 0.01,
      CO2: 1.6,
    },
    {
      date: "2021-09-21",
      seller: "Coop",
      amount: 300,
      investment: 300 * 0.02,
      CO2: 1.3,
    },
    {
      date: "2021-09-20",
      seller: "SL",
      amount: 500,
      investment: 500 * 0.01,
      CO2: 1.6,
    },
    {
      date: "2021-09-19",
      seller: "Nike",
      amount: 200,
      investment: 200 * 0.01,
      CO2: 1.1,
    },
    {
      date: "2021-09-19",
      seller: "Apple",
      amount: 500,
      investment: 500 * 0.01,
      CO2: 1.6,
    },
    {
      date: "2021-09-18",
      seller: "Coop",
      amount: 300,
      investment: 300 * 0.02,
      CO2: 1.3,
    },
    {
      date: "2021-09-17",
      seller: "LivsOchMat",
      amount: 500,
      investment: 500 * 0.01,
      CO2: 1.6,
    },
  ];

  return (
    <div>
      <div>Transactions</div>
      <div>
        <div>{transactionHeaders.date}</div>
        <div>{transactionHeaders.seller}</div>
        <div>{transactionHeaders.amount}</div>
        <div>{transactionHeaders.investment}</div>
        <div>{transactionHeaders.CO2}</div>
      </div>

      <div>
        {transactionPlaceholder.map((trans) => {
          return (
            <div key={trans.date}>
              <div>{trans.date}</div>
              <div>{trans.seller}</div>
              <div>{trans.amount}</div>
              <div>{trans.investment}</div>
              <div>{trans.CO2}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TransactionContainer;
