import React, { useState } from "react";
import blanjaLogo from "public/images/blanja-logo.svg";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Register.module.scss";
import Link from "next/link";
import RegisterForm from "@/components/molecules/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import * as registerReducer from "@/stores/reducer/register";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(true);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector((state) => state.register);

  const router = useRouter();

  const submitRegister = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, data)
      .then((res) => {
        setIsLoading(false);
        setSuccess(res?.data?.message);
        setIsError(false);
        setIsSuccess(true);

        setTimeout(() => {
          router.replace("/auth/login");
        }, 1700);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err?.response?.data?.message);
        setIsError(true);
        setIsSuccess(false);
      });
  };

  return (
    <div>
      <Head>
        <title>Register | Blanja</title>
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "2.5rem" }}
          >
            <div>
              <div>
                <Link href="/">
                  <Image
                    src={blanjaLogo}
                    alt="Logo"
                    className={styles.registerLogo}
                  />
                </Link>
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
                    dispatch(registerReducer.setRegisterRole(true));
                    dispatch(registerReducer.setRegisterStore(null));
                  }}
                >
                  Customer
                </button>
                <button
                  type="button"
                  className={`btn ${!form ? styles.activeButton : ""}`}
                  onClick={() => {
                    setForm(false);
                    dispatch(registerReducer.setRegisterRole(false));
                  }}
                >
                  Seller
                </button>
              </div>

              {isSuccess === true ? (
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

              {isError === true ? (
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
              <div>
                <RegisterForm form={form} />
              </div>
              <div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "75%", border: "40px" }}
                    onClick={() => {
                      submitRegister();
                      setIsLoading(true);
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Register"}
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
