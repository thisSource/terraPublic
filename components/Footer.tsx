import Link from "next/link";

const footerNav = [
  {
    id: "1",
    title: "How it works",
    linkA: "How it works step-by-step",
    linkB: "Our Sustainable portfolio",
    linkC: "Open account",
    linkD: "About Sumbyte",
    linkE: "Legal",
    hrefT: "./fund",
    hrefA: "./myaccount",
    hrefB: "./fund",
    hrefC: "./myaccount",
    hrefD: "./fund",
    hrefE: "./myaccount"
  },
  {
    id: "2",
    title: "Sumbyte for business",
    linkA: "Get involved",
    linkB: "Dashboard",
    hrefT: "./fund",
    hrefA: "./myaccount",
    hrefB: "./fund"
  },
  {
    id: "3",
    title: "Contact",
    linkA: "Send us a message",
    hrefT: "./fund",
    hrefA: "./myaccount"
  }
];

function Footer() {
  const terms =
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum. @sumbyte 2021";

  const buttonStyle =
    "p-0.5 hover:text-blue-700 hover:underline cursor-pointer";
  return (
    <div className="border-t-2 mt-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:ml-20 md:ml-5 mt-3 mb-10 text-xs">
        <Link href="/">
          <a className="text-xl font-display font-bold text-[#3f3f3f]">
            sumbyte.
          </a>
        </Link>
        {footerNav.map((item) => (
          <div key={item.id}>
            <a className={`p-0.5 font-semibold`}>{item.title}</a>
            <div>
              <Link href={`${item.hrefA}`}>
                <a className={`${buttonStyle}`}>{item.linkA}</a>
              </Link>
            </div>
            <div>
              <Link href={`${item.hrefB}`}>
                <a className={`${buttonStyle}`}>{item.linkB}</a>
              </Link>
            </div>
            <div>
              <Link href={`${item.hrefC}`}>
                <a className={`${buttonStyle}`}>{item.linkC}</a>
              </Link>
            </div>
            <div>
              <Link href={`${item.hrefD}`}>
                <a className={`${buttonStyle}`}>{item.linkD}</a>
              </Link>
            </div>
            <div>
              <Link href={`${item.hrefE}`}>
                <a className={`${buttonStyle}`}>{item.linkE}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2">
        <div className="text-xs ls:mx-20 ls:mx-1 mt-3 mb-10">{terms}</div>
      </div>
    </div>
  );
}

export default Footer;
