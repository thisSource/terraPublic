import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import LogoNavbarText from "../public/logos/terra/studioAsset 8.png";
import { GetServerSideProps } from "next";

interface ProviderProps {
  providers: {
    github: {
      id: string;
      name: string;
      type: string;
      signinUrl: string;
      callbackUrl: string;
    };

    google: {
      id: string;
      name: string;
      type: string;
      signinUrl: string;
      callbackUrl: string;
    };
  };
}

const steps = [
  { name: "Step 1", href: "/signin", status: "current" },
  { name: "Step 2", href: "/signin", status: "upcoming" },
];

export default function SignIn({ providers }: ProviderProps) {
  return (
    <>
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
                Sign in to your account
              </h2>

              <nav
                className="py-6 flex items-center justify-left"
                aria-label="Progress"
              >
                <p className="text-sm font-medium">
                  Step{" "}
                  {steps.findIndex((step) => step.status === "current") + 1} of{" "}
                  {steps.length}
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
                    Sign in with social account
                  </p>

                  <div className="mt-1 grid grid-cols-1 gap-3">
                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        onClick={() =>
                          signIn(providers.google.id, {
                            callbackUrl: "http://localhost:3000/signin-bank",
                          })
                        }
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        onClick={() =>
                          signIn(providers.github.id, {
                            callbackUrl: "http://localhost:3000/signin-bank",
                          })
                        }
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
