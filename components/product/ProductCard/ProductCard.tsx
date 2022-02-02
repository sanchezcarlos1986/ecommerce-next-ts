import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    // <Link href={`/products/${product.slug}`}>
    <a className={styles.root}>
      {variant === "slim" ? (
        <>
          <div className="absolute flex items-center justify-center inset-0 z-10">
            <span className="bg-black text-white p-3 font-bold text-xl">
              {product.name}
            </span>
          </div>
          {product.images ? (
            <Image
              className={styles.productImage}
              key={product.id}
              alt={product.name}
              src={product.images[0].url ?? placeholderImage}
              height={320}
              width={320}
              quality={85}
              layout="fixed"
            />
          ) : null}
        </>
      ) : (
        <>
          <div className={styles.productBg}></div>
          <div className={styles.productTag}>
            <h3 className={styles.productTitle}>
              <span>{product.name}</span>
            </h3>
            <span
              className={styles.productPrice}
            >{`${product.price.value} ${product.price.currencyCode}`}</span>
          </div>
          {product.images ? (
            <Image
              className={styles.productImage}
              key={product.id}
              alt={product.name}
              src={product.images[0].url ?? placeholderImage}
              height={150}
              width={150}
              quality={85}
              layout="responsive"
            />
          ) : null}
        </>
      )}
    </a>
    // </Link>
  );
};

export default ProductCard;
