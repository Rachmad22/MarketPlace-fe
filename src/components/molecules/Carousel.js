import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import category from "public/images/category.svg";
import Image from "next/image";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="row no-gutters">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <h3 className="text-center">
          <span className="heading float-left w-100">Featured Products</span>
        </h3>
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            <div className="item float-left w-100">
              <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                <a href="/">
                  <a className="product float-left">
                    <span className="image text-center">
                      <Image src={category} alt="product" />
                    </span>
                    <span className="w-100 text-center mt-1 ">
                      <h5 className="brand text-capitalize float-left">
                        Product
                      </h5>
                      <span className="name">Product</span>
                      <strong className="itemPrice p-0">Price: 40.0</strong>
                    </span>
                  </a>
                </a>
              </div>
            </div>
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default Slider;
