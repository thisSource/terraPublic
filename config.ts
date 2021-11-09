const tinkConfig = {
  tink: {
    apiBaseUrl: "https://api.tink.com/",
    clientId: process.env.NEXT_PUBLIC_TINK_CLIENT_ID,
    clientSecret: process.env.TINK_CLIENT_SECRET,
    redirectUri:
      process.env.NEXT_PUBLIC_TINK_LINK_REDIRECT_URI ??
      "http://localhost:3000/callback",
  },
};

export default tinkConfig;
