import React from "react";
import styles from "@/styles/components/LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div>
      <div className={styles.allForm}>
        <input
          type="text"
          className={`form-control ${styles.form}`}
          id="email-input"
          placeholder="Email"
          style={{ marginTop: "40px" }}
        />
      </div>
      <div className={styles.allForm}>
        <input
          type="password"
          className={`form-control ${styles.form}`}
          id="password-input"
          placeholder="Password"
          style={{ marginTop: "20px" }}
        />
      </div>
    </div>
  );
};

export default LoginForm;
