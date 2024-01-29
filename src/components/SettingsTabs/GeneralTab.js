import React from "react";
import Image from "next/image";
import { ImWrench } from "react-icons/im";
import { FaRegBell, FaBookmark } from "react-icons/fa";

import img from "../../../public/LogoColor.png";

export default function GeneralTab() {
  return (
    <div>
      <div className="my-5">
        <div className="d-flex gap-4">
          <div className="">
            <ImWrench size={30} />
          </div>
          <div className="">
            <div className="fw-400 fs-20">Live Products</div>
            <div className="my-3 fw-400 fs-18 text-sec">
              You have 5/20 products live in the Vaster app. To change this
              contact our support team. support@vasterapp.com
            </div>
          </div>
        </div>
      </div>
      <div className="divider-two"></div>
      <div className="my-5">
        <div className="d-flex gap-4">
          <div className="">
            <FaRegBell size={30} />
          </div>
          <div className="">
            <div className="fw-400 fs-20">Support</div>
            <div className="">
              <span className="my-3 fw-400 fs-18 text-sec">
                Contact support with any inquiries. We will get back to you
                within 24 hours &nbsp;&nbsp;
              </span>
              <span>
                <button className="btn btn-email">EMAIL US</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-two"></div>
      <div className="my-5">
        <div className="d-flex gap-4">
          <div className="">
            <FaBookmark size={30} />
          </div>
          <div className="">
            <div className="fw-400 fs-20">Brands</div>
            <div className="">
              <span className="my-3 fw-400 fs-18 text-sec">
                You have 2 brands associated with your LP &nbsp;&nbsp;
              </span>
              <span>
                <button className="btn btn-email">ADD A NEW BRAND</button>
              </span>
            </div>
            <div className="my-3">
              <div className="d-flex align-items-center gap-4">
                <div className="round-icon-70">
                  <Image src={img} alt="brand-image" />
                </div>
                <div className="fw-400 fs-18 text-sec">brand name mapping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
