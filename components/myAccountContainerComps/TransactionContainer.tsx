import Link from "next/link";
import { formatDate } from "../../lib/helpers";

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
      <div className="flex sm:max-w-xl w-full justify-between animate-pulse flex-row h-full space-x-5">
        <div className="flex flex-col space-y-3">
          <div className="w-36 bg-gray-300 h-6 rounded-md"></div>
          <div className="w-24 bg-gray-300 h-6 rounded-md"></div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-20 bg-gray-300 h-6 rounded-md"></div>
          <div className="w-12 bg-gray-300 h-6 rounded-md self-end"></div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return <p className="text-3xl">No transactions found</p>;
}

function TransactionContainer(props: Props) {
  if (
    !props.loading &&
    (!props.transactions || props.transactions.length <= 0)
  ) {
    return (
      <div className="h-full my-44 flex justify-center flex-col items-center">
        <EmptyState />
        <Link href="/login">
          <a className="underline cursor-pointer text-yellow-700">
            Choose another account
          </a>
        </Link>
      </div>
    );
  }
  return (
    <div className="py-3 lg:mr-80 md:mr-10">
      <div className="flex items-center space-x-4 border-b">
        <h1 className="text-xl font-bold font-display">Transactions</h1>
        <Link href="/login">
          <a className="text-xs underline cursor-pointer text-yellow-700">
            Refresh
          </a>
        </Link>
      </div>

      {props.loading ? (
        <div className="flex flex-col space-y-6 mt-8">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      ) : (
        <div className="">
          <div className="flex flex-row justify-between py-2">
            <span className="text-sm lg:text-base md:text-base font-semibold">
              Seller
            </span>
            <span className="text-sm lg:text-base md:text-base font-semibold ml-20">
              CO2 removed
            </span>
            <div className="flex flex-col mr-8">
              <span className="text-sm lg:text-base md:text-base font-semibold">
                Transaction /
              </span>
              <span className="text-sm lg:text-base md:text-base font-semibold">
                1 % To savings
              </span>
            </div>
          </div>
          <div className="h-80 overflow-x-auto">
            {props.transactions?.map((trans) => {
              return (
                <div key={trans.id} className="bg-white">
                  <span className="text-sm lg:text-base md:text-base">
                    {trans.seller}
                  </span>
                  <div className="flex flex-row justify-between">
                    <time className="text-[#AEC0C6] text-sm">
                      {formatDate(trans.date)}
                    </time>

                    <span className="text-[#52B390] text-sm lg:text-base md:text-base">
                      {trans.CO2.toFixed(2)} kg
                    </span>
                    <div className="flex flex-col mr-8">
                      <span className="text-sm lg:text-base md:text-base text-[#262626]">
                        {formatAmount(trans.amount)}
                      </span>
                      <span className="text-[#52B390] text-sm lg:text-base md:text-base text-right">
                        {formatAmount(trans.investment)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default TransactionContainer;
