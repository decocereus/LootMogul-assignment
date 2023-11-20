import React, { useState } from "react";
import StudentCard from "./StudentCard";
import { useSelector } from "react-redux";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";

const CollegeCard = ({ college }) => {
  const [showStudents, setShowStudents] = useState(false);
  const [filteredStudentData, setFiltertedStudentData] = useState(null);
  const studentData = useSelector(
    (state) => state.studentSliceReducer.students
  );
  let location = `Located at ${college?.city}, ${college?.state}, ${college?.country}`;
  let collegeNameAndYear = `${college?.collegeName} founded in ${college?.yearFounded}`;

  const handleShowStudents = (collegeId) => {
    let filteredData = studentData.filter(
      (student) => student.attributes.collegeId === collegeId
    );
    setFiltertedStudentData(filteredData);
    setShowStudents(!showStudents);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center bg-[#a1fcff]">
        <div className="w-[40%] flex flex-col justify-start items-start px-2 gap-2">
          <div className="flex w-full justify-between items-center py-1">
            <HiMiniBuildingLibrary size={20} />
            <div className="w-full flex items-start justify-start px-4">
              <p className="text-black font-semibold text-[1em]">
                {collegeNameAndYear}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between items-center py-1">
            <IoLocationSharp size={20} />
            <div className="w-full flex items-start justify-start px-4">
              <p className="text-black font-semibold text-[1em]">{location}</p>
            </div>
          </div>
          <div className="flex w-full justify-between items-center py-1">
            <PiStudentBold size={20} />
            <div className="w-full flex items-start justify-start px-4">
              <p className="text-black font-semibold text-[0.8em]">
                {college?.numberOfStudents}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between items-center py-1">
            <FaStar size={20} />
            <div className="w-full flex items-start justify-start px-4">
              <p className="text-black font-semibold text-[0.8em]">
                {college?.rating}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col justify-end items-end px-2 gap-2">
          <p className="w-full text-[1.2em] font-semibold py-2 flex items-center">
            <span>
              <GiWhiteBook size={20} />
            </span>
            <span className="pl-[10px]">Courses Offered</span>
          </p>
          <ul className="w-full gap-2">
            {college?.coursesOffered.map((course, idx) => {
              return (
                <li
                  key={idx}
                  className="text-black font-semibold text-[1em] py-[0.2em]"
                >{`- ${course}`}</li>
              );
            })}
          </ul>
        </div>
        <div
          className="flex justify-between items-center px-2 gap-2 cursor-pointer"
          onClick={() => handleShowStudents(college.collegeId)}
        >
          <button className="text-black font-semibold text-[1em] py-[0.2em]">
            Students
          </button>
          <IoMdArrowDropdown />
        </div>
      </div>
      {showStudents && (
        <div className="flex flex-col gap-2 bg-[#a1fcff] mt-1">
          {filteredStudentData.map((student) => {
            return (
              <StudentCard
                id={student?.attributes?.studentId}
                studentData={student.attributes}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CollegeCard;
