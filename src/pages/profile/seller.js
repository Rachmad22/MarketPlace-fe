import React from "react";
import style from "@/styles/pages/Profile.module.scss";
import { MdOutlineModeEdit } from "react-icons/md";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

export default function Seller(props) {
  const profile = props;

  return (
    <>
      <Head>
        <title>Profile Seller | Blanja</title>
      </Head>
      <div className={`row ${style.bg}`}>
        <div className={`col-4 ${style.box}`}>
          <div className={`sidebar m-0 ${style.sidebar}`}>
            <div className={style.content}>
              <div className="header">
                <div className="list-item d-flex align-items-center mt-5">
                  <Link href="#">
                    <img
                      src={
                        profile.data[0].photo ||
                        `https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg`
                      }
                      alt="profile"
                      className={style.picture}
                    />
                  </Link>

                  <div className="m-2">
                    <h5>{profile.data[0].name}</h5>
                    <Link href="#" className="text-secondary">
                      <MdOutlineModeEdit /> Ubah Profile
                    </Link>
                  </div>
                </div>
              </div>

              <div className="main">
                <div className="row mt-5 text-left">
                  <div className="col-12 mb-4">
                    <Link href="#store" className={style.list}>
                      <lord-icon
                        src="https://cdn.lordicon.com/hjbsbdhw.json"
                        trigger="loop-on-hover"
                        delay="1000"
                        colors="primary:#3a3347,secondary:#c74b16,tertiary:#794628,quaternary:#b4b4b4"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                      <span>Store</span>
                    </Link>
                  </div>
                  <div className="col-12 mb-4">
                    <Link href="#myProduct" className={style.list}>
                      <lord-icon
                        src="https://cdn.lordicon.com/gzcbkoye.json"
                        trigger="loop-on-hover"
                        delay="1000"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                      <span>My Products</span>
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link href="#sale" className={style.list}>
                      <lord-icon
                        src="https://cdn.lordicon.com/ggihhudh.json"
                        trigger="loop-on-hover"
                        delay="1000"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                      <span>Sale</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-7">
          <section id="store">
            <div className="card mb-5" style={{ marginTop: "80px" }}>
              <div className="container">
                <div className="card-header m-2">
                  <h5>My Profile Store</h5>
                  <p>Manage your profile information</p>
                </div>
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-8">
                        <form>
                          <div class="mb-3">
                            <div className="row">
                              <div className="col-3">
                                <label
                                  for="exampleInputName"
                                  class="form-label"
                                >
                                  Name
                                </label>
                              </div>
                              <div className="col-9">
                                <input
                                  type="text"
                                  class={`form-control ${style.in}`}
                                  id="exampleInputName"
                                />
                              </div>
                            </div>

                            <div class="mb-3 mt-3">
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
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="mb-3">
                              <div className="row">
                                <div className="col-4">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="form-label mt-3"
                                  >
                                    Phone Number
                                  </label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="number"
                                    class={`form-control phone ${style.in}`}
                                    id="exampleFormControlInput1"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="mb-3">
                              <div className="row">
                                <div className="col-3">
                                  <label
                                    for="exampleInputDesc"
                                    class="form-label"
                                  >
                                    Store Description
                                  </label>
                                </div>
                                <div className="col-9">
                                  <textarea
                                    type="text"
                                    class={`form-control ${style.in}`}
                                    id="exampleInputDesc"
                                    rows="4"
                                  />
                                  <button
                                    className="btn btn-primary rounded-5 mt-4 mb-3"
                                    style={{ width: "100px" }}
                                    type="submit"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-3 text-center">
                        <div className={style.border}>
                          <img
                            src={
                              profile.data[0].photo ||
                              `https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg`
                            }
                            alt="profile"
                            className="rounded-circle mt-4"
                            style={{ width: "100px", height: "100px" }}
                          />
                          <button
                            className={`btn btn-light rounded-5 mt-3 ${style.btn}`}
                          >
                            Select Image
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="myProduct">
            <div className="card mb-5">
              <div className="container">
                <div className="card-header m-2">
                  <h5>My product</h5>
                </div>
                <div className="card-body">
                  <ul class="nav nav-tabs">
                    <li class={`nav-item ${style.font}`}>
                      <Link
                        class={`nav-link ${style.font}`}
                        aria-current="page"
                        href="#"
                      >
                        All items
                      </Link>
                    </li>
                    <li class={`nav-item ${style.font}`}>
                      <Link class={`nav-link ${style.font}`} href="#">
                        Sold Out
                      </Link>
                    </li>
                    <li class={`nav-item ${style.font}`}>
                      <Link class={`nav-link ${style.font}`} href="#">
                        Archived
                      </Link>
                    </li>
                  </ul>

                  <div className="col-5 mt-3">
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>

                  <div className="col-12">
                    <div className="card mt-4">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-7">
                            <h7>Product Name</h7>
                          </div>
                          <div className="col-3">
                            <h7>Price</h7>
                          </div>
                          <div className="col-2">
                            <h7>Stock</h7>
                          </div>
                        </div>
                      </div>

                      <div className="card-body" style={{ height: "300px" }}>
                        <div className="d-flex justify-content-center align-content-center">
                          <img src="/images/profile/notfound.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="sale">
            <div className="card mb-4">
              <div className="container">
                <div className="card-header m-2">
                  <h5>Inventory</h5>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-5">
                      <label for="name" className="form-label">
                        Name of goods
                      </label>
                      <input className="form-control" id="name" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="container">
                <div className="card-header m-2">
                  <h5>Item Details</h5>
                </div>

                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-5">
                      <label for="price" className="form-label">
                        Unit Price
                      </label>
                      <input className="form-control" id="price" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-5">
                      <label for="stock" className="form-label">
                        Stock
                      </label>
                      <div class="input-group mb-4">
                        <input
                          type="text"
                          id="stock"
                          class="form-control"
                          aria-label="buah"
                        />
                        <span class="input-group-text bg-light">buah</span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <label className="mb-2">Stock</label>
                    <div className="col-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          New
                        </label>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label mb-3"
                          for="flexRadioDefault2"
                        >
                          Second
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="container">
                <div className="card-header m-2">
                  <h5>Photo of Goods</h5>
                </div>

                <div className="card-body mb-3">
                  <div className="row gap-3 d-flex justify-content-center">
                    <img
                      src="/images/profile/box.svg"
                      alt="default"
                      className="bg-secondary"
                      style={{ height: "120px", width: "120px" }}
                    />

                    <img
                      src="/images/profile/box.svg"
                      alt="default"
                      className="bg-secondary"
                      style={{ height: "120px", width: "120px" }}
                    />

                    <img
                      src="/images/profile/box.svg"
                      alt="default"
                      className="bg-secondary"
                      style={{ height: "120px", width: "120px" }}
                    />

                    <img
                      src="/images/profile/box.svg"
                      alt="default"
                      className="bg-secondary"
                      style={{ height: "120px", width: "120px" }}
                    />

                    <img
                      src="/images/profile/box.svg"
                      alt="default"
                      className="bg-secondary"
                      style={{ height: "120px", width: "120px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="card-footer text-center">
                <button
                  className={`btn btn-light rounded-5 ${style.btn}`}
                  type="submit"
                >
                  Upload Photo
                </button>
              </div>
            </div>

            <div className="card mb-5">
              <div className="container">
                <div className="card-header m-2">
                  <h5>Description</h5>
                </div>

                <div className="card-body">
                  <div className="card">
                    <div className="card-header bg-transparent">
                      <img src="/images/profile/option.svg" alt="option" />
                    </div>
                    <div
                      className="card-body"
                      style={{ height: "230px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary rounded-5"
                style={{ width: "100px" }}
                type="submit"
              >
                Sale
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const profile = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/1`);
  const convertData = profile.data;

  // const editProfile =await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/users/update/1`)

  return {
    props: convertData, // will be passed to the page component as props
  };
}
