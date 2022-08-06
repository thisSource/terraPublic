import { useSearch } from "../../lib/hooks/useTransactionSearch";
import { formatTimeStamp } from "../../lib/helpers";

function formatAmount(amount: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}

type Props = {
  co2perSEK: number;
};

function TransactionContainer(props: Props) {
  let { data, isLoading } = useSearch();

  return (
    <div className="mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Transactions</h1>
          <p className="mt-2 text-sm text-gray-700">
            List of your 100 latest transactions
          </p>
        </div>
      </div>
      <div className="mx-1 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg overflow-y-scroll h-96">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Seller
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Date
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Investment
              </th>

              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                CO2 (kg)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data?.results.map((trans) => (
              <tr key={trans.transaction.id}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-terra-purple-600 sm:w-auto sm:max-w-none sm:pl-6">
                  {trans.transaction.description}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Amount</dt>
                    <dt className="sr-only sm:hidden">Amount</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {formatTimeStamp(trans.transaction.date)}
                    </dd>
                    <dd className="mt-1 truncate text-base font-semibold text-gray-500 sm:hidden">
                      {formatAmount(trans.transaction.amount)}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {formatTimeStamp(trans.transaction.date)}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {formatAmount(trans.transaction.amount)}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {formatAmount(trans.transaction.amount * 0.01 * -1)}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {(
                    trans.transaction.amount *
                    0.01 *
                    props.co2perSEK *
                    -1
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionContainer;
