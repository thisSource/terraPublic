import Head from "next/head";
import config from "../config";
import yellowImg from "../public/yellow.jpg";
import { useAccounts } from "../lib/hooks/useAccounts";
import { ListAccountsResponse } from "../lib/tink/accounts";
import withSession, { ServerSideHandler } from "../lib/withSession";
import Image from "next/image";

function getTinkLinkUrl() {
  if (!config.tink.clientId) throw new Error("tink client id must be set");
  const base = new URL(
    "1.0/transactions/connect-accounts/",
    "https://link.tink.com"
  );
  const params = new URLSearchParams({
    client_id: config.tink.clientId,
    redirect_uri: config.tink.redirectUri,
    market: "SE",
    locale: "sv_SE",
  });
  return `${base.toString()}?${params.toString()}`;
}

const handler: ServerSideHandler = async ({ req }) => {
  const token = req.session.get<String>("token");
  return {
    props: { token },
  };
};

export const getServerSideProps = withSession<ServerSideHandler>(handler);

function AccountsList(props: { accounts: ListAccountsResponse["accounts"] }) {
  return (
    <ul>
      {props.accounts.map((account) => (
        <li key={account.id}>
          {account.name}{" "}
          {Number(account.balances.booked.amount.value.unscaledValue) /
            Math.pow(10, Number(account.balances.booked.amount.value.scale))}
          {account.balances.booked.amount.currencyCode}
        </li>
      ))}
    </ul>
  );
}

function Home() {
  const { data, error, isLoading } = useAccounts();

  return (
    <div>
      <Head>
        <title>SUMBYTE</title>
        <meta name="description" content="Next unicorn app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <div>
          <Image src={yellowImg} />
        </div>
        {isLoading ? "laddar konton" : null}
        {!data ? (
          <a href={getTinkLinkUrl()}>Connect account</a>
        ) : (
          <AccountsList accounts={data.accounts} />
        )}
        {error ? <div>{error.message}</div> : null}
      </main>
    </div>
  );
}

export default Home;
