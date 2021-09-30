import Link from "next/link";

function Navbar() {
  return (
    <div>
      <Link href="/">
        <a>sumbyte.</a>
      </Link>
      <Link href="/myaccount">
        <a>My account</a>
      </Link>
      <Link href="/fund">
        <a>Fund</a>
      </Link>
      <Link href="/campaign">
        <a>Campaigns</a>
      </Link>
      <Link href="/app">
        <a>Get Sumbyte app</a>
      </Link>
    </div>
  );
}

export default Navbar;
