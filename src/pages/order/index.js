/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import styles from "@/styles/pages/order/MyBag.module.scss";
import jacket from "public/images/jacket.png";
import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { BsTrash } from "react-icons/bs";
import { useRouter } from "next/router";
import * as checkoutReducer from "@/stores/reducer/checkout";

const MyBag = () => {
  const [orderProduct, setOrderProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectAllOrder, setSelectAllOrder] = useState(false);
  const [selectOrder, setSelectOrder] = useState(false);
  const [selectOrderList, setSelectOrderList] = useState([]);
  const data = useSelector((state) => state.profile);
  const router = useRouter();
  const dispatch = useDispatch();

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

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const refreshPage = () => {
    window.location.reload(false);
  };

  const decreaseQuantity = (qty, order_id) => {
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
        `${process.env.NEXT_PUBLIC_API_URL}/orders/qty/${order_id}/down`,
        { qty: parseInt(qty) - 1 },
        config
      )
      .then((res) => {
        setIsLoading(false);
        Swal.fire("The product was successfully removed", "", "success");
        refreshPage();
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

  const increaseQuantity = (qty, order_id) => {
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
        `${process.env.NEXT_PUBLIC_API_URL}/orders/qty/${order_id}/up`,
        { qty: parseInt(qty) + 1 },
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
        refreshPage();
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
          confirmButtonText: "OK",
          confirmButtonColor: "#DB3022",
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
          confirmButtonColor: "#DB3022",
        });
      });
  };

  const deleteAllOrders = () => {
    setIsLoading(true);

    const id = data?.profile?.payload?.id;
    const token = data?.token?.payload;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/delete/users/${id}`,
        config
      )
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          title: "Product deleted successfully",
          icon: "success",
          confirmButtonText: "Okay",
          confirmButtonColor: "#DB3022",
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
          confirmButtonText: "Okay",
          confirmButtonColor: "#DB3022",
        });
      });
  };

  const totalPrice = () => {
    let totalOrder = 0;

    if (selectAllOrder) {
      orderProduct.map((item, key) => {
        const total = item?.price * item?.qty;
        totalOrder += total;
      });
    } else {
      selectOrderList.map((item) => {
        const key = parseInt(item);
        const total = orderProduct[key]?.price * orderProduct[key]?.qty;
        totalOrder += total;
      });
    }

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
        <div className="container" style={{ marginTop: "120px" }}>
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
                        onChange={() => {
                          if (selectAllOrder && selectOrderList.length > 0) {
                            setSelectOrderList([]);
                          } else {
                            setSelectOrderList(Object.keys(orderProduct));
                          }
                          setSelectAllOrder(!selectAllOrder);
                          // setSelectOrder(!selectOrder);
                        }}
                        checked={selectAllOrder}
                        id="flexCheckDefault11"
                      />
                      <label
                        className={`form-check-label ${styles.label}`}
                        for="flexCheckChecked"
                      >
                        Select all items{" "}
                        <span>({orderProduct?.length} items selected)</span>
                      </label>
                    </div>
                  </div>

                  <div class="col-2">
                    <button
                      className="btn"
                      onClick={() => {
                        swalWithBootstrapButtons
                          .fire({
                            title: "Are you sure?",
                            text: "All products in your cart will be deleted!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "No, cancel!",
                            reverseButtons: true,
                          })
                          .then((res) => {
                            if (res.isConfirmed) {
                              deleteAllOrders();
                            } else if (
                              res.dismiss === Swal.DismissReason.cancel
                            ) {
                              swalWithBootstrapButtons.fire({
                                title: "Cancelled",
                                text: "Your product remains in the cart",
                                icon: "error",
                                confirmButtonText: "Okay",
                                confirmButtonColor: "#DB3022",
                              });
                            }
                          });
                      }}
                    >
                      <p>Delete all</p>
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
                            checked={
                              selectOrderList.findIndex(
                                (item) => item === key.toString()
                              ) !== -1
                                ? true
                                : false
                            }
                            value={key}
                            onChange={() => {
                              if (selectOrderList.length > 0) {
                                const arrIndex = selectOrderList.findIndex(
                                  (item) => item === key.toString()
                                );
                                if (arrIndex === -1) {
                                  setSelectOrderList((state) => [
                                    ...state,
                                    key.toString(),
                                  ]);
                                } else {
                                  if (selectOrderList.length === 1) {
                                    setSelectOrderList([]);
                                  } else {
                                    const newOrderList = selectOrderList.splice(
                                      arrIndex - 1,
                                      1
                                    );
                                    setSelectOrderList(newOrderList);
                                  }
                                }
                              } else {
                                setSelectOrderList((state) => [
                                  ...state,
                                  key.toString(),
                                ]);
                              }

                              setSelectAllOrder(false);
                              totalPrice();
                            }}
                            id="flexCheckDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            <div class="row">
                              <div class="col-2 me-5">
                                <Link href={`/detail/${item?.product_id}`}>
                                  <img
                                    src={
                                      item?.product_images[0]?.image ||
                                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhf-td4GXegmuo582JIu6X6H8x5yxF3ehow&usqp=CAU"
                                    }
                                    style={{
                                      width: "100px",
                                      height: "100px",
                                      objectFit: "cover",
                                      marginRight: "50px",
                                    }}
                                  />
                                </Link>
                              </div>
                              <div class={`col-4 ${styles.goods}`}>
                                <Link href={`/detail/${item?.product_id}`}>
                                  <h5>{item?.product_name}</h5>
                                </Link>
                                <p>{item?.store_name}</p>
                              </div>
                              <div
                                class="col-1"
                                style={{ margin: "auto", marginLeft: "10px" }}
                              >
                                <h6>{item?.size}</h6>
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
                              onClick={() => {
                                decreaseQuantity(
                                  orderProduct?.[key]?.qty,
                                  orderProduct?.[key]?.orders_id
                                );
                              }}
                              style={{ background: "white" }}
                              disabled={isLoading}
                            >
                              -
                            </button>
                            <p className="mt-3">{item?.qty}</p>
                            <button
                              type="button"
                              className="btn"
                              onClick={() => {
                                increaseQuantity(
                                  orderProduct?.[key]?.qty,
                                  orderProduct?.[key]?.orders_id
                                );
                              }}
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

                      <div class="col-3">
                        <p class={styles.cost}>$ {totalPrice()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className={`btn ${styles.buy}`}
                      onClick={() => {
                        if (selectOrderList.length < 1) {
                          Swal.fire({
                            title: "Error",
                            text: "At least you should have 1 item checkout!",
                            icon: "error",
                            confirmButtonText: "Okay",
                            confirmButtonColor: "#DB3022",
                          });
                        } else {
                          const checkouts = selectOrderList.map((item) => {
                            return orderProduct[item].orders_id;
                          });
                          dispatch(
                            checkoutReducer.setCheckout({ data: checkouts })
                          );
                          router.push("/order/checkout");
                        }
                      }}
                    >
                      Buy
                    </button>
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
