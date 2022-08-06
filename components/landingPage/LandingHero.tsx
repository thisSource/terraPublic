// import Image from "next/dist/client/image";
import Link from "next/link";
// import Video from "./Video";
import TerraGrid from "../p5components/TerraGrid";

export default function LandingHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="m-4">
        <TerraGrid />
      </div>
      <div className="lg:mt-40 mt-10 lg:ml-10">
        <h1 className="text-gray-700 lg:text-3xl text-2xl font-semibold mr-4">
          We must join with Him, Gandalf. We must join with Sauron.
        </h1>
        <h2 className="text-indigo-600 lg:text-2xl text-xl font-semibold">
          It would be wise, my friend.
        </h2>
        <div className="my-10">
          <Link href="/welcome" passHref>
            <a className="p-2.5 px-8 py-4 rounded-full text-base bg-gray-300 text-gray-700 font-semibold hover:bg-indigo-300 hover:text-gray-700 transition cursor-pointer">
              Join Terra today
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
