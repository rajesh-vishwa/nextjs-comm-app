import { useRouter } from "next/router";
import { IProduct } from "../../models/product";
import productData from "../../data.json";
import ProductView from "../../components/product/ProductView/ProductView";
import { LoadingDots } from "../../components/ui";
import Nav from "../../components/ui/Nav/Nav";

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
    <>
      <Nav />
      <ProductView product={p} />
    </>
  );
};

export default ProductDetail;
