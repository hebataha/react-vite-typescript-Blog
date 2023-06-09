import React from "react";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
