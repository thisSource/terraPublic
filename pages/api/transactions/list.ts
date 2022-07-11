import { ClientError } from "../../../lib/tink/tinkClient";
import { fetchTransactions } from "../../../lib/tink/transactions";
import withSession, { ApiHandler } from "../../../lib/withSession";
import { UserAuthTokens } from "../../callback";

const firstOrDefault = (value: string | string[]) => {
  return value instanceof Array ? value[0] : value;
};

export default withSession<ApiHandler>(async function (req, res) {
  const tokens = req.session.get<UserAuthTokens>("auth");
  if (tokens) {
    const pageSize = firstOrDefault(req.query.pageSize) || "100";
    const pageToken = firstOrDefault(req.query.pageToken);
    try {
      const payload = await fetchTransactions(tokens.access_token, {
        pageSize: Number(pageSize),
        pageToken,
      });
      res.json(payload);
    } catch (e) {
      if (e instanceof ClientError) {
        res.status(e.code).json({ error: e.message });
      }
    }
  } else {
    res.json({ isLoggedIn: false });
  }
});
