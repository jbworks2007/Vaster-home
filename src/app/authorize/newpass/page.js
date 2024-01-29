"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewpassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const setNewpasswordClicked = () => {
    setNewpassword(true);
  };

  return (
    <>
      <div className="container">
        <div className="center">
          <div className="main-title-box">
            <div className="main-title-text text-start">NEW</div>
            <div className="main-title-text text-end">PASSWORD</div>
          </div>
        </div>

        <div className="bgImg">
          <div className="text-center mb-5 ">
            {!newPassword ? (
              <div>
                <form className="">
                  <div>
                    <label
                      htmlFor="email"
                      className="fs-14"
                      style={{ display: "block", marginBottom: "5px" }}
                    >
                      {" "}
                      EMAIL
                    </label>

                    <input
                      id="email"
                      className="input-field"
                      type="email"
                      placeholder="Email"
                    />

                    <div>
                      <div>
                        <label className="fs-14">SET NEW PASSWORD</label>
                      </div>
                      <div>
                        <input
                          className="input-field"
                          placeholder="New Password"
                          value={password}
                          type={passwordVisible ? "text" : "password"}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <span onClick={togglePasswordVisibility}>
  {passwordVisible ? <FaEyeSlash /> : <FaEye />} 
</span> */}
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  className="btn btn-mango mt-5 "
                  type="submit"
                  style={{ width: "50%", padding: "0px" }}
                >
                  <div className="d-flex justify-content-center align-items-center ">
                    <div onClick={setNewpasswordClicked}> SET NEW PASSWORD</div>
                    <div className="mx-3">
                      {" "}
                      <FaArrowRightLong />{" "}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="vh-50" style={{ marginTop: "80px" }}>
                <div className="fs-14">
                  {" "}
                  OK Great! Your password has been reset.
                </div>
                <div
                  className="btn btn-mango mt-5 "
                  style={{ width: "30%", padding: "0px" }}
                >
                  <div className="d-flex justify-content-center align-items-center ">
                    <Link className="tdn" href="/authorize/login">
                      <div> Go To Login</div>
                    </Link>
                    <div className="mx-3">
                      {" "}
                      <FaArrowRightLong />{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
