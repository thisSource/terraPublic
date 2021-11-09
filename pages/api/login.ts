import { refreshToken } from "../../lib/tink/accessToken";
import { ClientError } from "../../lib/tink/tinkClient";
import withSession, { ApiHandler } from "../../lib/withSession";
import { UserAuthTokens } from "../callback";

export default withSession<ApiHandler>(async function (req, res) {
  const tokens = req.session.get<UserAuthTokens>("auth");
  if (tokens) {
    try {
      // this endpoint will act as a refresh endpoint for now.
      // The initial login exchance takes place on the callback.tsx
      const payload = await refreshToken(tokens.refresh_token);
      req.session.set<UserAuthTokens>("auth", {
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
        expires_in: payload.expires_in,
      });
      await req.session.save();
      res.json(payload);
    } catch (e) {
      if (e instanceof ClientError) {
        res.status(e.code).json({ error: e.message });
      }
    }
  } else {
    res.status(401).json({});
  }
});
