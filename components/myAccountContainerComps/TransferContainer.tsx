import { formatAmount, formatDate } from "../utils/Helpers";
import { useState } from "react";

interface Props {
  sumOfTrans: number;
  currentMonth: string;
  updateSavings: (value: number) => void;
  value: number;
}

let isClicked = false;
let buttonStyle =
  "px-5 py-1 text-gray-700 text-base bg-gray-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-black transition cursor-pointer";
let buttonText = "Transfer to savings";

function Transfer(props: Props) {
  let [transferred, setTransferred] = useState(false);

  //I can´t get the setState to disable button and also run the props.updateSavings(props.value);
  function transferSavings() {
    transferred ? setTransferred(false) : setTransferred(true),
      props.updateSavings(props.value);
  }

  return (
    <div className="py-2 lg:mr-80 md:mr-10">
      <div className="py-4 flex flex-row items-center justify-between">
        <span className="ml-2">
          Transactions {formatDate(props.currentMonth)}
        </span>
        <span>{formatAmount(props.sumOfTrans * -1)}</span>
      </div>
      <div className="py-1 flex flex-row items-center justify-between">
        <button
          className={buttonStyle}
          disabled={transferred}
          onClick={transferSavings}
        >
          click me
        </button>
      </div>
      <div className="mt-2 border-b"></div>
    </div>
  );
}

export default Transfer;
