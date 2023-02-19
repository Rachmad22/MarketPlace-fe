import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import CardProduct from "@/components/molecules/CardProduct";
import { useState } from "react";

const Home = () => {
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
          <div className="row">
            <div className="col-2 mb-4">
              <img src="/images/cap-category.png" style={{ width: "100%" }} />
            </div>
            <div className="col-2 mb-4">
              <img
                src="/images/tshirt-category.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-2 mb-4">
              <img
                src="/images/jacket-category.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-2 mb-4">
              <div>
                <img
                  src="/images/green-background.png"
                  className={styles.categoryBackground}
                />
                <img
                  src="/images/yeezy-shoes.png"
                  className={styles.categoryImage}
                />
                <h3 className={styles.categoryName}>Shoes</h3>
              </div>
            </div>
            <div className="col-2 mb-4">
              <img src="/images/pants-category.png" style={{ width: "100%" }} />
            </div>
            <div className={`col-2 mb-4 ${view ? "d-none" : ""}`}>
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
            ) : null}
          </div>
        </div>
        <div className="container">
          <hr className="mt-5" />
          <h2 className="mt-4">New</h2>
          <p className="mb-4" style={{ color: "#9B9B9B" }}>
            Find clothes that are trending recently
          </p>
          <div className="row" style={{ gap: "3.5rem !important" }}>
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
          <div className="row" style={{ gap: "3.5rem !important" }}>
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

export default Home;
