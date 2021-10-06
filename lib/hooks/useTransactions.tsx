import { useQuery } from "react-query";
import { ListTransactionsResponse } from "../tink/transactions";

async function fetchTransactions() {
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
export function useTransactions() {
  return useQuery<any, String, ListTransactionsResponse>(
    "transactions",
    fetchTransactions
  );
}
