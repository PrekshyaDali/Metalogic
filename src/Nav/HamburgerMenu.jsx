import React, { useState } from "react";

export default function HamburgerMenu(props) {
  const [isClosing, setIsClosing] = useState(false);

  const closeHandler = () => {
    setIsClosing(true);
    setTimeout(() => {
      props.setIsHamburgerOpen(false);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-white z-50 overflow-y-auto transition-transform ${
        props.isOpen
          ? "transition-slide-in"
          : isClosing
          ? "transform -translate-x-full "
          : ""
      }`}
    >
      <div className="absolute top-3 right-3">
        <img
          className="h-6 cursor-pointer"
          src="/img/close.png"
          alt=""
          onClick={closeHandler}
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <div>
          <ul className="text-black font-semibold flex flex-col space-y-8">
            {props.navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer flex hover:border-b-red-600"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
