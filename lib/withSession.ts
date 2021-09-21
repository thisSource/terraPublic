import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Session, withIronSession } from "next-iron-session";

export type NextIronRequest = NextApiRequest & { session: Session };
export type ServerSideContext = GetServerSidePropsContext & {
  req: NextIronRequest;
};

export type ApiHandler = (
  req: NextIronRequest,
  res: NextApiResponse
) => void | Promise<void>;

export type ServerSideHandler = (
  context: ServerSideContext
) => ReturnType<GetServerSideProps>;

const withSession = <T extends ApiHandler | ServerSideHandler>(handler: T) => {
  const password = process.env.SECRET_COOKIE_PASSWORD;
  if (!password || password.length < 30) {
    throw new Error("password for cookie must be provided or more secure");
  }
  return withIronSession(handler, {
    password,
    cookieName: "tink-transactions-poc",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
};

export default withSession;
