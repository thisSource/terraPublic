import dayjs from "dayjs";

function formatDate(date: string) {
  return dayjs(date).format("MMMM");
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}

interface Props {
  sumOfTrans: number;
  currentMonth: string;
}

function Transfer(props: Props) {
  return (
    <div className="py-2 lg:mr-40 md:mr-10">
      <div className="py-4 flex flex-row items-center justify-between">
        <span className="ml-2">
          Transactions {formatDate(props.currentMonth)}
        </span>
        <span className="">{formatAmount(props.sumOfTrans * -1)}</span>
      </div>
      <div className="py-1 flex flex-row items-center justify-between">
        <span className="px-5 py-1 text-gray-700 text-base bg-gray-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-black transition cursor-pointer">
          Transfer to savings
        </span>
        <span className="font-semibold text-base text-green-500">
          {formatAmount(props.sumOfTrans * -1 * 0.01)}
        </span>
      </div>
      <div className="mt-2 border-b"></div>
    </div>
  );
}

export default Transfer;
