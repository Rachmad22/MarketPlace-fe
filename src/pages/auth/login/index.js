import React from "react";
import blanjaLogo from "public/images/blanja-logo.svg";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Login.module.scss";
import LoginForm from "@/components/molecules/loginForm";
import Link from "next/link";

const Login = () => {
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
                <Image
                  src={blanjaLogo}
                  alt="Logo"
                  className={styles.registerLogo}
                />
                <h4 className={styles.pleaseRegister}>
                  Please login with your account
                </h4>
              </div>
              <div>
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
                  >
                    Login
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "14px",
                    textAlign: "center",
                  }}
                >
                  Don&apos;t have a Blanja account?
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
