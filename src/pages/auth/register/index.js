import React from "react";
import blanjaLogo from "public/images/blanja-logo.svg";
import Head from "next/head";
import Image from "next/image";
import styles from '@/styles/pages/Register.module.scss'


const Register = () => {
  return (
    <div>
      <Head>
        <title>Register | Blanja</title>
      </Head>

      <main>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div>
              <div>
                <Image className="d-flex justify-content-center" src={blanjaLogo} alt="Logo" />
                <h2>Please sign up with your account</h2>
              </div>
              <div>
                <button type="button" className="btn btn-primary">
                  Customer
                </button>
                <button type="button" className="btn btn-primary">
                  Seller
                </button>
              </div>
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="password-input"
                    placeholder="Type your name..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
