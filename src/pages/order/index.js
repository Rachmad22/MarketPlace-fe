/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import styles from "@/styles/pages/order/MyBag.module.scss";
import jacket from "public/images/jacket.png";
import Head from "next/head";
import Link from "next/link";

const MyBag = () => {
  return (
    <>
      <Head>
        <title>My Bag | Blanja</title>
      </Head>
      <Navbar />

      <main className={styles.main}>
        <div className="container ">
          <div className={styles.content}>
            <h2>My Bag</h2>
            <div className={`row ${styles.bot}`}>
              <div className="col-8">
                <div
                  className={`row justify-content-between align-items-center ${styles.all}`}
                >
                  <div className="col-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className={`form-check-label ${styles.label}`}
                        for="flexCheckChecked"
                      >
                        Select all items <span>(2 items selected)</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-2">
                    <button className="btn">
                      <p>Delete</p>
                    </button>
                  </div>
                </div>
                <div className={`row align-items-center ${styles.item}`}>
                  <div className="col-7">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${styles.form}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <div className="row">
                          <div className="col">
                            <img
                              src={jacket.src}
                              style={{ width: "150px", height: "100px" }}
                            />
                          </div>
                          <div className={`col-7 ${styles.goods}`}>
                            <h5>Men&apos;s formal suit - Black</h5>
                            <p>Zalora Cloth</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <button className={styles.but} disabled>
                          -
                        </button>
                      </div>
                      <div className={`col ${styles.num}`}>
                        <p>1</p>
                      </div>
                      <div className={`col ${styles.plus}`}>
                        <button className={styles.but}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className={`col ${styles.price}`}>
                    <p>$ 20.0</p>
                  </div>
                </div>
                <div className={`row align-items-center ${styles.item}`}>
                  <div className="col-7">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${styles.form}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <div className="row">
                          <div className="col">
                            <img
                              src={jacket.src}
                              style={{ width: "150px", height: "100px" }}
                            />
                          </div>
                          <div className={`col-7 ${styles.goods}`}>
                            <h5>Men's formal suit - Black</h5>
                            <p>Zalora Cloth</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <button className={styles.but} disabled>
                          -
                        </button>
                      </div>
                      <div className={`col ${styles.num}`}>
                        <p>1</p>
                      </div>
                      <div className={`col ${styles.plus}`}>
                        <button className={styles.but}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className={`col ${styles.price}`}>
                    <p>$ 20.0</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.detail}>
                  <div className="container">
                    <div className="row align-items-center">
                      <h6>Shopping summary</h6>
                    </div>
                    <div
                      className={`row justify-content-between ${styles.total}`}
                    >
                      <div className="col-4">
                        <p className={styles.text}>Total price</p>
                      </div>
                      <div className="col-4">
                        <p className={styles.cost}>$ 40.0</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className={`btn ${styles.buy}`}>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MyBag;
