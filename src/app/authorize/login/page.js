"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Backendless from "backendless";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import commonToasts from "@/components/Misc/CommonToast";

export default function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();

  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY
  );

  async function recordEvent(msg) {
    await Backendless.Data.of("Event_Logs")
      .save({ event_message: `${msg}` })
      .then(function (savedObject) {
        commonToasts.successToast("Event recorded successfully!");
      })
      .catch(function (error) {
        commonToasts.errorToast(error);
      });
  }

  async function handleLogin() {
    if (!email || !password) {
      commonToasts.errorToast("Email and password are required");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      commonToasts.errorToast("Please enter a valid email address");
      return;
    }
    try {
      const user = await Backendless.UserService.login(email, password, true);
      console.log("USer details-> ", user);
      recordEvent("User Logged in");
      commonToasts.successToast("Login Successfull");
      router.replace("/home");
    } catch (error) {
      commonToasts.errorToast(error.message);
    }
  }

  return (
    <>
      <Toaster />
      <div className="container">
        <div className="center">
          <div className="main-title-box">
            <div className="main-title-text text-start">LICENCE</div>
            <div className="main-title-text text-end">PROVIDERS</div>
            <div className="main-title-text text-start">LOGIN PORTAL</div>
          </div>
        </div>

        <div className="bgImg ptb-50">
          <div className="text-center mb-5 ">
            <form className="">
              <label
                htmlFor="email"
                className="fs-14"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  marginRight: "44%",
                }}
              >
                {" "}
                EMAIL
              </label>
              <input
                id="email"
                className="input-field"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />

              <div>
                <div>
                  <label className="fs-14 mt-2" style={{ marginRight: "40%" }}>
                    {" "}
                    PASSWORD
                  </label>
                </div>

                <input
                  className="input-field"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>

              <div
                className="btn btn-mango mt-5 "
                type="submit"
                style={{ width: "50%", padding: "0px" }}
                onClick={handleLogin}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ color: "#003E52" }}
                >
                  <div className="mx-2">Login</div>
                  <div>
                    {" "}
                    <FaArrowRightLong />{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="line" />
            <div className="mx-3"> OR </div>
            <div className="line" />
          </div>

          <div
            className="d-flex justify-content-center align-items-center mt-3 fs-14"
            style={{ marginBottom: "70px" }}
          >
            <Link className="tdn" href="/authorize/resetpass">
              <div className="btn btn-white mx-4">FORGOT PASSWORD</div>
            </Link>
            <Link className="tdn" href="#">
              <div className="btn btn-white mx-4"> SIGN UP</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
