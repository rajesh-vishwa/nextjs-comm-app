import { useRouter } from "next/router";
import React from "react";
import Button from "../components/ui/Button";
import Layout from "../components/ui/Layout/Layout";

const IndexPage = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/product-list");
  };
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Welcome to my shop
        </h1>
        <Button text="See Products" onClick={handleClick} />
      </div>
    </Layout>
  );
};

export default IndexPage;
