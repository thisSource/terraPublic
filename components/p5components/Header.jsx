import Image from "next/image";
import TerraTitle from "./TerraTitle";
import { MenuIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "page1", href: "/page1" },
  { name: "page2", href: "/page2" },
  { name: "page3", href: "/page3" }
];

function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div className="p-5">
        <Image src="/logo1.png" alt="logo" width={70} height={70} />
      </div>
      <div className="p-5">
        <MenuIcon className="w-20 h-20" />
      </div>
    </div>
  );
}

export default Header;
