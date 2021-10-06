import { useQuery } from "react-query";
import { ListAccountsResponse } from "../tink/accounts";

async function fetchAccounts(): Promise<ListAccountsResponse> {
  const resp = await fetch("/api/accounts");
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

export function useAccounts() {
  return useQuery<ListAccountsResponse, Error>("accounts", fetchAccounts);
}
