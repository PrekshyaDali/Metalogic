import React from "react";

export default function (props) {
  return (
    <button className=" h-9 flex items-center justify-center rounded-md px-4 py-2 bg-red-500 text-white">{props.name}</button>
  );
}
