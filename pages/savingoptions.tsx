export default function Services() {
  return (
    <div className="lg:mx-20">
      <div className="p-10 m-10 grid lg:grid-cols-2 grid-cols-1 bg-gray-100 border-b-2 border-terra-green rounded-xl text-terra-purple-700 shadow-lg">
        <div className="content">
          <p className="text-3xl ">1 % on transactions</p>
          <p className="my-4 text-xl">Base service</p>
        </div>
        <div className="content">
          <p className="my-4">
            Every time you make a purchase below 5000kr we will move 1 % of the
            value to your fund savings.
          </p>
          <p className="mt-10 lg:mr-40 text-xs">
            An investor may get back less than the amount invested. Information
            on past performance, where given, is not necessarily a guide to
            future performance.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-evenly">
        <div className="p-10 m-10 lg:w-full border-b-2 border-b-terra-purple rounded-xl text-terra-purple-700 shadow-lg">
          <p className="text-3xl ">Plus 1 %</p>
          <p className="my-4 text-xl">Optional service</p>
          <p className="my-4">
            Now 2 % on every transaction below 5000kr will be added to your fund
            savings.
          </p>
        </div>
        <div className="p-10 m-10 lg:w-full border-b-2 border-terra-purple rounded-xl text-terra-purple-700 shadow-lg">
          <p className="text-3xl ">3 % on random transaction</p>
          <p className="my-4 text-xl">Optional service</p>
          <p className="my-4">
            Every week, we move 3 % to your fund savings on a random transaction
            below 5000 kr.
          </p>
        </div>
      </div>
    </div>
  );
}
