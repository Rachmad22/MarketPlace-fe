import React from "react";
import styles from "@/styles/components/RegisterForm.module.scss";

const RegisterForm = (props) => {
  const { form } = props;
  return (
    <div>
      <div className={styles.allForm}>
        <input
          type="text"
          className={`form-control ${styles.form}`}
          id="name-input"
          placeholder="Name"
          style={{ marginTop: "20px" }}
        />
      </div>
      <div className={styles.allForm}>
        <input
          type="text"
          className={`form-control ${styles.form}`}
          id="email-input"
          placeholder="Email"
          style={{ marginTop: "20px" }}
        />
      </div>
      <div className={styles.allForm}>
        <input
          type="tel"
          className={`form-control ${styles.form}`}
          id="phone-input"
          placeholder="Phone number"
          style={{ marginTop: "20px" }}
        />
      </div>
      {!form ? (
        <div className={styles.allForm}>
          <input
            type="text"
            className={`form-control ${styles.form}`}
            id="store-name-input"
            placeholder="Store name"
            style={{ marginTop: "20px" }}
          />
        </div>
      ) : null}
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

export default RegisterForm;
