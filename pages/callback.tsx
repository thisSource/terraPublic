import withSession, { ServerSideHandler } from "../lib/withSession";
import fetchAccessToken from "../lib/tink/accessToken";

export type UserAuthTokens = { access_token: string; refresh_token: string };

export const getServerSideProps = withSession<ServerSideHandler>(
  async function ({ req, query }) {
    let code = query.code;
    if (code) {
      code = typeof code === "string" ? code : code[0];
      const { access_token, refresh_token } = await fetchAccessToken(code);
      req.session.set<UserAuthTokens>("auth", { access_token, refresh_token });
      await req.session.save();
      return {
        redirect: {
          permanent: true,
          destination: "/",
        },
      };
    } else {
      return { props: { test: true } };
    }
  }
);

export default function callback() {
  // we render nothing
  // this being used just for fetching accessToken and redirect
  return null;
}
