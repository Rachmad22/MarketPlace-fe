import React from "react";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import styles from "@/styles/pages/order/MyBag.module.scss";
import blanja from "public/images/blanja-logo.svg";

export default function MyBag() {
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
                  <div class="col-6">1 of 3</div>
                  <div class="col">2 of 3 (wider)</div>
                  <div class="col">3 of 3</div>
                </div>
              </div>
              <div class="col-4">col-4</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
