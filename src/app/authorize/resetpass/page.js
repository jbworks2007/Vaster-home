"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Backendless from "backendless";
import { useState } from "react";
import commonToasts from "../../../components/Misc/CommonToast";
import { Toaster } from "react-hot-toast";
const page = () => {
  const [email, setEmail] = useState("");
  const [resetClicked, setResetClicked] = useState(false);

  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY
  );

  const resetButtotClicked = async () => {
    if (!email) {
      commonToasts.errorToast("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      commonToasts.errorToast("Please enter a valid email address");
      return;
    }

    try {
      const user = await Backendless.UserService.restorePassword(email);
      setResetClicked(true);
    } catch (error) {
      console.log(error.message);
      commonToasts.errorToast(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="container mt-5">
        <div className="center">
          <div className="main-title-box text-center">
            <div className="main-title-text text-start">RESET </div>
            <div className="main-title-text ">LOGIN</div>
          </div>
        </div>

        <div className="bgImg">
          {resetClicked ? (
            <div style={{ padding: "150px" }}>
              <div className="text-center my-5">
                OK Great! We have sent a password reset link to your email.
              </div>
              <div className="text-center">
                <div
                  className="btn btn-mango "
                  type="submit"
                  style={{ width: "auto", padding: "0px" }}
                >
                  <Link className="tdn" href="/authorize/login">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ color: "#003E52" }}
                    >
                      <div className="ms-3"> Go To Login </div>

                      <div className="mx-2">
                        {" "}
                        <FaArrowRightLong />{" "}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: "150px" }}>
              <form className="text-center">
                <label
                  htmlFor="email"
                  className="fs-14"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    marginRight: "43%",
                  }}
                >
                  {" "}
                  EMAIL
                </label>

                <input
                  id="email"
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              <div>
                <div className="text-center my-5">
                  We will contact you with your password reset link
                </div>
                <div className="text-center">
                  <div
                    className="btn btn-mango "
                    type="submit"
                    style={{ width: "auto", padding: "0px" }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center mx-3"
                      style={{ color: "#003E52" }}
                    >
                      <div onClick={resetButtotClicked}> RESET PASSWORD </div>
                      <div className="mx-2">
                        <FaArrowRightLong />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
