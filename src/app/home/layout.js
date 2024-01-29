"use client";
import TopBar from "@/components/Layout/Header/TopBar";
import HomeSidebar from "@/components/Sidebar/HomeSidebar";
import { useState, useEffect } from "react";

export default function HomeLayout({ children }) {
  const [show, setShow] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 830) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="bg-shadeblue">
      <TopBar />
      <HomeSidebar visible={show} />
      <section className="sub-section">{children}</section>;
    </div>
  );
}
