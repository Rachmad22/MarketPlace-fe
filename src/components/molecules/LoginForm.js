import React from "react";
import styles from "@/styles/components/LoginForm.module.scss";
import { useDispatch } from "react-redux";
import * as login from "@/stores/reducer/login";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.allForm}>
        <input
          type="text"
          className={`form-control ${styles.form}`}
          id="email-input"
          placeholder="Email"
          style={{ marginTop: "15px" }}
          onChange={(e) => {
            dispatch(login.setLoginEmail(e.target.value));
          }}
        />
      </div>
      <div className={styles.allForm}>
        <input
          type="password"
          className={`form-control ${styles.form}`}
          id="password-input"
          placeholder="Password"
          style={{ marginTop: "20px" }}
          onChange={(e) => {
            dispatch(login.setLoginPassword(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default LoginForm;
