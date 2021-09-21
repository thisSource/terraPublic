import { ClientError } from "../../lib/tink/tinkClient";
import { fetchTransactions } from "../../lib/tink/transactions";
import withSession, { ApiHandler } from "../../lib/withSession";

export default withSession<ApiHandler>(async function (req, res) {
  const token = req.session.get("token");
  if (token) {
    try {
      const payload = await fetchTransactions(token);
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
