import { Product as ShopifyProduct, ImageEdge, MoneyV2 } from "../schema";

import {
  Product,
  ProductImage,
  ProductPrice,
} from "../../common/types/product";

const normalizeProductImages = ({
  edges,
}: {
  edges: ImageEdge[];
}): ProductImage[] => {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));
};

const normalizeProductPrice = ({
  currencyCode,
  amount,
}: MoneyV2): ProductPrice => ({
  value: Number(amount),
  currencyCode,
});

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
};

export default normalizeProduct;
