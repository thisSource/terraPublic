import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between my-6 border-b">
      <Link href="/">
        <a className="text-5xl font-display font-bold text-[#3f3f3f]">
          sumbyte.
        </a>
      </Link>

      <div className="space-x-4 ml-auto">
        <Link href="/myaccount">
          <a className="">My account</a>
        </Link>
        <Link href="/fund">
          <a>Fund</a>
        </Link>
        <Link href="/campaign">
          <a>Campaigns</a>
        </Link>
        <Link href="/app">
          <a className="bg-black text-white rounded-full py-2 px-4">
            Get Sumbyte app
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
