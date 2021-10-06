import dayjs from "dayjs";

function formatDate(date: string) {
  return dayjs(date).format("M MMM, YYYY");
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}

type Transaction = {
  id: string;
  date: string;
  seller: string;
  amount: number;
  investment: number;
  CO2: number;
};

type Props = {
  transactions: Transaction[];
  loading: boolean;
};

function TransactionContainer(props: Props) {
  return (
    <div className="py-3">
      <h1 className="text-3xl font-bold font-display">Transactions</h1>

      <div className="table w-full sm:max-w-xl">
        {props.transactions.map((trans) => {
          return (
            <div key={trans.id} className="flex items-center bg-white py-4">
              <div className="flex flex-col text-[#262626]">
                <span className="font-semibold">
                  {trans.seller}
                  <span className="ml-2 text-[#52B390] text-xs">
                    {trans.CO2}
                  </span>
                </span>
                <time className="text-[#AEC0C6] text-sm">
                  {formatDate(trans.date)}
                </time>
              </div>

              <div className="flex flex-col ml-auto">
                <span className="font-semibold text-[#262626]">
                  {formatAmount(trans.amount)}
                </span>
                <span className="text-[#52B390] text-sm">
                  {formatAmount(trans.investment)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TransactionContainer;
