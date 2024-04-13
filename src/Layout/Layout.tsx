import React from "react";
import NavBar from "../Nav/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <div className=" flex flex-col  ">
        <NavBar />
        <main className="mt-0  lg:mt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
