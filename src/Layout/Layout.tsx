import React from "react";
import NavBar from "../Nav/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import MetaTag from "../components/MetaTag";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col bg-[#D9D9D9] w-full">
 
        <NavBar />
        <main className="mt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
