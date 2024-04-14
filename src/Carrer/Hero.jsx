import React from "react";

export default function Hero() {
  return (
    <div className="h-fit px-40 flex items-center justify-center mb-32">
      <div className="flex flex-col items-center justify-center w-4/5 space-y-10 px-32 ">
        <h3>Careers</h3>
        <h1 className="text-center">
          Navigate Your Next <br />
          <span className="text-green-600">Career</span> Move
        </h1>
        <p className="text-center px-56  ">
          We're continuously searching for the right talent. Check if you're a
          good match.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-950 text-white px-6 py-2 rounded-md">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
