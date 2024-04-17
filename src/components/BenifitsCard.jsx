import React from "react";

export default function Card(props) {
  return (
    <div className="bg-white shadow-md p-5 fit w-72 flex flex-col space-y-5 rounded-2xl">
      <div>
        <img
          className="transform-gpu transition-transform duration-300 hover:rotate-12"
          src={props.img}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-xl">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
