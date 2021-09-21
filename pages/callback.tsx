import withSession, { ServerSideHandler } from "../lib/withSession";
import fetchAccessToken from "../lib/tink/accessToken";

export const getServerSideProps = withSession<ServerSideHandler>(
  async function ({ req, query }) {
    let code = query.code;
    if (code) {
      code = typeof code === "string" ? code : code[0];
      const resp = await fetchAccessToken(code);
      req.session.set("token", resp.access_token);
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
