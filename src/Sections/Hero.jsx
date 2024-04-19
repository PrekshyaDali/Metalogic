import React from "react";
import { Helmet } from "react-helmet";
import Plane from "../components/Plane";

import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className=" relative h-fit px-3 sm:px-20 md:px-40 flex items-center justify-center mb-20 ">
      <Plane className="absolute z-0"></Plane>

      <div className="flex flex-col items-center justify-center w-4/5 space-y-10 px-auto md:px-32 ">
        <h3>Careers</h3>
        <h1 className="text-center">
          Navigate Your Next <br />
          <span className="text-green-600">Career</span> Move
        </h1>
        <p className="text-center px-auto md:px-56">
          We're continuously searching for the right talent. Check if you're a
          good match.
        </p>
        <div className="flex justify-center">
          <Link to="/vacancies" smooth duration={800}>
            <button className="bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-900 active:bg-blue-950">
              Explore Opportunities
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
