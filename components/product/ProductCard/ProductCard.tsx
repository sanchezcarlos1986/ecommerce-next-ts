import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className="">
        <h3>
          <span>{product.name}</span>
        </h3>
        <span>14 $USD</span>
        {product.images ? (
          <Image
            key={product.id}
            alt={product.name}
            src={product.images[0].url ?? placeholderImage}
            height={150}
            width={150}
            quality={85}
            layout="responsive"
          />
        ) : null}
      </a>
    </Link>
  );
};

export default ProductCard;
