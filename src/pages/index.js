import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useState } from "react";
import axios from "axios";

const Home = (props) => {
  const {
    categories: { data },
  } = props;

  console.log(data[0]?.category_image);

  const [view, setView] = useState(false);

  return (
    <div>
      <Head>
        <title>Home | Blanja</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                src="/images/carousel1.png"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-6">
              <img
                src="/images/carousel2.png"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="mt-4">Category</h2>
          <p className="mb-4" style={{ color: "#9B9B9B" }}>
            What are you currently looking for
          </p>
          <div className="row mb-4">
            {data?.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <div className="col-2 mb-4">
                    <div>
                      <Link
                        href={`/category/${item?.category_name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                      >
                        {/* <img
                        src="/images/green-bakcground.png"
                        className={styles.categoryBackground}
                      /> */}
                        <img
                          src={item?.category_image}
                          className={styles.categoryImage}
                        />
                        <h3 className={styles.categoryName}>
                          {item?.category_name}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}

            {/* <div className={`col-2 mb-4 ${view ? "d-none" : ""}`}>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-link text-dark fw-bolder"
                  style={{ marginTop: "40%", textDecoration: "none" }}
                  onClick={() => {
                    setView(true);
                  }}
                >
                  View more
                </button>
              </div>
            </div>
            {view ? (
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
        <div className="container">
          <hr className="mt-5" />
          <h2 className="mt-4">New</h2>
          <p className="mb-4" style={{ color: "#9B9B9B" }}>
            Find clothes that are trending recently
          </p>
          <div className="row" style={{ gap: "3.5rem" }}>
            <div style={{ flex: "0 0 auto", width: "15.5%" }}>
              <CardProduct />
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="mt-5" />
          <h2 className="mt-4">Popular</h2>
          <p className="mb-4" style={{ color: "#9B9B9B" }}>
            You&apos;ve never seen it before
          </p>
          <div className="row" style={{ gap: "3.5rem" }}>
            <div style={{ flex: "0 0 auto", width: "15.5%" }}>
              <CardProduct />
            </div>
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

  const convert = categories?.data;

  console.log(convert?.data[0]?.category_image);

  return {
    props: {
      categories: convert,
    },
  };
  revalidate: 3600;
};

export default Home;
