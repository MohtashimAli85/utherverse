import React from "react";
import NavBar from "../home/navbar";
function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
