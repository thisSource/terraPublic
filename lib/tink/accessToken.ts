import "next"; // import next polyfills fetch for use in node.
import config from "../../config";
import TinkClient from "./tinkClient";

interface AuthTokenPayload {
  /**
   * Signed authorization grant JWT. Required when grant type is urn:ietf:params:oauth:grant-type:jwt-bearer.*
   */
  assertion: string;
  /**
   * Client id
   */
  client_id: string;
  /**
   * Client secret. Required when the authentication method for client is configured for client secret, forbidden otherwise.
   */
  client_secret: string;
  /**
   * Authorization code that was returned from the authorization flow. Required when grant type is authorization_code.
   */
  code: string;
  /**
   * Grant type. Values: authorization_code, refresh_token, client_credentials, urn:ietf:params:oauth:grant-type:jwt-bearer
   */
  grant_type: string;
  /**
   * Refresh token to be used to get a new access token. Required when grant type is refresh_token.
   */
  refresh_token: string;
  /**
   * Scope of access. Required when grant type is client_credentials or urn:ietf:params:oauth:grant-type:jwt-bearer.
   */
  scope: string;
}

export interface OAuth2AuthenticationTokenResponse {
  access_token: string;
  expires_in: number;
  id_hint: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}

const grants = {
  authorizationCode: "authorization_code",
  refreshToken: "refresh_token",
} as const;

/**
 * @throws Response
 */
export default async function fetchAccessToken(
  code: string,
  grant?: keyof typeof grants
): Promise<OAuth2AuthenticationTokenResponse> {
  const payload: Partial<AuthTokenPayload> = {
    client_id: config.tink.clientId,
    client_secret: config.tink.clientSecret,
    grant_type: grant ? grants[grant] : grants.authorizationCode,
  };

  if (!grant || grants[grant] === grants.authorizationCode) {
    payload.code = code;
  }

  if (grant && grants[grant] === grants.refreshToken) {
    payload.refresh_token = code;
  }

  const getAuthTokenPath = "/api/v1/oauth/token";
  const response = await TinkClient.client.post(getAuthTokenPath, {
    body: new URLSearchParams(payload),
  });
  return response;
}

export async function refreshToken(refresh_token: string) {
  return fetchAccessToken(refresh_token, "refreshToken");
}
