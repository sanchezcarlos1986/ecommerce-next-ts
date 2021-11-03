import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import getAllProducts from "../framework/shopify/product/get-all-products";

interface Product {
  id: number;
  name: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();

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
    <div>
      <Head>
        <title>{hello}</title>
      </Head>
      <h1>Products</h1>
      {JSON.stringify(products)}
    </div>
  );
};

export default Home;
