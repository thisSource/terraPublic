import { useState } from "react";
import { formatAmount, formatMonth } from "../../lib/helpers";

interface Props {
  sumOfTrans: number;
  currentMonth: string;
  updateSavings: (value: number) => void;
  value: number;
  co2perSEK: number;
}

const transButton = {
  transferButtonStyle:
    "px-5 py-4 mt-10 text-gray-700 text-base bg-gray-300 rounded-full hover:bg-purple-300 hover:text-black transition cursor-pointer",
  completedButtonStyle:
    "px-5 py-4 mt-10 text-gray-700 text-base italic bg-green-300 font-base rounded-full cursor-not-allowed",
  transferButtonText: "Transfer to savings",
  completedButtonText: "Transfer Completed",
};

export default function TransferContainer2(props: Props) {
  let [transferred, setTransferred] = useState(false);
  let [buttonStyle, setButtonStyle] = useState({
    style: transButton.transferButtonStyle,
    text: transButton.transferButtonText,
  });

  function transferSavings() {
    transferred ? setTransferred(false) : setTransferred(true);
    setButtonStyle({
      style: transButton.completedButtonStyle,
      text: transButton.completedButtonText,
    });
    props.updateSavings(props.value);
  }

  return (
    <div className="bg-gray-100 shadow overflow-hidden sm:rounded-md my-4">
      <ul role="list" className="divide-y divide-gray-200">
        <li key={props.currentMonth}>
          <div className="flex items-center px-2 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p className="text-sm font-medium text-terra-purple-600 truncate">
                    {formatMonth(props.currentMonth)}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    Monthly expenses {formatAmount(props.sumOfTrans * -1)}
                  </p>

                  <p className="mt-2 flex items-center text-sm text-gray-500"></p>
                </div>
                <div className="md:block">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Transfer to your savings
                    </p>
                    <p className="mt-2 text-sm font-semibold text-terra-purple-600">
                      {formatAmount(props.sumOfTrans * 0.01 * -1)}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {(props.sumOfTrans * 0.01 * -1 * props.co2perSEK).toFixed(
                        2
                      )}{" "}
                      kg CO2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className={buttonStyle.style}
                disabled={transferred}
                onClick={() => transferSavings()}
              >
                {buttonStyle.text}
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
