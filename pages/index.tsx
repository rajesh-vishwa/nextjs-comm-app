import Link from "next/link";

const IndexPage = () => (
  <>
    <h1>👋</h1>
    <p>
      <Link href="/product-list">
        <a>Product Lisitng</a>
      </Link>
    </p>
  </>
);

export default IndexPage;
