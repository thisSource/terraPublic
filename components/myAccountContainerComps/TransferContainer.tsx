import { formatAmount, formatMonth } from "../../lib/helpers";
import { useState } from "react";

interface Props {
  sumOfTrans: number;
  currentMonth: string;
  updateSavings: (value: number) => void;
  value: number;
  CO2perSEK: number;
}

const transButton = {
  transferButtonStyle:
    "px-5 py-1 text-gray-700 text-base bg-gray-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-black transition cursor-pointer",
  completedButtonStyle:
    "px-5 py-1 text-gray-700 text-base italic bg-green-300 font-base rounded-full cursor-not-allowed",
  transferButtonText: "Transfer to savings",
  completedButtonText: "Completed",
};

function Transfer(props: Props) {
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
    <div className="py-2 lg:mr-80 md:mr-10">
      <div className="py-4 flex flex-row items-center justify-between">
        <span className="ml-2">
          Transactions {formatMonth(props.currentMonth)}
        </span>
        <span>{formatAmount(props.sumOfTrans * -1)}</span>
      </div>
      <div className="ml-2 flex flex-row items-center justify-between">
        <span>CO2 savings</span>
        <span className="text-green-700">
          {(props.sumOfTrans * 0.01 * props.CO2perSEK * -1).toFixed(3)} Kg
        </span>
      </div>
      <div className="py-4 flex flex-row items-center justify-between">
        <button
          className={buttonStyle.style}
          disabled={transferred}
          onClick={() => transferSavings()}
        >
          {buttonStyle.text}
        </button>
        <span className="text-green-700 font-semibold">
          {formatAmount(props.sumOfTrans * 0.01 * -1)}
        </span>
      </div>

      <div className="mt-2 border-b"></div>
    </div>
  );
}

export default Transfer;
