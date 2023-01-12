import React from "react";
import { useDispatch } from "react-redux";
import { filterByDate, filterByStatus, filterByType } from "../store/Action";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleStatus = (input) => {
      dispatch(filterByStatus(input))
  }

  const handleType = (input) => {
      dispatch(filterByType(input))
  }

  const handleDate = (e) => {
      dispatch(filterByDate(e.target.value))
    }
  return (
    <div className="flex lg:flex-row justify-around flex-col  gap-2  mt-5 ">
      <select onChange={(e)=>handleStatus(e.target.value)} className="border-solid border-2 border-indigo-600 px-2 py-2  rounded-md" >
        <option value="">Select Status</option>
        <option value="active">active</option>
        <option value="retired">retired</option>    
        <option value="unknown">unknown</option>
      </select>
      <select  onChange={(e)=>handleType(e.target.value)} className="border-solid border-2 border-indigo-600 px-2 py-2 rounded-md " >
        <option value="">Select Types</option>
        <option value="Dragon 1.0">Dragon 1.0</option>
        <option value="Dragon 1.1">Dragon 1.1</option>
        <option value="Dragon 2.0">Dragon 2.0</option>
      </select>
      <div >
        <input onChange={(e)=>handleDate(e.target.value)} className="border-solid border-2 border-indigo-600 px-2 py-2 rounded-md sm:w-[320px] " type="date"  />
      </div>
    </div>
  );
};
