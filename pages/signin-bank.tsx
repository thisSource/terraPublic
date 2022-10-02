import TinkLinkLogin from "../components/TinkLinkLogin";
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Login() {
  const { data: session, status } = useSession();
  return <TinkLinkLogin />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/signin",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
