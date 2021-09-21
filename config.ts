export default {
  tink: {
    clientId: process.env.NEXT_PUBLIC_TINK_CLIENT_ID,
    clientSecret: process.env.TINK_CLIENT_SECRET,
    redirectUri: "http://localhost:3000/callback",
  },
};
