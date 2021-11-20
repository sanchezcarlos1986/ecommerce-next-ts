import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
