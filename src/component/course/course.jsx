/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Rectangle from "./Rectangle 2-1.png";
// import { BsBook } from 'react-icons/fa';
// import Rectangle from "./Rectangle 2-1.png"

const Course = ({ course,handleSelectAction }) => {
//   console.log(course.cover_image);

  const { id, cover_image, title, details, credit_hour, price } = course;
  return (
    <div className="shadow-lg bg-white rounded-lg p-4 space-y-2">
      <img src={cover_image} alt="" className="h-52" />
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm font-normal">{details}</p>
      <div className="flex justify-between">
        <span className="text-sm font-medium"> $ price:{price} </span>
        <span> </span>
        <span className="text-sm font-medium"> credit: {credit_hour} hr</span>
        <br />
        
      </div>
      <button className="bg-sky-500 text-white p-2 rounded-xl block w-5/6 mx-auto" onClick={()=> handleSelectAction(course)}>Select</button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectAction:PropTypes.func,
};
export default Course;
