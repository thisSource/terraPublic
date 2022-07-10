import { search } from "../../../lib/tink/search";
import TinkClient from "../../../lib/tink/tinkClient";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("tink/search", () => {
  it("searches for transactions", async () => {
    const MockTinkClient = TinkClient as jest.MockedClass<typeof TinkClient>;
    const spy = jest
      .spyOn(MockTinkClient.client, "post")
      .mockResolvedValue(response);

    const accessToken = "an_access_token";
    const result = await search(accessToken);

    expect(spy).toHaveBeenCalledWith("/api/v1/search", {
      body: {},
      headers: {
        authorization: "Bearer an_access_token",
        "content-type": "application/json",
      },
    });

    expect(result.results).toHaveLength(1);
  });

  describe("options", () => {
    it("passing options to request", async () => {
      const MockTinkClient = TinkClient as jest.MockedClass<typeof TinkClient>;
      const spy = jest
        .spyOn(MockTinkClient.client, "post")
        .mockResolvedValue(response);

      const accessToken = "an_access_token";
      const result = await search(accessToken, {
        maxAmount: -1,
        limit: 100,
        offset: 10,
        order: "DESC",
        sort: "AMOUNT",
        queryString: "query",
        accounts: ["account1", "account2"],
        categories: ["category1", "category2"],
        externalIDS: ["externalID1", "externalID2"],
        includeUpcoming: true,
        startDate: 123456789,
        endDate: 987654321,
      });

      expect(spy).toHaveBeenCalledWith("/api/v1/search", {
        body: {
          maxAmount: -1,
          limit: 100,
          offset: 10,
          order: "DESC",
          sort: "AMOUNT",
          queryString: "query",
          accounts: ["account1", "account2"],
          categories: ["category1", "category2"],
          externalIDS: ["externalID1", "externalID2"],
          includeUpcoming: true,
          startDate: 123456789,
          endDate: 987654321,
        },
        headers: {
          authorization: "Bearer an_access_token",
          "content-type": "application/json",
        },
      });

      expect(result).not.toBeNull();
    });

    it("defaults to empty options object", async () => {
      const MockTinkClient = TinkClient as jest.MockedClass<typeof TinkClient>;
      const spy = jest
        .spyOn(MockTinkClient.client, "post")
        .mockResolvedValue(response);

      const accessToken = "an_access_token";
      const result = await search(accessToken);

      expect(spy).toHaveBeenCalledWith("/api/v1/search", {
        body: {},
        headers: {
          authorization: "Bearer an_access_token",
          "content-type": "application/json",
        },
      });
      expect(result).not.toBeNull();
    });
  });
});

const response = {
  count: 110,
  metrics: {
    AVG: 15.0,
    CATEGORIES: {
      "0e1bade6a7e3459eb794f27b7ba4cea0": 1.0,
    },
    COUNT: 110,
    NET: 1288.45,
    SUM: 1650.0,
  },
  net: 1288.45,
  periodAmounts: [
    {
      key: "string",
      value: 0,
    },
  ],
  query: {
    accounts: [],
    categories: [],
    endDate: null,
    externalIds: [],
    includeUpcoming: false,
    limit: 0,
    maxAmount: null,
    minAmount: null,
    offset: 0,
    order: "DESC",
    queryString: null,
    sort: "DATE",
    startDate: null,
    lastTransactionId: null,
  },
  results: [
    {
      transaction: {
        accountId: "3fe2d96efacd4dc5994404a950f238a9",
        amount: 34.5,
        categoryId: "0e1bade6a7e3459eb794f27b7ba4cea0",
        categoryType: "EXPENSES",
        currencyDenominatedAmount: {
          currencyCode: "EUR",
          scale: 2,
          unscaledValue: 1050,
        },
        currencyDenominatedOriginalAmount: {
          currencyCode: "EUR",
          scale: 2,
          unscaledValue: 1050,
        },
        date: 1455740874875,
        description: "Stadium Sergelg Stockholm",
        dispensableAmount: 0,
        id: "79c6c9c27d6e42489e888e08d27205a1",
        identifiers: {
          providerExternalId: "string",
        },
        lastModified: 1455740874875,
        notes: "Delicious #cake #wedding",
        originalAmount: 34.5,
        originalDate: 1455740874875,
        originalDescription: "Stadium Sergelg Stockholm",
        partnerPayload: {},
        parts: [
          {
            amount: 34.5,
            categoryId: "0e1bade6a7e3459eb794f27b7ba4cea0",
            counterpartDescription: "Stadium Sergelg Stockholm",
            counterpartId: "79c6c9c27d6e42489e888e08d27205a1",
            counterpartTransactionAmount: 10.0,
            counterpartTransactionId: "d030a7b0840547428aa2fd07026e9a77",
            date: 1455740874875,
            id: "7303ff128531463bbed358bbf9e23f31",
            lastModified: 1455740874875,
          },
        ],
        payload: {},
        pending: false,
        timestamp: 1464543093494,
        type: "CREDIT_CARD",
        upcoming: false,
        userId: "d9f134ee2eb44846a4e02990ecc8d32e",
        userModified: false,
      },
      type: "TRANSACTION",
    },
  ],
};
