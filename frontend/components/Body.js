import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setColleges } from "@/features/collegeInfoSlice";
import { setStudents } from "@/features/studentInfoSlice";
import Table from "@/components/Table";
import Chart from "@/components/Chart";

const Body = (colleges, students) => {
  const dispatch = useDispatch();
  const [showHomeBody, setShowHomeBody] = useState(true);
  const [showCharts, setShowCharts] = useState(false);
  const [showColleges, setShowColleges] = useState(false);
  useEffect(() => {
    dispatch(setColleges(colleges.colleges.data));
    dispatch(setStudents(colleges.students.data));
    setShowHomeBody(true);
  }, []);

  const handleClick = (showChart = false) => {
    if (showChart) {
      setShowCharts(true);
      setShowColleges(false);
    } else {
      setShowCharts(false);
      setShowColleges(true);
    }
    setShowHomeBody(false);
  };

  return (
    <>
      {showHomeBody && (
        <div className="w-full my-auto flex flex-col items-center justify-center text-black gap-5 ">
          <div className="w-[50%] flex items-center justify-center flex-col gap-4 bg-[#ebfffe] shadow-2xl rounded-sm">
            <div className="w-[90%] flex flex-col items-center justify-center gap-2">
              <p className="text-[3em]">Welcome to Unident</p>
              <p className="text-[1.5em]">
                Your all in one data catalogue for Colleges and Students
              </p>
            </div>
            <div className="w-[50%] flex items-center justify-between py-3">
              <p
                className="text-[1em] border-solid border-[1px] border-[black] rounded-md px-2 py-2 hover:scale-105 cursor-pointer"
                onClick={() => handleClick(true)}
              >
                View Charts
              </p>
              <p
                className="text-[1em] border-solid border-[1px] border-[black] rounded-md px-2 py-2 hover:scale-105 cursor-pointer"
                onClick={() => handleClick(false)}
              >
                View All Colleges
              </p>
            </div>
          </div>
        </div>
      )}
      {showCharts && (
        <Chart setHomePage={setShowHomeBody} setChartPage={setShowCharts} />
      )}
      {showColleges && <Table />}
    </>
  );
};

export default Body;
