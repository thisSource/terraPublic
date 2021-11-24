function formatAmount(amount: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}

interface Props {
  value: number;
}

function BalanceContainer(savings: Props) {
  return (
    <div className="py-4 lg:mr-80 md:mr-10 mb-10">
      <div className="text-xl font-semibold font-display border-b">
        My savings
      </div>
      <div className="py-4 flex flex-row items-center justify-between font-semibold text-xl">
        <div className="flex flex-col">
          <span className="text-2xl">{formatAmount(savings.value)}</span>
          <span className="text-green-700 text-sm"> + 4,5 %</span>
        </div>
        <div className="flex flex-col">
          <span>CO2 savings total</span>
          <span className="text-green-700 text-base">1023 Kg</span>
        </div>
      </div>
    </div>
  );
}

export default BalanceContainer;
