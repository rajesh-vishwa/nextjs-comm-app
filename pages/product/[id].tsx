import { useRouter } from "next/router";
import { IProduct } from "../../models/product";
import productData from "../../data.json";
import ProductView from "../../components/product/ProductView/ProductView";
import { LoadingDots } from "../../components/ui";

import React from "react";
import Layout from "../../components/ui/Layout/Layout";

const ProductDetail = () => {
  const router = useRouter();

  const product = productData.products.find(
    (p) => String(p.id) === router.query.id
  );

  if (!product)
    return (
      <>
        <LoadingDots />
      </>
    );

  const p: IProduct = {
    ...product,
  };
  return (
    <Layout>
      <ProductView product={p} />
    </Layout>
  );
};

export default ProductDetail;
