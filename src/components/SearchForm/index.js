import React from "react";
import { Duplex } from "stream";

function SearchForm() {


  return (
    <div id="movies-search-container" className="d-flex justify-content-center position-relative p-3">
      <label className="visuallyhidden" for="movies-search" >Enter movies search query</label>
      <br />
      <input id="movies-search" className="w-50 h-80 p-2" type="text" value="Search movy by title, year, actor ..." name="movies-search" />
      <span id="search-icon" className="position-relative">
        <button><i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </span>
    </div>
  );
}

export default SearchForm;