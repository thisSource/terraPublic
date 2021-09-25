import Head from "next/head";
import React, { useEffect, useState } from "react";
import config from "../config";
import { ListTransactionsResponse } from "../lib/tink/transactions";
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

const handler: ServerSideHandler = async ({ req, res }) => {
  const token = req.session.get("token");
  if (token) {
    return {
      props: { token },
    };
  } else {
    return {
      props: { token: false },
    };
  }
};
export const getServerSideProps = withSession<ServerSideHandler>(handler);

export default function Home(props: { token?: string }) {
  const [token, setToken] = useState(props.token);
  const [transactions, setTransactions] = useState<ListTransactionsResponse>();
  const [error, setError] = useState();

  useEffect(() => {
    if (token) {
      fetch("/api/transactions")
        .then((resp) => {
          if (!resp.ok) {
            if (resp.status === 401) {
              setToken("");
            }
            throw new Error(resp.statusText);
          }
          return resp;
        })
        .then((resp) => resp.json())
        .then((x) => setTransactions(x as ListTransactionsResponse))
        .catch((err) => setError(err.toString()));
    }
  }, [token]);

  return (
    <div className={styles.container}>

      <Head>
        <title>SUMBYTE</title>
        <meta name="description" content="Next unicorn app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {!token ? (
        <main className={styles.main}>
          <a className={styles.button} href={getTinkLinkUrl()}>
            Connect account
          </a>
          <div className={styles.firstPageImage}><Image  src="/montain.jpg" width={1000} height={500}/></div>

        </main>
      ) : (
        <pre>{JSON.stringify(transactions?.transactions, null, 2)}</pre>
      )}

      {error ? <div className={styles.errorBox}>{error}</div> : null}

    </div>
  );
}

