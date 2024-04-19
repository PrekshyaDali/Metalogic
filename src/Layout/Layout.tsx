import React from "react";
import NavBar from "../Nav/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import MetaTag from "../components/MetaTag";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  const location = useLocation();

  // Define metadata for each page
  const pageMetadata = {
    "/": {
      title: "MetaLogic Home Page",
      description: "Welcome to MetaLogic Software Pvt. Ltd.",
      keywords:
        "web development, responsive design, custom website, web application",
      url: "https://metalogic.com.np/",
      image: "https://metalogic.com.np/meta-image.jpg",
    },
  };

  // Get metadata for the current page
  const currentPageMetadata = pageMetadata[location.pathname];

  return (
    <>
      <div className="flex flex-col bg-[#D9D9D9] w-full">
        <ToastContainer></ToastContainer>
        <NavBar />
        <main className="mt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
