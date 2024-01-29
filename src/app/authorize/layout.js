import Footer from "@/components/Layout/Footer/Footer";
import React from "react";

export default function AuthorizeLayout({ children }) {
  return (
    <div>
      <section>{children}</section>
      <Footer />
    </div>
  );
}
