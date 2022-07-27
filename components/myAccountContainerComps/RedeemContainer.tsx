import { formatAmount } from "../../lib/helpers";

interface Props {
  value: number;
}

function RedeemContainer(savings: Props) {
  return (
    <div className="py-4 mt-20 lg:mr-1 md:mr-10 mb-10 ">
      <h1 className="text-xl font-semibold text-gray-900">
        Transfer money to your bank account
      </h1>
      <div className="py-4 flex flex-row items-center justify-between font-semibold text-xl bg-white shadow overflow-hidden sm:rounded-md my-4">
        <div className="flex flex-col">
          <span className="text-2xl ml-4">{formatAmount(savings.value)}</span>
        </div>
        <div className="flex flex-col">
          <button className="px-5 mr-4 py-4 text-gray-700 text-base bg-gray-300 rounded-full hover:bg-indigo-200 hover:text-black transition cursor-pointer">
            Direct transfer to your bank
          </button>
        </div>
      </div>
      <span className="text-gray-700 text-sm">
        Transfer savings to your bank account by selling some or all your shares
        in the fund.
      </span>
    </div>
  );
}

export default RedeemContainer;
