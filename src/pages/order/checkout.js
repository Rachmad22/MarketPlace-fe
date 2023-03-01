/* eslint-disable @next/next/no-img-element */
import React from "react";
import jacket from "public/images/jacket.png";
import styles from "@/styles/pages/order/Checkout.module.scss";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export default function Checkout() {
  return (
    <div>
      <Navbar />

      <div className={styles.main}>
        <div className="container ">
          <div className={styles.content}>
            <h2>Checkout</h2>
            <div class={`row ${styles.bot}`}>
              <div class="col-8">
                <div
                  class={`row justify-content-between align-items-center ${styles.all}`}
                >
                  {/* <div class="col-5">
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
                  </div> */}
                  <section id="address">
                    <div className={`card mb-5 ${styles.card}`}>
                      <div className="card-header">
                        <h3>Choose another address</h3>
                        <p>Manage your shipping address</p>
                      </div>
                      <div className="container">
                        <div className="card-body">
                          <button
                            type="button"
                            className={`btn btn-light ${styles.dashed}`}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Add New Address
                          </button>

                          {/* <!-- Modal --> */}
                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                              <div class="modal-content">
                                <div class="modal-header mx-auto">
                                  <h1
                                    class="modal-title fs-3"
                                    id="exampleModalLabel"
                                  >
                                    Add New Address
                                  </h1>
                                </div>
                                <div class="modal-body">
                                  <div className="row">
                                    <div className="col-12">
                                      <div class="mb-3">
                                        <label
                                          for="exampleFormControlTextarea1"
                                          class="form-label"
                                        >
                                          Save address as (ex: home address,
                                          office address)
                                        </label>
                                        <input
                                          class="form-control"
                                          id="exampleFormControlTextarea1"
                                          rows="3"
                                          placeholder="Home"
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
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class={`btn btn-outline-dark rounded-5 ${styles.submit}`}
                                        data-bs-dismiss="modal"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        class={`btn btn-primary rounded-5 ${styles.submit}`}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={`card mt-5 ${styles.address}`}>
                            <div className="container m-2">
                              <h5>Andreas Jane</h5>
                              <p>
                                Perumahan Sapphire Mediterania, Wiradadi, Kec.
                                Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                                [Tokopedia Note: blok c 16] Sokaraja, Kab.
                                Banyumas, 53181
                              </p>
                              <Link
                                href="#"
                                className="text-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                Change Address
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class={`row align-items-center ${styles.item}`}>
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
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <button class={styles.but} disabled>
                          -
                        </button>
                      </div>
                      <div class={`col ${styles.num}`}>
                        <p>1</p>
                      </div>
                      <div class={`col ${styles.plus}`}>
                        <button class={styles.but}>+</button>
                      </div>
                    </div>
                  </div>
                  <div class={`col ${styles.price}`}>
                    <p>$ 20.0</p>
                  </div>
                </div>
                <div class={`row align-items-center ${styles.item}`}>
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
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <button class={styles.but} disabled>
                          -
                        </button>
                      </div>
                      <div class={`col ${styles.num}`}>
                        <p>1</p>
                      </div>
                      <div class={`col ${styles.plus}`}>
                        <button class={styles.but}>+</button>
                      </div>
                    </div>
                  </div>
                  <div class={`col ${styles.price}`}>
                    <p>$ 20.0</p>
                  </div>
                </div>
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
                      <div class="col-4">
                        <p class={styles.cost}>$ 40.0</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button class={`btn ${styles.buy}`}>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
