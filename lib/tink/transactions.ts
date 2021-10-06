import TinkClient from "./tinkClient";

export async function fetchTransactions(
  accessToken: string
): Promise<ListTransactionsResponse> {
  return TinkClient.client.get("/data/v2/transactions", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
}

export interface Value {
  unscaledValue: string;
  scale: string;
}

export interface Amount {
  value: Value;
  currencyCode: string;
}

export interface Descriptions {
  original: string;
  display: string;
}

export interface Dates {
  booked: string;
}

export interface Types {
  type: string;
}

export interface Pfm {
  id: string;
  name: string;
}

export interface Categories {
  pfm: Pfm;
}
export interface Transaction {
  id: string;
  accountId: string;
  amount: Amount;
  descriptions: Descriptions;
  dates: Dates;
  types: Types;
  categories: Categories;
  status: string;
  providerMutability: string;
}

export interface ListTransactionsResponse {
  transactions: Transaction[];
  nextPagetoken: string;
}
