function requestMovies() {
  return {
    type: "REQUEST-MOVIES",
  };
}

function receiveMovies(data){
  return {
    type:"RECEIVE-MOVIES", 
    data
  };
}



export function fetchAllMovies(url) {
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
          dispatch(receiveMovies(movies));
      }
    };

    httpRequest.open("GET", url, true);
    httpRequest.send();

  };
}

// fetchMovies;