import getTinkLinkUrl from "../lib/tink/getTinkLinkUrl";
import Image from "next/image";
import LogoNavbarText from "../public/logos/terra/terra.png";

const steps = [
  { name: "Step 1", href: "/signin", status: "previous" },
  { name: "Step 2", href: "/signin", status: "current" },
];

export default function TinkLinkLogin() {
  return (
    <div className="flex min-h-full">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Image
              className="block lg:hidden h-8 w-auto cursor-pointer"
              src={LogoNavbarText}
              width="75"
              height="30"
              alt="logo"
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-terra-purple-700">
              Connect to your bank
            </h2>
            <nav
              className="py-6 flex items-center justify-left"
              aria-label="Progress"
            >
              <p className="text-sm font-medium">
                Step {steps.findIndex((step) => step.status === "current") + 1}{" "}
                of {steps.length}
              </p>
              <ol role="list" className="ml-8 flex items-center space-x-5">
                {steps.map((step) => (
                  <li key={step.name}>
                    {step.status === "complete" ? (
                      <a
                        href={step.href}
                        className="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900"
                      >
                        <span className="sr-only">{step.name}</span>
                      </a>
                    ) : step.status === "current" ? (
                      <a
                        href={step.href}
                        className="relative flex items-center justify-center"
                        aria-current="step"
                      >
                        <span
                          className="absolute flex h-5 w-5 p-px"
                          aria-hidden="true"
                        >
                          <span className="h-full w-full rounded-full bg-indigo-200" />
                        </span>
                        <span
                          className="relative block h-2.5 w-2.5 rounded-full bg-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="sr-only">{step.name}</span>
                      </a>
                    ) : (
                      <a
                        href={step.href}
                        className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400"
                      >
                        <span className="sr-only">{step.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Where is you bank located?
                </p>

                <div className="mt-1 grid grid-cols-1 gap-3">
                  <div>
                    <a
                      href={getTinkLinkUrl({ market: "DK", locale: "dk_DK" })}
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Denmark</span>
                      <p>Denmark</p>
                    </a>
                  </div>

                  <div>
                    <a
                      href={getTinkLinkUrl({ market: "SE", locale: "sv_SE" })}
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="sr-only">Sweden</span>
                      <p>Sweden</p>
                    </a>
                  </div>

                  <div>
                    <a
                      href={getTinkLinkUrl({ market: "DE", locale: "de_DE" })}
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Germany</span>
                      <p>Germany</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
