import React from "react";
import blanja from "public/images/blanja-logo.svg";
import sort from "public/images/sort.svg";
import styles from "@/styles/components/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.main}>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <Link href="/">
                <img src={blanja.src} className={styles.blanja} />
              </Link>
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
              <Link href="/auth/register">
                <button className={`btn ${styles.login}`}>Register</button>
              </Link>
              <Link href="/auth/login">
                <button className={`btn ${styles.login}`}>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
