import COChart from "../components/landingPage/COChart";
import DevChart from "../components/landingPage/DevChart";
import How from "../components/landingPage/How";
import Video from "../components/landingPage/Video";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="mt-5">
      <div className="flex flex-col lg:flex-row md:flex-row justify-between">
        <div className="lg:mt-40 md:mt-20 mt-10 lg:ml-10">
          <h1 className="text-gray-700 lg:text-xl md:text-base text-sm font-semibold">
            Save money and transform the world
          </h1>
          <h2 className="text-yellow-300 lg:text-base md:text-sm text-xs font-semibold">
            Transaction by transaction
          </h2>
          <div className="my-10">
            <Link href="/welcome" passHref>
              <a className="p-2.5 px-3 rounded-full text-xs bg-gray-300 text-gray-700 font-semibold hover:bg-yellow-300 hover:text-gray-700 transition cursor-pointer">
                join Sumbyte.
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:mx-10 md:mx-10">
          <Video />
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-around lg:mt-20 md:mt-20 border-t">
        <DevChart />
        <COChart />
      </div>
      <How />
    </div>
  );
}

export default LandingPage;
