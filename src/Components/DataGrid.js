import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_API } from "../store/Action";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

export const DataGrid = () => {
  const dispatch = useDispatch();
  const { data} = useSelector((state) => state);
  useEffect(() => {
    dispatch(GET_DATA_API());
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-4 ">
        {data.map((el, i) => (
          <Card key={i} el={el} />
        ))}
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  );
};
