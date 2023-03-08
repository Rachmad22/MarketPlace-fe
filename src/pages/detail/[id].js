/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/pages/Detail.module.scss";
import Link from "next/link";
import CardProduct from "@/components/molecules/cardProduct";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const DetailProduct = (props) => {
  const {
    product: {
      data: { product, store },
    },
    products,
  } = props;

  const dataProduct = product[0];
  const dataStore = store[0];
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("S");
  const [colorSelected, setColorSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const data = useSelector((state) => state.profile);

  const [imageSelected, setImageSelected] = useState(
    dataProduct?.product_images?.[0]?.image
  );

  const decreaseQuantity = () => {
    const minus = quantity - 1;
    setQuantity(minus);
    if (quantity === 1) {
      setQuantity(1);
    }
  };

  const increaseQuantity = () => {
    const plus = quantity + 1;
    setQuantity(plus);
  };

  const addToCart = () => {
    setIsLoading(true);
    const isLogin = data?.profile?.payload;
    const dataPost = {
      product_id: id,
      qty: quantity,
      size: sizeSelected,
    };

    if (!isLogin) {
      router.replace("/auth/register");
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${data?.token?.payload}`,
      },
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, dataPost, config)
      .then((res) => {
        Swal.fire({
          title: "Product added successfully",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#DB3022",
        });
        setIsLoading(false);
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

  return (
    <div>
      <Head>
        <title>{dataProduct?.product_name} | Blanja</title>
      </Head>
      <Navbar />
      <main style={{ paddingTop: "120px", paddingBottom: "50px" }}>
        <div
          className="container bg-white pb-4 pt-4"
          style={{ borderRadius: "10px" }}
        >
          <div>
            <nav className={`ms-3 ${styles.breadcrumb}`}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" style={{ color: "grey" }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link href="/category" style={{ color: "grey" }}>
                    Category
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  {dataProduct?.category_name}
                </li>
              </ol>
            </nav>
          </div>
          <div className="mt-5 d-flex">
            <div className="me-5 ms-3">
              <div>
                <img
                  className={styles.bigPhoto}
                  src={
                    imageSelected ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhf-td4GXegmuo582JIu6X6H8x5yxF3ehow&usqp=CAU"
                  }
                  alt={dataProduct?.product_name}
                />
              </div>
              <div className="row mt-2" style={{ gap: "0.89rem" }}>
                {product.map((item, key) => (
                  <div
                    className="col-2"
                    style={{ cursor: "pointer" }}
                    key={key}
                  >
                    <img
                      className={styles.smallPhoto}
                      src={
                        item?.product_images[key]?.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhf-td4GXegmuo582JIu6X6H8x5yxF3ehow&usqp=CAU"
                      }
                      alt={item?.product_name}
                      onClick={() =>
                        setImageSelected(item?.product_images?.[key]?.image)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>{dataProduct?.product_name}</h3>
              <p style={{ marginBottom: "15px", color: "#9B9B9B" }}>
                {dataStore?.store_name}
              </p>
              <img
                src="/images/rating.svg"
                style={{ width: "25%", marginBottom: "15px" }}
                alt="rating"
              />
              <p style={{ marginBottom: "5px" }}>Price</p>
              <h3>$ {dataProduct?.price}</h3>
              <p style={{ marginTop: "20px", marginBottom: "5px" }}>Color</p>
              <div className="d-flex mb-3">
                <div className="d-flex">
                  <span
                    className={`me-2 ${styles.colorSelection} ${
                      colorSelected === "red" ? styles.activeColor : ""
                    }`}
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      setColorSelected("red");
                    }}
                  ></span>
                  <span
                    className={`me-2 ${styles.colorSelection} ${
                      colorSelected === "green" ? styles.activeColor : ""
                    }`}
                    style={{ backgroundColor: "green" }}
                    onClick={() => {
                      setColorSelected("green");
                    }}
                  ></span>
                  <span
                    className={`me-2 ${styles.colorSelection} ${
                      colorSelected === "blue" ? styles.activeColor : ""
                    }`}
                    style={{ backgroundColor: "blue" }}
                    onClick={() => {
                      setColorSelected("blue");
                    }}
                  ></span>
                  <span
                    className={`me-2 ${styles.colorSelection} ${
                      colorSelected === "black" ? styles.activeColor : ""
                    }`}
                    style={{ backgroundColor: "black" }}
                    onClick={() => {
                      setColorSelected("black");
                    }}
                  ></span>
                  <span
                    className={`me-2 ${styles.colorSelection} ${
                      colorSelected === "yellow" ? styles.activeColor : ""
                    }`}
                    style={{ backgroundColor: "yellow" }}
                    onClick={() => {
                      setColorSelected("yellow");
                    }}
                  ></span>
                </div>
              </div>
              <div className="d-flex mb-5">
                <div>
                  <p className="me-5">Size</p>
                  <div>
                    <button
                      className={`btn btn-light ${
                        sizeSelected === "S" ? "btn-primary text-light" : ""
                      }`}
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        setSizeSelected("S");
                      }}
                    >
                      S
                    </button>
                    <button
                      className={`btn btn-light ${
                        sizeSelected === "M" ? "btn-primary text-light" : ""
                      }`}
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        setSizeSelected("M");
                      }}
                    >
                      M
                    </button>
                    <button
                      className={`btn btn-light ${
                        sizeSelected === "L" ? "btn-primary text-light" : ""
                      }`}
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        setSizeSelected("L");
                      }}
                    >
                      L
                    </button>
                    <button
                      className={`btn btn-light ${
                        sizeSelected === "XL" ? "btn-primary text-light" : ""
                      }`}
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        setSizeSelected("XL");
                      }}
                    >
                      XL
                    </button>
                  </div>
                </div>
                <div className="ms-5">
                  <p>Quantity</p>
                  <div className="d-flex gap-2" style={{ marginTop: "-15px" }}>
                    <button
                      type="button"
                      className="btn"
                      onClick={decreaseQuantity}
                      style={{ background: "#DB3022", color: "white" }}
                    >
                      -
                    </button>
                    <p className="mt-3">{quantity}</p>
                    <button
                      type="button"
                      className="btn"
                      onClick={increaseQuantity}
                      style={{ background: "#DB3022", color: "white" }}
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
                <button
                  className={`btn ${styles.chat} me-2`}
                  style={{ width: "150px" }}
                  onClick={addToCart}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Add bag"}
                </button>
                <Link href="/order/checkout">
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
          <div className="mt-5 ms-3">
            <h2>Product Information</h2>
            <div className="mt-4">
              <h4>Condition</h4>
              <p
                style={{ fontSize: "22px", color: "#DB3022", fontWeight: 500 }}
              >
                {dataProduct?.condition === true ? "New" : "Second"}
              </p>
            </div>
            <div className="mt-4">
              <h4>Description</h4>
              <p style={{ width: "95%", color: "#9B9B9B" }}>
                {dataProduct?.description}
              </p>
            </div>
            <div className="mt-4">
              <h4>Product Review</h4>
              <div className="d-flex mt-5">
                <div>
                  <div className="d-flex">
                    <h1 style={{ fontSize: "77px" }}>5.0</h1>
                    <p
                      style={{
                        paddingTop: "52px",
                        paddingLeft: "6px",
                        fontSize: "20px",
                      }}
                    >
                      /10
                    </p>
                  </div>
                  <img
                    src="/images/five-star.png"
                    style={{ width: "150px" }}
                    alt="five star"
                  />
                </div>
                <div>
                  <div className="d-flex">
                    <img
                      src="/images/one-star.png"
                      style={{
                        width: "17px",
                        height: "17px",
                        marginLeft: "38px",
                      }}
                      alt="one star"
                    />
                    <p className="ms-2" style={{ marginTop: "-3px" }}>
                      5
                    </p>
                    <img
                      src="/images/line-review.png"
                      style={{
                        width: "129px",
                        height: "7px",
                        marginLeft: "15px",
                        marginTop: "5px",
                      }}
                      alt="line review"
                    />
                    <p className="ms-3" style={{ marginTop: "-4px" }}>
                      8
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      src="/images/one-star.png"
                      style={{
                        width: "17px",
                        height: "17px",
                        marginLeft: "38px",
                      }}
                    />
                    <p className="ms-2" style={{ marginTop: "-3px" }}>
                      4
                    </p>
                    <img
                      className="invisible"
                      src="/images/line-review.png"
                      style={{
                        width: "129px",
                        height: "7px",
                        marginLeft: "15px",
                        marginTop: "5px",
                      }}
                    />
                    <p className="ms-3" style={{ marginTop: "-4px" }}>
                      0
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      src="/images/one-star.png"
                      style={{
                        width: "17px",
                        height: "17px",
                        marginLeft: "38px",
                      }}
                    />
                    <p className="ms-2" style={{ marginTop: "-3px" }}>
                      3
                    </p>
                    <img
                      className="invisible"
                      src="/images/line-review.png"
                      style={{
                        width: "129px",
                        height: "7px",
                        marginLeft: "15px",
                        marginTop: "5px",
                      }}
                    />
                    <p className="ms-3" style={{ marginTop: "-4px" }}>
                      0
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      src="/images/one-star.png"
                      style={{
                        width: "17px",
                        height: "17px",
                        marginLeft: "38px",
                      }}
                    />
                    <p className="ms-2" style={{ marginTop: "-3px" }}>
                      2
                    </p>
                    <img
                      className="invisible"
                      src="/images/line-review.png"
                      style={{
                        width: "129px",
                        height: "7px",
                        marginLeft: "15px",
                        marginTop: "5px",
                      }}
                    />
                    <p className="ms-3" style={{ marginTop: "-4px" }}>
                      0
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      src="/images/one-star.png"
                      style={{
                        width: "17px",
                        height: "17px",
                        marginLeft: "38px",
                      }}
                    />
                    <p className="ms-2" style={{ marginTop: "-3px" }}>
                      1
                    </p>
                    <img
                      className="invisible"
                      src="/images/line-review.png"
                      style={{
                        width: "129px",
                        height: "7px",
                        marginLeft: "15px",
                        marginTop: "5px",
                      }}
                    />
                    <p className="ms-3" style={{ marginTop: "-4px" }}>
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-5" />
            <div>
              <div className="mt-5">
                <h2>You can also like this</h2>
                <p style={{ color: "#9B9B9B" }}>
                  You&apos;ve never seen it before!
                </p>
              </div>
              <div className="row" style={{ gap: "2.8rem" }}>
                {products?.data?.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                        <CardProduct item={item} />
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;
  const productData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
  );

  const convertProduct = productData?.data;

  const productsData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  const convertProducts = productsData?.data;

  return {
    props: {
      product: convertProduct,
      products: convertProducts,
    },
  };
};

export default DetailProduct;
