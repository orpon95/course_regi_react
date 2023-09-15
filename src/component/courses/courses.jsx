/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Course from "../course/course";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
//   console.log(courses);

  return (
    <>
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            courses.map((course => <Course key={course.id} course ={course} ></Course>))
          }
        </div>
        <div>
            <h1>this is cart</h1>
        </div>
      </div>
    </>
  );
}

export default Courses;
