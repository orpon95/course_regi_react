/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Course from "../course/course";
import Cart from "../cart/cart";

function Courses() {
  const [courses, setCourses] = useState([]);


  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectAction = (course)=>{
    
    setTitles([...titles,course]);
  }
//   console.log(titles);

  return (
    <>
      <div className="flex gap-4 p-3">
        <div className="w-[75%] grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            courses.map((course => <Course key={course.id} course ={course} handleSelectAction ={handleSelectAction} ></Course>))
          }
        </div>
        <div className="w-[25%]">
           <Cart titles={titles}  ></Cart>
        </div>
      </div>
    </>
  );
}

export default Courses;
