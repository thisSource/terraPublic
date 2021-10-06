import TinkClient from "./tinkClient";

export default async function fetchCredentials(
  accessToken: string
): Promise<any> {
  return TinkClient.client.get("api/v1/credentials/list", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
}
