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

export function fetchAllMovies(url, page) {
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
          dispatch(receiveMovies(movies,page));
      }
    };

    httpRequest.open("GET", url, true);
    httpRequest.send();

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