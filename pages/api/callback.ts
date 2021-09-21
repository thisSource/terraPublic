import type { NextApiRequest, NextApiResponse } from "next";
import fetchAccessToken from "../../lib/tink/accessToken";
import { fetchTransactions } from "../../lib/tink/transactions";
import withSession from "../../lib/withSession";

type ResponsePayload = {
  accessToken: string;
};

export default withSession(
  async (req: NextApiRequest, res: NextApiResponse<ResponsePayload>) => {
    if (req.method === "GET") {
      const code =
        typeof req.query.code === "string" ? req.query.code : req.query.code[0];
      const resp = await fetchAccessToken(code);
      const transactions = await fetchTransactions(resp.access_token);

      return res.status(200).json({ transactions });
    }
    res.status(200).json({ accessToken: "John Doe" });
  }
);
