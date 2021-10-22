import Link from "next/link";

const titleStyle = "p-0.5 font-bold";
const itemStyle = "p-0.5 hover:text-blue-700 hover:underline cursor-pointer";

const about = [
  {
    id: "1",
    name: "How it works",
    href: "/howitworks",
    style: titleStyle,
  },
  {
    id: "2",
    name: "How it works step-by-step",
    href: "/howitworks",
    style: itemStyle,
  },
  {
    id: "3",
    name: "Our Sustainable portfolio",
    href: "/fund",
    style: itemStyle,
  },
  {
    id: "4",
    name: "About Sumbyte.",
    href: "/about",
    style: itemStyle,
  },
  {
    id: "5",
    name: "Legal",
    href: "/legal",
    style: itemStyle,
  },
];

const business = [
  {
    id: "1",
    name: "Sumbyte for business",
    href: "/business",
    style: titleStyle,
  },
  {
    id: "2",
    name: "Get active",
    href: "/business",
    style: itemStyle,
  },
  {
    id: "3",
    name: "Dashboard",
    href: "/dashboard",
    style: itemStyle,
  },
];

const contact = [
  {
    id: "1",
    name: "Get in touch",
    href: "/contact",
    style: titleStyle,
  },
  {
    id: "2",
    name: "Write us a message",
    href: "/contact",
    style: itemStyle,
  },
  {
    id: "3",
    name: "F.A.Q",
    href: "/faq",
    style: itemStyle,
  },
];

function Footer() {
  const terms =
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum. @sumbyte 2021";

  return (
    <div className="border-t-2 mt-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:ml-20 md:ml-5 mt-3 mb-10 text-xs">
        <div className="text-xl font-display font-bold text-[#3f3f3f]">
          sumbyte.
        </div>
        <div>
          {about.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {business.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {contact.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link href="/welcome" passHref>
        <div className="lg:ml-20 mb-10">
          <a className="p-2.5 px-3 rounded-full text-xs bg-black text-gray-100 font-semibold hover:bg-yellow-300 hover:text-gray-900 transition cursor-pointer">
            join Sumbyte.
          </a>
        </div>
      </Link>
      <div className="border-t-2">
        <div className="text-xs lg:mx-20 md:mx-1 mt-3 mb-10">{terms}</div>
      </div>
    </div>
  );
}

export default Footer;
