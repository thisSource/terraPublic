import { useQuery } from "react-query";
import { ListTransactionsResponse } from "../tink/transactions";

type Options = {
  pageSize: number;
  pageToken?: string;
};

async function fetchTransactions({ pageSize, pageToken }: Options) {
  const url = new URLSearchParams();
  url.set("pageSize", pageSize.toString(10));
  if (pageToken) {
    url.set("pageToken", pageToken);
  }

  const resp = await fetch("/api/transactions");
  if (!resp.ok) {
    if (resp.status === 401) {
      // if auth denied, lets try the login endpoint
      // to see if we still have a valid refreshtoken to use
      await fetch("/api/login");
    }
    throw new Error(resp.statusText);
  }
  return await resp.json();
}

export function useTransactions(options: Options) {
  return useQuery<any, String, ListTransactionsResponse>(
    ["transactions", options],
    () => fetchTransactions(options)
  );
}
