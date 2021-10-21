import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const classes = (...classNames: any[]) => classNames.filter(Boolean).join(" ");

const navigations = [
  {
    name: "My account",
    href: "/myaccount",
    classes:
      "text-black text-base hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Fund",
    href: "/fund",
    classes:
      "text-black text-base hover:bg-gray-200 hover:rounded curser-pointer",
  },
  {
    name: "Campaign",
    href: "/campaign",
    classes:
      "text-black text-base hover:bg-gray-200 hover:rounded curser-pointer",
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
      <div className="flex justify-between mb-2 border-b">
        <Link href="/">
          <a>
            <Image
              src={"/logos/LogoNav.svg"}
              width="100"
              height="70"
              alt="logo"
            />
          </a>
        </Link>

        <div className={classes("hidden sm:flex items-center md:space-x-4")}>
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
