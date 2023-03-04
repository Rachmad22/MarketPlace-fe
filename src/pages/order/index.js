/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import styles from "@/styles/pages/order/MyBag.module.scss";
import jacket from "public/images/jacket.png";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import axios from "axios";

const MyBag = () => {
  const [orderProduct, setOrderProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const data = useSelector((state) => state.profile);

  useEffect(() => {
    const token = data?.token?.payload;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/users/${data?.profile?.payload?.id}`,
        config
      )
      .then((res) => {
        console.log(res?.data?.data);
        setOrderProduct(res?.data?.data);
      })
      .catch((err) => console.log(err?.response?.data?.message));
  }, []);

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

  const totalPrice = () => {
    let totalOrder = 0;

    orderProduct.map((item, key) => {
      const total = parseInt(parseInt(item?.price) * parseInt(item?.qty));
      totalOrder += total;
    });

    return totalOrder;
  };

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
            <div class={`row ${styles.bot}`}>
              <div class="col-8">
                <div
                  class={`row justify-content-between align-items-center ${styles.all}`}
                >
                  <div class="col-5">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class={`form-check-label ${styles.label}`}
                        for="flexCheckChecked"
                      >
                        Select all items <span>(2 items selected)</span>
                      </label>
                    </div>
                  </div>
                  <div class="col-2">
                    <button className="btn">
                      <p>Delete</p>
                    </button>
                  </div>
                </div>
                {orderProduct.map((item, key) => (
                  <>
                    {console.log(item.product_images[0].image)}
                    <div
                      class={`row align-items-center ${styles.item}`}
                      key={key}
                    >
                      <div class="col-7">
                        <div class="form-check">
                          <input
                            class={`form-check-input ${styles.form}`}
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            <div class="row">
                              <div class="col">
                                <Link href={`/detail/${item?.product_id}`}>
                                  <img
                                    src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/12/19731241/19731241_542fdadd-1818-44a6-9e20-e553212edef7_1050_1050"
                                    style={{ width: "150px", height: "100px" }}
                                  />
                                </Link>
                              </div>
                              <div class={`col-6 ${styles.goods}`}>
                                <Link href={`/detail/${item?.product_id}`}>
                                  <h5>{item?.product_name}</h5>
                                </Link>
                                <p>{item?.store_name}</p>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="row">
                          <div
                            className="d-flex"
                            style={{ marginTop: "-15px" }}
                          >
                            <button
                              type="button"
                              className="btn"
                              onClick={decreaseQuantity}
                              style={{ background: "white" }}
                            >
                              -
                            </button>
                            <p className="mt-3">{item?.qty}</p>
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
                      <div class={`col ${styles.price}`}>
                        <p>$ {item?.price * item?.qty}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div class="col-4">
                <div class={styles.detail}>
                  <div class="container">
                    <div class="row align-items-center">
                      <h6>Shopping summary</h6>
                    </div>
                    <div class={`row justify-content-between ${styles.total}`}>
                      <div class="col-4">
                        <p class={styles.text}>Total price</p>
                      </div>
                      <div class="col-5">
                        <p class={styles.cost}>$ {totalPrice()}</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <Link href="/order/checkout">
                      <button class={`btn ${styles.buy}`}>Buy</button>
                    </Link>
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
