import React, { useState } from "react";
import Button from "../components/Button";
import HamburgerMenu from "./HamburgerMenu";


export default function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Career", link: "/career" },
    { name: "Blogs", link: "/blogs" },
    { name: "About Us", link: "/about-us" },
  ];

  const hamburgerClickHandler = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <nav className="fixed bg-pink-200 hidden lg:visible w-full top-0 z-50 h-16 bg-transparent backdrop-blur-md  border-2 pl-3 pr-3 items-center lg:flex lg:justify-between">
        <div className="h-16 w-56">
          <img className="object-contain" src="/img/Logo.png" alt="" />
        </div>
        <div>
          <ul className="flex space-x-8 font-medium text-[17px]">
            {navItems.map((item, index) => (
              <li
                key={index}
                name={item.name}
                className="cursor-pointer hover:text-purple-800 focus-visible:text-purple-900"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button name="Get in Touch"></Button>
        </div>
      </nav>
      <button
        onClick={hamburgerClickHandler}
        className="fixed lg:hidden right-3 top-3"
      >
        <img src="/img/hamburger.png" alt="Hamburger Menu" />
      </button>
      {isHamburgerOpen && (
        <HamburgerMenu
          setIsHamburgerOpen={setIsHamburgerOpen}
          navItems={navItems}
        />
      )}
    </>
  );
}
