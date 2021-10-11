import Link from "next/link";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const classes = (...classNames: any[]) => classNames.filter(Boolean).join(" ");

const navigations = [
  {
    name: "My account",
    href: "/myaccount"
  },
  {
    name: "Fund",
    href: "/fund"
  },
  {
    name: "Campaign",
    href: "/campaign"
  },
  {
    name: "Get app",
    href: "/app",
    classes: "px-4 py-2 text-white bg-black rounded-full"
  }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <div>
      <div className="flex justify-between my-6 border-b">
        <Link href="/">
          <a className="text-5xl font-display font-bold text-[#3f3f3f]">
            sumbyte.
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

        <div className="sm:hidden">
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
