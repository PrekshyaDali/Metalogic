import React from "react";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className=" w-full top-0 fixed z-50 h-16 bg-transparent backdrop-blur-md  border-2 pl-3 pr-3 items-center flex justify-between">
      <div className="h-16 w-56">
        <img className="object-contain" src="/img/Logo.png" alt="" />
      </div>
      <div>
        <ul className = "flex space-x-8 font-medium text-[17px]">
          <li>Home</li>
          <li>Services</li>
          <li>Career</li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <Button name = "Get in Touch"></Button>
      </div>
    </nav>
  );
}
