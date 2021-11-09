import withSession, { ServerSideHandler } from "../lib/withSession";
import fetchAccessToken from "../lib/tink/accessToken";

export type UserAuthTokens = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
};

export const getServerSideProps = withSession<ServerSideHandler>(
  async function ({ req, query }) {
    let code = query.code;
    if (code) {
      code = typeof code === "string" ? code : code[0];
      // prettier-ignore
      const { access_token, refresh_token, expires_in } = await fetchAccessToken(code);
      req.session.set<UserAuthTokens>("auth", {
        access_token,
        refresh_token,
        expires_in,
      });
      await req.session.save();
      return {
        redirect: {
          permanent: true,
          destination: "/myaccount",
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
