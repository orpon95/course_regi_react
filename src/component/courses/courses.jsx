/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Course from "../course/course";
import Cart from "../cart/cart";

function Courses() {
  const [courses, setCourses] = useState([]);


  const [titles, setTitles] = useState([]);
  const [totalCount, setCount] = useState(0);
  const [totalRemainingCredits, setCredits] = useState(0);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  

  const handleSelectAction = (course)=>{
    const isPresent = titles.find( title => title.id == course.id)
    let count = course.credit_hour
    if(isPresent){
       return alert("already enlisted this course")
    }
    else{
        titles.forEach(title =>{
            count = count + title.credit_hour;


        } )
        const remainingCredits = 20 - count;
        if (count > 20){
           return  alert("No remaining credits!!!!")
        }
        else{
            setCredits(remainingCredits)
        setCount(count)
      
        setTitles([...titles,course]);
        }
        

    }
    
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
           <Cart titles={titles} totalCount ={totalCount}  totalRemainingCredits = {totalRemainingCredits} ></Cart>
        </div>
      </div>
    </>
  );
}

export default Courses;
