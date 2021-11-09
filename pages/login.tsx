import getTinkLinkUrl from "../lib/tink/getTinkLinkUrl";

function MarketButton(props: { href: string; market: string }) {
  return (
    <a
      className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      href={props.href}
    >
      {props.market}
    </a>
  );
}

export default function Login() {
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in with your bank to get started
      </h2>

      <div className="mt-10 flex flex-col items-center justify-center">
        <span className="font-bold mb-4">Choose market</span>
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
