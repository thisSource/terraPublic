import { useQuery } from "react-query";
import { SearchQuery, SearchResponse } from "../tink/search";

async function search(options: SearchQuery = {}) {
  const resp = await fetch("/api/transactions/search", {
    method: "POST",
    body: JSON.stringify(options),
  });

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

export function useSearch(
  options: SearchQuery = { limit: 100, minAmount: -5000, maxAmount: -1 }
) {
  return useQuery<any, String, SearchResponse>(
    ["transactions", "search", options],
    () => search(options)
  );
}
