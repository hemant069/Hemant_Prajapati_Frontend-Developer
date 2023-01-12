import React from "react";
import { DataGrid } from "../Components/DataGrid";
import { Banner } from "../Components/Banner";
import { Navbar } from "../Components/Navbar";
import {  SearchForm } from "../Components/SearchForm";


export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <SearchForm />
      <DataGrid/>
    </div>
  );
};
