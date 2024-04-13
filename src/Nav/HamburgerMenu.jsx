import React, { useState } from "react";

export default function HamburgerMenu(props) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const closeHandler = () => {
    setIsHamburgerOpen(false);
    
  };

  return (
    <div className="w-full h-screen fixed z-100 bg-white overflow-y-auto">
      <div onClick={closeHandler} className=" relative left-3 top-3">
        <img className="h-6" src="/img/close.png" alt="" />
      </div>
      <div className="flex justify-center items-center ">
        <div>
          <ul className="text-black font-semibold flex flex-col space-y-8 ">
            {props.navItems.map((item, index) => {
              return (
                <li key={index} className="cursor-pointer flex">
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
