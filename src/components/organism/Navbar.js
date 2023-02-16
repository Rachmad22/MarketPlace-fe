import React from "react";
import blanja from "public/images/blanja-logo.svg";
import sort from "public/images/sort.svg";
import styles from "@/styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <div className={styles.main}>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <img src={blanja.src} className={styles.blanja} />
            </div>
            <div className="col-6">
              <form className="d-flex" role="search">
                <input
                  className={`form-control ${styles.search}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className={`btn ${styles.sort}`}>
                  <img src={sort.src} />
                </button>
                <button className={`btn ${styles.submit}`}>Search</button>
              </form>
            </div>
            <div className="col">
              <button className={`btn ${styles.login}`}>Sign Up</button>
              <button className={`btn ${styles.login}`}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
