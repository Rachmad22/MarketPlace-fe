import React, { useEffect } from "react";
import blanjaLogo from "public/images/blanja-logo.svg";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Login.module.scss";
import LoginForm from "@/components/molecules/LoginForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const router = useRouter();

  useEffect(() => {
    let isLogin = getCookie("profile") && getCookie("token");
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const connect = await axios.post("/api/login", {
        email,
        password,
      });

      setIsLoading(false);
      setError(null);

      setCookie("isLogin", "true");
      setCookie("profile", JSON.stringify(connect?.data?.data));
      setCookie("token", connect?.data?.token);
      setSuccess("Login successful");

      setTimeout(() => {
        router.replace("/");
      }, 1700);
    } catch (error) {
      setIsLoading(false);
      setError(
        error?.response?.data?.messages ?? "Something wrong in our server"
      );
    }
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
            style={{ height: "100vh", marginTop: "4%" }}
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

              {success ? (
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

              {error ? (
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
