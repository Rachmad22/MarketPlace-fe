import React, { useEffect, useState } from "react";
import blanjaLogo from "public/images/blanja-logo.svg";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Login.module.scss";
import LoginForm from "@/components/molecules/LoginForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as profileReducer from "@/stores/reducer/profile";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const data = useSelector((state) => state.login);
  const loginSubmit = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
      .then((res) => {
        setIsLoading(false);
        setSuccess(res?.data?.message);
        setIsError(false);
        setIsSuccess(true);

        dispatch(profileReducer.setProfile(res?.data?.data));
        dispatch(profileReducer.setToken(res?.data?.token));

        setTimeout(() => {
          router.replace("/");
        }, 1700);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err?.response?.data?.message);
        setIsSuccess(false);
        setIsError(true);
      });
  };
  return (
    <div>
      <Head>
        <title>Login | Blanja</title>
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
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
                <h4 className={`${styles.pleaseRegister} mb-4`}>
                  Please login with your account
                </h4>
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

              <div className={`${styles.loginForm}`}>
                <div>
                  <LoginForm />
                </div>
                {/* <Link href="/forgot" style={{ color: "#DB3022" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      textAlign: "end",
                      marginRight: "42px",
                      paddingTop: "9px",
                    }}
                  >
                    Forgot password?
                  </p>
                </Link> */}
              </div>
              <div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "75%" }}
                    onClick={loginSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "14px",
                    textAlign: "center",
                  }}
                >
                  Don&apos;t have a Blanja account?{" "}
                  <Link href="/auth/register" style={{ color: "#DB3022" }}>
                    Register
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

export default Login;
