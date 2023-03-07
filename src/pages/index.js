/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import CardProduct from "@/components/molecules/cardProduct";
import React, { useState } from "react";
import axios from "axios";

const Home = (props) => {
  const {
    categories: { data },
    products,
  } = props;

  const totalData = data?.length;

  // const [view, setView] = useState(false);

  return (
    <div>
      <Head>
        <title>Home | Blanja</title>
      </Head>
      <Navbar />
      <main className={styles.main} style={{marginTop: "90px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-3">
              <img
                src="/images/new-products.png"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                alt="carousel"
                onClick={() => (window.location.href = "/#newproduct")}
              />
            </div>
            <div className="col-lg-6 col-xs-3">
              <img
                src="/images/popular-products.png"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                alt="carousel"
                onClick={() => (window.location.href = "/#popularproduct")}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="mt-4">Category</h2>
          <p className="mb-4" style={{ color: "#9B9B9B" }}>
            What are you currently looking for
          </p>
          <div className="row">
            {data?.slice(0, 5).map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <div className="col-2 mb-4">
                    <div>
                      <Link href={`/category/${item?.id}`}>
                        {/* <img
                        src="/images/green-bakcground.png"
                        className={styles.categoryBackground}
                      /> */}
                        <img
                          src={item?.category_image}
                          className={styles.categoryImage}
                          alt="category"
                        />
                        {/* <h3 className={styles.categoryName}>
                          {item?.category_name}
                        </h3> */}
                      </Link>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            {totalData > 5 ? (
              <div
                // className={`col-2 mb-4 ${view ? "d-none" : ""}`}
                className="col-2 mb-4"
              >
                <div className="d-flex justify-content-center">
                  <Link href="/category">
                    <button
                      type="button"
                      className="btn btn-link text-dark fw-bolder"
                      style={{ marginTop: "40%", textDecoration: "none" }}
                    >
                      View more
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}

            {/* {view ? (
              <>
                <div className="col-2 mb-4">
                  <img
                    src="/images/formalsuit-category.png"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-2 mb-4">
                  <img
                    src="/images/socks-category.png"
                    style={{ width: "100%" }}
                  />
                </div>
              </>
            ) : null} */}
          </div>
        </div>
        <div className="container" id="newproduct">
          <hr className="mt-5" />
          <h2 className="mt-4">New</h2>
          <p className="mb-4" style={{ color: "#9B9B9B" }}>
            Find clothes that are trending recently
          </p>
          <div className="row" style={{ gap: "3.5rem" }}>
            {products?.data?.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                    <CardProduct item={item} />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="container" id="popularproduct">
          <hr className="mt-5" />
          <h2 className="mt-4">Popular</h2>
          <p className="mb-4" style={{ color: "#9B9B9B" }}>
            You&apos;ve never seen it before
          </p>
          <div className="row" style={{ gap: "3.5rem" }}>
            {products?.data?.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                    <CardProduct item={item} />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const categories = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );

  const convertCategories = categories?.data;

  const products = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  const convertProducts = products?.data;

  return {
    props: {
      categories: convertCategories,
      products: convertProducts,
    },
  };
  revalidate: 3600;
};

export default Home;
