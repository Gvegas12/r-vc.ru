import React from "react";
import Header from "../sections/Header";
import { Outlet } from "react-router-dom";
import Nav from "../sections/Nav";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="d-flex">
            <Nav className="left-wrapper" />
            <div className="content middle-wrapper">
              <Outlet />
            </div>
            <aside className="right-wrapper">aside</aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
