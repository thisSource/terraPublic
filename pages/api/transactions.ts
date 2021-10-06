import { ClientError } from "../../lib/tink/tinkClient";
import { fetchTransactions } from "../../lib/tink/transactions";
import withSession, { ApiHandler } from "../../lib/withSession";
import { UserAuthTokens } from "../callback";

export default withSession<ApiHandler>(async function (req, res) {
  const tokens = req.session.get<UserAuthTokens>("auth");
  if (tokens) {
    try {
      const payload = await fetchTransactions(tokens.access_token);
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
