import React from "react";
import '../App.css';

const Search = ({ handleSearch }) => (
  <div className="search">
    <h3>Search</h3>
    <input onChange={(e) => handleSearch(e)} className="input-type" type="search" />
  </div>
);

export default Search;
