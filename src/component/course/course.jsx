/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Rectangle from "./Rectangle 2-1.png";
import { BsBook } from 'react-icons/bs';

const Course = ({ course,handleSelectAction }) => {


  const { id, cover_image, title, details, credit_hour, price } = course;
  return (
    <div className="shadow-lg bg-white rounded-lg p-1 md:p-2 lg:p-4 space-y-4">
      <img src={cover_image} alt="" className="h-52" />
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm font-normal">{details}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs md:text-sm font-medium"> $ price:{price} </span>
        <span className="mx-2"><BsBook></BsBook> </span>
        <span className="text-xs md:text-sm font-medium"> credit: {credit_hour} hr</span>
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
