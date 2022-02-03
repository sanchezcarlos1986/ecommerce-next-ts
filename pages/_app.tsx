import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { UIProvider } from "@components/ui/context";
import "@assets/main.css";

const Noop: FC = ({ children }) => <>{children}</>;

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) => {
  const Layout = Component.Layout ?? Noop;

  return (
    <div className="app-component">
      <Head>
        <title>Vercel E-Commerce</title>
      </Head>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </div>
  );
};

export default MyApp;
