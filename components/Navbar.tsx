import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import LogoNavbar from "../public/logos/LogoStanding.svg";

const classes = (...classNames: any[]) => classNames.filter(Boolean).join(" ");

const navigations = [
  {
    name: "My account",
    href: "/myaccount",
    classes:
      "text-black text-sm font-semibold px-4 hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Fund",
    href: "/fund",
    classes:
      "text-black text-sm font-semibold px-4 hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Campaign",
    href: "/campaign",
    classes:
      "text-black text-sm font-semibold px-4 hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Log in",
    href: "/login",
    classes:
      "px-6 py-1 text-gray-700 text-sm bg-gray-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-black transition",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <div>
      <div className="flex lg:flex-col md:flex-col flex-row items-center justify-between border-b">
        <Link href="/">
          <a className="mt-5 mb-3">
            <Image src={LogoNavbar} width="70" height="50" alt="logo" />
          </a>
        </Link>

        <div
          className={classes("hidden sm:flex items-center md:space-x-4 mb-2")}
        >
          {navigations.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={classes(item.classes)}>{item.name}</a>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-6">
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
            "md:space-x-4 flex flex-col border-b"
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
