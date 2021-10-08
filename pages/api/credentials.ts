import fetchCredentials from "../../lib/tink/credentials";
import { ClientError } from "../../lib/tink/tinkClient";
import withSession, { ApiHandler } from "../../lib/withSession";
import { UserAuthTokens } from "../callback";

export default withSession<ApiHandler>(async function (req, res) {
  const tokens = req.session.get<UserAuthTokens>("auth");
  if (tokens) {
    try {
      const payload = await fetchCredentials(tokens.access_token);
      res.json(payload);
    } catch (e) {
      console.log(e);
      if (e instanceof ClientError) {
        res.status(e.code).json({ error: e.message });
      }
    }
  } else {
    res.status(401).json({});
  }
});
