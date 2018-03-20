import React from "react";
import { Duplex } from "stream";


function SearchForm() {
  return (
    <div id="movies-search-container" className="d-flex justify-content-center p-3">
      <form className="search-form w-75 d-flex" autocomplete="off">
        <label className="visuallyhidden " for="movies-search" >Enter movies search query</label>
        <input id="movies-search" className="w-75 p-2" type="text" placeholder="Search movy by title, year, actor ..." name="movies-search" />
        <span id="search-icon" className="d-inline-block h-100">
          <button className="h-100" type="button"><i class="fa fa-search search-form-icon " aria-hidden="true"></i>
          </button>
        </span>
      </form>
    </div>
  );
}

export default SearchForm;