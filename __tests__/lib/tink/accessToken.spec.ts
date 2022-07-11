import fetchAccessToken, { refreshToken } from "../../../lib/tink/accessToken";
import { stubRequest } from "../../../mocks/server";
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

describe("tink/accessToken", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("fetch an accesstoken from an authorization code", async () => {
    const request = stubRequest(
      "post",
      "https://api.tink.com/api/v1/oauth/token"
    )
      .with({
        // todo: Find a way to make this matching body deterministically
        body: "client_id=hello&client_secret=world&grant_type=authorization_code&code=123",
      })
      .toReturn({ body: { accessToken: "my_access_token" } })
      .use();

    const token = await fetchAccessToken("123");
    expect(request).toHaveBeenCalled();
    expect(token).toEqual({ accessToken: "my_access_token" });
  });
});

describe("tink/refreshToken", () => {
  it("refreshes token", async () => {
    const request = stubRequest(
      "post",
      "https://api.tink.com/api/v1/oauth/token"
    )
      .with({
        body: "client_id=hello&client_secret=world&grant_type=refresh_token&refresh_token=123",
      })
      .toReturn({
        body: {
          refresh_token: "my_refresh_token",
          access_token: "my_access_token",
        },
      })
      .use();

    const token = await refreshToken("123");
    expect(request).toHaveBeenCalled();
    expect(token).toEqual({
      access_token: "my_access_token",
      refresh_token: "my_refresh_token",
    });
  });
});
