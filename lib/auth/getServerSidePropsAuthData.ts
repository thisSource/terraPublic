import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { supabase } from "./supabaseClient";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sessionData = await getSession(context);

  if (!sessionData) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/signin",
        permanent: false,
      },
    };
  }

  const userData = await supabase
    .from("profiles")
    .select("*")
    .eq("email", sessionData.user!.email);

  return {
    props: {
      sessionData,
      userData: sessionData ? userData : "no data",
    },
  };
};

export default getServerSideProps;
