import TinkClient, {
  ClientError,
  HttpError,
  ServerError,
} from "../../../lib/tink/tinkClient";
import { stubRequest } from "../../../mocks/server";

describe("tinkClient", () => {
  it("makes requests against tink api", async () => {
    const request = stubRequest(
      "get",
      "https://api.tink.com/api/wohomygod"
    ).use();

    const client = new TinkClient({ baseUrl: "https://api.tink.com" });
    await client.get("/api/wohomygod");

    expect(request).toHaveBeenCalled();
  });

  it("supports POST payloads", async () => {
    const request = stubRequest("post", "https://api.tink.com/api/sauces")
      .with({ body: JSON.stringify({ flavour: "schiracha sauce" }) })
      .toReturn({ body: { forbidden_in: ["eu"] } })
      .use();

    const client = new TinkClient({ baseUrl: "https://api.tink.com" });

    const response = await client.post("/api/sauces", {
      body: { flavour: "schiracha sauce" },
    });

    expect(request).toHaveBeenCalled();
    expect(response).toEqual({ forbidden_in: ["eu"] });
  });

  it("raises and ServerError when a request fails due to a 5xx status code", async () => {
    stubRequest("get", "https://api.tink.com/api/server_error")
      .toReturn({
        status: 500,
      })
      .use();

    const client = new TinkClient({ baseUrl: "https://api.tink.com" });
    return await expect(client.get("/api/server_error")).rejects.toThrow(
      ServerError
    );
  });

  it("raises and ClientError when a request fails due to a 4xx status code", async () => {
    stubRequest("get", "https://api.tink.com/api/client_error")
      .toReturn({
        status: 400,
      })
      .use();

    const client = new TinkClient({ baseUrl: "https://api.tink.com" });
    return await expect(client.get("/api/client_error")).rejects.toThrow(
      ClientError
    );
  });
  it("raises an HttpError when a request fails with unexpected status code", async () => {
    stubRequest("get", "https://api.tink.com/api/http_error")
      .toReturn({
        status: 305,
      })
      .use();

    const client = new TinkClient({ baseUrl: "https://api.tink.com" });
    return await expect(client.get("/api/http_error")).rejects.toThrow(
      HttpError
    );
  });

  it("sets default headers if unset based upon payload", async () => {
    stubRequest("post", "https://api.tink.com/api/with_headers")
      .with({
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      })
      .toReturn({
        status: 200,
      })
      .use();

    const client = new TinkClient({ baseUrl: "https://api.tink.com" });
    await client.post("api/with_headers", {
      body: new URLSearchParams({ data: "data" }),
    });
  });

  it("supports set a header", async () => {
    const request = stubRequest(
      "post",
      "https://api.tink.com/api/with_headers_json"
    )
      .with({
        headers: {
          "content-type": "application/json",
        },
      })
      .toReturn({
        status: 200,
      })
      .use();
    const client = new TinkClient({ baseUrl: "https://api.tink.com" });
    await client.post("api/with_headers_json", {
      body: { data: true },
      headers: { "content-type": "application/json" },
    });

    expect(request).toHaveBeenCalled();
  });

  it("supports options", async () => {
    const request = stubRequest("get", "https://api.tink.com/api/with_options")
      .with({
        headers: {
          "content-type": "application/json",
          authorization: "Bearer secret_token",
        },
      })
      .toReturn({
        status: 200,
      })
      .use();

    const client = new TinkClient({ baseUrl: "https://api.tink.com" });
    await client.get("api/with_options", {
      headers: {
        "content-type": "application/json",
        authorization: "Bearer secret_token",
      },
    });

    expect(request).toHaveBeenCalled();
  });
});
