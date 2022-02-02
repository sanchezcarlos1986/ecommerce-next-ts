import { GetStaticProps, InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

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
    <>
      <Grid>
        {Array.isArray(products)
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </Grid>
      <Hero
        headline="¿Qué es Lorem Ipsum?"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
      />
      <Marquee>
        {Array.isArray(products)
          ? products.map((product) => (
              <ProductCard variant="slim" key={product.id} product={product} />
            ))
          : null}
      </Marquee>
      <Grid layout="B">
        {Array.isArray(products)
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </Grid>
      <Marquee variant="secondary">
        {Array.isArray(products)
          ? products.map((product) => (
              <ProductCard variant="slim" key={product.id} product={product} />
            ))
          : null}
      </Marquee>
    </>
  );
};

Home.Layout = Layout;

export default Home;
