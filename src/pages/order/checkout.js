import React from "react";
import jacket from "public/images/jacket.png";
import styles from "@/styles/pages/order/Checkout.module.scss";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";

export default function Checkout() {
  return (
    <>
      <Navbar />

      <div className={styles.main}>
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
                            <h5>Men's formal suit - Black</h5>
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
                            <h5>Men's formal suit - Black</h5>
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
    </>
  );
}
