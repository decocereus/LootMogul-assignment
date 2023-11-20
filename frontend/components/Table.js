import React from "react";
import CollegeCard from "./CollegeCard";
import { useSelector } from "react-redux";

const Table = () => {
  const collegeData = useSelector(
    (state) => state.collegeSliceReducer.colleges
  );
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 bg-[#cdffff]">
      <div className="w-[90%] flex items-center justify-between py-2">
        <h2 className="w-fit text-[2em] font-bold">Colleges</h2>
        <h3 className="w-fit text-[1em] font-semibold">{`Total Colleges: ${collegeData.length}`}</h3>
      </div>
      <div className="w-[90%] flex items-center justify-center">
        <ul className="w-full flex items-center justify-center flex-col gap-4">
          {collegeData.map((college) => {
            return (
              <li
                className="w-full h-fit bg-yellow-50 text-black rounded-md"
                key={college.attributes.collegeId}
              >
                <CollegeCard college={college.attributes} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Table;
