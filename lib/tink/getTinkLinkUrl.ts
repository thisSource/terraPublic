import config from "../../config";

export default function getTinkLinkUrl() {
  if (!config.tink.clientId) throw new Error("tink client id must be set");
  const base = new URL(
    "1.0/transactions/connect-accounts/",
    "https://link.tink.com"
  );
  const params = new URLSearchParams({
    client_id: config.tink.clientId,
    redirect_uri: config.tink.redirectUri,
    market: "SE",
    locale: "sv_SE",
  });
  return `${base.toString()}?${params.toString()}`;
}
