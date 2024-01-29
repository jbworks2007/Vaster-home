import React from "react";
import { ImWrench } from "react-icons/im";
import { FaRegBell, FaBookmark } from "react-icons/fa";

export default function HistoryTab() {
  return (
    <div>
      <div className="my-5">
        <div className="d-flex gap-4">
          <div className="">
            <ImWrench size={30} />
          </div>
          <div className="">
            <div className="fw-400 fs-20">25 Product's edited</div>
            <div className="my-3 fw-400 fs-18 text-sec">
              You have 5/20 products live in the Vaster app. To change this
              contact our support team. support@vasterapp.com
            </div>
          </div>
        </div>
      </div>
      <div className="divider-two"></div>
    </div>
  );
}
