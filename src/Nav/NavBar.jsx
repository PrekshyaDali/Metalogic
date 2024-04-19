import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import HamburgerMenu from "./HamburgerMenu";
import Headroom from "react-headroom";
import ContactFormModal from "../components/ContactFormModal";

export default function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsHamburgerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const getInTouchButton = (
    <Button onClick={() => setShowModal(true)} name="Get in Touch" />
  );

  return (
    <>
      <div className="relative w-full">
        <Headroom style={{ width: "100%" }} downTolerance={10} upTolerance={10}>
          <nav className="bg-pink-200 hidden lg:visible  top-0 z-50 h-16 bg-transparent backdrop-blur-md border-b-2 border-gray-300 pl-3 pr-3 items-center lg:flex lg:justify-between">
            <div className="h-16">
              <img
                className="object-contain h-full"
                src="/img/Logo.png"
                alt="Logo"
              />
            </div>
            <div>
              <ul className="flex space-x-8 font-semibold text-[17px]">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    name={item.name}
                    className="cursor-pointer box-content transition duration-500 hover:border-red-600 hover:border-b-4 border-b-4 border-transparent "
                  >
                    {item.name}
                  </li>
                  
                ))}
              </ul>
            </div>
            <div>
              {getInTouchButton} 
            </div>
          </nav>
        </Headroom>
        <div
          onClick={hamburgerClickHandler}
          className="absolute lg:hidden z-10 right-5 top-3"
        >
          <img src="/img/hamburger.png" alt="Hamburger Menu" />
        </div>
      </div>
      {isHamburgerOpen && (
        <HamburgerMenu
          setIsHamburgerOpen={setIsHamburgerOpen}
          navItems={navItems}
          isOpen={isHamburgerOpen}
          getInTouchButton={getInTouchButton} 
        />
      )}
      {showModal && (
        <ContactFormModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
