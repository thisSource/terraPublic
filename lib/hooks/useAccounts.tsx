import { useQuery } from "react-query";
import { ListAccountsResponse } from "../tink/accounts";

async function fetchAccounts(): Promise<ListAccountsResponse> {
  const resp = await fetch("/api/accounts");
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
}

export function useAccounts() {
  return useQuery<ListAccountsResponse, Error>("accounts", fetchAccounts);
}
