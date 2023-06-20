import React from "react";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import ContextDropdownProvider from "../Store/context/ContextDropdown/ContextDropdown";
import TopHeader from "./TopHeader/TopHeader";

export default function BaseLayout({ children }) {
  return (
    <>
    <ContextDropdownProvider>
      <TopHeader/>
      <Header />
      <main>{children}</main>
      <Footer />
      </ContextDropdownProvider>
    </>
  );
}
