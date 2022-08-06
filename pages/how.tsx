import Link from "next/link";

export default function Test() {
  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
      <div className="snap-center bg-terra-purple w-full flex-shrink-0 h-screen flex flex-col items-center justify-center">
        <p className="mt-40 m-20 lg:text-8xl text-6xl">
          We make saving engaging and meaningful.
        </p>
        <p className="m-10 mb-20 text-xl">
          By linking your savings to your daily transactions
        </p>
        <p className="mb-40 lg:mb-20 text-4xl">and... </p>
      </div>
      <div className="snap-center bg-terraDarkPink w-full flex-shrink-0  h-screen flex flex-col items-center justify-center">
        <p className="m-20 px-20 lg:text-8xl text-6xl">
          By placing your money in{" "}
          <span className="text-terra-purple-700">
            {" "}
            <Link href="/fund" passHref>
              sustainable companies
            </Link>
          </span>{" "}
        </p>
        <p className="text-2xl">Building a better world</p>
      </div>
      <div className="snap-center bg-terraPink w-full flex-shrink-0 h-screen flex flex-col items-center justify-center">
        <p className="text-6xl lg:text-7xl m-20">
          {" "}
          Select from our
          <span className="text-terra-purple-700">
            {" "}
            <Link href="/savingoptions" passHref>
              savings options
            </Link>
          </span>
        </p>

        <p className="text-xl">To create the perfect saving balance.</p>
      </div>
      <div className="snap-center bg-terraDarkOrange w-full flex-shrink-0 h-screen flex items-center justify-center">
        <p className="text-8xl m-20">And watch your funds grow</p>
      </div>
      <div className="snap-center bg-terraOrange w-full flex-shrink-0 h-screen flex flex-col items-center justify-center">
        <p className="text-2xl m-10">transaction by transaction</p>
        <p className="text-4xl m-10">
          making the planet greener, smarter and sweeter
        </p>
      </div>
      <div className="snap-center bg-terraYellow w-full flex-shrink-0 h-screen flex flex-col items-center justify-center text-8xl">
        <p className="text-xl">Sounds interesting?</p>
        <div className="">
          <Link href="/welcome" passHref>
            <a className="p-2.5 px-8 py-4 rounded-full text-base bg-gray-300 text-gray-700 font-semibold hover:bg-indigo-300 hover:text-gray-700 transition cursor-pointer">
              join Terra
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
