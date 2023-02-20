import React from "react";
import styles from "@/styles/pages/AfterCategory.module.scss";
import Head from "next/head";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";
import CardProduct from "@/components/molecules/cardProduct";
import { useRouter } from "next/router";
import axios from "axios";

const CategoryType = (props) => {
  const {
    product: {
      data: { product, store },
    },
  } = props;

  const dataProduct = product[0];
  const dataStore = store[0];
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <div>
      <Head>
        <title>{dataProduct} | Blanja</title>
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
                <li className="breadcrumb-item active"></li>
              </ol>
            </nav>
          </div>
          <div className="mt-5">
            <h1>T-Shirt</h1>
            <div className="row mt-4" style={{ gap: "3.5rem" }}>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
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
    `${process.env.NEXT_PUBLIC_API_URL}/products/${category_id}`
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
