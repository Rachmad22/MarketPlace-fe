/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/pages/Category.module.scss";
import Head from "next/head";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";
import axios from "axios";

const Category = (props) => {
  const {
    categories: { data },
  } = props;

  return (
    <div>
      <Head>
        <title>Categories | Blanja</title>
      </Head>
      <Navbar />
      <main>
        <div className="container">
          <div>
            <nav className={styles.breadcrumb} style={{ paddingTop: "125px" }}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" style={{ color: "grey" }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Category</li>
              </ol>
            </nav>
          </div>
          <div className="mt-5">
            <h1 className="mb-4">Categories</h1>
            <div className="row mt-5 pb-5">
              {data?.map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    <div className="col-2 mb-4 d-flex justify-content-center align-items-center">
                      <div className="d-flex">
                        <Link href={`/category/${item?.id}`}>
                          {/* <img
                        src="/images/green-bakcground.png"
                        className={styles.categoryBackground}
                      /> */}
                          <img
                            src={item?.category_image}
                            // src="/images/shoes-category.png"
                            className={styles.categoryImage}
                            alt={item?.category_name}
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

  return {
    props: {
      categories: convert,
    },
    revalidate: 10,
  };
};

export default Category;
