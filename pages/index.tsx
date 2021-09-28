import Head from "next/head";
import config from "../config";
import { useAccounts } from "../lib/hooks/useAccounts";
import { ListAccountsResponse } from "../lib/tink/accounts";
import withSession, { ServerSideHandler } from "../lib/withSession";
import styles from "../styles/Home.module.css";
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

export default function Home() {
  const { data, error, isLoading } = useAccounts();

  return (
    <div className={styles.container}>
      <Head>
        <title>SUMBYTE</title>
        <meta name="description" content="Next unicorn app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.firstPageImage}>
          <Image src="/yellow.jpg" width={1000} height={500} />
        </div>
        {isLoading ? "laddar konton" : null}
        {!data ? (
          <a className={styles.button} href={getTinkLinkUrl()}>
            Connect account
          </a>
        ) : (
          <AccountsList accounts={data.accounts} />
        )}
        {error ? <div className={styles.errorBox}>{error.message}</div> : null}
      </main>
    </div>
  );
}
