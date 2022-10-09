import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { supabase } from "./supabaseClient";

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

  let { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", session.user!.email);

  let { data: transactionsMonthly, error: transactionsMonthlyError } =
    await supabase
      .from("transactions_monthly")
      .select("*")
      .eq("user_id", userData![0].user_id);

  return {
    props: {
      session,
      userData: session ? userData : "no user data",
      transactionsMonthly: session
        ? transactionsMonthly
        : "no monthly transaction data",
    },
  };
};

export default getServerSideProps;

//Utterliggare en check behöver göras mot valt bankkonto. Behöver byttas ut i sign-up del där tink integreras så man kan välja bankkonto.
