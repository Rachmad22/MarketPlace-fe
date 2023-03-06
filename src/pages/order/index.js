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
import Swal from "sweetalert2";
import { BsTrash } from "react-icons/bs";

const MyBag = () => {
  const [orderProduct, setOrderProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectAllOrder, setSelectAllOrder] = useState(false);
  const [selectOrder, setSelectOrder] = useState(false);

  const data = useSelector((state) => state.profile);

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
        setOrderProduct(res?.data?.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err?.response?.data?.message);
      });
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const decreaseQuantity = () => {
    setIsLoading(true);
    const token = data?.token?.payload;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/qty/${orderProduct?.[0]?.orders_id}/down`,
        config
      )
      .then((res) => {
        setIsLoading(false);
        Swal.fire("The product was successfully removed", "", "success");
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          title: err.response.data.message,
          text: "Please try again later",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const increaseQuantity = () => {
    setIsLoading(true);
    const token = data?.token?.payload;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/qty/${orderProduct?.[0]?.orders_id}/down`,
        config
      )
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          title: "Product added successfully",
          icon: "success",
          confirmButtonText: "Ok",
          background: "#ffffff",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          title: err.response.data.message,
          text: "Please try again later",
          icon: "error",
          confirmButtonText: "OK",
          buttonsStyling: "#ffffff",
        });
      });
  };

  const deleteOrder = () => {
    setIsLoading(true);
    const token = data?.token?.payload;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/delete/${orderProduct?.[0]?.orders_id}`,
        config
      )
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          title: "Product deleted successfully",
          icon: "success",
          confirmButtonText: "Ok",
          background: "#ffffff",
        });
        setTimeout(() => {
          refreshPage();
        }, 1200);
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          title: err.response.data.message,
          text: "Please try again later",
          icon: "error",
          confirmButtonText: "OK",
          buttonsStyling: "#ffffff",
        });
      });
  };

  const totalPrice = () => {
    let totalOrder = 0;

    orderProduct.map((item, key) => {
      const total = item?.price * item?.qty;
      totalOrder += total;
    });

    return totalOrder;
  };

  const totalWithDelivery = () => {
    let totalDelivery = 10000;

    return totalDelivery + totalPrice();
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
                        onChange={() => {
                          setSelectAllOrder(!selectAllOrder);
                          setSelectOrder(!selectOrder);
                        }}
                        checked={selectAllOrder}
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class={`form-check-label ${styles.label}`}
                        for="flexCheckChecked"
                      >
                        Select all items{" "}
                        <span>({orderProduct?.length} items selected)</span>
                      </label>
                    </div>
                  </div>
                  <div class="col-2">
                    <button className="btn">
                      <p>Delete</p>
                    </button>
                  </div>
                </div>
                {/* {isLoading ? (
                  <>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder w-75"></span>
                    <span class="placeholder" style="width: 25%;"></span>
                  </>
                ) : ( */}
                {orderProduct.map((item, key) => (
                  <>
                    <div
                      class={`row align-items-center ${styles.item}`}
                      key={key}
                    >
                      <div class="col-7">
                        <div class="form-check">
                          <input
                            class={`form-check-input ${styles.form}`}
                            type="checkbox"
                            checked={selectOrder}
                            onChange={() => {
                              setSelectAllOrder(!selectAllOrder);
                            }}
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            <div class="row">
                              <div class="col-4">
                                <Link href={`/detail/${item?.product_id}`}>
                                  <img
                                    src={item?.product_images[0]?.image}
                                    style={{
                                      width: "100px",
                                      height: "100px",
                                      objectFit: "cover",
                                      marginRight: "50px",
                                    }}
                                  />
                                </Link>
                              </div>
                              <div class={`col-8 ${styles.goods}`}>
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
                              disabled={isLoading}
                            >
                              -
                            </button>
                            <p className="mt-3">{item?.qty}</p>
                            <button
                              type="button"
                              className="btn"
                              onClick={increaseQuantity}
                              disabled={isLoading}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class={`col ${styles.price} d-flex`}>
                        <p className="me-5">$ {item?.price * item?.qty}</p>
                        <BsTrash
                          style={{ cursor: "pointer" }}
                          onClick={deleteOrder}
                        />
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
                      <div class="col-3">
                        <p class={styles.cost}>
                          ${" "}
                          {selectAllOrder
                            ? totalPrice()
                            : "Ini belum jumlah semua"}
                        </p>
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
