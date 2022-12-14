import { useState } from "react";
import { formatAmount, formatMonth } from "../../lib/helpers";
import { supabase } from "../../lib/auth/supabaseClient";
import { useRouter } from "next/router";

interface Props {
  balance: number;
  sumTransactions: number;
  currentMonth: string;
  updateSavings: (value: number) => void;
  value: number;
  co2perSEK: number;
  match: boolean;
  user_id: string;
  isCurrentMonth: boolean;
}

export default function TransferContainer(transactionData: Props) {
  const router = useRouter();
  let [isCurrentMonth, setIsCurrentMonth] = useState(
    transactionData.isCurrentMonth
  );
  let [transferred, setTransferred] = useState(transactionData.match);

  async function postTransactionToSupabase(
    transactionValue: number,
    user_id: string
  ) {
    let { data, error } = await supabase.from("transactions_monthly").insert([
      {
        value: transactionValue,
        year_month: transactionData.currentMonth,
        user_id: user_id,
      },
    ]);

    error
      ? console.log("error updating monthly transaction")
      : ({ data, error } = await supabase
          .from("users")
          .select("balance")
          .match({ user_id: user_id }));
    let currentBalance = data![0].balance;

    error
      ? console.log("error getting current balance")
      : ({ data, error } = await supabase
          .from("users")
          .update([{ balance: currentBalance + transactionData.value }])
          .match({ user_id: user_id }));
    error ? console.log("error2") : console.log("transaction success");
    !error
      ? transactionData.updateSavings(currentBalance + transactionData.value)
      : console.log("error in completing transaction");

    return;
  }

  function transferSavings(isCurrentMonthProps: boolean) {
    if (!isCurrentMonthProps) {
      transferred ? setTransferred(false) : setTransferred(true);
      postTransactionToSupabase(transactionData.value, transactionData.user_id);
    }
  }

  return (
    <div className="bg-gray-100 shadow overflow-hidden sm:rounded-md my-4">
      <ul role="list" className="divide-y divide-gray-200">
        <li key={transactionData.currentMonth}>
          <div className="flex items-center px-2 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p className="text-sm font-medium text-terra-purple-600 truncate">
                    {formatMonth(transactionData.currentMonth)}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    Monthly expenses{" "}
                    {formatAmount(transactionData.sumTransactions * -1)}
                  </p>

                  <p className="mt-2 flex items-center text-sm text-gray-500"></p>
                </div>
                <div className="md:block">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Transfer to your savings
                    </p>
                    <p className="mt-2 text-sm font-semibold text-terra-purple-600">
                      {formatAmount(
                        transactionData.sumTransactions * 0.01 * -1
                      )}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {(
                        transactionData.sumTransactions *
                        0.01 *
                        -1 *
                        transactionData.co2perSEK
                      ).toFixed(2)}{" "}
                      kg CO2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className={`${
                  transferred
                    ? "px-10 py-4 mt-10 text-gray-700 text-base italic bg-green-300 font-base rounded-full cursor-not-allowed"
                    : isCurrentMonth
                    ? "px-10 py-4 mt-10 text-gray-700 text-base bg-terra-orange rounded-full cursor-not-allowed"
                    : "px-10 py-4 mt-10 text-gray-700 text-base bg-gray-300 rounded-full hover:bg-purple-300 hover:text-black transition cursor-pointer"
                }`}
                disabled={transferred}
                onClick={() => transferSavings(isCurrentMonth)}
              >
                {transferred
                  ? "Transfer Completed"
                  : isCurrentMonth
                  ? "Available next month"
                  : "Transfer to savings"}
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
