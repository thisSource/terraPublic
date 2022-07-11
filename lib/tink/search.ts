import TinkClient from "./tinkClient";

export async function search(
  accessToken: string,
  options: SearchQuery = {}
): Promise<SearchResponse> {
  return await TinkClient.client.post("/api/v1/search", {
    body: options,
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
  });
}

export interface SearchQuery {
  accounts?: string[];
  categories?: string[];
  endDate?: number;
  externalIDS?: string[];
  includeUpcoming?: boolean;
  limit?: number;
  maxAmount?: number;
  minAmount?: number;
  offset?: number;
  order?: "ASC" | "DESC";
  queryString?: string;
  sort?: "SCORE" | "DATE" | "COUNT" | "DESCRIPTION" | "AMOUNT" | "CATEGORY";
  startDate?: number;
}

export interface SearchResponse {
  count: number;
  metrics: Metrics;
  net: number;
  periodAmounts: PeriodAmount[];
  query: Query;
  results: Result[];
}

interface Result {
  transaction: Transaction;
  type: string;
}

interface Transaction {
  accountId: string;
  amount: number;
  categoryId: string;
  categoryType: string;
  currencyDenominatedAmount: CurrencyDenominatedAmount;
  currencyDenominatedOriginalAmount: CurrencyDenominatedAmount;
  date: number;
  description: string;
  dispensableAmount: number;
  id: string;
  identifiers: Identifiers;
  lastModified: number;
  notes: string;
  originalAmount: number;
  originalDate: number;
  originalDescription: string;
  partnerPayload: PartnerPayload;
  parts: Part[];
  payload: PartnerPayload;
  pending: boolean;
  timestamp: number;
  type: string;
  upcoming: boolean;
  userId: string;
  userModified: boolean;
}

interface Part {
  amount: number;
  categoryId: string;
  counterpartDescription: string;
  counterpartId: string;
  counterpartTransactionAmount: number;
  counterpartTransactionId: string;
  date: number;
  id: string;
  lastModified: number;
}

interface PartnerPayload {}

interface Identifiers {
  providerExternalId: string;
}

interface CurrencyDenominatedAmount {
  currencyCode: string;
  scale: number;
  unscaledValue: number;
}

interface Query {
  accounts: string[];
  categories: string[];
  endDate: number;
  externalIds: string[];
  includeUpcoming: boolean;
  limit: number;
  maxAmount: number;
  minAmount: number;
  offset: number;
  order: string;
  queryString: string;
  sort: string;
  startDate: number;
}

interface PeriodAmount {
  key: string;
  value: number;
}

interface Metrics {
  AVG: number;
  CATEGORIES: CATEGORIES;
  COUNT: number;
  NET: number;
  SUM: number;
}

interface CATEGORIES extends Record<string, number> {}
