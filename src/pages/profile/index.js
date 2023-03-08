import React, { useState, useEffect } from "react";
import style from "@/styles/pages/Profile.module.scss";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Error from 'next/error'


export default function MyProfile(props) {
  const { profile, address, myOrder } = props;
  const router = useRouter();

  // data from redux
  const data = useSelector((state) => state.profile);

  // form edit profile
  const [email, setEmail] = React.useState("");
  const [photo, setPhoto] = React.useState(null);
  const [phone_number, setPhone_number] = React.useState("");
  const [name, setName] = React.useState("");
  const [date_of_birth, setDate_of_birth] = React.useState("");
  const [gender, setGender] = React.useState();

  // form add address
  const [address_alias, setAddress_alias] = React.useState("");
  const [recipient_name, setRecipient_name] = React.useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postal_code, setPostal_code] = React.useState("");
  const [recipient_phone_number, setRecipient_phone_number] =
    React.useState("");

  // order menu
  const [order, setOrder] = React.useState(0);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isError, setIsError] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isErrorAdd, setIsErrorAdd] = React.useState(false);
  const [isSuccessAdd, setIsSuccessAdd] = React.useState(false);

  // state for sidebar menu
  const [isAccount, setIsAccount] = React.useState(true);
  const [isAddress, setIsAddress] = React.useState(false);
  const [allAddress, setAllAddress] = React.useState(address?.data);
  const [isOrder, setIsOrder] = React.useState(false);
  const [allItems, setAllItems] = React.useState(myOrder?.data);

  // data redux
  const token = data?.token?.payload;
  const profileUser = data?.profile?.payload;
  const id = profileUser?.id;
  // const role = profileUser?.role

  // edit profile
  const handleEdit = async () => {
    try {
      setIsLoading(true);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const edit = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/update/${id}`,
        {
          name,
          email,
          phone_number,
          photo,
          date_of_birth,
          gender,
        },
        config
      );
      setIsLoading(false);
      setError(null);
      setIsSuccess(true);
      setSuccess(edit?.data?.message);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
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

  // add address
  const handleAddAddress = async () => {
    try {
      setIsLoading(true);

      const config = {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const add = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/addresses`,
        {
          address_alias,
          recipient_name,
          street,
          city,
          postal_code,
          recipient_phone_number,
          is_primary: true,
          user_id: id,
        },
        config
      );
      setIsLoading(false);
      setError(null);
      setIsSuccessAdd(true);

      setSuccess(add?.data?.message);
    } catch (error) {
      setIsLoading(false);
      setIsErrorAdd(true);
      setError(
        error?.response?.data?.message ?? "Something wrong in our server"
      );
    }
  };

  return (
    <>
      <Head>
        <title>Profile | Blanja</title>
      </Head>
      <Navbar />
      <div className={`row mt-5 ${style.bg}`}>
        {/* Sidebar */}
        <div className={`col-4 ${style.box}`}>
          <div className={`sidebar m-0 ${style.sidebar}`}>
            <div className={style.content}>
              <div className="header">
                <div className="list-item d-flex align-items-center mt-5">
                  <Link href="#">
                    <img
                      src={
                        profile?.data?.[0]?.photo ||
                        `https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg`
                      }
                      alt="profile"
                      className={style.picture}
                    />
                  </Link>

                  <div className="m-2">
                    <h5>{profile?.data?.[0]?.name?.toLocaleUpperCase()}</h5>
                    <div className="text-secondary">
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#image"
                        className="bx bx-edit-alt"
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        Ubah Profile
                      </span>
                    </div>

                    {/* <!-- Modal edit photo --> */}
                    <div
                      className="modal fade"
                      id="image"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Profile Picture
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <label for="formFile" className="form-label">
                                Upload your profile picture
                              </label>
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={(event) =>
                                  setPhoto(event.target.files[0])
                                }
                              />
                            </div>

                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleEdit}
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
                </div>
              </div>

              <div className="main-content">
                <div className="row mt-5 text-left">
                  <div className="col-12 mb-4">
                    <div
                      className={`${style.list} ${
                        isAccount && style.listActive
                      }`}
                      onClick={() => {
                        setIsAccount(true);
                        setIsAddress(false);
                        setIsOrder(false);
                      }}
                    >
                      <span class="bx bxs-user-account"> My Account</span>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div
                      className={`${style.list} ${
                        isAddress && style.listActive
                      }`}
                      onClick={() => {
                        setIsAccount(false);
                        setIsAddress(true);
                        setIsOrder(false);
                      }}
                    >
                      <span class="bx bxs-map"> Shipping Address</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className={`${style.list} ${isOrder && style.listActive}`}
                      onClick={() => {
                        setIsAccount(false);
                        setIsAddress(false);
                        setIsOrder(true);
                      }}
                    >
                      <span class="bx bx-clipboard"> My Order</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sidebar */}

        {/* main content */}
        <div className="col-7 m-5">
          {/* Account */}
          {isAccount && (
            <section id="account">
              <div className={`card mb-5 shadow ${style.card}`}>
                <div className="card-header">
                  <h3>My Profile</h3>
                  <p className="text-secondary">
                    Manage your profile information
                  </p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      {isSuccess ? (
                        <div className="d-flex justify-content-center">
                          <div
                            className="alert alert-success d-flex justify-content-center"
                            role="alert"
                            style={{ width: "75%" }}
                          >
                            {success}
                          </div>
                        </div>
                      ) : null}

                      {isError ? (
                        <div className="d-flex justify-content-center">
                          <div
                            className="alert alert-danger d-flex justify-content-center"
                            role="alert"
                            style={{ width: "75%" }}
                          >
                            {error}
                          </div>
                        </div>
                      ) : null}

                      <form>
                        <div class="mb-3">
                          <div className="row">
                            <div className="col-3">
                              <label for="exampleInputName" class="form-label">
                                Name
                              </label>
                            </div>
                            <div className="col-9">
                              <input
                                type="text"
                                class={`form-control ${style.in}`}
                                id="exampleInputName"
                                placeholder={profile?.data?.[0]?.name}
                                onChange={(event) =>
                                  setName(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div className="row">
                            <div className="col-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Email
                              </label>
                            </div>
                            <div className="col-9">
                              <input
                                type="email"
                                class={`form-control ${style.in}`}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder={profile?.data?.[0]?.email}
                                onChange={(event) =>
                                  setEmail(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div className="row">
                            <div className="col-3">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label mt-3"
                              >
                                Phone Number
                              </label>
                            </div>
                            <div className="col-9">
                              <input
                                type="number"
                                class={`form-control phone ${style.in}`}
                                id="exampleFormControlInput1"
                                placeholder={profile?.data?.[0]?.phone_number}
                                onChange={(event) =>
                                  setPhone_number(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-3">
                            <label>Gender</label>
                          </div>
                          <div className="col-4">
                            <div class="form-check">
                              <input
                                class={`form-check-input ${style.check}`}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="true"
                                onChange={(event) =>
                                  setGender(event.target.value)
                                }
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Male
                              </label>
                            </div>
                          </div>
                          <div className="col-4">
                            <div class="form-check">
                              <input
                                class={`form-check-input ${style.check}`}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="false"
                                onChange={(event) =>
                                  setGender(event.target.value)
                                }
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-3">
                            <label>Date of birth</label>
                          </div>
                          <div className="col-9">
                            <div className="dropdown-date-city">
                              <input
                                type="date"
                                class="btn btn-light date"
                                onChange={(event) =>
                                  setDate_of_birth(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-3"></div>
                          <div className="col-9">
                            <button
                              type="submit"
                              class={`btn btn-primary rounded-5 mt-4 ${style.submit}`}
                              onClick={handleEdit}
                              disabled={isLoading}
                            >
                              {isLoading ? "Loading..." : "Save"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-3 text-center">
                      <div className={style.border}>
                        <img
                          src={
                            profile?.data?.[0]?.photo ||
                            `https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg`
                          }
                          alt="profile"
                          className="rounded-circle mt-4"
                          style={{ width: "100px", height: "100px" }}
                        />

                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#image"
                          className={`btn btn-light rounded-5 mt-3 ${style.edit}`}
                        >
                          Select Image
                        </button>

                        {/* <!-- Modal --> */}
                        <div
                          className="modal fade"
                          id="image"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabindex="-1"
                          aria-labelledby="staticBackdropLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="staticBackdropLabel"
                                >
                                  Profile Picture
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="mb-3">
                                  <label for="formFile" className="form-label">
                                    Upload your profile picture
                                  </label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                    onChange={(event) =>
                                      setPhoto(event.target.files[0])
                                    }
                                  />
                                </div>

                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleEdit}
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Shipping Address */}
          {isAddress && (
            <section id="address">
              <div className={`card mb-5 shadow ${style.card}`}>
                <div className="card-header">
                  <h3>Choose another address</h3>
                  <p>Manage your shipping address</p>
                </div>
                <div className="container">
                  <div className="card-body">
                    <button
                      type="button"
                      className={`btn btn-light mb-3 ${style.dashed}`}
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
                      <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                          <div class="modal-header mx-auto">
                            <h1 class="modal-title fs-3" id="exampleModalLabel">
                              Add New Address
                            </h1>
                          </div>
                          <div class="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <div class="mb-3">
                                  {isSuccessAdd ? (
                                    <div className="d-flex justify-content-center">
                                      <div
                                        className="alert alert-success d-flex justify-content-center"
                                        role="alert"
                                        style={{ width: "75%" }}
                                      >
                                        {success}
                                      </div>
                                    </div>
                                  ) : null}

                                  {isErrorAdd ? (
                                    <div className="d-flex justify-content-center">
                                      <div
                                        className="alert alert-danger d-flex justify-content-center"
                                        role="alert"
                                        style={{ width: "75%" }}
                                      >
                                        {error}
                                      </div>
                                    </div>
                                  ) : null}

                                  <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label"
                                  >
                                    Save address as (ex: home address, office
                                    address)
                                  </label>
                                  <input
                                    class="form-control"
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
                                    <label for="name" className="form-label">
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
                                    <label for="phone" className="form-label">
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
                                    <label for="address" className="form-label">
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
                                    <label for="post" className="form-label">
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
                                    <label for="city" className="form-label">
                                      City or subdistric
                                    </label>
                                    <input
                                      className="form-control"
                                      id="city"
                                      type="text"
                                      onChange={(e) => setCity(e.target.value)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class={`btn btn-outline-dark rounded-5 ${style.submit}`}
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  class={`btn btn-primary rounded-5 ${style.submit}`}
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

                    {allAddress?.map((item, key) => {
                      return (
                        <React.Fragment key={key}>
                          <div className="mt-2">
                            <input
                              type="radio"
                              className="btn-check"
                              name="options-outlined"
                              id={`primary-outlined${item.id}`}
                              autocomplete="off"
                            />
                            <label
                              className="btn btn-outline-danger mb-3"
                              for={`primary-outlined${item.id}`}
                            >
                              <div className="container m-2 text-lg-start text-dark">
                                <h5>{item?.recipient_name}</h5>
                                <h6>{item?.address_alias}</h6>
                                <p>
                                  {item?.street}, {item?.city},{" "}
                                  {item?.postal_code}, <br /> hp:{" "}
                                  {item?.recipient_phone_number}
                                </p>
                                <span
                                  href="#"
                                  className=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#addAddress"
                                >
                                  Change Address
                                </span>
                              </div>
                            </label>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Order */}
          {isOrder && (
            <section id="order">
              <div className={`card mb-5 shadow ${style.cardOrder}`}>
                <div className="card-header">
                  <h5>My Order</h5>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs">
                    <li
                      className={`nav-item ${style.font}`}
                      onClick={() => setOrder(0)}
                    >
                      <span
                        className={`nav-link ${
                          order === 0 && "active bg-danger text-white"
                        } ${style.font}`}
                        aria-current="page"
                      >
                        All items
                      </span>
                    </li>
                    <li
                      className={`nav-item ${style.font}`}
                      onClick={() => setOrder(1)}
                    >
                      <span
                        className={`nav-link ${
                          order === 1 && "active bg-danger text-white"
                        } ${style.font}`}
                        href="#"
                      >
                        Not yet paid
                      </span>
                    </li>
                    <li
                      className={`nav-item ${style.font}`}
                      onClick={() => setOrder(2)}
                    >
                      <span
                        className={`nav-link ${
                          order === 2 && "active bg-danger text-white"
                        } ${style.font}`}
                        href="#"
                      >
                        Packed
                      </span>
                    </li>
                    <li
                      className={`nav-item ${style.font}`}
                      onClick={() => setOrder(3)}
                    >
                      <span
                        className={`nav-link ${
                          order === 3 && "active bg-danger text-white"
                        } ${style.font}`}
                        href="#"
                      >
                        Sent
                      </span>
                    </li>
                    <li
                      className={`nav-item ${style.font}`}
                      onClick={() => setOrder(4)}
                    >
                      <span
                        className={`nav-link ${
                          order === 4 && "active bg-danger text-white"
                        } ${style.font}`}
                        href="#"
                      >
                        Completed
                      </span>
                    </li>
                    <li
                      className={`nav-item ${style.font}`}
                      onClick={() => setOrder(5)}
                    >
                      <span
                        className={`nav-link ${
                          order === 5 && "active bg-danger text-white"
                        } ${style.font}`}
                        href="#"
                      >
                        Order cancel
                      </span>
                    </li>
                  </ul>
                  <div>
                    {order === 0 &&
                      allItems.map((item, key) => {
                        return (
                          <>
                            <div
                              className="card py-3 m-3"
                              key={item.product_id}
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-7">
                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                      <img
                                        src={item?.product_images?.[0]?.image}
                                        alt="product"
                                        style={{
                                          width: "90px",
                                          height: "80px",
                                          objectFit: "cover",
                                          borderRadius: "7px",
                                        }}
                                      />
                                      <div>
                                        <h5>Product</h5>
                                        <h5>{item.product_name}</h5>
                                        <p>$ {item.price}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-2">
                                    <div>
                                      <h5>qty</h5>
                                      <p>{item.qty}</p>
                                    </div>
                                  </div>

                                  <div className="col-3">
                                    <div>
                                      <h5>Status</h5>
                                      <p>
                                        {(item.status === 1 &&
                                          "Not yet paid") ||
                                          (item.status === 2 && "Packed") ||
                                          (item.status === 3 && "Sent") ||
                                          (item.status === 4 && "Completed") ||
                                          (item.status === 5 && "Order Cancel")}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    {order === 1 &&
                      allItems
                        .filter((items) => items.status === 1)
                        .map((item, key) => {
                          return (
                            <>
                              <div
                                className="card py-3 m-3"
                                key={item.product_id}
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-7">
                                      <div className="d-flex justify-content-center align-items-center gap-3">
                                        <img
                                          src={item?.product_images?.[0]?.image}
                                          alt="product"
                                          style={{
                                            width: "90px",
                                            height: "80px",
                                            objectFit: "cover",
                                            borderRadius: "7px",
                                          }}
                                        />
                                        <div>
                                          <h5>Product</h5>
                                          <h5>{item.product_name}</h5>
                                          <p>$ {item.price}</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-2">
                                      <div>
                                        <h5>qty</h5>
                                        <p>{item.qty}</p>
                                      </div>
                                    </div>

                                    <div className="col-3">
                                      <div>
                                        <h5>Status</h5>
                                        <p>Not yet paid</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    {order === 2 &&
                      allItems
                        .filter((items) => items.status === 2)
                        .map((item, key) => {
                          return (
                            <>
                              <div className="card py-3 m-3">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-7">
                                      <div className="d-flex justify-content-center align-items-center gap-3">
                                        <img
                                          src={item?.product_images?.[0]?.image}
                                          alt="product"
                                          style={{
                                            width: "90px",
                                            height: "80px",
                                            objectFit: "cover",
                                            borderRadius: "7px",
                                          }}
                                        />
                                        <div>
                                          <h5>Product</h5>
                                          <h5>{item.product_name}</h5>
                                          <p>$ {item.price}</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-2">
                                      <div>
                                        <h5>qty</h5>
                                        <p>{item.qty}</p>
                                      </div>
                                    </div>

                                    <div className="col-3">
                                      <div>
                                        <h5>Status</h5>
                                        <p>Packed</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    {order === 3 &&
                      allItems
                        .filter((items) => items.status === 3)
                        .map((item, key) => {
                          return (
                            <>
                              <div
                                className="card py-3 m-3"
                                key={item.product_id}
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-7">
                                      <div className="d-flex justify-content-center align-items-center gap-3">
                                        <img
                                          src={item?.product_images?.[0]?.image}
                                          alt="product"
                                          style={{
                                            width: "90px",
                                            height: "80px",
                                            objectFit: "cover",
                                            borderRadius: "7px",
                                          }}
                                        />
                                        <div>
                                          <h5>Product</h5>
                                          <h5>{item.product_name}</h5>
                                          <p>$ {item.price}</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-2">
                                      <div>
                                        <h5>qty</h5>
                                        <p>{item.qty}</p>
                                      </div>
                                    </div>

                                    <div className="col-3">
                                      <div>
                                        <h5>Status</h5>
                                        <p>Sent</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    {order === 4 &&
                      allItems
                        .filter((items) => items.status === 4)
                        .map((item, key) => {
                          return (
                            <>
                              <div className="card py-3 m-3">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-7">
                                      <div className="d-flex justify-content-center align-items-center gap-3">
                                        <img
                                          src={item?.product_images?.[0]?.image}
                                          alt="product"
                                          style={{
                                            width: "90px",
                                            height: "80px",
                                            objectFit: "cover",
                                            borderRadius: "7px",
                                          }}
                                        />
                                        <div>
                                          <h5>Product</h5>
                                          <h5>{item.product_name}</h5>
                                          <p>$ {item.price}</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-2">
                                      <div>
                                        <h5>qty</h5>
                                        <p>{item.qty}</p>
                                      </div>
                                    </div>

                                    <div className="col-3">
                                      <div>
                                        <h5>Status</h5>
                                        <p>Completed</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    {order === 5 &&
                      allItems
                        .filter((items) => items.status === 5)
                        .map((item, key) => {
                          return (
                            <>
                              <div
                                className="card py-3 m-3"
                                key={item.product_id}
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-7">
                                      <div className="d-flex justify-content-center align-items-center gap-3">
                                        <img
                                          src={item?.product_images?.[0]?.image}
                                          alt="product"
                                          style={{
                                            width: "90px",
                                            height: "80px",
                                            objectFit: "cover",
                                            borderRadius: "7px",
                                          }}
                                        />
                                        <div>
                                          <h5>Product</h5>
                                          <h5>{item.product_name}</h5>
                                          <p>$ {item.price}</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-2">
                                      <div>
                                        <h5>qty</h5>
                                        <p>{item.qty}</p>
                                      </div>
                                    </div>

                                    <div className="col-3">
                                      <div>
                                        <h5>Status</h5>
                                        <p>Order Cancel</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      {/* End main content */}
      <Footer />
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  // get data from cookie
  const token = getCookie("token", { req, res });
  const id = JSON.parse(getCookie("profile", { req, res })).id;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // get detail user
  const profile = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
    config
  );
  const convertData = profile?.data;

  // get all address
  const address = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/addresses/users/${id}`,
    config
  );
  const convertAddress = address?.data;

  // get history order
  const myOrder = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/checkouts/users/${id}`,
    config
  );

  const convertOrder = myOrder?.data;

  return {
    props: {
      profile: convertData,
      address: convertAddress,
      myOrder: convertOrder,
    },
  };
}


