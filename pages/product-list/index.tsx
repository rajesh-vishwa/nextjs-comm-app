import { IProduct } from "../../models/product";
import productData from "../../data.json";
import { Grid } from "../../components/ui";
import ProductCard from "../../components/product/ProductCard/ProductCard";

import Link from "next/link";
import React from "react";
import Layout from "../../components/ui/Layout/Layout";

type Props = {
  products: IProduct[];
};

function ProductList({ products }: Props) {
  return (
    <Layout>
      <div className="px-4 py-4">
        <Grid>
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <a>
                <ProductCard product={product} imgWidth={320} imgHeight={320} />
              </a>
            </Link>
          ))}
        </Grid>
        ß
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //const res = await fetch('https://.../posts')
  //const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products: productData.products,
    },
  };
}

export default ProductList;
