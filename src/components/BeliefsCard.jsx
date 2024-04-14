import React from "react";

export default function () {
  return (
    <div className="w-96  bg-white rounded-2xl p-8 flex flex-col space-y-5 shadow-md">
      <div className="h-16 w-16 p-4 rounded-2xl bg-gray-200  ">
        <img
          className="object-cover"
          src="/img/continuous_learning.png"
          alt=""
        />
      </div>
      <div className = "space-y-3">
        <h2 className = "text-xl">Continuous Learning</h2>
        <p>
          We invest in our team's growth through ongoing training, mentorship,
          and opportunities to expand your skill set. We're dedicated to your
          professional development journey.
        </p>
      </div>
    </div>
  );
}
