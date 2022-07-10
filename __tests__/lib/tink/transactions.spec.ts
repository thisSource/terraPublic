import TinkClient from "../../../lib/tink/tinkClient";
import { fetchTransactions } from "../../../lib/tink/transactions";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("tink/transactions", () => {
  it("fetch transactions from a users bankaccount", async () => {
    const MockTinkClient = TinkClient as jest.MockedClass<typeof TinkClient>;
    const spy = jest
      .spyOn(MockTinkClient.client, "get")
      .mockResolvedValue(transactionsReturnValue);

    const accessToken = "an_access_token";
    const data = await fetchTransactions(accessToken, { pageSize: 10 });
    expect(spy).toHaveBeenCalledWith("/data/v2/transactions?pageSize=10", {
      headers: {
        authorization: "Bearer an_access_token",
      },
    });

    expect(data.transactions).toHaveLength(1);
    expect(data.transactions[0].accountId).toEqual(
      "4a2945d1481c4f4b98ab1b135afd96c0"
    );
  });

  describe("pagination", () => {
    it("handles pagination size", async () => {
      const MockTinkClient = TinkClient as jest.MockedClass<typeof TinkClient>;
      const spy = jest
        .spyOn(MockTinkClient.client, "get")
        .mockResolvedValue(transactionsReturnValue);
      const accessToken = "an_access_token";
      const data = await fetchTransactions(accessToken, { pageSize: 55 });
      expect(spy).toHaveBeenCalledWith(`/data/v2/transactions?pageSize=55`, {
        headers: {
          authorization: "Bearer an_access_token",
        },
      });

      expect(data.transactions).toHaveLength(1);
      expect(data.transactions[0].accountId).toEqual(
        "4a2945d1481c4f4b98ab1b135afd96c0"
      );
    });

    it("handles pagination with pagetoken", async () => {
      const MockTinkClient = TinkClient as jest.MockedClass<typeof TinkClient>;
      const spy = jest
        .spyOn(MockTinkClient.client, "get")
        .mockResolvedValue(transactionsReturnValue);

      const accessToken = "an_access_token";
      const nextPageToken = "a_next_page_token";
      const data = await fetchTransactions(accessToken, {
        pageSize: 100,
        pageToken: nextPageToken,
      });
      expect(spy).toHaveBeenCalledWith(
        `/data/v2/transactions?pageSize=100&pageToken=${nextPageToken}`,
        {
          headers: {
            authorization: "Bearer an_access_token",
          },
        }
      );

      expect(data.transactions).toHaveLength(1);
      expect(data.transactions[0].accountId).toEqual(
        "4a2945d1481c4f4b98ab1b135afd96c0"
      );
    });
  });
});

const transactionsReturnValue = {
  nextPageToken: "string",
  transactions: [
    {
      accountId: "4a2945d1481c4f4b98ab1b135afd96c0",
      amount: {
        currencyCode: "GBP",
        value: {
          scale: "1",
          unscaledValue: "-1300",
        },
      },
      bookedDateTime: "2020-12-15T09:25:12Z",
      categories: {
        pfm: {
          id: "d8f37f7d19c240abb4ef5d5dbebae4ef",
          name: "",
        },
      },
      dates: {
        booked: "2020-12-15",
        value: "2020-12-15",
      },
      descriptions: {
        display: "Tesco",
        original: "TESCO STORES 3297",
      },
      id: "d8f37f7d19c240abb4ef5d5dbebae4ef",
      identifiers: {
        providerTransactionId: "500015d3-acf3-48cc-9918-9e53738d3692",
      },
      merchantInformation: {
        merchantCategoryCode: "string",
        merchantName: "string",
      },
      providerMutability: "MUTABILITY_UNDEFINED",
      reference: "string",
      status: "BOOKED",
      types: {
        financialInstitutionTypeCode: "DEB",
        type: "DEFAULT",
      },
      valueDateTime: "2020-12-15T09:25:12Z",
    },
  ],
};
