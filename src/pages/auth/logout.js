import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import store from "@/stores";
import { useDispatch, useSelector } from "react-redux";
import * as profile from "@/stores/reducer/profile";
import { deleteCookie } from "cookies-next";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useSelector((state) => state);

  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    const isLogin = profileData?.profile?.payload;

    if (!isLogin) {
      router.replace("/auth/register");
    }
  }, []);

  useState(() => {

    setTimeout(() => {
      dispatch(profile.setProfile(null));
      dispatch(profile.setToken(null));
      deleteCookie("profile")
      deleteCookie("token")
      router.replace("/");
    }, 1500);
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Please wait...
      </h1>
    </div>
  );
};

export default Logout;
