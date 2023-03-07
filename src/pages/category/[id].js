import React from "react";
import styles from "@/styles/pages/AfterCategory.module.scss";
import Head from "next/head";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";
import CardProduct from "@/components/molecules/CardProduct";
import { useRouter } from "next/router";
import axios from "axios";

const CategoryType = (props) => {
  const { product } = props;

  const dataProduct = product?.data;
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <div>
      <Head>
        <title>
          {dataProduct?.length > 0
            ? dataProduct[0]?.category_name
            : product?.category_name}{" "}
          | Blanja
        </title>
      </Head>
      <Navbar />
      <main>
        <div className="container">
          <div>
            <nav className={`mt-5 ${styles.breadcrumb}`}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" style={{ color: "grey" }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link href="/category" style={{ color: "grey" }}>
                    Category
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  {dataProduct?.length > 0
                    ? dataProduct[0]?.category_name
                    : product?.category_name}
                </li>
              </ol>
            </nav>
          </div>
          <div className="mt-5">
            <h1>
              {dataProduct?.length > 0
                ? dataProduct[0]?.category_name
                : product?.category_name}
            </h1>
            <div className="row mt-4" style={{ gap: "3.5rem" }}>
              {dataProduct?.map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                      <CardProduct item={item} />
                    </div>
                  </React.Fragment>
                );
              })}

              {dataProduct.length === 0 ? (
                <h3 className="mb-5 mt-3">Product not found</h3>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;

  const productData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${id}`
  );

  const convert = productData?.data;
  return {
    props: {
      product: convert,
    },
  };
  revalidate: 10;
};

export default CategoryType;
