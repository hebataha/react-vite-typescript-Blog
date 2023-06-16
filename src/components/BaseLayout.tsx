import React from "react";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import DropdownContext from "./Store/AuthContext/DropdownContext";

export default function BaseLayout({ children }) {
  return (
    <>
    <DropdownContext.Provider value={{isIn:true, }
     
    }>
      <Header />
      <main>{children}</main>
      <Footer />
      </DropdownContext.Provider>
    </>
  );
}
