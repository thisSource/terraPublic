import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import LogoNavbarText from "../public/logos/terra/studioAsset 8.png";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <Disclosure as="nav" className="bg-gray-100 shadow">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" passHref>
                    <Image
                      className="block lg:hidden h-8 w-auto cursor-pointer"
                      src={LogoNavbarText}
                      width="150"
                      height="50"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="hidden sm:flex sm:space-x-8 ml-10">
                  <Link href="/fund" passHref>
                    <a className="border-transparent text-black hover:border-gray-300 hover:text-gray-700  inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                      Terra Fund
                    </a>
                  </Link>
                  <Link href="/savingoptions" passHref>
                    <a className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                      Saving Options
                    </a>
                  </Link>
                  <Link href="/how" passHref>
                    <a className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                      How it works
                    </a>
                  </Link>
                  <Link href="/fund" passHref>
                    <a className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                      Articles
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}

                {status !== "authenticated" && !session && (
                  <div>
                    <Menu>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ring-terra-purple-300">
                        <span className="sr-only">Open user menu</span>
                        <Link href={"/api/auth/signin"}>
                          <a
                            className="p-2.5 px-8 py-2 text-base rounded-full bg-terra-green-300 text-gray-700 font-semibold hover:bg-indigo-300 hover:text-gray-700 transition cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              signIn("", {
                                callbackUrl: "http://localhost:3000/signin",
                              });
                            }}
                          >
                            Sign in
                          </a>
                        </Link>
                      </Menu.Button>
                    </Menu>
                  </div>
                )}

                {status === "authenticated" && session && (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ring-terra-purple-300">
                        <span className="sr-only">Open user menu</span>
                        <a className="p-2.5 px-8 py-2 text-base rounded-full bg-terra-green-300 text-gray-700 font-semibold hover:bg-indigo-300 hover:text-gray-700 transition cursor-pointer">
                          Account
                        </a>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <Link href="/myaccount" passHref>
                                <a>Profile</a>
                              </Link>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <div
                                onClick={() =>
                                  signOut({
                                    callbackUrl: "http://localhost:3000/",
                                  })
                                }
                                className="cursor-pointer"
                              >
                                <a>Sign out</a>
                              </div>
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/fund"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Terra Fund
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/savingoptions"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Saving Options
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/how"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                How it works
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/signin"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign in
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
