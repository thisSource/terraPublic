import { useQuery } from "react-query";
import { ListTransactionsResponse } from "../tink/transactions";

async function fetchTransactions() {
  const resp = await fetch("/api/transactions");
  if (!resp.ok) {
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
