import { testClient } from "../../../pages/utils/testClient";
import handler from "../../../pages/api/callback";

describe("/callback tink", () => {
  xit("handles a callback from tink link", async () => {
    expect.assertions(2);
    const client = testClient(handler);
    const response = await client.post("/callback").send({ code: 1 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("accessToken");
  });
});
