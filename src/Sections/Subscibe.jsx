import React from "react";
import Button from "../components/Button";

export default function Subscibe() {
  return (
    <div className="bg-[#D9D9D9] sm:px-20 md:px-40 pt-20 ">
      <div className=" px-16 md:px-32 flex flex-col space-y-8">
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-xl font-semibold ">
            Subscribe to our News Letters
          </h3>
          <p className="text-[17px] text-gray-500">
            Stay informed, inspired and equipped with the latest trends and
            breakthroughs in your field.
          </p>
        </div>
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 gap-3">
          <input
            placeholder="Please Enter your Email"
            className="h-12 p-3 rounded-md w-full focus-visible:outline-none "
            type="text"
          />
          <div className="relative ">
            <img
              className="absolute h-5 left-3 top-4"
              src="/img/email.png"
              alt=""
            />
            <button className="flex h-12  items-center justify-center gap-2 rounded-lg bg-red-500 pl-10 pr-6 py-3 text-white ">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
