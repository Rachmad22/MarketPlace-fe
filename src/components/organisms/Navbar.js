/* eslint-disable @next/next/no-img-element */
import React from "react";
import blanja from "public/images/blanja-logo.svg";
import shop from "public/images/shop.svg";
import mail from "public/images/mail.png";
import bell from "public/images/bell.jpg";
import profileFoto from "public/images/profile.png";
import sort from "public/images/sort.svg";
import styles from "@/styles/components/Navbar.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import * as profileReducer from "../../stores/reducer/profile.js";

const Navbar = () => {
  const data = useSelector((state) => state.profile);

  return (
    <>
      <div className={`shadow bg-light fixed-top ${styles.main}`}>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <Link href="/">
                <img
                  src={blanja.src}
                  className={styles.blanja}
                  alt="logo blanja"
                />
              </Link>
            </div>
            <div className="col-6">
              <div className="row">
                <input
                  className={`form-control ${styles.search}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className={`btn ${styles.sort}`}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src={sort.src} />
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class={`modal-content ${styles.content}`}>
                      <div class={`modal-header ${styles.header}`}>
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Filter
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class={`modal-body ${styles.body}`}>
                        <div class={`dropdown ${styles.down}`}>
                          <button
                            class={`btn dropdown-toggle ${styles.drop}`}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Colors
                          </button>
                          <ul class="dropdown-menu" style={{ width: "100%" }}>
                            <li>
                              <a class="dropdown-item" href="#">
                                Black
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Red
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Blue
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class={`mb-5 ${styles.size}`}>
                          <h5>Sizes</h5>
                          <div class="row">
                            <div class="col-2">
                              <button class={`btn ${styles.butsize}`}>
                                XS
                              </button>
                            </div>
                            <div class="col-2">
                              <button class={`btn ${styles.butsize}`}>S</button>
                            </div>
                            <div class="col-2">
                              <button class={`btn ${styles.butsize}`}>M</button>
                            </div>
                            <div class="col-2">
                              <button class={`btn ${styles.butsize}`}>L</button>
                            </div>
                            <div class="col-2">
                              <button class={`btn ${styles.butsize}`}>
                                XL
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class={styles.category}>
                          <h5>Category</h5>
                          <div class="row row-cols-auto">
                            <div class="col">
                              <button class={`btn ${styles.butcat}`}>
                                All
                              </button>
                            </div>
                            <div class="col">
                              <button class={`btn ${styles.butcat}`}>
                                Women
                              </button>
                            </div>
                            <div class="col">
                              <button class={`btn ${styles.butcat}`}>
                                Men
                              </button>
                            </div>
                            <div class="col">
                              <button class={`btn ${styles.butcat}`}>
                                Boys
                              </button>
                            </div>
                            <div class="col">
                              <button class={`btn ${styles.butcat}`}>
                                Girl
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="mt-5 dropdown">
                          <button
                            class={`btn dropdown-toggle ${styles.drop}`}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Brand
                          </button>
                          <ul
                            class="dropdown-menu dropdown-menu-lg-end"
                            style={{ width: "100%" }}
                          >
                            <li>
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
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
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className={`btn ${styles.submit}`}>Search</button>
              </div>
            </div>
            {!data?.profile?.payload ? (
              <div className="col">
                <Link href="/auth/register">
                  <button className={`btn ${styles.login}`}>Register</button>
                </Link>
                <Link href="/auth/login">
                  <button className={`btn ${styles.login}`}>Login</button>
                </Link>
              </div>
            ) : (
              <div className="col">
                <button className="btn">
                  <Link href="/order">
                    <img src={shop.src} />
                  </Link>
                </button>
                <button className="btn">
                  <img src={bell.src} />
                </button>
                <button className="btn">
                  <img src={mail.src} />
                </button>
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={
                      data?.profile?.payload?.photo ||
                      "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg"
                    }
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="/auth/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
                {/* <Link href="/profile">
                  <button className="btn">
                    <img
                      src={
                        data?.profile?.payload?.photo ||
                        "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg"
                      }
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </button>
                </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
