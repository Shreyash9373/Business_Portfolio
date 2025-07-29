import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../ui/BackToTop";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
