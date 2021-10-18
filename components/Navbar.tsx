import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const classes = (...classNames: any[]) => classNames.filter(Boolean).join(" ");

const navigations = [
  {
    name: "My account",
    href: "/myaccount",
    classes:
      "px-2 py-1 text-black text-base hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Fund",
    href: "/fund",
    classes:
      "px-2 py-1 text-black text-base hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Campaign",
    href: "/campaign",
    classes:
      "px-2 py-1 text-black text-base hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Log in",
    href: "/app",
    classes:
      "px-4 py-1 text-white text-base bg-black rounded-full hover:bg-yellow-300 hover:text-black",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <div>
      <div className="flex justify-between mt-1 border-b lg:mr-10 md:mr-5 mr-1">
        <Link href="/">
          <a className="bg-yellow-300 lg:px-2 lg:py-3 lg:text-base md:px-1 md:py-2 md:text-sm px-1 py-2 text-xs font-display font-semibold text-gray-800 mt-3 mb-5 lg:ml-10 md:ml-5 ml-2">
            sumbyte
          </a>
        </Link>

        <div
          className={classes(
            "hidden sm:flex items-center md:space-x-4 md:ml-auto"
          )}
        >
          {navigations.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={classes(item.classes)}>{item.name}</a>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-3">
          {open ? (
            <XIcon onClick={toggleMenu} className="block w-6 h-6" />
          ) : (
            <MenuIcon onClick={toggleMenu} className="block h-6 w-6" />
          )}
        </div>
      </div>

      <div className="sm:hidden ">
        <div
          className={classes(
            open ? "" : "hidden",
            "md:space-x-4 flex flex-col md:ml-auto border-b mb-4 pb-2"
          )}
        >
          {navigations.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <span className="block">
                <a className={classes(item.classes)}>{item.name}</a>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
