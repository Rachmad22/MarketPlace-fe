import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import backgroundCrsl from "../../public/images/blanja-logo.svg";
import backgroundCrsl2 from "../../public/images/sort.svg";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import CardProduct from "@/components/molecules/CardProduct";
import Slider from "@/components/molecules/Carousel";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | Blanja</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        {/* <div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={backgroundCrsl.src} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img
                  src={backgroundCrsl2.src}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img src={backgroundCrsl.src} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
        <div className="container">
          <Slider />
          <div className="container">
            <h2 className="mt-5">New</h2>
            <p>You&apos;ve never seen it before</p>
            <div className="row" style={{ gap: "3.5rem !important" }}>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
            </div>
          </div>
          <div className="container">
            <h2 className="mt-5">Popular</h2>
            <p>You&apos;ve never seen it before</p>
            <div className="row" style={{ gap: "3.5rem !important" }}>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
              <div style={{ flex: "0 0 auto", width: "15.5%" }}>
                <CardProduct />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
