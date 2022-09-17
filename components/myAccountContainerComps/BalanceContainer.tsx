import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { formatAmount } from "../../lib/helpers";

interface Props {
  value: number;
  CO2perSEK: number;
  currentTransfer: number;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function BalanceContainer(props: Props) {
  const stats = [
    {
      name: "Balance",
      stat: formatAmount(props.value),
      change: "",
      changeType: "increase",
    },
    {
      name: "CO2 savings (Kg)",
      stat: (props.value * props.CO2perSEK).toFixed(1),
      change: "",
      changeType: "increase",
    },
    {
      name: "To be transfered",
      stat: formatAmount(props.currentTransfer * 0.01 * -1),
      change:
        (props.currentTransfer * 0.01 * -1 * props.CO2perSEK).toFixed(2) +
        " kg",
      changeType: "increase",
    },
  ];
  return (
    <div>
      <h3 className="text-xl leading-6 font-medium text-gray-900">Savings</h3>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-gray-100 overflow-hidden shadow divide-y divide-white md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-terra-purple-600">
                {item.stat}
              </div>

              <div
                className={classNames(
                  item.changeType === "increase"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                  "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowSmUpIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
