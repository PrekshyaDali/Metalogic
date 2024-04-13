import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

export default function Layout({children}) {
  return (
    <>
      <div className = "w-full h-[100vh] flex flex-col  ">
        <NavBar />
        <main className = "h-[80vh]">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
