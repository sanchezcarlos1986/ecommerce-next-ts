import { GetStaticProps, InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "components/common";
import { ProductCard } from "@components/product";

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
  return (
    <div className="root">
      <h1>Products</h1>
      {Array.isArray(products)
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

Home.Layout = Layout;

export default Home;
