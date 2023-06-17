import React from "react";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import ContextDropdownProvider from "../Store/context/ContextDropdown/ContextDropdown";

export default function BaseLayout({ children }) {
  return (
    <>
    <ContextDropdownProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      </ContextDropdownProvider>
    </>
  );
}
