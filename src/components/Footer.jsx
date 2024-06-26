import React from "react";

import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="relative bottom-0 z-40 bg-blue-950 h-fit w-full text-white pt-24 px-10 md:px-16 pb-20 flex flex-col space-y-5  lg:flex-row  lg:space-y-0 lg:justify-between">
      {/* left side of the footer */}
      <div className="w-fit flex flex-col justify-between">
        <div className="">
          <div className="relative mb-3 ">
            <div className="flex h-16 w-fit ">
              <img
                className="object-contain w-16"
                src="/img/logowhite.png"
                alt=""
              />
              <h2>Metalogic</h2>
            </div>
            <div className="absolute left-16 bottom-1">
              <p className="text-sm ">Software Private Limited</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <p>Saptakhel, Lalitpur (Head office)</p>
          </div>
          <div>
            <img src="" alt="" />
            <p> + 977 9851353599</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>info@metalofic.com.np</p>
          </div>
        </div>

        <div className="flex absolute bottom-5 ">
          <p className="text-sm">
            &copy; Copyright 2024 MetaLogic.{" "}
            <span className="text-red-500">All rights reserved</span>
          </p>
        </div>
      </div>

      {/* middle side of the footer */}
      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-5">
        <div>
          <h3 className="mb-2">Company</h3>
          <div className="text-xs space-y-1">
            <p>Feedback</p>
            <p>Partnership</p>
            <p>Terms and Conditions</p>
          </div>
        </div>

        <div>
          <h3 className="mb-2">Services</h3>
          <div className="text-xs space-y-1">
            <p>Custom Software Development</p>

            <p>WebDevelopment</p>

            <p>Mobile App Development</p>
            <p>Cloud Computing Services</p>
            <p>Quality Assurance and Testing</p>
            <p>UI/UX Designing</p>
            <p>Maintenance and Support</p>
            <p>Dev Ops</p>
            <p>Blockchain Solutions</p>
          </div>
        </div>

        <div className="">
          <h3 className="mb-2">Join</h3>
          <div className="text-xs space-y-1">
            <p>Careers at MetaLogic</p>
            <p>Internships</p>
          </div>
        </div>
      </div>

      {/* right side of the footer */}

      <div>
        <h3 className="mb-2">Join us on Social Medias</h3>

        <div className="flex gap-3">
          <div className="h-10 border-2 w-10 p-2 rounded-full  ">
            <img className="object-cover" src="/img/whatsapp.png" alt="" />
          </div>
          <div className="h-10 border-2 w-10 rounded-full p-2  ">
            <img className="object-cover" src="/img/facebook.png" alt="" />
          </div>{" "}
          <div className="h-10 border-2 w-10 rounded-full p-2 ">
            <img className="object-cover" src="/img/instagram.png" alt="" />
          </div>{" "}
          <div className="h-10 border-2 w-10 rounded-full p-2 ">
            <img className="object-cover" src="/img/linkedin.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
