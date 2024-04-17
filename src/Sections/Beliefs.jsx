import React from "react";

import BeliefsList from "../components/BeliefsList";

export default function Beliefs() {
  return (
    <div className=" pt-32 bg-[#F6F8FF] px-3 sm:px-20 md:px-40 w-full flex flex-col space-y-8 items-center justify-center pb-20">
      <div className=" md:px-32 flex flex-col items-center justify-center space-y-3">
        <h3 className="text-red-500">Values</h3>
        <h2>We Believe in </h2>
        <p className="text-center">
          We believe in creating an environment where individuals can thrive and
          make a <br />
          meaningful impact
        </p>
      </div>

      <div>
        <BeliefsList/>
        
      </div>
    </div>
  );
}
