import React from "react";
import blanjaLogo from "public/images/blanja-logo.svg";
import Head from "next/head";
import Image from "next/image";
import styles from '@/styles/pages/Register.module.scss'
import SellerRegister from "@/components/molecules/registerForm";
import Link from "next/link";


const Register = () => {
  return (
    <div>
      <Head>
        <title>Register | Blanja</title>
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="d-flex justify-content-center mt-5">
            <div>
              <div>
                <Image src={blanjaLogo} alt="Logo" className={styles.registerLogo}/>
                <h4 className={styles.pleaseRegister}>Please register with your account</h4>
              </div>
              <div className={styles.button}>
                <button type="button" className={`btn btn-primary ${styles.customerButton}`}>
                  Customer
                </button>
                <button type="button" className={`btn btn-primary ${styles.sellerButton}`}>
                  Seller
                </button>
              </div>
              <div>
                <SellerRegister />
              </div>
              <div>
                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary" style={{width: "75%", border: "40px"}}>
                    Register
                  </button>
                </div>
                <p style={{fontSize: "15px", marginTop: "14px", textAlign: "center"}}>Already have a Blanja account? <Link href="/auth/login" style={{color: "#DB3022"}}>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
