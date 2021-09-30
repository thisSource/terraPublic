import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import MainLayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default MyApp;
