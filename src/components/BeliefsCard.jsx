import React from "react";

export default function (props) {
  return (
    <div className="w-fit md:w-96  h-fit  md:h-72 bg-white rounded-2xl p-8 flex flex-col space-y-5 shadow-md">
      <div className="h-16 w-16 p-4 flex justify-center items=center rounded-2xl bg-gray-200  ">
        <img
          className="object-cover transform-gpu transition-transform duration-300 hover:-rotate-12"
          src={props.img}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-xl">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
