import React, { useState } from "react";
import blanjaLogo from "public/images/blanja-logo.svg";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Register.module.scss";
import Link from "next/link";
import RegisterForm from "@/components/molecules/registerForm";

const Register = () => {
  const [form, setForm] = useState(true);

  return (
    <div>
      <Head>
        <title>Register | Blanja</title>
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="d-flex justify-content-center mt-4">
            <div>
              <div>
                <Image
                  src={blanjaLogo}
                  alt="Logo"
                  className={styles.registerLogo}
                />
                <h4 className={styles.pleaseRegister}>
                  Please register with your account
                </h4>
              </div>
              <div className={styles.button}>
                <button
                  type="button"
                  className={`btn ${form ? styles.activeButton : ""}`}
                  onClick={() => {
                    setForm(true);
                  }}
                >
                  Customer
                </button>
                <button
                  type="button"
                  className={`btn ${!form ? styles.activeButton : ""}`}
                  onClick={() => {
                    setForm(false);
                  }}
                >
                  Seller
                </button>
              </div>
              <div>
                <RegisterForm form={form} />
              </div>
              <div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "75%", border: "40px" }}
                  >
                    Register
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "14px",
                    textAlign: "center",
                  }}
                >
                  Already have a Blanja account?{" "}
                  <Link href="/auth/login" style={{ color: "#DB3022" }}>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
