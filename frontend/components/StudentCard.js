import React from "react";

const StudentCard = ({ studentData }) => {
  let studyDuration = `From ${studentData?.startDate} To ${studentData?.endDate}`;
  return (
    <div className="w-full flex justify-between items-center bg-[#063846] py-2 px-2 text-white">
      <div className="w-[40%] h-full flex flex-col justify-start items-start px-2 gap-1">
        <div className="flex w-full justify-between items-center py-1">
          <div className="w-full flex items-start justify-start px-4">
            <p className=" font-semibold text-[1em]">{studentData?.Name}</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-full flex items-start justify-start px-4">
            <p className=" font-semibold text-[1em]">{studentData?.course}</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-full flex items-start justify-start px-4">
            <p className=" font-semibold text-[0.8em]">{studyDuration}</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-full flex items-start justify-start px-4">
            <p className=" font-semibold text-[0.8em]">
              {studentData?.studentId}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-end items-end px-2">
        <p className="w-full text-[1em] font-semibold flex items-center">
          <span className="pl-[10px]">Skills</span>
        </p>
        <ul className="w-full gap-2">
          {studentData?.skills.map((skill, idx) => {
            return (
              <li
                key={idx}
                className="font-semibold text-[1em] flex flex-col flex-wrap"
              >{`- ${skill}`}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StudentCard;
