import React from "react";
import styles from "@/styles/pages/Category.module.scss";
import Head from "next/head";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";
import CardProduct from "@/components/molecules/CardProduct";

const Category = () => {
  return (
    <div>
      <Head>
        <title>Category | Blanja</title>
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
                <li className="breadcrumb-item active">Category</li>
                <li className="breadcrumb-item active">T-Shirt</li>
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

export default Category;
