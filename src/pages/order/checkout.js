/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import jacket from "public/images/jacket.png";
import styles from "@/styles/pages/order/Checkout.module.scss";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import Gopay from "public/images/payment/Gopay.png";
import Ovo from "public/images/payment/Ovo.png";
import Dana from "public/images/payment/Dana.png";
import * as checkoutReducer from "@/stores/reducer/checkout";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function Checkout() {
  const [orderProduct, setOrderProduct] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  // form add address
  const [address_alias, setAddress_alias] = React.useState("");
  const [recipient_name, setRecipient_name] = React.useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postal_code, setPostal_code] = React.useState("");
  const [recipient_phone_number, setRecipient_phone_number] =
    React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [getAddress, setGetAddress] = React.useState([]);
  const [chooseAddress, setChooseAddress] = React.useState(0);
  //form payment
  const [payment, setPayment] = React.useState(null);
  const [checkPay, setCheckPay] = React.useState();

  const [typePayment, setTypePayment] = React.useState(0);

  const router = useRouter();

  const dispatch = useDispatch();

  const totalPrice = () => {
    let totalOrder = 0;

    orderProduct
      .filter((parentItem) =>
        dataCheckouts?.data?.includes(parentItem.orders_id)
      )
      .map((item, key) => {
        const total = item?.price * item?.qty;
        totalOrder += total;
      });

    return totalOrder;
  };

  const totalWithDelivery = () => {
    let totalDelivery = 10;

    return totalDelivery + totalPrice();
  };

  const handleAddAddress = async () => {
    try {
      setIsLoading(true);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(
        `/api/addAddress`,
        {
          address_alias,
          recipient_name,
          street,
          city,
          postal_code,
          recipient_phone_number,
        },
        config
      );
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(
        error?.response?.data?.message ??
          error?.response?.data?.message?.email?.message ??
          error?.response?.data?.message?.name?.message ??
          error?.response?.data?.message?.phone_number?.message ??
          error?.response?.data?.message?.photo?.message ??
          "Something wrong in our server"
      );
    }
  };

  const handlePayment = (cbtotalCost) => {
    const itemCheckouts = orderProduct
      .filter((parentItem) =>
        dataCheckouts?.data?.includes(parentItem.orders_id)
      )
      .map((item, key) => {
        return {
          product_id: item?.product_id,
          qty: item?.qty,
          price: item?.price,
        };
      });

    setIsLoading(true);
    const token = data?.token?.payload;

    const total = cbtotalCost;

    const postData = {
      type_payment: typePayment,
      address_id: dataCheckouts?.address,
      cost: parseInt(total),
      shipping_cost: 10,
      status: 0,
      item_checkouts: itemCheckouts,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/payments`, postData, config)
      .then((res) => {
        Swal.fire("The product was successfully checkout", "", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = useSelector((state) => state.profile);

  const dataCheckouts = useSelector((state) => state.checkout);

  React.useEffect(() => {
    const token = data.token.payload;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(dataCheckouts);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/users/${data.profile.payload.id}`,
        config
      )
      .then((res) => {
        setOrderProduct(res.data.data);
        const dataOrder = res.data.data;
        dataOrder.map((item, key) => {
          setTotal(total + item.price * item.qty);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    const token = data.token.payload;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/addresses/users/${data.profile.payload.id}`,
        config
      )
      .then((res) => {
        setGetAddress(res.data.data);
        const address = res.data.data;
        const primaryAddress = address.filter(
          (value) => value.is_primary === true
        );
        setChooseAddress(primaryAddress.map((item) => item.id)?.[0]);
        dispatch(
          checkoutReducer.setCheckoutAddress({
            address: primaryAddress.map((item) => item.id)?.[0],
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Head>
        <title>Checkout | Blanja</title>
      </Head>
      <Navbar />

      <main className={styles.main} style={{paddingTop: "130px", paddingBottom: "50px"}}>
        <div className="container">
          <div className={styles.content}>
            <h2>Checkout</h2>
            <div class={`row ${styles.bot}`}>
              <div class="col-8">
                <h5>Shipping Address</h5>
                <div
                  className={`row justify-content-between align-items-center ${styles.all}`}
                >
                  <div className="container">
                    {getAddress
                      .filter((value) => value.id === dataCheckouts?.address)
                      .map((val) => {
                        return (
                          <>
                            <div key={val.id} className={styles.add}>
                              <h6>{val?.recipient_name}</h6>
                              <p>
                                {`${val?.address_alias} ${val?.street} ${val?.city} ${val?.postal_code}  `}
                              </p>
                              <button
                                className={styles.choose}
                                data-bs-toggle="modal"
                                data-bs-target="#address"
                              >
                                <p>Choose another address</p>
                              </button>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
                {/* <!-- Modal --> */}
                <div
                  class={`modal fade ${styles.modalAddress}`}
                  id="address"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Choose another address
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div className="container">
                          <button
                            className={styles.butAdd}
                            data-bs-toggle="modal"
                            data-bs-target="#addAddress"
                          >
                            Add New Address
                          </button>
                          {/* <!-- Modal --> */}
                          <div
                            class="modal fade"
                            id="addAddress"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                              <div className="modal-content">
                                <div className="modal-header mx-auto">
                                  <h1
                                    className="modal-title fs-3"
                                    id="exampleModalLabel"
                                  >
                                    Add New Address
                                  </h1>
                                </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="mb-3">
                                        <label
                                          for="exampleFormControlTextarea1"
                                          className="form-label"
                                        >
                                          Save address as (ex: home address,
                                          office address)
                                        </label>
                                        <input
                                          className="form-control"
                                          id="exampleFormControlTextarea1"
                                          rows="3"
                                          placeholder="Home"
                                          onChange={(e) =>
                                            setAddress_alias(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="row">
                                        <div className="col-6">
                                          <label
                                            for="name"
                                            className="form-label"
                                          >
                                            Recipient&apos;s name
                                          </label>
                                          <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            onChange={(e) =>
                                              setRecipient_name(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div className="col-6">
                                          <label
                                            for="phone"
                                            className="form-label"
                                          >
                                            Recipient&apos;s phone number
                                          </label>
                                          <input
                                            className="form-control"
                                            id="phone"
                                            type="number"
                                            onChange={(e) =>
                                              setRecipient_phone_number(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </div>
                                        <div className="col-6">
                                          <label
                                            for="address"
                                            className="form-label"
                                          >
                                            Address
                                          </label>
                                          <input
                                            className="form-control"
                                            id="address"
                                            type="text"
                                            onChange={(e) =>
                                              setStreet(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div className="col-6">
                                          <label
                                            for="post"
                                            className="form-label"
                                          >
                                            Postal code
                                          </label>
                                          <input
                                            className="form-control"
                                            id="post"
                                            type="text"
                                            onChange={(e) =>
                                              setPostal_code(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div className="col-6">
                                          <label
                                            for="city"
                                            className="form-label"
                                          >
                                            City or subdistric
                                          </label>
                                          <input
                                            className="form-control"
                                            id="city"
                                            type="text"
                                            onChange={(e) =>
                                              setCity(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className={`btn btn-outline-dark rounded-5 ${styles.submit}`}
                                        data-bs-dismiss="modal"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        class={`btn btn-primary rounded-5 ${styles.submit}`}
                                        onClick={handleAddAddress}
                                        disabled={isLoading}
                                      >
                                        {isLoading ? "Loading..." : "Save"}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {getAddress?.map((item, key) => {
                            return (
                              <div key={key} className={styles.change}>
                                <div className={styles.changeAdd}>
                                  <h6>Penerima : {item?.recipient_name}</h6>
                                  <p>
                                    Alamat :
                                    {`${item?.address_alias} ${item?.street} ${item?.city} ${item?.postal_code}  `}
                                  </p>
                                  <button
                                    className="btn"
                                    onClick={() => {
                                      setChooseAddress(item?.id);
                                      dispatch(
                                        checkoutReducer.setCheckoutAddress({
                                          address: item?.id,
                                        })
                                      );
                                    }}
                                  >
                                    Change Address
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        {/* <button type="button" class="btn btn-primary">
                          Save changes
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* components item checkouts */}
                <div className={styles.box}>
                  {orderProduct
                    .filter((parentItem) =>
                      dataCheckouts?.data?.includes(parentItem.orders_id)
                    )
                    .map((item, key) => {
                      return (
                        <div
                          key={key}
                          class={`row align-items-center ${styles.item}`}
                        >
                          <div class="col-7">
                            <div class="row">
                              <div class="col">
                                <img
                                  src={item?.product_images?.[0]?.image}
                                  style={{ width: "150px", height: "100px" }}
                                />
                              </div>
                              <div class={`col-6 ${styles.goods}`}>
                                <h5>{item.product_name}</h5>
                                <p>{item?.store_name}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="row">
                              <div class={`col ${styles.num}`}>
                                <p>{item?.qty}</p>
                              </div>
                            </div>
                          </div>
                          <div class={`col ${styles.price}`}>
                            <p>{item?.price}</p>
                          </div>
                        </div>
                      );
                    })}

                  {/* <div class={`row align-items-center ${styles.item}`}>
                    <div class="col-7">
                      <div class="form-check">
                        <input
                          class={`form-check-input ${styles.form}`}
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          <div class="row">
                            <div class="col">
                              <img
                                src={jacket.src}
                                style={{ width: "150px", height: "100px" }}
                              />
                            </div>
                            <div class={`col-7 ${styles.goods}`}>
                              <h5>Men&apos;s formal suit - Black</h5>
                              <p>Zalora Cloth</p>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class={`col ${styles.num}`}>
                      <p>1</p>
                    </div>
                    <div class={`col ${styles.price}`}>
                      <p>$ 20.0</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* components total checkouts price */}
              <div className="col-4">
                <div className={styles.detail}>
                  <div className="container">
                    <div className="row align-items-center">
                      <h6>Shopping summary</h6>
                    </div>
                    <div class={`row justify-content-between ${styles.total}`}>
                      <div class="col-4">
                        <p class={styles.text}>Order</p>
                      </div>
                      <div class="col-4">
                        <p class={styles.cost}>{totalPrice()}</p>
                      </div>
                    </div>
                    <div
                      class={`row justify-content-between ${styles.delivery}`}
                    >
                      <div class="col-4">
                        <p class={styles.text}>Delivery</p>
                      </div>
                      <div class="col-4">
                        <p class={styles.cost}>10</p>
                      </div>
                    </div>
                    <hr />
                    <div class={`row justify-content-between ${styles.shop}`}>
                      <div class="col-6">
                        <p class={styles.text}>Shopping Summary</p>
                      </div>
                      <div class="col-4">
                        <p class={styles.cost}>{totalWithDelivery()}</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      class={`btn ${styles.buy}`}
                      data-bs-toggle="modal"
                      data-bs-target="#payment"
                    >
                      Buy
                    </button>
                    {/* <!-- Modal Payment method--> */}
                    <div
                      class={`modal fade ${styles.modals}`}
                      id="payment"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class={`modal-header ${styles.header}`}>
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Payment
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <h5 style={{ textAlign: "left" }}>
                              Payment Method
                            </h5>
                            <div
                              class={`container text-center ${styles.paymentMethod}`}
                            >
                              <div class={`row ${styles.method}`}>
                                <div class="col-3">
                                  <img src={Gopay.src} alt="Gopay" />
                                </div>
                                <div class="col-5">
                                  <p className={styles.useMethod}>Gopay</p>
                                </div>
                                <div class="col-1 offset-3">
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value={1}
                                      id="flexCheckDefault1"
                                      checked={typePayment === 1 ? true : false}
                                      onChange={() => setTypePayment(1)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class={`row ${styles.method}`}>
                                <div class="col-3">
                                  <img src={Ovo.src} alt="Ovo" />
                                </div>
                                <div class="col-5">
                                  <p className={styles.useMethod}>Ovo</p>
                                </div>
                                <div class="col-1 offset-3">
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value={2}
                                      id="flexCheckDefault2"
                                      checked={typePayment === 2 ? true : false}
                                      onChange={() => setTypePayment(2)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class={`row ${styles.method}`}>
                                <div class="col-3">
                                  <img src={Dana.src} alt="Dana" />
                                </div>
                                <div class="col-5">
                                  <p className={styles.useMethod}>Dana</p>
                                </div>
                                <div class="col-1 offset-3">
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value={3}
                                      id="flexCheckDefault3"
                                      checked={typePayment === 3 ? true : false}
                                      onChange={() => setTypePayment(3)}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div class="container">
                              <div class="row align-items-center">
                                <h6 className={styles.sum}>Shopping summary</h6>
                              </div>
                              <div
                                class={`row justify-content-between ${styles.total}`}
                              >
                                <div class="col-4">
                                  <p class={styles.text}>Order</p>
                                </div>
                                <div class="col-4">
                                  <p class={styles.cost}>{totalPrice()}</p>
                                </div>
                              </div>
                              <div
                                class={`row justify-content-between ${styles.delivery}`}
                              >
                                <div class="col-4">
                                  <p class={styles.text}>Delivery</p>
                                </div>
                                <div class="col-4">
                                  <p class={styles.cost}>10</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class={`modal-footer ${styles.footer}`}>
                            <div class="container text-center">
                              <div class="row">
                                <div class="col-5">
                                  <p class={styles.text}>Shopping Summary</p>
                                  <p class={styles.cost}>
                                    {totalWithDelivery()}
                                  </p>
                                </div>
                                <div class="col-4 offset-3">
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={() => handlePayment(totalPrice())}
                                  >
                                    Save changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
