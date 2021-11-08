import { Product as ShopifyProduct, ImageEdge } from "../schema";

import { Product, ProductImage } from "../../common/types/product";

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

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
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
    ...rest,
  };

  return product;
};

export default normalizeProduct;
