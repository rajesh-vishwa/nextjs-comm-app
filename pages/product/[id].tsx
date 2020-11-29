import { useRouter } from "next/router";
import { IProduct } from "../../models/product";
import productData from "../../data.json";
import ProductView from "../../components/product/ProductView/ProductView";

interface IProductProps {
  product: IProduct;
}

const ProductDetail = () => {
  const router = useRouter();

  const product = productData.products.find(
    (p) => String(p.id) === router.query.id
  );

  if (!product) return <>loading...</>;

  const p: IProduct = {
    ...product,
  };
  return <ProductView product={p} />;
};

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   console.log("productId ", params?.id);
//   return {
//     props: {
//       product: {
//         id: 1,
//         name: "test product " + params?.id,
//       },
//     },
//   };
// };
export default ProductDetail;
