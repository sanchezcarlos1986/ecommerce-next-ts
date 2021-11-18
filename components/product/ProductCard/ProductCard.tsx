import { Product } from "@common/types/product";
import { FC } from "react";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => <h1>{product.name}</h1>;

export default ProductCard;
