import { formatAmount } from "../utils/Helpers";

interface Props {
  value: number;
}

function RedeemContainer(savings: Props) {
  return (
    <div className="py-4 lg:mr-80 md:mr-10 mb-10">
      <div className="text-xl font-semibold font-display border-b">
        Transfer savings
      </div>
      <div className="py-4 flex flex-row items-center justify-between font-semibold text-xl">
        <div className="flex flex-col">
          <span className="text-2xl">{formatAmount(savings.value)}</span>
          <span className="text-green-700 text-sm"> + 4,5 %</span>
        </div>
        <div className="flex flex-col">
          <button className="px-5 py-1 text-gray-700 text-base bg-gray-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-black transition cursor-pointer">
            Direct transfer
          </button>
        </div>
      </div>
      <span className="text-gray-700 text-xs">
        Transfer savings to your bank account by selling shares of the fund.
      </span>
    </div>
  );
}

export default RedeemContainer;
