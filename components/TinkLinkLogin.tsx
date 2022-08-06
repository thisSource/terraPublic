import getTinkLinkUrl from "../lib/tink/getTinkLinkUrl";

function MarketButton(props: { href: string; market: string }) {
  return (
    <a
      className="flex items-center px-10 py-4 border border-transparent text-sm font-medium rounded-md text-terra-purple-700 bg-terra-purple-100 hover:bg-terra-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terra-green-500"
      href={props.href}
    >
      {props.market}
    </a>
  );
}

export default function TinkLinkLogin() {
  return (
    <div className="mx-8 my-20 p-10 bg-terra-purple-200 rounded-xl">
      <h2 className="mt-6 text-center text-3xl text-terra-purple-700">
        Sign in with your bank
      </h2>

      <div className="mt-10 flex flex-col items-center justify-center">
        <span className="mb-4">Select your country</span>
        <ul className="space-y-4">
          <li>
            <MarketButton
              market="Sweden"
              href={getTinkLinkUrl({ market: "SE", locale: "sv_SE" })}
            />
          </li>
          <li>
            <MarketButton
              market="Germany"
              href={getTinkLinkUrl({ market: "DE", locale: "de_DE" })}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
