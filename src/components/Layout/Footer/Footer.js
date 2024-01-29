import React from "react";
import img from "../../../../public/logo.png";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-deepsea">
      <div className="container py-4">
        <div className="text-light text-center text-16px p-4">
          <span style={{ color: "#FFCD00" }}>Completely Confidential:</span> We
          have no access to your personal information, reviews or preferences.
          Everything that you share in the app belongs to you.
        </div>
      </div>
      <div className="container mt-4 line1">
        <div className="row mt-4">
          <div className="col-6 ">
            <div className="row p-3 mt-4">
              <div className="col-lg-2">
                <Image src={img} width={48} height={48} />
              </div>
              <div className="col-lg-8 text-light text-start align-middle my-auto">
                Vaster
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className="mb-2" style={{ color: "#FFCD00" }}>
              Info
            </div>
            <div className="text-light">Services</div>
            <div className="text-light">Press</div>
            <div className="text-light">Resources</div>
            <div className="text-light">Investors</div>
            <div className="text-light">Brands & Licence Producers</div>
          </div>
          <div className="col-3 ">
            <div className="mb-2" style={{ color: "#FFCD00" }}>
              CONTACT
            </div>
            <div className="text-light text-wrap">info@vasterapp.com</div>
            <div className="row text-light my-2">
              <div className="col-lg-3 ">
                <div className="box1 d-flex justify-content-center align-items-center">
                  <FaInstagram size={20} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box1 d-flex justify-content-center align-items-center">
                  <FaFacebook size={20} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box1 d-flex justify-content-center align-items-center">
                  <FaTwitter size={20} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box1 d-flex justify-content-center align-items-center">
                  <FaLinkedinIn size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row py-3 justify-content-evenly">
          <div className="col-lg-6 ">
            <button className="btn-first">REQUEST BETA</button>
          </div>
          <div className="col-lg-6 ">
            <div className="row" style={{ color: "#0E85AB" }}>
              <div className="col-4">FAQ</div>
              <div className="col-4">PRIVACY POLICY</div>
              <div className="col-4">TERMS & CONDITIONS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
