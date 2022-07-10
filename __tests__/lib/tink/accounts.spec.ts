import fetchAccounts from "../../../lib/tink/accounts";
import TinkClient from "../../../lib/tink/tinkClient";

jest.mock("../../../config", () => ({
  __esModule: true,
  default: {
    tink: {
      clientId: "hello",
      clientSecret: "world",
      apiBaseUrl: "https://api.tink.com/",
    },
  },
}));

describe("api/accounts", function () {
  it("fetch accounts", async () => {
    const MockTinkClient = TinkClient as jest.MockedClass<typeof TinkClient>;
    const spy = jest
      .spyOn(MockTinkClient.client, "get")
      .mockResolvedValue(stubAccountsResponse);

    const accessToken = "fight_club";
    const accountsResponse = await fetchAccounts(accessToken);
    expect(spy).toHaveBeenCalledWith("/data/v2/accounts", {
      headers: { authorization: "Bearer fight_club" },
    });
    expect(accountsResponse.accounts[0].id).toEqual(
      "ee7ddbd178494220bb184791783f4f63"
    );
  });
});
const stubAccountsResponse = {
  accounts: [
    {
      balances: {
        booked: {
          amount: {
            currencyCode: "EUR",
            value: {
              scale: "-3",
              unscaledValue: "19",
            },
          },
        },
      },
      customerSegment: "UNDEFINED_CUSTOMER_SEGMENT",
      dates: {
        lastRefreshed: "2020-12-15T12:16:58Z",
      },
      financialInstitutionId: "6e68cc6287704273984567b3300c5822",
      id: "ee7ddbd178494220bb184791783f4f63",
      identifiers: {
        financialInstitution: {
          accountNumber: "SE6930000000011273547693",
        },
        iban: {
          bban: "0000011273547693",
          iban: "SE6930000000011273547693",
        },
        pan: {
          masked: "4000 12** **** 9010",
        },
      },
      name: "PERSONKONTO",
      type: "CHECKING",
    },
  ],
  nextPageToken: "string",
};
