import React from "react";
import Vacancies from "./Vacancies";

export default function Opportunities() {
  return (
    <div className=" bg-white sm:px-20 md:px-40 pt-32 pb-20 space-y-8">
      <div className="flex flex-col justify-center items-center">
        <h3 className = "font-semibold">Opportunities</h3>
        <h2>Available Vacancies</h2>
      </div>
      <div className="flex flex-col space-y-5">
        <input
          placeholder=" Job Title/Keyword"
          type="text"
          className="w-full h-12 p-3 rounded-md bg-transparent border-2 focus-visible:outline-none"
        />
        <div className="flex gap-3">
          <select
            className="w-full h-12 p-3 rounded-md bg-transparent border-2 text-black focus-visible:outline-none"
            name=""
            id=""
          >
            <option value="Internships">Internships</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
          <div>
            <button className="h-12 w-16 bg-red-500 px-6  rounded-md ">
              <img className="object-cover" src="/img/search.png" alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Job offers */}
      <div>
        <Vacancies></Vacancies>
      </div>
      
    </div>
  );
}
