import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "components/common";

interface Product {
  id: number;
  name: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const config = getConfig();

  const products = await getAllProducts(config);

  return {
    props: {
      products: products,
    },
    revalidate: 10,
  };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const hello = "Hello World";

  return (
    <div className="home">
      <Head>
        <title>{hello}</title>
      </Head>
      <h1>Products</h1>
      {JSON.stringify(products)}
    </div>
  );
};

Home.Layout = Layout;

export default Home;
