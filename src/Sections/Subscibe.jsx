import React, { useState } from "react";
import Button from "../components/Button";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (!isValidEmail) {
      return;
    }

    console.log("Subscribed with email:", email);
  };

  const validateEmail = () => {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    setIsValidEmail(pattern.test(email));
  };

  return (
    <div className="bg-[#D9D9D9] sm:px-20 md:px-40 pt-20">
      <div className="px-16 md:px-32 flex flex-col space-y-8">
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-xl font-semibold ">
            Subscribe to our Newsletters
          </h3>
          <p className="text-[17px] text-gray-500">
            Stay informed, inspired and equipped with the latest trends and
            breakthroughs in your field.
          </p>
        </div>
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 gap-3">
          <input
            placeholder="Please Enter your Email"
            className={`h-12 p-3 rounded-md w-full focus-visible:outline-none ${
              !isValidEmail ? "border-red-500" : ""
            }`}
            type="text"
            value={email}
            onChange={handleInputChange}
            onBlur={validateEmail}
          />
          {!isValidEmail && (
            <span className="text-red-500 ">Please enter a valid email</span>
          )}

          <div className="relative">
            <img
              className="absolute h-5 left-3 top-4"
              src="/img/email.png"
              alt=""
            />
            <button
              type="submit"
              className="flex h-12  items-center justify-center gap-2 rounded-lg bg-red-500 pl-10 pr-6 py-3 text-white"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
