import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import mainlogo from "../../../../public/LogoColor.png";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdSettings, IoMdStar } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import commonToasts from "@/components/Misc/CommonToast";
import Backendless from "backendless";
import { useRouter } from "next/navigation";
import {
  IoClose,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from "react-icons/io5";

export default function TopBar() {
  const router = useRouter();
  const [showmenu, setShowmenu] = useState(false);
  const [showpublisher, setShowPublisher] = useState(false);
  const [desc, setDesc] = useState(false);
  const [liveproducts, setLiveProducts] = useState(0);
  const [totalproducts, setTotalProducts] = useState(0);

  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY
  );

  async function logoutUser() {
    try {
      await Backendless.UserService.logout();
      commonToasts.successToast("logout Successfull");
      router.replace("/authorize/login");
    } catch (error) {
      commonToasts.errorToast(error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let liveproducts = JSON.parse(localStorage.getItem("liveproducts"));
      let totalproducts = JSON.parse(localStorage.getItem("totalproducts"));
      console.log("liveproducts =>", liveproducts);
      if (liveproducts && totalproducts) {
        setLiveProducts(liveproducts);
        setTotalProducts(totalproducts);
      }
    }, 5000);
  }, []);

  return (
    <div className="sticky-top">
      <div className="position-relative">
        <div className="row">
          <div className="col-lg-4">
            <div className="mx-5">
              <Image alt="logo" src={mainlogo} />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="d-flex justify-content-end gap-2">
              <div className="">
                <button className="btn btn-topwhite">ADD PRODUCT +</button>
              </div>
              <div className="">
                <div className="skudispalyer">
                  <div className="red-dot" />
                  <div className="mx-2">
                    <div className="fs-16 text-end">{`${liveproducts}/${totalproducts}`}</div>
                    <div className="fs-10">LIVE SKUS</div>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  className="btn btn-topmango"
                  onClick={() => setShowPublisher(!showpublisher)}
                >
                  <div className="mx-4 d-flex justify-content-between">
                    <span>NO NEW CHANGES</span>
                    {showpublisher ? (
                      <FaAngleDown size={20} />
                    ) : (
                      <FaAngleRight size={20} />
                    )}
                  </div>
                </button>
              </div>
              <div className="">
                <button
                  className="btn btn-hamburger"
                  onClick={() => setShowmenu(!showmenu)}
                >
                  <HiOutlineMenu size={36} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ display: showmenu ? "block" : "none" }}>
          <div className="position-absolute hamburgermenu">
            <div className="user-info">
              <div className="user-name">Hello Janet</div>
              <div className="lp-name">Lp Name</div>
            </div>
            <Link
              className="tdn"
              href="/home/settings"
              onClick={() => setShowmenu(false)}
            >
              <div className="btn-ham">
                <IoMdSettings size={20} className="mx-3" />
                Settings
              </div>
            </Link>
            <div className="btn-ham" onClick={logoutUser} role="button">
              <RiLogoutCircleLine size={20} className="mx-3" />
              Logout
            </div>
          </div>
        </div>
        <div
          className="publisher"
          style={{ display: showpublisher ? "block" : "none" }}
        >
          <div className="p-4">
            <div className="d-flex justify-content-between">
              <div className="fw-500 fs-22">Publish changes</div>
              <button
                className="btn-none"
                onClick={() => setShowPublisher(false)}
              >
                <IoClose size={30} />
              </button>
            </div>
          </div>
          <div className="divider-two" />
          <div className="p-4 publisher-text">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <IoMdStar size={30} className="mb-1" />
                <span className="mx-4">QWEST</span>
              </div>
              <div className="">
                <button className="btn btn-deepsea mx-4">
                  Publish changes
                </button>
                <span role="button" onClick={() => setDesc(!desc)}>
                  {desc ? (
                    <IoChevronUpOutline size={20} />
                  ) : (
                    <IoChevronDownOutline size={20} />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="divider-two" />
          <div
            className="p-4 desc-text"
            style={{ display: desc ? "block" : "none" }}
          >
            <div className="my-2 ps-5">Change 1</div>
            <div className="my-2 ps-5">Change 2</div>
          </div>
          <div className="divider-two" />
          <div className="p-4">
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-cancel">cancel</button>
              <button className="btn btn-deepsea">Publish all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
