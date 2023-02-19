import React from "react";
import styles from "@/styles/components/RegisterForm.module.scss";
import { useDispatch } from "react-redux";
import * as registerReducer from "@/stores/reducer/register";

const RegisterForm = (props) => {
  const dispatch = useDispatch();

  // dispatch(registerReducer.setRegister({ register: true }));

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
          onChange={(e) => {
            dispatch(registerReducer.setRegisterName(e.target.value));
          }}
        />
      </div>
      <div className={styles.allForm}>
        <input
          type="text"
          className={`form-control ${styles.form}`}
          id="email-input"
          placeholder="Email"
          style={{ marginTop: "20px" }}
          onChange={(e) => {
            dispatch(registerReducer.setRegisterEmail(e.target.value));
          }}
        />
      </div>
      <div className={styles.allForm}>
        <input
          type="tel"
          className={`form-control ${styles.form}`}
          id="phone-input"
          placeholder="Phone number"
          style={{ marginTop: "20px" }}
          onChange={(e) => {
            dispatch(registerReducer.setRegisterPhone(e.target.value));
          }}
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
            onChange={(e) => {
              dispatch(registerReducer.setRegisterStore(e.target.value));
            }}
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
          onChange={(e) => {
            dispatch(registerReducer.setRegisterPassword(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
