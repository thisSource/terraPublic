interface Props {
  value: string;
}

function BalanceContainer(savings: Props) {
  return (
    <div className="py-4 lg:mr-80 md:mr-10 mb-10">
      <div className="text-xl font-semibold font-display border-b">
        My savings
      </div>
      <div className="py-4 flex flex-row items-center justify-between font-semibold text-xl">
        <span>SEK {savings.value}</span>
        <span> + 4,5 %</span>
      </div>
    </div>
  );
}

export default BalanceContainer;
