import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/pages/Detail.module.scss";
import Link from "next/link";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    const minus = quantity - 1;
    setQuantity(minus);
    if (quantity === 0) {
      setQuantity(0);
    }
  };

  const increaseQuantity = () => {
    const plus = quantity + 1;
    setQuantity(plus);
  };

  return (
    <div>
      <Head>
        <title>Detail | Blanja</title>
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
          <div className="mt-5 d-flex">
            <div>
              <img
                src="/images/tshirt-detail.jpg"
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="ms-5">
              <h3>Tshirt Robotic</h3>
              <p style={{ marginBottom: "15px", color: "#9B9B9B" }}>
                Zalora Cloth
              </p>
              <img
                src="/images/rating.svg"
                style={{ width: "25%", marginBottom: "15px" }}
              />
              <p style={{ marginBottom: "5px" }}>Price</p>
              <h3>$ 20.0</h3>
              <p style={{ marginTop: "20px", marginBottom: "5px" }}>Color</p>
              <div className="d-flex">
                <div>
                  <p className="me-5">Size</p>
                </div>
                <div className="ms-5">
                  <p>Quantity</p>
                  <div className="d-flex">
                    <button
                      type="button"
                      className="btn"
                      onClick={decreaseQuantity}
                      style={{ background: "white" }}
                    >
                      -
                    </button>
                    <p className="mt-3">{quantity}</p>
                    <button
                      type="button"
                      className="btn"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <Link href="/chat">
                  <button
                    className={`btn ${styles.chat} me-1`}
                    style={{ width: "150px" }}
                  >
                    Chat
                  </button>
                </Link>
                <Link href="/order">
                  <button
                    className={`btn ${styles.chat} me-2`}
                    style={{ width: "150px" }}
                  >
                    Add bag
                  </button>
                </Link>
                <Link href="/order">
                  <button
                    className={`btn ${styles.buyNow}`}
                    style={{ width: "250px" }}
                  >
                    Buy now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailProduct;
