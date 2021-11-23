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
  updateSavings: (value: number) => void;
  value: number;
}

let isClicked = false;
let buttonStyle =
  "px-5 py-1 text-gray-700 text-base bg-gray-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-black transition cursor-pointer";
let buttonText = "Transfer to savings";

function Transfer(props: Props) {
  function clickHandler() {
    if (!isClicked) {
      isClicked = true;
      buttonStyle =
        "px-5 py-1 text-gray-700 italic text-base bg-green-300 rounded-full";
      buttonText = "Transfer Complete";
      props.updateSavings(props.value);
    }
  }

  return (
    <div className="py-2 lg:mr-80 md:mr-10">
      <div className="py-4 flex flex-row items-center justify-between">
        <span className="ml-2">
          Transactions {formatDate(props.currentMonth)}
        </span>
        <span className="">{formatAmount(props.sumOfTrans * -1)}</span>
      </div>
      <div className="py-1 flex flex-row items-center justify-between">
        <span className={buttonStyle} onClick={clickHandler}>
          {buttonText}
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
