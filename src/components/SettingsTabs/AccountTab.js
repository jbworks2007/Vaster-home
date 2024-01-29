import React from "react";
import Image from "next/image";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";

export default function AccountTab() {
  return (
    <div>
      <div className="my-5">
        <div className="d-flex gap-4">
          <div className="">
            <IoMdRadioButtonOn size={30} />
          </div>
          <div className="">
            <div className="fw-400 fs-20">jannet@allnations.com</div>
            <div className="mt-2">
              <span className=" fw-400 fs-18 text-sec">
                Primary Account &nbsp;&nbsp;
              </span>
            </div>
          </div>
          <div>
            <button className="btn btn-email">RESET PASSWORD</button>
          </div>
        </div>
      </div>
      <div className="divider-two"></div>
      <div className="my-5">
        <div className="d-flex gap-4">
          <div className="">
            <MdModeEdit size={30} />
          </div>
          <div className="">
            <div className="fw-400 fs-20">Profile logo</div>
            <div className="mt-2">
              <span className=" fw-400 fs-18 text-sec">
                Primary Account &nbsp;&nbsp;
              </span>
            </div>
          </div>
          <div className="">
            <button className="btn btn-email">UPLOAD IMAGE</button>
          </div>
        </div>
      </div>
      <div className="divider-two"></div>
    </div>
  );
}
