import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Chart = ({ setHomePage, setChartPage }) => {
  const collegeData = useSelector(
    (state) => state.collegeSliceReducer.colleges
  );
  const areaCharRef = useRef();
  const localityChartRef = useRef();

  const handleBackClick = () => {
    setChartPage(false);
    setHomePage(true);
  };

  const areas = [
    ...new Set(collegeData.map((college) => college.attributes.city)),
  ];
  const courses = collegeData.reduce((acc, college) => {
    college.attributes.coursesOffered.forEach((course) => {
      if (!acc.includes(course)) {
        acc.push(course);
      }
    });
    return acc;
  }, []);

  const areaData = areas.map((area) => {
    const collegesInArea = collegeData.filter(
      (college) => college.attributes.city === area
    );
    const percentage = (collegesInArea.length / collegeData.length) * 100;
    return {
      label: area,
      value: percentage.toFixed(2),
      color: getRandomColor(),
    };
  });

  const courseData = courses.map((course) => {
    const collegesOfferingCourse = collegeData.filter((college) =>
      college.attributes.coursesOffered.includes(course)
    );
    const percentage =
      (collegesOfferingCourse.length / collegeData.length) * 100;
    return {
      label: course,
      value: percentage.toFixed(2),
      color: getRandomColor(),
    };
  });

  const areaChartData = {
    labels: areaData.map((area) => area.label),
    datasets: [
      {
        data: areaData.map((area) => area.value),
        backgroundColor: areaData.map((area) => area.color),
      },
    ],
  };

  const courseChartData = {
    labels: courseData.map((course) => course.label),
    datasets: [
      {
        data: courseData.map((course) => course.value),
        backgroundColor: courseData.map((course) => course.color),
      },
    ],
  };

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <div className="flex w-[80%] items-center justify-between">
        <div className="w-[50%] chart-container p-8">
          <h2 className="text-center mb-4">Localities</h2>
          <Doughnut data={areaChartData} ref={areaCharRef} />
        </div>
        <div className="w-[50%] chart-container p-8">
          <h2 className="text-center mb-4">Courses</h2>
          <Doughnut data={courseChartData} ref={localityChartRef} />
        </div>
      </div>
      <div>
        <p
          className="text-[1em] border-solid border-[1px] border-[black] rounded-md px-2 py-2 hover:scale-105 cursor-pointer"
          onClick={handleBackClick}
        >
          Back
        </p>
      </div>
    </div>
  );
};

export default Chart;
