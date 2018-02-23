import store from "./store.js";

function setPage(page){
  return {
    type:"SET-PAGE", 
    page
  };
}

function requestMovies() {
  return {
    type: "REQUEST-MOVIES",
  };
}

function receiveMovies(data,page){
  return {
    type:"RECEIVE-MOVIES", 
    data,
    page
  };
}

export function fetchAllMovies(url, options) {
  var {movies} = store.getState(); 
  
  if (movies.hasOwnProperty(options.page)){
    return store.dispatch(setPage(options.page));
  }
  console.log("start fetching");

  return function (dispatch) {
    var httpRequest = new XMLHttpRequest();

    dispatch(requestMovies());

    httpRequest.onreadystatechange = function () {
      switch (httpRequest.readyState) {
        case XMLHttpRequest.UNSENT:
          break; 
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          var movies = JSON.parse(httpRequest.response);
          dispatch(receiveMovies(movies,options.page));
      }
    };

    url +=`?page=${options.page}`;// need checking

    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader("Accept", "json"); 
    httpRequest.setRequestHeader("Content-Type", "application/json"); 
    httpRequest.send(null);

  };
}


export function setPage(page){
  // page is a positive number
  return {
    type:"SET-PAGE", 
    page
  };
}

// fetchMovies;