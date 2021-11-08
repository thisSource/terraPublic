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
  transactions?: Transaction[];
  loading: boolean;
};

function Loading() {
  return (
    <div className="rounded-md">
      <div className="flex sm:max-w-xl w-full justify-between animate-pulse flex-row  h-full  space-x-5">
        <div className="flex flex-col space-y-3">
          <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-12 bg-gray-300 h-6 rounded-md self-end"></div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return <p className="text-3xl">No transactions :/</p>;
}

function TransactionContainer(props: Props) {
  if (
    !props.loading &&
    (!props.transactions || props.transactions.length <= 0)
  ) {
    return (
      <div className="h-full my-44 flex justify-center">
        <EmptyState />
      </div>
    );
  }
  return (
    <div className="py-3">
      <h1 className="text-3xl font-bold font-display">Transactions</h1>

      {props.loading ? (
        <div className="flex flex-col space-y-6 mt-8">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      ) : (
        <div className="table w-full sm:max-w-xl">
          {props.transactions?.map((trans) => {
            return (
              <div key={trans.id} className="flex items-center bg-white py-2">
                <div className="flex flex-col text-[#262626]">
                  <span className="font-normal">
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
                  <span className="font-normal text-[#262626]">
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
      )}
    </div>
  );
}
export default TransactionContainer;
