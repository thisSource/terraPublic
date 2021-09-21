import TinkClient from "./tinkClient";

interface Value {
  scale: string;
  unscaledValue: string;
}

interface Amount {
  currencyCode: string;
  value: Value;
}

interface Booked {
  amount: Amount;
}

interface Balances {
  booked: Booked;
}

interface Dates {
  lastRefreshed: Date;
}

interface FinancialInstitution {
  accountNumber: string;
}

interface Iban {
  bban: string;
  iban: string;
}

interface Pan {
  masked: string;
}

interface Identifiers {
  financialInstitution: FinancialInstitution;
  iban: Iban;
  pan: Pan;
}

interface Account {
  balances: Balances;
  customerSegment: string;
  dates: Dates;
  financialInstitutionId: string;
  id: string;
  identifiers: Identifiers;
  name: string;
  type: string;
}

export interface ListAccountsResponse {
  accounts: Account[];
  nextPageToken: string;
}

export default async function fetchAccounts(
  accessToken: string
): Promise<ListAccountsResponse> {
  return TinkClient.client.get("/data/v2/accounts", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
}
