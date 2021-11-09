import config from "../../config";

export default function getTinkLinkUrl(options?: {
  market: string;
  locale: string;
}) {
  if (!config.tink.clientId) throw new Error("tink client id must be set");
  const base = new URL(
    "1.0/transactions/connect-accounts/",
    "https://link.tink.com"
  );
  const tinkOptions = {
    ...{ market: "SE", locale: "sv_SE" },
    ...(options ?? {}),
  };
  const params = new URLSearchParams({
    client_id: config.tink.clientId,
    redirect_uri: config.tink.redirectUri,
    ...tinkOptions,
  });
  return `${base.toString()}?${params.toString()}`;
}
